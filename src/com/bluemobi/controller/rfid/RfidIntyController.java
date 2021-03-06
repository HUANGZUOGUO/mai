package com.bluemobi.controller.rfid;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.appcore.page.Page;
import com.bluemobi.controller.AbstractBackController;
import com.bluemobi.dao.wms.WmsStoreDao;
import com.bluemobi.po.rfid.RfidInty;
import com.bluemobi.service.rfid.RfidIntyService;
import com.bluemobi.to.ResultTO;
import com.bluemobi.util.RequestParamUtil;



/**
 * 【】控制器
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2017-10
 * 
 */
@Controller
@RequestMapping("rfidInty")
public class RfidIntyController extends AbstractBackController {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(RfidIntyController.class);
    
    @Autowired
    private RfidIntyService rfidIntyService;
    @Autowired
    private WmsStoreDao wmsStoreDao;

    /**
     * 将请求参数中的字符串转换成日期格式
     * @param request
     * @param binder
     * @return string
     * @author AutoCode
     * @date 2017-10
     */
    @InitBinder
    protected void initBinder(HttpServletRequest request, ServletRequestDataBinder binder) throws Exception {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//请求参数中的日期字符串格式
        CustomDateEditor editor = new CustomDateEditor(df, false);
        binder.registerCustomEditor(Date.class, editor);
    }
    
