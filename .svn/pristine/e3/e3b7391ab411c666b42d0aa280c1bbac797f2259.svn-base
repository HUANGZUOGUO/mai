<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- 引入资源文件 -->
<%@ include file="/WEB-INF/view/web/4.0/common/resource.jsp"%>
<title></title>
</head>
<body class="htms">
	<div class="bg">
		<!--头部-->
		<div class="header">
			<!--logo-->
			<div class="logo">
				<span><a href="javascript:location.href=config.service"><img
					src="${STATIC_URL}/images/web/4.0/common/header_logo_bayi.png"></a></span>
				<span><a href="javascript:location.href=config.service"><img
					src="${STATIC_URL}/images/web/4.0/common/header_logo_gk.png"></a></span>
			</div>
			<!--logo-->
			<!--主导航-->
			<div class="nav">
				<ul>
					<li><a href="${BASE_URL}/webJump">首页</a></li>
					<li onclick="change(this);"><a href="${BASE_URL}/webJump/data"
						target="iframe_common">数据分析中心</a></li>
					<li onclick="change(this);"><a
						href="${BASE_URL}/webJump/device" target="iframe_common">设备控制中心</a></li>
					<li onclick="change(this);"><a
						href="${BASE_URL}/webJump/video4" target="iframe_common">视频管理中心</a></li>
					<li onclick="change(this);"><a 
						href="${BASE_URL}/webJump/ams" target="iframe_common">档案操作中心</a></li>
					<li onclick="change(this);"><a
						href="${BASE_URL}/webJump/system" target="iframe_common">系统管理中心</a></li>
				</ul>
			</div>
			<!--主导航-->

			<!--健康指数-->
			<div class="health">
				<div class="data">
					<div class="animation"></div>
				</div>
				<div class="data_content">
					<span>档案馆健康指数</span> <span>96%</span> <span>非常健康</span>
				</div>
			</div>
			<!--健康指数-->

		</div>
		<!--头部-->
		<!--主体内容-->
		<div class="body_content">
			<c:choose>
              <c:when test="${type == 'data'}">  
              <iframe src="${BASE_URL}/webJump/data" width="100%" height="100%" scrolling="no" frameborder="0" seamless
				name="iframe_common"> </iframe>
              </c:when>
              <c:when test="${type == 'device'}">  
              <iframe src="${BASE_URL}/webJump/device" width="100%" height="100%" scrolling="no" frameborder="0" seamless
				name="iframe_common"> </iframe>
              </c:when>
              <c:when test="${type == 'video'}">  
              <iframe src="${BASE_URL}/webJump/video4" width="100%" height="100%" scrolling="no" frameborder="0" seamless
				name="iframe_common"> </iframe>
              </c:when>
              <c:when test="${type == 'ams'}">  
              <iframe src="${BASE_URL}/webJump/ams" width="100%" height="100%" scrolling="no" frameborder="0" seamless
				name="iframe_common"> </iframe>
              </c:when>
              <c:when test="${type == 'system'}">  
              <iframe src="${BASE_URL}/webJump/system" width="100%" height="100%" scrolling="no" frameborder="0" seamless
				name="iframe_common"> </iframe>
              </c:when>
           </c:choose>
		</div>
		<!--主体内容-->
	</div>
</body>
<script type="text/javascript">
$(document).ready(function () {
	var type='${type}';
	if(type=="data"){
		$(".nav ul li:nth-child(2)").addClass("commonclickstyle");
	}else if(type=="device"){
		$(".nav ul li:nth-child(3)").addClass("commonclickstyle");
	}else if(type=="video"){
		$(".nav ul li:nth-child(4)").addClass("commonclickstyle");
	}else if(type=="ams"){
		$(".nav ul li:nth-child(5)").addClass("commonclickstyle");
	}else if(type=="system"){
		$(".nav ul li:nth-child(6)").addClass("commonclickstyle");
	}
});
function change(obj) {
		var arr = $(".nav ul li").removeClass("commonclickstyle");
		$(obj).addClass("commonclickstyle");
	}
</script>
</html>





