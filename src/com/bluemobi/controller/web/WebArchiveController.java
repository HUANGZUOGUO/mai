package com.bluemobi.controller.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.appcore.page.Page;
import com.bluemobi.controller.AbstractAPIController;
import com.bluemobi.dao.ams.AmsArchivesDao;
import com.bluemobi.service.ams.AmsArchivesActlogService;
import com.bluemobi.service.ams.AmsArchivesAuditService;
import com.bluemobi.to.ResultTO;
import com.bluemobi.util.RequestParamUtil;
import com.bluemobi.util.StringUtils;

/**
 * WEB【档案出入纪录表】控制器
 * 
 * 
 */
@Controller(value = "WebArchiveController")
@RequestMapping("web/archive")
public class WebArchiveController extends AbstractAPIController {

    private static final Logger LOGGER = LoggerFactory.getLogger(WebArchiveController.class);

    @Autowired
    private AmsArchivesDao amsArchivesDao;
    @Autowired
    private AmsArchivesActlogService amsArchivesActlogService;
    @Autowired
    private AmsArchivesAuditService amsArchivesAuditService;
    

    /**
     * 查询最新档案出入纪录
     * 
     */
    @RequestMapping(value = "getNewInOutAms")
    @ResponseBody
    public ResultTO getNewInOutAms(HttpServletRequest request) {
	LOGGER.info("*************获取档案出入纪录-begin*****************");
	// 返回结果级
	Map<String,Object> result = new HashMap<String,Object>();
	List<Map<String,Object>> year = null;
	List<Map<String,Object>> month = null;
	List<Map<String,Object>> day = null;
	try {
	    Map<String,Object> map = new HashMap<String,Object>();
	    map.put("type", 1);//年
	    year = amsArchivesActlogService.getNewInOutAms(map);
	    if(year!=null)result.put("year", year);
	    map.put("type", 2);//月
	    month = amsArchivesActlogService.getNewInOutAms(map);
	    if(month!=null)result.put("month", month);
	    map.put("type", 3);//日
	    day = amsArchivesActlogService.getNewInOutAms(map);
	    if(day!=null)result.put("day", day);
	} catch (Exception e) {
	    e.printStackTrace();
	    LOGGER.error("获取档案出入纪录出现异常【{}】，请求ip【{}】，请求信息【{}】", new Object[] { e.getMessage(), request.getRemoteHost() });
	    return ResultTO.newFailResultTO("请求失败！", null);
	}
	LOGGER.info("*************获取档案出入纪录-end*****************");
	return ResultTO.newSuccessResultTO("请求成功", result);

    }
    /**
     * 获取待执行档案列表
     * @param request
     * @return
     */
    @RequestMapping(value = "getNewAuditAms")
    @ResponseBody
    public ResultTO getNewAuditAms(HttpServletRequest request) {
	LOGGER.info("*************获取档案审批列表-begin*****************");
	// 参数格式化
	Map<String, Object> parmMap = new HashMap<String, Object>();
	// 审批状态
	String status = RequestParamUtil.getEncodeParam(request, "status");
	if (StringUtils.isEmpty(status)) {
	    return ResultTO.newFailResultTO("审批状态不能为空", null);
	}
	parmMap.put("status", status);
	// 第几页
	String pageIndex = RequestParamUtil.getEncodeParam(request, "pageIndex");
	if (StringUtils.isEmpty(pageIndex)) {
	    return ResultTO.newFailResultTO("第几页不能为空", null);
	}
	
	// 每页条数
	String pageSize = RequestParamUtil.getEncodeParam(request, "pageSize");
	if (StringUtils.isEmpty(pageSize)) {
	    return ResultTO.newFailResultTO("每页条数不能为空", null);
	}
	
	// 返回结果级
	Page<Map<String, Object>> page  = null;
	try {
	    // 查询档案审核列表
	    page = amsArchivesAuditService.page(parmMap,Integer.parseInt(pageIndex), Integer.parseInt(pageSize));

	} catch (Exception e) {
	    e.printStackTrace();
	    LOGGER.error("获取档案审批列表出现异常【{}】，请求ip【{}】，请求信息【{}】", new Object[] { e.getMessage(), request.getRemoteHost() });
	    return ResultTO.newFailResultTO("请求失败！", null);
	}
	LOGGER.info("*************获取档案审批列表-end*****************");
	return ResultTO.newSuccessResultTO("请求成功", page);
	
    }
    

}
