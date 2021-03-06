package com.bluemobi.po.rfid;

import java.util.Date;

import com.appcore.model.AbstractObject;

/**
 * 【】持久化对象 数据库表：rfid_inout
 * 
 * @author AutoCode 309444359@qq.com
 * @date 2017-10
 * 
 */
public class RfidInout extends AbstractObject {

    public static final long serialVersionUID = 1L;

    // 主键ID
    private Integer rfidInoutId;
    // 档案id
    private Integer archiveId;
    // 档案号
    private String archiveno;
    // 档案标题
    private String tittle;
    // 出入类型:0.出库 1.入库
    private String type;
    // 出入状态:0.正常 1.异常
    private String status;
    // 用户id
    private Integer userId;
    // 出入人员
    private String username;
    // 创建人
    private String creator;
    // 创建时间
    private Date ctime;
    // 修改人
    private Integer modifier;
    // 最后一次更新时间
    private Date mtime;
    // 备注
    private String remark;

    /** 获取 主键ID */
    public Integer getRfidInoutId() {
        return rfidInoutId;
    }

    /** 设置 主键ID */
    public void setRfidInoutId(Integer rfidInoutId) {
        this.rfidInoutId = rfidInoutId;
    }

    /** 获取 档案id */
    public Integer getArchiveId() {
        return archiveId;
    }

    /** 设置 档案id */
    public void setArchiveId(Integer archiveId) {
        this.archiveId = archiveId;
    }

    /** 获取 档案号 */
    public String getArchiveno() {
        return archiveno;
    }

    /** 设置 档案号 */
    public void setArchiveno(String archiveno) {
        this.archiveno = archiveno;
    }

    /** 获取 档案标题 */
    public String getTittle() {
        return tittle;
    }

    /** 设置 档案标题 */
    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    /** 获取 出入类型:0.出库 1.入库 */
    public String getType() {
        return type;
    }

    /** 设置 出入类型:0.出库 1.入库 */
    public void setType(String type) {
        this.type = type;
    }

    /** 获取 出入状态:0.正常 1.异常 */
    public String getStatus() {
        return status;
    }

    /** 设置 出入状态:0.正常 1.异常 */
    public void setStatus(String status) {
        this.status = status;
    }

    /** 获取 用户id */
    public Integer getUserId() {
        return userId;
    }

    /** 设置 用户id */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /** 获取 出入人员 */
    public String getUsername() {
        return username;
    }

    /** 设置 出入人员 */
    public void setUsername(String username) {
        this.username = username;
    }

    /** 获取 创建人 */
    public String getCreator() {
        return creator;
    }

    /** 设置 创建人 */
    public void setCreator(String creator) {
        this.creator = creator;
    }

    /** 获取 创建时间 */
    public Date getCtime() {
        return ctime;
    }

    /** 设置 创建时间 */
    public void setCtime(Date ctime) {
        this.ctime = ctime;
    }

    /** 获取 修改人 */
    public Integer getModifier() {
        return modifier;
    }

    /** 设置 修改人 */
    public void setModifier(Integer modifier) {
        this.modifier = modifier;
    }

    /** 获取 最后一次更新时间 */
    public Date getMtime() {
        return mtime;
    }

    /** 设置 最后一次更新时间 */
    public void setMtime(Date mtime) {
        this.mtime = mtime;
    }

    /** 获取 备注 */
    public String getRemark() {
        return remark;
    }

    /** 设置 备注 */
    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder();
        sb.append("RfidInout");
        sb.append("{rfidInoutId=").append(rfidInoutId);
        sb.append(", archiveId=").append(archiveId);
        sb.append(", archiveno=").append(archiveno);
        sb.append(", tittle=").append(tittle);
        sb.append(", type=").append(type);
        sb.append(", status=").append(status);
        sb.append(", userId=").append(userId);
        sb.append(", username=").append(username);
        sb.append(", creator=").append(creator);
        sb.append(", ctime=").append(ctime);
        sb.append(", modifier=").append(modifier);
        sb.append(", mtime=").append(mtime);
        sb.append(", remark=").append(remark);
        sb.append('}');
        return sb.toString();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof RfidInout) {
            RfidInout rfidInout = (RfidInout) obj;
            if (this.getRfidInoutId().equals(rfidInout.getRfidInoutId())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        String pkStr = "" + this.getRfidInoutId();
        return pkStr.hashCode();
    }

}