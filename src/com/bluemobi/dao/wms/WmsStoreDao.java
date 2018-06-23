package com.bluemobi.dao.wms;

import java.util.Map;

import com.appcore.dao.MyBatisBaseDao;

/**
 * 【库房表】 数据访问对象 接口
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2016-11
 * 
 */
public interface WmsStoreDao extends MyBatisBaseDao {
	/**
	 * 通过库房id查询库房信息
	 * @param map
	 * @return
	 */
	Map<String,Object> selectObjectById(Map<String,Object> map);
}
