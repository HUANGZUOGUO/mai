package com.bluemobi.serviceimpl.rfid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appcore.dao.MyBatisBaseDao;
import com.appcore.service.impl.MybatisBaseServiceImpl;
import com.bluemobi.dao.rfid.RfidInoutDao;
import com.bluemobi.service.rfid.RfidInoutService;

/**
 * 【】 服务类 实现类
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2017-10
 * 
 */
@Service(value = "rfidInoutService")
public class RfidInoutServiceImpl extends MybatisBaseServiceImpl implements RfidInoutService {

    @Autowired
    private RfidInoutDao rfidInoutDao;

    @Override
    public MyBatisBaseDao getDao() {
        return rfidInoutDao;
    }

}
