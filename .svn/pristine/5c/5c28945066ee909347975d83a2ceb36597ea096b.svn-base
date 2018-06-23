<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- 引入css -->
<!-- 公共样式，清除默认样式  固定尺寸导航栏样式 -->
<link rel="stylesheet" href="${STATIC_URL}/modules/web/4.0/css/common/common.css" type="text/css"/>
<!-- 适配页面导航栏样式 -->
<link rel="stylesheet" href="${STATIC_URL}/modules/web/4.0/css/common/nav_sp.css" type="text/css"/>
<!-- 自定义公共日历样式 -->
<link rel="stylesheet" href="${STATIC_URL}/modules/web/4.0/js/common/calendar/css/calendar.css">
<!-- 首页样式 -->
<link rel="stylesheet" href="${STATIC_URL}/modules/web/4.0/css/index.css">
<!-- 数据管理中心页样式 -->
<link rel="stylesheet" href="${STATIC_URL}/modules/web/4.0/css/data.css">
<!-- 插件 -->
<link rel="stylesheet" href="${STATIC_URL}/modules/web/4.0/js/common/animation/donut.css">
<!-- 插件 -->
<link rel="stylesheet" href="${STATIC_URL}/modules/web/4.0/js/common/animation/theme.css">

<!-- 引入js -->
<script type="text/javascript">
	// 动态获得地址配置
	var BASE_URL = '${BASE_URL}';
	var STATIC_URL = '${STATIC_URL}';
	var IMG_URL = '${IMG_URL}';
	var TEMP_IMG_URL = '${TEMP_IMG_URL}';
	var USER_TYPE = '${loggedInUser.userType}';
</script>
<!-- 插件 -->
<script type="text/javascript" src="${STATIC_URL}/plugins/jquery/1.11.2/jquery-1.11.2.min.js"></script>
<script type="text/javascript" src="${STATIC_URL}/plugins/echarts/echarts.min.js"></script>
<script type="text/javascript" src="${STATIC_URL}/plugins/My97DatePicker/WdatePicker.js"></script>
<!-- 公共配置文件 -->
<script type="text/javascript" src="${STATIC_URL}/plugins/template/template.js"></script>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/common/global.js"></script>
<script type="text/javascript" src="${STATIC_URL}/plugins/HKWS/webVideoCtrl.js"></script>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/common/config.js"></script>
<!-- 适配页面导航栏js -->
<%-- <script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/common/nav_sp.js"></script> --%>
<!-- 自定义公共日历js -->
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/common/calendar/js/calendar.js"></script>
<!-- 视频初始化用 -->
<table cellpadding="0" cellspacing="3" border="0"
				style="display: none">
				<tr>
					<td class="tt">IP地址</td>
					<td><input id="loginip" type="text" class="txt"
						value="192.168.1.210" /></td>
					<td class="tt">端口号</td>
					<td><input id="port" type="text" class="txt" value="80" /></td>
				</tr>
				<tr>
					<td class="tt">用户名</td>
					<td><input id="username" type="text" class="txt" value="admin" /></td>
					<td class="tt">密码</td>
					<td><input id="password" type="password" class="txt"
						value="fxs12345" /></td>
				</tr>
				<tr>
					<td class="tt">设备端口</td>
					<td colspan="2"><input id="deviceport" type="text" class="txt"
						value="8000" />（可选参数）</td>
					<td>窗口分割数&nbsp; <select class="sel2"
						onchange="changeWndNum(this.value);">
							<option value="1">1x1</option>
							<option value="2" selected>2x2</option>
							<option value="3">3x3</option>
							<option value="4">4x4</option>
					</select>
					</td>
				</tr>
				<tr>
					<td class="tt">已登录设备</td>
					<td><select id="ip" class="sel" onchange="getChannelInfo();"></select>
					</td>
					<td class="tt">通道列表</td>
					<td><select id="channels" class="sel"></select></td>
					<input id="transstream" style="display: none" type="checkbox"
						class="vtop" type="hidden" />
				</tr>
				<select style="display: none" id="streamtype" class="sel">
					<option value="1">主码流</option>
					<option value="2">子码流</option>
					<option value="3">第三码流</option>
					<option value="4">转码码流</option>
				</select>
			</table>
