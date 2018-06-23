package com.bluemobi.util;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.apache.log4j.Logger;
import org.springframework.web.context.ContextLoader;

import com.appcore.context.AppContext;
import com.bluemobi.dao.alarm.AlarmHcsdeviceConfigDao;
import com.bluemobi.dao.alarm.AlarmManageDao;
import com.bluemobi.dao.alarm.AlarmTypeDao;
import com.bluemobi.dao.device.DeviceManageDao;
import com.bluemobi.po.alarm.AlarmHcsdeviceConfig;
import com.bluemobi.po.alarm.AlarmManage;
import com.bluemobi.po.alarm.AlarmType;
import com.bluemobi.po.device.DeviceManage;



/**
 * 多线程处理socket接收的数据
 * 
 * @author huajian
 * 
 */
public class SocketOperate extends Thread {
    //获取温湿度临时存放集
 public static List<String> temperatureList = new ArrayList<String>();
	private static Logger log = Logger.getLogger(SocketOperate.class);
	/*** 开启一体机流程 */
	public static byte[] OPEN_1_TO_ONE = {(byte) 0x00, (byte) 0x00,(byte) 0x00,
	        (byte) 0x00, (byte) 0x00,(byte) 0x00 ,(byte) 0x06, (byte) 0x01, (byte) 0x06,
	        (byte) 0x01, (byte) 0x91, (byte) 0x00, (byte) 0x01};
	/*** 关闭一体机流程 */
	public static byte[] OPEN_1_TO_ZERO = {(byte) 0x00, (byte) 0x00,(byte) 0x00,
	        (byte) 0x00, (byte) 0x00,(byte) 0x00 ,(byte) 0x06, (byte) 0x01, (byte) 0x06,
	        (byte) 0x01, (byte) 0x91, (byte) 0x00, (byte) 0x00};
	private Socket socket;
	private AlarmManageDao alarmManageDao = AppContext.getBean("alarmManageDao");
	private AlarmTypeDao alarmTypeDao = AppContext.getBean("alarmTypeDao");
    private AlarmHcsdeviceConfigDao alarmHcsdeviceConfigDao = AppContext.getBean("alarmHcsdeviceConfigDao");
    private DeviceManageDao deviceManageDao = AppContext.getBean("deviceManageDao");
	public SocketOperate(Socket socket) {
		this.socket = socket;
	}

