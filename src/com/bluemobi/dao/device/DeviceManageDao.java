package com.bluemobi.dao.device;

import java.util.List;
import java.util.Map;

import com.appcore.dao.MyBatisBaseDao;

/**
 * 【设备管理表】 数据访问对象 接口
 * @author AutoCode 309444359@qq.com
 * @date 2016-11
 * 
 */
public interface DeviceManageDao extends MyBatisBaseDao {
    /**
     * 获取库房设备分类列表
     * @param storeId
     * @return
     */
    public List<Map<String,Object>> getStoreDevCate(Integer storeId);
    /**
     * 数据感知获取温湿度设备连接属性，按照ip、port分组
     * @param storeId
     * @return ip 端口号   第三方id起始码
     */
    public List<Map<String,Object>> getHcsDevLinkValue();
    /**
     * @param deviceType 设备类型
     * @param valueName 属性名称
     * @return
     */
    public List<Map<String,Object>> getDevLinkValue(Map<String, Object> map);
    /**
     * 获取库房中设备数量
     * @param map
     * @return
     */
    public List<Map<String, Object>> selectStoreDevNum(Map<String, Object> map);
    
}
