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
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/ams/dasq" target="ifream_main">档案申请</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/ams/rwlb" target="ifream_main">任务列表</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/ams/dapd" target="ifream_main">档案盘点</a></li>
					</ul>
				</div>
				<!--左边导航栏-->
				
				<!--主体内容-->
				<div class="ifream_main">
				<iframe src ="${BASE_URL}/webJump/ams/dasq" width="100%" height="100%" scrolling="no" frameborder="0" seamless name="ifream_main"> </iframe>
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

