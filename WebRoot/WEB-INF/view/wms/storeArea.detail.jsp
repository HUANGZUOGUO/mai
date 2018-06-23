<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<jsp:include page="../wrapper.prefix.jsp"/>

<section class="hbox stretch">
    <aside class="bg-white">
        <section class="vbox">
            <header class="header bg-white b-b clearfix">
                <div class="m-t-sm">
                    <a href="#subNav" data-toggle="class:hide" class="btn btn-sm btn-default active btn-nav-goods" btn_nav_goods_index="0">
                        <i class="fa fa-caret-right text fa-lg"></i>
                        <i class="fa fa-caret-left text-active fa-lg"></i>
                    </a>
                        <a href="javascript:;" class="btn btn-sm btn-default" id="button_cancel"><i class="fa fa-reply"></i> 返回</a>
                </div>
            </header>
              
            <section class="scrollable wrapper">
                <section class="panel panel-default portlet-item">
	                <header class="panel-heading">库房分区表详情</header>
		            <table class="table table-striped2 m-b-none text-sm">
                        <tbody>
                        
                            <tr>  
                                <td class="col-sm-2">主键ID：</td>
                                <td class="col-sm-4">${wmsStoreArea.stroreAreaId}</td>
                                <td class="col-sm-2">所属库房id：</td>
                                <td class="col-sm-4">${wmsStoreArea.storeId}</td>
                            </tr>
                            <tr>  
                                <td class="col-sm-2">库区代码：</td>
                                <td class="col-sm-4">${wmsStoreArea.code}</td>
                                <td class="col-sm-2">库区名称：</td>
                                <td class="col-sm-4">${wmsStoreArea.name}</td>
                            </tr>
                            <tr>  
                                <td class="col-sm-2">序号：</td>
                                <td class="col-sm-4">${wmsStoreArea.sortOrder}</td>
								<td class="col-sm-2">状态：</td>
                                <td class="col-sm-4">
									<c:if test="${wmsStoreArea.status == 0}">
									停用
									</c:if>
									<c:if test="${wmsStoreArea.status == 1}">
									在用		
									</c:if>
								</td>
                            </tr>
                            <tr>  
                                <td class="col-sm-2">备注：</td>
                                <td class="col-sm-4">${wmsStoreArea.remark}</td>
                                <td class="col-sm-2">创建人：</td>
                                <td class="col-sm-4">${wmsStoreArea.creator}</td>
                            </tr>
                            <tr>  
                                <td class="col-sm-2">创建时间：</td>
                                <td class="col-sm-4">
                                    <fmt:formatDate value="${wmsStoreArea.ctime}" pattern="yyyy-MM-dd HH:mm:ss"/>
                                </td>
                                <td class="col-sm-2">修改人：</td>
                                <td class="col-sm-4">${wmsStoreArea.modifier}</td>
                            </tr>
                            <tr>  
                                <td class="col-sm-2">最后一次更新时间：</td>
                                <td class="col-sm-4">
                                    <fmt:formatDate value="${wmsStoreArea.mtime}" pattern="yyyy-MM-dd HH:mm:ss"/>
                                </td>
                                <td class="col-sm-2"></td>
                                <td class="col-sm-4"></td>
                            </tr>
                         
                        </tbody>
                    </table>
                </section>
            </section>
        </section>
    </aside>
</section>

<jsp:include page="../wrapper.suffix.jsp"/>
<script src="${STATIC_URL}/modules/wms/js/storeArea.detail.js" type="text/javascript"></script>
