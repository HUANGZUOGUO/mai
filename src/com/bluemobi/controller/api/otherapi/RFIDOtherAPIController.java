package com.bluemobi.controller.api.otherapi;

import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bluemobi.controller.AbstractAPIController;
import com.bluemobi.po.alarm.AlarmManage;
import com.bluemobi.po.ams.AmsArchivesActlog;
import com.bluemobi.po.rfid.RfidInout;
import com.bluemobi.po.rfid.RfidInty;
import com.bluemobi.service.alarm.AlarmManageService;
import com.bluemobi.service.ams.AmsArchivesActlogService;
import com.bluemobi.service.rfid.RfidInoutService;
import com.bluemobi.service.rfid.RfidIntyService;
import com.bluemobi.to.ResultTO;
import com.bluemobi.util.RequestParamUtil;
import com.bluemobi.util.StringUtils;

/**
 * 档案对外接口控制类
 * 
 * @author Tony黄
 * 
 */
@Controller(value = "RFIDOtherAPIController")
@RequestMapping("api/otherapi")
public class RFIDOtherAPIController extends AbstractAPIController {

	private static final Logger LOGGER = LoggerFactory.getLogger(RFIDOtherAPIController.class);
	@Autowired
	private RfidInoutService rfidInoutService;
	@Autowired
	private RfidIntyService rfidIntyService;
	@Autowired
	private AlarmManageService alarmManageService;
	@Autowired
	private AmsArchivesActlogService amsArchivesActlogService;
	Random random = new Random();
	/**
	 * 智能调档 applyNo applyUser auditType archiveno clientId
	 * 
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "rfidInoutSync")
	@ResponseBody
	public ResultTO rfidInoutSync(HttpServletRequest request) {
		LOGGER.info("*************RFID进出同步提交-begin*****************");
		// 档案号
		String archiveno = RequestParamUtil.getEncodeParam(request, "archiveno");
		if (StringUtils.isEmpty(archiveno)) {
			return ResultTO.newFailResultTO("档案号号不能为空", null);
		}
		// 档案标题
		String tittle = RequestParamUtil.getEncodeParam(request, "tittle");
		if (StringUtils.isEmpty(tittle)) {
			//return ResultTO.newFailResultTO("档案标题不能为空", null);
			tittle="";
		}
		// 操作类型 0.出库 1.入库
		String type = RequestParamUtil.getEncodeParam(request, "type");
		if (StringUtils.isEmpty(type)) {
			return ResultTO.newFailResultTO("操作类型不能为空", null);
		}
		// 状态 0.正常 1.异常
		String status = RequestParamUtil.getEncodeParam(request, "status");
		if (StringUtils.isEmpty(status)) {
			return ResultTO.newFailResultTO("状态不能为空", null);
		}
		// 操作人姓名
		String userName = RequestParamUtil.getEncodeParam(request, "userName");
		if (StringUtils.isEmpty(userName)) {
			return ResultTO.newFailResultTO("操作人姓名不能为空", null);
		}
		// 操作时间
		String dateTime = RequestParamUtil.getEncodeParam(request, "dateTime");
		if (StringUtils.isEmpty(dateTime)) {
			return ResultTO.newFailResultTO("操作时间", null);
		}
		try {
			RfidInout rfidInout = new RfidInout();
			rfidInout.setArchiveno(archiveno);
			rfidInout.setTittle(tittle);
			rfidInout.setType(type);
			rfidInout.setStatus(status);
			rfidInout.setUsername(userName);
			rfidInout.setCtime(new Date());
			// 添加
			rfidInoutService.insert(rfidInout);
			if(status.equals("1")) {
				AlarmManage alarmManage = new AlarmManage();
				alarmManage.setAlarmType(6);
				alarmManage.setCategoryId(6);
				alarmManage.setDeviceName("一号设备");
				alarmManage.setCtime(new Date());
				alarmManage.setRemark("RFID出入库异常");
				alarmManage.setStatus("0");
				alarmManage.setLevel("1");
				//以下模拟数据写成固定
				alarmManage.setStoreId(1);
				alarmManage.setStroreAreaId(1);
				alarmManageService.insert(alarmManage);
			}
			//添加档案操作数据
			AmsArchivesActlog amsArchivesActlog  =  new AmsArchivesActlog();
			amsArchivesActlog.setArchivesId(random.nextInt(30) + 1);//模拟数据演示用，，应该用档案号查询档案ID 不过要档案数据同步才能用
			amsArchivesActlog.setCreator(1);
			amsArchivesActlog.setCtime(new Date());
			amsArchivesActlog.setModifier(1);
			amsArchivesActlog.setMtime(new Date());
			//AmsArchivesActlog.setStoreareaId(storeareaId);
			amsArchivesActlog.setUserId(1);
			amsArchivesActlog.setStatus("1");
			if(String.valueOf(type).equals("1")) {
				amsArchivesActlog.setType("0");
			}else {
				amsArchivesActlog.setType("4");
			}
			// AmsArchivesActlog.setWmsstoreId(wmsstoreId);
			amsArchivesActlogService.insert(amsArchivesActlog);
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error("RFID进出同步出现异常【{}】，请求ip【{}】，请求信息【{}】",
					new Object[] { e.getMessage(), request.getRemoteHost() });
			return ResultTO.newFailResultTO("请求失败！", null);
		}
		// 批量插入数据
		LOGGER.info("*************RFID进出同步提交-end*****************");
		return ResultTO.newSuccessResultTO("请求成功", null);
	}

	/**
	 * RFID盘点数据同步
	 * 
	 * @param request
	 * @return
	 */

