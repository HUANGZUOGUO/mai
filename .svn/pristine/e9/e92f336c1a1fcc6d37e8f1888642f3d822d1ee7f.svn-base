package com.bluemobi.controller.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bluemobi.controller.web.core.BaseController;
import com.bluemobi.dao.wms.WmsStoreDao;
import com.bluemobi.to.ResultTO;
import com.bluemobi.util.RequestParamUtil;
import com.bluemobi.util.StringUtils;


/**
 * web端静态页面跳转管理控制层
 * @author chenbin
 */
@Controller
@RequestMapping("/webJump")
public class WebStaticPageController extends BaseController{
	   @Autowired
	    private WmsStoreDao wmsStoreDao;
	/**
	 * 首页面跳转
	 * @param model
	 * @return
	 */
	@RequestMapping("/index")
	public String index(HttpServletRequest request,Model model) {
		return "web/index";
	}
	/**
	 * 馆藏量跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/holding")
	public String holding(HttpServletRequest request,Model model) {
		return "web/holding";
	}
	/**
	 * 库房布局图跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/layout")
	public String layout(HttpServletRequest request,Model model) {
		return "web/layout";
	}
	/**
	 * 温湿度页面跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/humiture")
	public String humiture(HttpServletRequest request,Model model) {
	    return "web/humiture";
	}
	/**
	 * 视频跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/video")
	public String video(HttpServletRequest request,Model model) {
	    return "web/hkvideo";
	}
	/**
	 * 档案出入跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/archive")
	public String archive(HttpServletRequest request,Model model) {
	    return "web/archive";
	}
	/**
	 * 报警跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/alarm")
	public String alarm(HttpServletRequest request,Model model) {
	    return "web/alarm";
	}
	/**
	 * 能耗跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/ecs")
	public String ecs(HttpServletRequest request,Model model) {
		return "web/ecs";
	}
	/**
	 * rfid跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/rfid")
	public String rfid(HttpServletRequest request,Model model) {
		return "web/rfid";
	}
	/**
	 * rfid盘点跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/rfidpd")
	public String rfidpd(HttpServletRequest request,Model model,HttpSession session) {
		String time=RequestParamUtil.getEncodeParam(request, "time");
		String storeId=RequestParamUtil.getEncodeParam(request, "storeId");
		session.setAttribute("time", time);
		session.setAttribute("storeId",storeId);
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("storeId", storeId);
		Map<String,Object> maps=wmsStoreDao.selectObjectById(map);
		String storeName= maps.get("name").toString();
		session.setAttribute("storeName", storeName);
		if(time.length()>8) {
			return "web/rfidpd";
		}else {
			return "web/rfidpd1";
		}
		
	}
	/************************************4.0的静态页面跳转开始**********************************************/
	/**
	 * 首页跳转4.0
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("")
	public String index4(HttpServletRequest request,Model model) {
	    return "web/4.0/index/index";
	}
	/**
	 * 首页跳转到固定尺寸页公共页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/common")
	public String common(HttpServletRequest request,Model model) {
		String type = RequestParamUtil.getEncodeParam(request, "type");
		if (StringUtils.isEmpty(type)) {
			return "web/4.0/index/index";
		}
		model.addAttribute("type", type);
		return "web/4.0/common/common_header";
	}
	/**
	 * 数据管理中心模块页面地址********************************************************************************
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data")
	public String data(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_nav_main";
	}
	/**
	 * 数据管理中心
	 * 档案管理模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data/dagl")
	public String datadagl(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_dagl";
	}
	/**
	 * 数据管理中心
	 * 盘点管理模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data/pdgl")
	public String datapdgl(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_pdgl";
	}
	/**
	 * 数据管理中心
	 * 环境监测模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data/hjgl")
	public String datahjgl(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_hjgl";
	}
	/**
	 * 数据管理中心
	 * 设备监测模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data/sbjc")
	public String datasbjc(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_sbjc";
	}
	/**
	 * 数据管理中心
	 * 异常监测模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data/ycjc")
	public String dataycjc(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_ycjc";
	}
	/**
	 * 数据管理中心
	 * 智能报表模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data/znbb")
	public String dataznbb(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_znbb";
	}
	/**
	 * 数据管理中心
	 * 记录日志模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/data/jlrz")
	public String datajlrz(HttpServletRequest request,Model model) {
	    return "web/4.0/data/data_jlrz";
	}
	/**
	 * 设备控制中心模块页面地址********************************************************************************
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/device")
	public String device(HttpServletRequest request,Model model) {
	    return "web/4.0/device/device_nav_main";
	}
	/**
	 * 设备控制中心
	 * 设备控制模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/device/control")
	public String devicecontrol(HttpServletRequest request,Model model) {
	    return "web/4.0/device/device_control";
	}
	/**
	 * 设备控制中心
	 * 视频控制模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/device/videocon")
	public String videocontrol(HttpServletRequest request,Model model) {
	    return "web/4.0/device/video_control";
	}
	/**
	 * 设备控制中心
	 * 情景模式模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/device/scene")
	public String devicescene(HttpServletRequest request,Model model) {
	    return "web/4.0/device/device_scene";
	}
	/**
	 * 视频管理中心********************************************************************************
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/video4")
	public String video4(HttpServletRequest request,Model model) {
	    return "web/4.0/video/video_management";
	}
	/**
	 * 档案管理中心模块页面地址********************************************************************************
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/ams")
	public String ams(HttpServletRequest request,Model model) {
	    return "web/4.0/ams/ams_nav_main";
	}
	/**
	 * 档案管理中心
	 * 档案申请模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/ams/dasq")
	public String amsdasq(HttpServletRequest request,Model model) {
	    return "web/4.0/ams/ams_dasq";
	}
	/**
	 * 档案管理中心
	 * 存档申请模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/ams/cdsq")
	public String amscdsq(HttpServletRequest request,Model model) {
	    return "web/4.0/ams/ams_cdsq";
	}
	/**
	 * 档案管理中心
	 * 取档申请模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/ams/qdsq")
	public String amsqdsq(HttpServletRequest request,Model model) {
	    return "web/4.0/ams/ams_qdsq";
	}
	/**
	 * 档案管理中心
	 * 任务列表模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/ams/rwlb")
	public String amsrwlb(HttpServletRequest request,Model model) {
	    return "web/4.0/ams/ams_rwlb";
	}
	/**
	 * 档案管理中心
	 * 档案盘点模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/ams/dapd")
	public String amsdapd(HttpServletRequest request,Model model) {
	    return "web/4.0/ams/ams_dapd";
	}
	/**
	 * 系统管理中心模块页面地址********************************************************************************
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/system")
	public String system(HttpServletRequest request,Model model) {
	    return "web/4.0/system/system_nav_main";
	}
	/**
	 * 系统管理中心
	 * 系统信息模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/system/xtxx")
	public String systemxtxx(HttpServletRequest request,Model model) {
	    return "web/4.0/system/system_xtxx";
	}
	/**
	 * 系统管理中心
	 * 系统维护模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/system/xtwh")
	public String systemxtwh(HttpServletRequest request,Model model) {
	    return "web/4.0/system/system_xtwh";
	}
	/**
	 * 系统管理中心
	 * 平台监测模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/system/ptjc")
	public String systemptjc(HttpServletRequest request,Model model) {
	    return "web/4.0/system/system_ptjc";
	}
	/**
	 * 系统管理中心
	 * 服务与帮助模块页面地址
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/system/help")
	public String systemhelp(HttpServletRequest request,Model model) {
	    return "web/4.0/system/system_help";
	}
	/************************************4.0的静态页面跳转结束**********************************************/
}
