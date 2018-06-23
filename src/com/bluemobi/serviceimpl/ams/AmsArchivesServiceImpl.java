package com.bluemobi.serviceimpl.ams;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appcore.dao.MyBatisBaseDao;
import com.appcore.service.impl.MybatisBaseServiceImpl;
import com.bluemobi.dao.ams.AmsArchivesDao;
import com.bluemobi.po.ams.AmsArchives;
import com.bluemobi.po.ams.AmsArchivesFilingmethod;
import com.bluemobi.po.ams.AmsArchivesKeepyear;
import com.bluemobi.dao.wms.WmsStoreDao;
import com.bluemobi.service.ams.AmsArchivesFilingmethodService;
import com.bluemobi.service.ams.AmsArchivesKeepyearService;
import com.bluemobi.service.ams.AmsArchivesService;
import com.bluemobi.service.ams.AmsArchivesTypeService;

/**
 * 【档案详情表】 服务类 实现类
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2016-11
 * 
 */
@Service(value = "amsArchivesService")
public class AmsArchivesServiceImpl extends MybatisBaseServiceImpl implements AmsArchivesService {

	@Autowired
	private AmsArchivesDao amsArchivesDao;

	@Override
	public MyBatisBaseDao getDao() {
		return amsArchivesDao;
	}

	@Autowired
	private WmsStoreDao wmsStoreDao;
	@Autowired
	private AmsArchivesTypeService amsArchivesTypeService;
	@Autowired
	private AmsArchivesFilingmethodService amsArchivesFilingmethodService;
	@Autowired
	private AmsArchivesKeepyearService amsArchivesKeepyearService;

