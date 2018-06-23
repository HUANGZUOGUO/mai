package com.bluemobi.controller.ams;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
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
import com.bluemobi.po.ams.AmsArchivesAudit;
import com.bluemobi.service.ams.AmsArchivesAuditService;
import com.bluemobi.to.ResultTO;
import com.bluemobi.util.DateUtil;



/**
 * 【档案申请审批表】控制器
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2016-11
 * 
 */
@Controller
@RequestMapping("amsArchivesAudit")
public class AmsArchivesAuditController extends AbstractBackController {
    
    private static final Logger LOGGER = LoggerFactory.getLogger(AmsArchivesAuditController.class);
    
    @Autowired
    private AmsArchivesAuditService amsArchivesAuditService;
    

    /**
     * 将请求参数中的字符串转换成日期格式
     * @param request
     * @param binder
     * @return string
     * @author AutoCode
     * @date 2016-11
     */
    @InitBinder
    protected void initBinder(HttpServletRequest request, ServletRequestDataBinder binder) throws Exception {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//请求参数中的日期字符串格式
        CustomDateEditor editor = new CustomDateEditor(df, false);
        binder.registerCustomEditor(Date.class, editor);
    }
    
    /**
     * 进入【档案申请审批表】主页
     * @param model
     * @return string
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(Model model) {
        // 加载公共数据
        initIndex(model);
        return "ams/archivesAudit.index";
    }
    
    /**
     * 分页查询【档案申请审批表】
     * @param key
     * @param pageSize
     * @param pageIndex
     * @return
     * @return Page<Map<String,Object>>
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "page", method = RequestMethod.POST)
    @ResponseBody
    public Page<Map<String, Object>> page(@ModelAttribute AmsArchivesAudit amsArchivesAudit,String key, int pageSize, int pageIndex) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("type", "".equals(amsArchivesAudit.getType()) ? null:amsArchivesAudit.getType());
        map.put("status", "".equals(amsArchivesAudit.getStatus()) ? null:amsArchivesAudit.getStatus());
        Page<Map<String, Object>> page = amsArchivesAuditService.page(map,pageIndex, pageSize);
        return page;
    }
    
    /**
     * 查询【档案申请审批表】详情
     * @param model
     * @return string
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "detail", method = RequestMethod.GET)
    public String detail(Model model, Integer auditId) {
        // 加载公共数据
        initIndex(model);
        Map<Object, Object> map = new HashMap<Object, Object>();
        map.put("auditId", auditId); 
        model.addAttribute("amsArchivesAudit", amsArchivesAuditService.selectObject(map));
        return "ams/archivesAudit.detail";
    }
    
    /**
     * 进入新增【档案申请审批表】页面
     * @param model
     * @return string
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "add", method = RequestMethod.GET)
    public String add(Model model) {
        // 加载公共数据
        initIndex(model);
        return "ams/archivesAudit.edit";
    }
    
    /**
     * 新增【档案申请审批表】数据
     * @param amsArchivesAudit
     * @return ResultTO
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "add", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO addAmsArchivesAudit(@ModelAttribute AmsArchivesAudit amsArchivesAudit, BindingResult result) {
    	amsArchivesAudit.setCreator(this.getUserId());
    	amsArchivesAudit.setCtime(DateUtil.getCurrentDate());
    	amsArchivesAudit.setMtime(DateUtil.getCurrentDate());
    	amsArchivesAudit.setStatus("0");
    	amsArchivesAudit.setUserId(this.getUserId());
        try {
            amsArchivesAuditService.insert(amsArchivesAudit);
            LOGGER.info("用户【{}】添加档案申请审批表数据【{}】成功", new Object[] { this.getUserId(), amsArchivesAudit } );
        } catch (Exception e) {
            LOGGER.error("用户【{}】添加档案申请审批表数据【{}】失败 Exception:【{}】", new Object[] { this.getUserId(), amsArchivesAudit, e });
            return ResultTO.newFailResultTO("添加失败", null);
        }
        return ResultTO.newSuccessResultTO("添加成功", null);
    }
    
    /**
     * 进入修改【档案申请审批表】页面
     * @param model
     * @return string
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "edit", method = RequestMethod.GET)
    public String edit(Model model, Integer auditId) {
        // 加载公共数据
        initIndex(model);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("auditId", auditId); 
        model.addAttribute("amsArchivesAudit", amsArchivesAuditService.selectObject(map));
        return "ams/archivesAudit.edit";
    }
    
    /**
     * 修改【档案申请审批表】数据
     * @param amsArchivesAudit
     * @return ResultTO
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "edit", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO editAmsArchivesAudit(@ModelAttribute AmsArchivesAudit amsArchivesAudit, BindingResult result) {
    	amsArchivesAudit.setModifier(this.getUserId());
    	amsArchivesAudit.setMtime(DateUtil.getCurrentDate());
        try {
            amsArchivesAuditService.update(amsArchivesAudit);
            LOGGER.info("用户【{}】修改档案申请审批表数据【{}】成功", new Object[] { this.getUserId(), amsArchivesAudit } );
        } catch (Exception e) {
            LOGGER.error("用户【{}】修改档案申请审批表数据【{}】失败 Exception:【{}】", new Object[] { this.getUserId(), amsArchivesAudit, e });
            return ResultTO.newFailResultTO("更新失败", null);
        }
        return ResultTO.newSuccessResultTO("更新成功", null);
    }
    
    /**
     * 删除【档案申请审批表】数据
     * @param auditId
     * @return ResultTO
     * @author AutoCode
     * @date 2016-11
     */
    @RequestMapping(value = "delete", method = RequestMethod.POST)
    @ResponseBody
    public ResultTO deleteAmsArchivesAudit(Integer auditId) {
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            map.put("auditId", auditId); 
            amsArchivesAuditService.delete(map);
            LOGGER.info("用户【{}】删除档案申请审批表数据【{}】成功", new Object[] { this.getUserId(), auditId });
        } catch (Exception e) {
            LOGGER.error("用户【{}】删除档案申请审批表数据【{}】失败 Exception:【{}】", new Object[] { this.getUserId(), auditId, e });
            return ResultTO.newFailResultTO("删除失败", null);
        }
        return ResultTO.newSuccessResultTO("删除成功", null);
    }
    
}