    /**
     * 进入【】主页
     * @param model
     * @return string
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(Model model) {
        // 加载公共数据
        initIndex(model);
        return "rfid/inty.index";
    }
    
    /**
     * 分页查询【】
     * @param key
     * @param pageSize
     * @param pageIndex
     * @return
     * @return Page<Map<String,Object>>
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "page", method = RequestMethod.POST)
    @ResponseBody
    public Page<Map<String, Object>> page(String key, int pageSize, int pageIndex) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("key", key);
        Page<Map<String, Object>> page = rfidIntyService.page(map,pageIndex, pageSize);
        return page;
    }
    
    /**
     * 查询【】详情
     * @param model
     * @return string
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "detail", method = RequestMethod.GET)
    public String detail(Model model, Integer rfidIntyId) {
        // 加载公共数据
        initIndex(model);
        Map<Object, Object> map = new HashMap<Object, Object>();
        map.put("rfidIntyId", rfidIntyId); 
        model.addAttribute("rfidInty", rfidIntyService.selectObject(map));
        return "rfid/inty.detail";
    }
    
    /**
     * 进入新增【】页面
     * @param model
     * @return string
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "add", method = RequestMethod.GET)
    public String add(Model model) {
        // 加载公共数据
        initIndex(model);
        return "rfid/inty.edit";
    }
    
    /**
     * 新增【】数据
     * @param rfidInty
     * @return ResultTO
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "add", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO addRfidInty(@ModelAttribute RfidInty rfidInty, BindingResult result) {
        try {
            rfidIntyService.insert(rfidInty);
            LOGGER.info("用户【{}】添加数据【{}】成功", new Object[] { this.getUserId(), rfidInty } );
        } catch (Exception e) {
            LOGGER.error("用户【{}】添加数据【{}】失败 Exception:【{}】", new Object[] { this.getUserId(), rfidInty, e });
            return ResultTO.newFailResultTO("添加失败", null);
        }
        return ResultTO.newSuccessResultTO("添加成功", null);
    }
    
    /**
     * 进入修改【】页面
     * @param model
     * @return string
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "edit", method = RequestMethod.GET)
    public String edit(Model model, Integer rfidIntyId) {
        // 加载公共数据
        initIndex(model);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("rfidIntyId", rfidIntyId); 
        model.addAttribute("rfidInty", rfidIntyService.selectObject(map));
        return "rfid/inty.edit";
    }
    
    /**
     * 修改【】数据
     * @param rfidInty
     * @return ResultTO
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "edit", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO editRfidInty(@ModelAttribute RfidInty rfidInty, BindingResult result) {
        try {
            rfidIntyService.update(rfidInty);
            LOGGER.info("用户【{}】修改数据【{}】成功", new Object[] { this.getUserId(), rfidInty } );
        } catch (Exception e) {
            LOGGER.error("用户【{}】修改数据【{}】失败 Exception:【{}】", new Object[] { this.getUserId(), rfidInty, e });
            return ResultTO.newFailResultTO("更新失败", null);
        }
        return ResultTO.newSuccessResultTO("更新成功", null);
    }
    
    /**
     * 删除【】数据
     * @param rfidIntyId
     * @return ResultTO
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "delete", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO deleteRfidInty(Integer rfidIntyId) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("rfidIntyId", rfidIntyId); 
            rfidIntyService.delete(map);
            LOGGER.info("用户【{}】删除数据【{}】成功", new Object[] { this.getUserId(), rfidIntyId });
        } catch (Exception e) {
            LOGGER.error("用户【{}】删除数据【{}】失败 Exception:【{}】", new Object[] { this.getUserId(), rfidIntyId, e });
            return ResultTO.newFailResultTO("删除失败", null);
        }
        return ResultTO.newSuccessResultTO("删除成功", null);
    }
    /**
     * 按天查询rfid出入库数据
     * @param rfidIntyId
     * @return ResultTO
     * @author AutoCode
     * @date 2017-10
     */
    @RequestMapping(value = "getRfidIntyByday", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO getRfidIntyByday(HttpServletRequest request) {
    	Map<String,Object> map=new HashMap<String,Object>();
    	String storeId=RequestParamUtil.getEncodeParam(request,"storeId");
    	if(storeId!=null) {
    		map.put("storeId",storeId);
    	}
    	String monthTime=RequestParamUtil.getEncodeParam(request,"monthTime");
    	if(monthTime!=null) {
    		map.put("monthTime",monthTime);
    	}
    	String yearTime=RequestParamUtil.getEncodeParam(request,"yearTime");
    	if(yearTime!=null) {
    		map.put("yearTime",yearTime);
    	}
    	String time=RequestParamUtil.getEncodeParam(request,"time");
    	if(time!=null) {
    		map.put("time",time);
    	}
    	Map<String,Object> maps =null;
        maps=rfidIntyService.getRfidIntyByday(map);
        if(maps==null) {
        	ResultTO.newSuccessResultTO("无文档信息", maps);
        }
		return ResultTO.newSuccessResultTO("查询成功", maps);
    }
    /**
     * 查询rfid的盘点占比
     * 
     */
    @RequestMapping(value = "getRfid", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO getRfid(HttpServletRequest request) {
    	Map<String,Object> map=new HashMap<String,Object>();
    	String yearTime=RequestParamUtil.getEncodeParam(request, "yearTime");
    	if(yearTime!=null) {
    		map.put("yearTime",yearTime );
    	}
    	String monthTime=RequestParamUtil.getEncodeParam(request, "monthTime");
    	if(monthTime!=null) {
    		map.put("monthTime",monthTime);
    	}
    	Map<String,Object> maps=rfidIntyService.getRfid(map);
    	  if(maps==null) {
          	ResultTO.newSuccessResultTO("无文档信息", maps);
          }
  		return ResultTO.newSuccessResultTO("查询成功", maps);
    	
    }
    /**
     * 按类型查询rfid信息
     */
    @RequestMapping(value = "getRfidByType", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO getRfidByType(HttpServletRequest request) {
    	Map<String,Object> map=new HashMap<String,Object>();
    	String type=RequestParamUtil.getEncodeParam(request, "type");
    	if(!type.equals("-1")) {
    		map.put("type",type);
    	}
    	String tittle=RequestParamUtil.getEncodeParam(request, "tittle");
    	if(tittle!=null) {
        	map.put("tittle", "%"+tittle+"%");
    	}
    	String storeId=RequestParamUtil.getEncodeParam(request, "storeId");
    	if(storeId!=null) {
        	map.put("storeId",storeId);
    	}
    	String time=RequestParamUtil.getEncodeParam(request, "time");
    	if(time!=null) {
        	map.put("time",time+"%");
    	}
    	String page1=RequestParamUtil.getEncodeParam(request, "page");
    	if(page1!=null) {
    		int page=Integer.valueOf(page1.toString());
    		map.put("offset", (page-1)*5);
    		map.put("rows", 5);
    	}
    	List<Map<String,Object>> lists=rfidIntyService.getRfidByType(map);
    	int maxPage=rfidIntyService.getMaxPage(map);
    	Map<String,Object> maps=new HashMap<String,Object>();
    	maps.put("page", maxPage);
    	maps.put("rfid", lists);
    	if(lists==null) {
    		ResultTO.newSuccessResultTO("无文档信息", maps);
        }
  		return ResultTO.newSuccessResultTO("查询成功", maps);
    	
    }
    /**
	 * 获取最新rfid记录
	 * 
	 */
    @RequestMapping(value = "getNewRfid", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO getNewRfid(HttpServletRequest request) {
    	List<Map<String,Object>> list=rfidIntyService.getNewRfid();
    	Map<String,Object> map=new HashMap<String,Object>();
    	for(Map<String,Object> m:list) {
    		map.put("storeId", m.get("strore_id"));
    		Map<String,Object> maps=wmsStoreDao.selectObjectById(map);
    		String storeName= maps.get("name").toString();
    		m.put("storeName", storeName);
    	}
		return ResultTO.newSuccessResultTO(list);
    	
    }
    /**
   	* 按照archive_id获取rfid记录
   	* 
   	*/
   	@RequestMapping(value = "getRfidById", method = RequestMethod.POST)
   	@ResponseBody
   	public ResultTO getRfidById(HttpServletRequest request) {
   		Map<String,Object> map=new HashMap<String,Object>();
   		String rfidIntyId=RequestParamUtil.getEncodeParam(request, "id");
    	if(rfidIntyId!=null) {
        	map.put("rfidIntyId",Integer.parseInt(rfidIntyId) );
    	}
    	Map<String,Object> lists=rfidIntyService.getRfidById(map);
    	return ResultTO.newSuccessResultTO(lists);
   	}
}

