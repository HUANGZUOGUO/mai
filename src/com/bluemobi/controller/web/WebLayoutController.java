package com.bluemobi.controller.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bluemobi.controller.AbstractAPIController;
import com.bluemobi.service.device.DeviceManageService;
import com.bluemobi.to.ResultTO;
import com.bluemobi.util.RequestParamUtil;
import com.bluemobi.util.StringUtils;

/**
 * WEB【库房图】控制器
 * 
 * 
 */
@Controller(value = "WebLayoutController")
@RequestMapping("web/layout")
public class WebLayoutController extends AbstractAPIController {
    private static final Logger LOGGER = LoggerFactory.getLogger(WebLayoutController.class);
    @Autowired
    private DeviceManageService deviceManageService;

    /**
     * 设备控制接口
     * 
     * @param request
     * @return
     */
    @RequestMapping(value = "operateDevice")
    @ResponseBody
    public ResultTO operateDevice(HttpServletRequest request) {
	LOGGER.info("*************设备控制接口-begin*****************");

	// 用户id
	String userId = RequestParamUtil.getEncodeParam(request, "userId");
	if (StringUtils.isEmpty(userId)) {
	    return ResultTO.newFailResultTO("用户id不能为空", null);
	}
	// 设备id
	String deviceId = RequestParamUtil.getEncodeParam(request, "deviceId");
	if (StringUtils.isEmpty(deviceId)) {
	    return ResultTO.newFailResultTO("设备id不能为空", null);
	}
	// 设备类型id 1.视频 2.灯光 3.门禁 4.温度计 5.密集架
	String categoryId = RequestParamUtil.getEncodeParam(request, "categoryId");
	if (StringUtils.isEmpty(categoryId)) {
	    return ResultTO.newFailResultTO("设备类型id不能为空", null);
	}
	// 动作类型id 1.开 2.关 3.停止 4.左开 5.右开 6.通风 7.合拢
	String actionType = RequestParamUtil.getEncodeParam(request, "actionType");
	if (StringUtils.isEmpty(actionType)) {
	    return ResultTO.newFailResultTO("动作类型不能为空", null);
	}
	//全选
	String isSelect = RequestParamUtil.getEncodeParam(request, "isSelect");
	if (StringUtils.isEmpty(isSelect)) {
	    return ResultTO.newFailResultTO("全选标示不能为空", null);
	}
	try {
	    // 组装参数
	    Map<String, Object> paramMap = new HashMap<String, Object>();
	    paramMap.put("userId", userId);
	    paramMap.put("deviceId", deviceId);
	    paramMap.put("categoryId", categoryId);
	    paramMap.put("actionType", actionType);
	    paramMap.put("isSelect", isSelect);
	    // 执行设备操控
	    int result = deviceManageService.operateDevice(paramMap);
	    if (result == 1) {// 0成功 1失败
		return ResultTO.newFailResultTO("操作失败！请检查连接参数和网络是否配置正确！", null);
	    }
	} catch (Exception e) {
	    e.printStackTrace();
	    LOGGER.error("操作设备出现异常【{}】，请求ip【{}】，请求信息【{}】", new Object[] { e.getMessage(), request.getRemoteHost() });
	    return ResultTO.newFailResultTO("请求失败！请检查连接参数和网络是否配置正确！", null);
	}
	LOGGER.info("************* 设备控制接口-end*****************");
	return ResultTO.newSuccessResultTO("请求成功", null);
    }
}