	/*
	 * 档案信息同步增删改
	 */
	@Override
	public String archivesSync(List<Map<String, Object>> datass) {
		try {
			for (Map<String, Object> paraMap : datass) {// 便利每条数据
				// 校验是否为空
				if (paraMap.get("archiveno") == null || paraMap.get("archiveno").equals("")) {
					return "档案号不能为空";
				} else if (paraMap.get("archivesType") == null || paraMap.get("archivesType").equals("")) {
					return "类型编码不能为空";
				} else if (paraMap.get("filingmethod") == null || paraMap.get("filingmethod").equals("")) {
					return "立卷方式不能为空";
				} else if (paraMap.get("title") == null || paraMap.get("title").equals("")) {
					return "正题名不能为空";
				} /*else if (paraMap.get("paratitle") == null || paraMap.get("paratitle").equals("")) {
					return "案卷标题不能为空";
				}*/ else if (paraMap.get("keepyear") == null) {
					return "保管年限不能为空";
				} /*
					 * else if (paraMap.get("security").equals("") || paraMap.get("security") ==
					 * null) { return "密级等级不能为空"; }
					 *//*
						 * else if (paraMap.get("subject").equals("") || paraMap.get("subject") == null)
						 * { return "主题词不能为空"; } else if (paraMap.get("keyword").equals("") ||
						 * paraMap.get("keyword") == null) { return "关键词不能为空"; }
						 */ else if (paraMap.get("clientId") == null || paraMap.get("clientId").equals("")) {
					return "客户端ID不能为空";
				} else if (paraMap.get("type") == null || paraMap.get("type").equals("")) {
					return "同步类型不能为空";
				} else if (paraMap.get("totalNum") == null || paraMap.get("totalNum").equals("")) {
					return "总库存不能为空";
				} else if (paraMap.get("nowNum") == null || paraMap.get("nowNum").equals("")) {
					return "实际库存不能为空";
				}
				paraMap.put("archivesTypeId", paraMap.get("archiveType"));
				paraMap.put("filingMethod", paraMap.get("filingmethod"));
				paraMap.put("ClientID", paraMap.get("clientId"));
				paraMap.put("totalNumber", Integer.parseInt(String.valueOf(paraMap.get("totalNum"))));
				paraMap.put("nowNumber", Integer.parseInt(String.valueOf(paraMap.get("nowNum"))));
				paraMap.put("creator", paraMap.get("clientId"));
				paraMap.put("ctime", new Date());

				/**
				 * 
				 * 将传入的标识转化为保管年限的主键ID 校验数据字典 中信直接传保管年限，先去保管年限表查询是否有此保管年限如果有就得到id，并将id赋值给档案
				 * 如果没有就在保管年限中新建一条，并把这条保管年限的id赋值给档案
				 */
				Map<String, Object> mapForKeepyear = new HashMap<String, Object>();
				mapForKeepyear.put("sortOrder", paraMap.get("keepyear"));
				List<Map<String, Object>> lists01 = amsArchivesKeepyearService.selectMapList(mapForKeepyear);
				if (lists01 != null && lists01.size() > 0) {
					paraMap.put("keepyear", lists01.get(0).get("amsArchivesKeepyear").toString());
				} else {// 不存在就添加一条
					// return "请求失败,该保管年限不存在";
					AmsArchivesKeepyear amsArchivesKeepyear = new AmsArchivesKeepyear();
					amsArchivesKeepyear.setName(String.valueOf(paraMap.get("keepyear")));
					amsArchivesKeepyear.setSortOrder(String.valueOf(paraMap.get("keepyear")));
					amsArchivesKeepyear.setRemark(String.valueOf(paraMap.get("keepyear")));
					amsArchivesKeepyearService.insert(amsArchivesKeepyear);
					paraMap.put("keepyear", amsArchivesKeepyear.getAmsArchivesKeepyear());
				}

				/**
				 * 将传入的标识转化为立卷方式的主键ID
				 */
				Map<String, Object> mapForFilingmethod = new HashMap<String, Object>();
				mapForFilingmethod.put("sortOrder", paraMap.get("filingMethod"));
				List<Map<String, Object>> lists02 = amsArchivesFilingmethodService.selectMapList(mapForFilingmethod);
				if (lists02 != null && lists02.size() > 0) {
					paraMap.put("filingmethod", lists02.get(0).get("archivesFilingmethodId").toString());
				} else {
					AmsArchivesFilingmethod archivesFilingmethod = new AmsArchivesFilingmethod();
					archivesFilingmethod.setName(String.valueOf(paraMap.get("filingmethod")));
					archivesFilingmethod.setSortOrder(String.valueOf(paraMap.get("filingmethod")));
					archivesFilingmethod.setRemark(String.valueOf(paraMap.get("filingmethod")));
					amsArchivesFilingmethodService.insert(archivesFilingmethod);
					paraMap.put("filingMethod", archivesFilingmethod.getArchivesFilingmethodId());
				}
				/**
				 * 将传入的标识转化为档案类型的主键ID
				 */
				Map<String, Object> mapForArchiveType = new HashMap<String, Object>();
				mapForArchiveType.put("sortOrder", paraMap.get("archivesTypeId"));
				List<Map<String, Object>> lists03 = amsArchivesTypeService.selectMapList(mapForArchiveType);
				String archivesTypeId = "";
				if (lists03 != null && lists03.size() > 0) {
					archivesTypeId = lists03.get(0).get("archivesTypeId").toString();
					paraMap.put("archivesTypeId", archivesTypeId);
				} else {
					return "请求失败,该档案类型不存在";
				}

				/**
				 * 处理档案 中信业务逻辑：分两个仓库，临时库和正常库，档案首先进入临时库， 在临时库中可以进行修改删除等加工操作，加工好的档案会进入到正常库，
				 * 在正常库中不能进行删除修改操作，若想操作就必须先退回到临时库在临时库中操作，
				 * 档案进入正常库时会请求八益系统，进行添加操作，档案移除正常库是会请求八益系统进行删除操作
				 * 
				 * 唯一标示使用档案号与档案类型组合方式 八益系统： 删除时将档案状态变更为删除状态（只有状态是在库的时候（inflag 0:在库
				 * 1.出库）才能够删除）（inflag变更为-1） 添加时先判断数据库中是否有此份档案，如果没有直接添加一条新的，
				 * 如果有，先判断是否是删除状态，如果是删除状态将档案变更为在库，并更新档案 如果不是删除状态，说明此份档案重复，则同步失败
				 */
				String type = String.valueOf(paraMap.get("type"));
				Map<String, Object> mapForArchives = new HashMap<String, Object>();
				mapForArchives.put("archiveno", paraMap.get("archiveno"));
				mapForArchives.put("archivesTypeId", archivesTypeId);
				List<AmsArchives> amsArchives = this.selectObjectList(mapForArchives);
				// 1是添加
				AmsArchives amsArchive = new AmsArchives();
				if (type.equals("1")) {
					if (amsArchives.size() > 0) {// 文档已存在，修改字段即可
						// return "请求失败，文档已经存在!";
						amsArchive = amsArchives.get(0);
						amsArchive.setTitle(String.valueOf(paraMap.get("title")));
						amsArchive.setArchivesTypeId(String.valueOf(paraMap.get("archivesTypeId")));
						amsArchive.setFilingmethod(String.valueOf(paraMap.get("filingMethod")));
						//amsArchive.setParatitle(String.valueOf(paraMap.get("paratitle")));
						amsArchive.setKeyword(String.valueOf(paraMap.get("keyword")));
						//amsArchive.setSubject(String.valueOf(paraMap.get("subject")));
						//amsArchive.setSecurity(String.valueOf(paraMap.get("security")));
						amsArchive.setMtime(new Date());
						amsArchive.setModifier(Integer.parseInt(String.valueOf(paraMap.get("creator"))));
						amsArchive.setTotalNumber(Integer.parseInt(String.valueOf(paraMap.get("totalNumber"))));
						amsArchive.setNowNumber(Integer.parseInt(String.valueOf(paraMap.get("nowNumber"))));
						amsArchive.setInflag(0);
						amsArchive.setCheckStatus(5);
						this.update(amsArchive);
						continue;
					} else {
						amsArchive.setArchiveno(String.valueOf(paraMap.get("archiveno")));
						amsArchive.setTitle(String.valueOf(paraMap.get("title")));
						amsArchive.setArchivesTypeId(String.valueOf(paraMap.get("archivesTypeId")));
						amsArchive.setFilingmethod(String.valueOf(paraMap.get("filingMethod")));
						//amsArchive.setParatitle(String.valueOf(paraMap.get("paratitle")));
						amsArchive.setKeyword(String.valueOf(paraMap.get("keyword")));
						//amsArchive.setSubject(String.valueOf(paraMap.get("subject")));
						//amsArchive.setSecurity(String.valueOf(paraMap.get("security")));
						amsArchive.setMtime(new Date());
						amsArchive.setModifier(Integer.parseInt(String.valueOf(paraMap.get("creator"))));
						amsArchive.setTotalNumber(Integer.parseInt(String.valueOf(paraMap.get("totalNumber"))));
						amsArchive.setNowNumber(Integer.parseInt(String.valueOf(paraMap.get("nowNumber"))));
						amsArchive.setInflag(0);
						amsArchive.setCheckStatus(5);
						this.insert(amsArchive);
						continue;
					}
				}

				// 2是删除
				if (type.equals("2")) {
					if (amsArchives.size() >= 1) {
						amsArchive = amsArchives.get(0);
//						if (amsArchive.getInflag() != 0
//								|| amsArchive.getCheckStatus() != 5) {
//							return "请求失败，文档状态不支持删除";
//						}
						amsArchive.setInflag(-1);
						amsArchive.setCheckStatus(-1);
						this.update(amsArchive);
						continue;
					}
					return "请求失败，要删除的文档不存在";
				}
				return "请求失败，同步类型不存在";
			}
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "请求失败，数据解析出错";
		}
		return null;
	}

	/**
	 * 
	 * @Date:2017年5月12日
	 * @author:Tony
	 * @param paraMap
	 * @return
	 */
	@Override
	public String dictSync(Map<String, Object> paraMap) {
		String result = null;
		if (paraMap.get("dictNo").equals("1")) {
			result = amsArchivesTypeService.dictSync(paraMap);
		} else if (paraMap.get("dictNo").equals("2")) {
			result = amsArchivesFilingmethodService.dictSync(paraMap);
		} else if (paraMap.get("dictNo").equals("3")) {
			result = amsArchivesKeepyearService.dictSync(paraMap);
		} else if (paraMap.get("dictNo").equals("4")) {

		} else {
			return "请求失败：您同步的数据字典<<" + paraMap.get("dictNo") + ">>不存在";
		}
		return result;
	}

	@Override
	public Map<String, Object> getCountAms(Map<String, Object> map) {
		Map<String, Object> countAms = amsArchivesDao.getCountAms(map);
		Map<String, Object> maps = wmsStoreDao.selectObjectById(map);
		String storeName = maps.get("name").toString();
		countAms.put("storeName", storeName);
		return countAms;
	}

}
