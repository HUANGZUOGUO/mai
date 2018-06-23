<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<jsp:include page="../wrapper.prefix.jsp"/>

<section class="hbox stretch">
    <aside>
        <section class="vbox">
            <header class="header bg-white b-b clearfix">
                <div class="row m-t-sm">
                    <div class="col-sm-3 m-b-xs">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-default action-refresh" title="刷新"><i class="fa fa-refresh"></i></button>                           
                        </div>
                        <a href="${BASE_URL}/adminPermission/add" class="btn btn-sm btn-default load-content"><i class="fa fa-plus"></i>添加</a>
                    </div>
                    <form  class="form-inline" action="${BASE_URL}/adminPermission/page" id="searchForm">
	                    
	                    <div class="col-sm-5 m-b-xs text-right p-right-0">
	                    	<div class="form-group">
	                    		一级菜单：
								<select class="form-control" name="firstMenuId">
								<option value="0">请选择&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
								<c:if test="${firstMenus != null}">
									<c:forEach items="${firstMenus}" var="v">
										<option value="${v.menuId}"
											<c:if test="${ v.menuId == firstMenuId}">selected</c:if>>${v.name}</option>
									</c:forEach>
								</c:if>
							</select>
							</div>
		        		</div>
	                    
	                    <div class="col-sm-3 m-b-xs text-right p-right-0">
	                    	<div class="form-group">
								二级菜单：
								<select class="form-control" name="secondMenuId" id = "secondMenuId">
									<option value="0">请选择&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
									<c:if test="${secondMenus != null}">
										<c:forEach items="${secondMenus}" var="v">
											<option data-link="${v.url}" value="${v.menuId}">${v.name}</option>
										</c:forEach>
									</c:if>
								</select>
							</div>
		        		</div>   

	                    <div class="col-sm-1 m-b-xs">
		                    	<button class="btn btn-sm btn-default action-refresh" type="button">搜索</button>
		        		</div>
		        		
	                </form>
                </div>
            </header>
            
			<%@include file = "../page.jsp" %>
            
        </section>
    </aside>
</section>
            
<jsp:include page="../wrapper.suffix.jsp"/>
<script src="${STATIC_URL}/modules/admin/js/permission.index.js" type="text/javascript"></script>