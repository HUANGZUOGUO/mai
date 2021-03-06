<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<jsp:include page="../wrapper.prefix.jsp"/>

  
<section class="hbox stretch">
    <aside class="aside-md bg-white b-r">
        <section class="vbox">
            <header class="b-b header">
                <p class="h4"> <c:choose> <c:when test="${systemBank!=null}">编辑</c:when><c:otherwise>添加</c:otherwise></c:choose></p>
            </header>
                
            <section class="scrollable wrapper w-f">
                <form class="form-horizontal" id="edit_form" action=<c:choose> <c:when test="${systemBank!=null}">"${BASE_URL}/systemBank/edit"</c:when><c:otherwise>"${BASE_URL}/systemBank/add"</c:otherwise></c:choose> method="post">
                    <div class="form-group">
                        <label for="pno" class="col-sm-3 control-label">父级编号</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="pno" name="pno" value="${systemBank.pno}" onkeydown="if(event.keyCode==13)return false;" placeholder="请输入" />
                        </div>
                    </div>
					<div class="line line-dashed line pull-in"></div>
                    <div class="form-group">
                        <label for="bankNo" class="col-sm-3 control-label">银行编号</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="bankNo" name="bankNo" value="${systemBank.bankNo}" onkeydown="if(event.keyCode==13)return false;" placeholder="请输入" />
                        </div>
                    </div>
					<div class="line line-dashed line pull-in"></div>
                    <div class="form-group">
                        <label for="bankName" class="col-sm-3 control-label">银行名称</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="bankName" name="bankName" value="${systemBank.bankName}" onkeydown="if(event.keyCode==13)return false;" placeholder="请输入" />
                        </div>
                    </div>
					<div class="line line-dashed line pull-in"></div>
					<div class="form-group">
				        <label class="col-sm-3 control-label">银行级别</label>
				        <div class="col-sm-4">
				            <select id="grade" name="grade" class="form-control">
				                <option value="0">请选择</option>
				                	<option value="1" <c:if test="${systemBank.grade == 1}">selected="selected"</c:if>>主行</option>
				                	<option value="2" <c:if test="${systemBank.grade == 2}">selected="selected"</c:if>>分行</option>
				            </select>
				        </div>
				    </div>
				    <div class="line line-dashed line pull-in"></div>
					<div class="form-group">
				        <label class="col-sm-3 control-label">状态</label>
				        <div class="col-sm-4">
				            <select id="status" name="status" class="form-control">
				                <option value="0">请选择</option>
				                	<option value="0" <c:if test="${systemBank.status == 0}">selected="selected"</c:if>>不可用</option>
				                	<option value="1" <c:if test="${systemBank.status == 1}">selected="selected"</c:if>>可用</option>
				            </select>
				        </div>
				    </div>
				    <div class="line line-dashed line pull-in"></div>
                    <input type="hidden" name="id" value="${systemBank.id}" />

                </form>
            </section>
        
            <footer class="footer b-t bg-white-only">
                <div class="m-t-sm">
                    <button type="button" data_submit_type="submit_save_back" class="btn btn-s-md btn-primary btn-sm input-submit">保存</button>
                    <c:if test="${systemBank==null}"><button type="button" data_submit_type="submit_save_continue" class="btn btn-s-md btn-primary btn-sm input-submit">保存并继续添加</button></c:if>
                    <button type="button" data_submit_type="submit_cancel" class="btn btn-danger btn-sm input-submit">取消</button>
                    <span id="edit_notice"></span>
                </div>
            </footer>
        </section>
    </aside>
</section>

<jsp:include page="../wrapper.suffix.jsp"/>
<script src="${STATIC_URL}/modules/system/js/bank.edit.js" type="text/javascript"></script>
<!-- / modal - 编辑-->