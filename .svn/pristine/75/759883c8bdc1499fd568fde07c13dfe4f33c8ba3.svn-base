package com.bluemobi.serviceimpl.perception;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appcore.dao.MyBatisBaseDao;
import com.appcore.service.impl.MybatisBaseServiceImpl;
import com.bluemobi.dao.perception.PerceptionHcsDao;
import com.bluemobi.service.perception.PerceptionHcsService;

/**
 * 【温湿度感知数据收集表】 服务类 实现类
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2017-03
 * 
 */
@Service(value = "perceptionHcsService")
public class PerceptionHcsServiceImpl extends MybatisBaseServiceImpl implements PerceptionHcsService {

	@Autowired
	private PerceptionHcsDao perceptionHcsDao;

	@Override
	public MyBatisBaseDao getDao() {
		return perceptionHcsDao;
	}

	@Override
	public List<Map<String, Object>> getHumitureReport(Map<String, Object> pmap) {
		Map<String, Object> map = new HashMap<String, Object>();
		if (String.valueOf(pmap.get("time")).split("-").length == 3) {// 日报表
			map.put("type", 3);
			map.put("stime", pmap.get("time")+" 00:00:00");
			map.put("etime", pmap.get("time")+" 23:59:59");
		} else if (String.valueOf(pmap.get("time")).split("-").length == 2) {
			map.put("type", 2);
			map.put("stime", pmap.get("time")+"-01 00:00:00");
			map.put("etime", pmap.get("time")+"-31 23:59:59");
		} else if (String.valueOf(pmap.get("time")).split("-").length == 1) {
			map.put("type", 1);
			map.put("stime", pmap.get("time")+"-01-01 00:00:00");
			map.put("etime", pmap.get("time")+"-12-31 23:59:59");
		}
		return perceptionHcsDao.getHumitureReport(map);
	}

	@Override
	public List<Map<String, Object>> getHumitureWms(Map<String, Object> map) {
		return perceptionHcsDao.getHumitureWms(map);
	}

}