	@SuppressWarnings("unused")
	public void run() {

		try {
			Map<String,String> result = null;
			//温湿度一体机设备 端口号 115.231.60.194 8802
			String ip = "115.231.60.194";
			int port = 8802;
			//报警流程控制
			int status = 0;
			//设备开关扳机 0.开  1.关
			int order = -1;
			//设备状态
			boolean dvcSta = false;
			//基准数值
			int baseValue = 0;
			//对比数值
			int normalValue = 0;
			//基准数值获取扳机
			int baseValueStu = -1;
			DataInputStream input = new DataInputStream(socket.getInputStream());
			byte[] data = new byte[1024];
			
			Map<String, Object> map = new HashMap<String, Object>();
			Map<String, Object> alarmSelectCondition = new HashMap<String, Object>();
			
			map.put("deviceId", 24);
			map.put("alarmType", 2);
			map.put("status", "0");// 0未处理
			
			while(true) {
				// 读取客户端数据
				//StringBuilder result = new StringBuilder();
				int clientInputStr = input.read(data);// 这里要注意和客户端输出流的写方法对应,否则会抛 EOFException
				// 处理客户端数据 UTF-8 iso8859-1 ASCII
				//String clientInputStr2 = new String(data);
				if(clientInputStr != -1) {
					String response = new String(data, 0,clientInputStr, "ASCII");		
					//String response = new String(data);
					//System.out.println("温度:" + response);
					log.info("********湿度:" + response+"********");
					temperatureList.add(response);
					
					
					if(baseValueStu == -1) {
						baseValue = Integer.parseInt(response);
						normalValue = Integer.parseInt(response);
						baseValueStu =0;
					}else {
						normalValue = Integer.parseInt(response);
						if(baseValue>normalValue){
							baseValue = normalValue;
						}
					}
					//报警系统
					// 检查该报警是否在报警状态中
					List<AlarmHcsdeviceConfig> list0 = alarmHcsdeviceConfigDao.selectObjectList(map);
				    List<Map<String, Object>> list = alarmManageDao.selectMapList(map);
				    //normalValue<70 
				    //
					if(normalValue >=28 && status==0) {	
						status = 1;
						order = 0;
						try {
							
						    if (list.size() == 0 && list0.get(0).getAlarmStatus().equals("0")) {// 0报警1不报警
						    	log.info("********湿度异常********");
								AlarmManage alarmManage = new AlarmManage();
								alarmManage.setAlarmType(2);
								alarmManage.setDeviceId(24);
								DeviceManage deviceManage = deviceManageDao.selectObject(24);
								alarmManage.setCategoryId(deviceManage.getCategoryId());
								alarmManage.setCtime(new Date());
								alarmManage.setDeviceName(deviceManage.getName());
								AlarmType alarmType = alarmTypeDao.selectObject(2);
								alarmManage.setLevel(String.valueOf(alarmType.getAlarmLevel()));
								alarmManage.setStatus("0");
								alarmManage.setStoreId(deviceManage.getStoreId());
								alarmManage.setStroreAreaId(deviceManage.getStroreAreaId());
								alarmManage.setRemark(alarmType.getAlarmTypeName());
								alarmManageDao.insert(alarmManage);
								//System.out.println("触发报警");
								log.info("********触发报警********");
								
						    }
						    if(dvcSta == false) {
						    	//操作温湿度一体机 开启新风系统
								result = SocketOperate.devOperation(ip, port, order);
								//System.out.println();
								log.info(result.get("msg"));
								dvcSta = true;
						    }
						} catch (Exception e) {
						    //System.out.println();
						    log.info("********报警处理出错********");
						    e.printStackTrace();

						}
						
					}else if(normalValue <28 && status!=0){
						status= 0;
						//自动处理温度报警
						
						if (list.size() != 0 && list0.get(0).getAlarmStatus().equals("0")) {// 0报警1不报警
							AlarmManage alarmManage = new AlarmManage();
							for(Map<String,Object> alarmMsg:list) {
								alarmSelectCondition.put("alarmId", alarmMsg.get("alarmId"));
								
							}
							alarmManage.setAlarmId(Integer.parseInt(String.valueOf(alarmSelectCondition.get("alarmId"))));
							alarmManage.setStatus("1");
							//System.out.println("触发报警");
							alarmManageDao.update(alarmManage);
							log.info("********报警已处理********");
							
					    }
							if(dvcSta == true){
								//log.info("********湿度恢复正常********");
								//baseValueStu = -1;
								order = 1;
								result = SocketOperate.devOperation(ip, port, order);
								log.info(result.get("msg"));
								dvcSta = false;
							}
					}
				}else {
					Thread.sleep(500);
					break;
				}
			}
			input.close();
		} catch (Exception e) {
			
			log.info("********服务器 run 异常:  "+ e.getMessage()+"********");
			try {
				throw e;
			} catch (Exception e1) {
				e1.printStackTrace();

			}
		} finally {

			if (socket != null) {
				try {
					socket.close();
				} catch (Exception e) {
					socket = null;
					log.info("********服务器 finally 异常:  "+ e.getMessage()+"********");

				}
			}

		}

	}
	public static Map<String,String> devOperation(String ip,int port,int order) throws InterruptedException{
		Map<String,String> map = new HashMap<>();
	    try {
	    	Socket socket = new Socket(ip, port);
		    OutputStream os = socket.getOutputStream();
		   /* os.write(OPEN_TO_ONE);*/
		    if(order == 0) {
		    	os.write(OPEN_1_TO_ONE);
		    	map.put("msg", "*********设备开启操作成功*********");
		    }else if(order == 1){
		    	os.write(OPEN_1_TO_ZERO);
		    	map.put("msg", "*********设备关闭操作成功*********");
		    }			
			os.flush();
		    os.close();
		    socket.close();
		    
		} catch (IOException e) {
			map.put("msg", "设备操作失败");
			e.printStackTrace();
			
		}
	    
		return map;
		
	}
}