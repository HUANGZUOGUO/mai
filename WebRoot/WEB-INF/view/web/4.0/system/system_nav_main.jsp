<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<%@ include file="/WEB-INF/view/web/4.0/common/resource.jsp"%>
		<title></title>
    </head>
	<body>
				<!--左边导航栏-->
				<div class="leftsidebar device_leftsidebar">
					<ul>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/system/xtxx" target="ifream_main">系统信息</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/system/xtwh" target="ifream_main">系统维护</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/system/ptjc" target="ifream_main">平台监测</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/system/help" target="ifream_main">服务与帮助</a></li>
					</ul>
				</div>
				<!--左边导航栏-->
				
				<!--主体内容-->
				<div class="ifream_main">
				<iframe src ="${BASE_URL}/webJump/system/xtxx" width="100%" height="100%" scrolling="no" frameborder="0" seamless name="ifream_main"> </iframe>
				 </div>
		        <!--主体内容-->
	</body>
</html>
<script type="text/javascript">
$(document).ready(function () {
		$(".leftsidebar ul li:nth-child(1)").addClass("datanavclickstyle");
});
function change(obj) {
		var arr = $(".leftsidebar ul li").removeClass("datanavclickstyle");
		$(obj).addClass("datanavclickstyle");
	}
</script>

