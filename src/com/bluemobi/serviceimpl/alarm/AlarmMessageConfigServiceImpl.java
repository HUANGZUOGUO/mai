package com.bluemobi.serviceimpl.alarm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appcore.dao.MyBatisBaseDao;
import com.appcore.service.impl.MybatisBaseServiceImpl;
import com.bluemobi.dao.alarm.AlarmMessageConfigDao;
import com.bluemobi.service.alarm.AlarmMessageConfigService;

/**
 * 【报警消息推送规则配置表】 服务类 实现类
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2017-03
 * 
 */
@Service(value = "alarmMessageConfigService")
public class AlarmMessageConfigServiceImpl extends MybatisBaseServiceImpl implements AlarmMessageConfigService {

    @Autowired
    private AlarmMessageConfigDao alarmMessageConfigDao;

    @Override
    public MyBatisBaseDao getDao() {
        return alarmMessageConfigDao;
    }

}