	@RequestMapping(value = "rfidIntySync")
	@ResponseBody
	public ResultTO rfidIntySync(HttpServletRequest request) {
		LOGGER.info("*************RFID盘点数据同步提交-begin*****************");
		// 档案号
		String archiveno = RequestParamUtil.getEncodeParam(request, "archiveno");
		if (StringUtils.isEmpty(archiveno)) {
			return ResultTO.newFailResultTO("档案号号不能为空", null);
		}
		// 档案标题
		String tittle = RequestParamUtil.getEncodeParam(request, "tittle");
		if (StringUtils.isEmpty(tittle)) {
			//return ResultTO.newFailResultTO("档案标题不能为空", null);
			tittle="";
		}
		// 盘点状态 0.在架 1.离架 2.错架
		String type = RequestParamUtil.getEncodeParam(request, "type");
		if (StringUtils.isEmpty(type)) {
			return ResultTO.newFailResultTO("盘点状态不能为空", null);
		}
		// 存址
		String storeplace = RequestParamUtil.getEncodeParam(request, "storeplace");
		if (StringUtils.isEmpty(storeplace)) {
			return ResultTO.newFailResultTO("存址不能为空", null);
		}
		try {
			RfidInty rfidInty = new RfidInty();
			rfidInty.setArchiveno(archiveno);
			rfidInty.setTittle(tittle);
			rfidInty.setType(type);
			rfidInty.setStoreplace(storeplace);
			rfidInty.setCtime(new Date());
			// 添加
			rfidIntyService.insert(rfidInty);
			if(type.equals("2")) {
				AlarmManage alarmManage = new AlarmManage();
				alarmManage.setAlarmType(6);
				alarmManage.setCategoryId(6);
				alarmManage.setDeviceName("一号设备");
				alarmManage.setCtime(new Date());
				alarmManage.setRemark("RFID盘点错架");
				alarmManage.setStatus("0");
				alarmManage.setLevel("1");
				alarmManage.setStoreId(1);
				alarmManage.setStroreAreaId(1);
				alarmManageService.insert(alarmManage);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			LOGGER.error("RFID盘点数据同步出同步出现异常【{}】，请求ip【{}】，请求信息【{}】",
					new Object[] { e.getMessage(), request.getRemoteHost() });
			return ResultTO.newFailResultTO("请求失败！", null);
		}
		// 批量插入数据
		LOGGER.info("*************RFID盘点数据同步提交-end*****************");
		return ResultTO.newSuccessResultTO("请求成功", null);
	}

}
