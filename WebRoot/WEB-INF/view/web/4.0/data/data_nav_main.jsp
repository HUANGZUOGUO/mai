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
				<div class="leftsidebar">
					<ul>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/data/dagl" target="ifream_main">档案管理</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/data/pdgl" target="ifream_main">盘点管理</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/data/hjgl" target="ifream_main">环境监测</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/data/sbjc" target="ifream_main">设备监测</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/data/ycjc" target="ifream_main">异常监测</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/data/znbb" target="ifream_main">智能报表</a></li>
						<li onclick="change(this);"><a href="${BASE_URL}/webJump/data/jlrz" target="ifream_main">记录日志</a></li>
					</ul>
				</div>
				<!--左边导航栏-->
				
				<!--主体内容-->
				<div class="ifream_main">
				<iframe src ="${BASE_URL}/webJump/data/dagl" width="100%" height="100%" scrolling="no" frameborder="0" seamless name="ifream_main"> </iframe>
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

