package com.bluemobi.service.alarm;

import java.util.List;
import java.util.Map;

import com.appcore.service.MybatisBaseService;
import com.bluemobi.po.alarm.AlarmManage;

/**
 * 【报警管理表】 服务类 接口
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2016-11
 * 
 */
public interface AlarmManageService extends MybatisBaseService {

    /**
     * 报警统计服务类
     * @param req
     * @return
     */
    Map<String, Object> getAlarmSata(Map<String, Object> req);
    /**
     * 产生报警服务类
     * 同一种未处理报警不重复产生
     * @param req
     * @return
     */
    Map<String, Object> addAlarmData(List<AlarmManage> alarmManages);

}
