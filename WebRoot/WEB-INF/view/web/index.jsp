<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 引入资源文件 -->
<%@ include file="/WEB-INF/view/web/common/resource.jsp"%>
<script type="text/javascript"
	src="${STATIC_URL}/plugins/HKWS/webVideoCtrl.js"></script>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/js/common/hkvideo.js"></script>
<title>智慧馆库系统</title>
</head>
<body>
	<!-- 引入头部文件 -->
	<%@ include file="/WEB-INF/view/web/common/header.jsp"%>
	<article> <section class="gcl">
	<h2>
		<a href="javascript:location.href=config.holding"> 馆藏量</a>
	</h2>
	<div class="gclp">
		<div class="gclp_text">
			<p>
				库存档案数量&nbsp;<span id="tatal">0</span>&nbsp;卷件
			</p>
		</div>
		<div id="holding" class="gclp">
			<%-- <img alt="" title="" src="${STATIC_URL}/images/web/i_gcl_bg.png"> --%>
		</div>

	</div>
	</section> <!-------------------------------馆藏量--------------------------------------->
	<section class="kf">
	<h2>
		<a href="javascript:location.href=config.layout"> 库房布局图</a>
	</h2>
	<div class="kfp">
		<img alt="" title="" src="${STATIC_URL}/images/web/222.png">
	</div>
	<p>宁波八益演示库房平面图</p>
	</section> <!-------------------------------库房布局图--------------------------------------->

	<section class="nh">
	<h2>
		<a href="javascript:location.href=config.ecs"> 能耗</a>
	</h2>
	<h4>
		<img alt="" title=""
			src="${STATIC_URL}/images/web/i_kuf_nengh_icon.png" /> 库房能耗情况
	</h4>
	<div class="nhp" id="nhjqChart">
		<%-- <img alt="" title=""  src="<%=path%>/images/i_nh_bg.png"> --%>
	</div>
	<div class="nhjs">
		<!--   <p>已使用能耗：22222<s>KW</s> <span></span></p> 
      <p>总能耗指标：88888<s>KW</s> <span></span></p> -->
	</div>
	</section> <!-------------------------------能耗--------------------------------------->
	<section class="wsda"> <section class="wsd">
	<h2>
		<a href="javascript:location.href=config.humiture"> 温湿度</a>
	</h2>
	<div id="humiture" class="wsdp">
		<%-- <img title="" alt="" src="${STATIC_URL}/images/web/i_wsd_bg.png"> --%>
	</div>
	</section> <!-------------------------------温湿度--------------------------------------->
	<section class="da">
	<h2>
		<a href="javascript:location.href=config.archive"> 档案出入库</a>
	</h2>
	<ul id="archive">
	</ul>
	</section> <!-------------------------------档案出入库--------------------------------------->
	</section> <section class="sp">
	<h2>
		<a href="javascript:location.href=config.video"> 视频</a>
	</h2>
	<div class="back_carm" onclick="clickLoginindex()">
		<img src="${STATIC_URL}/images/web/back_shi.png">返回实时监控
	</div>
	<!-- <div class="back_carmo" onclick="openvideo()">打开视频</div> -->

	<ul class="fp">
		<li onclick="changeWndNum(1);">一</li>
		<li onclick="changeWndNum(2);">四</li>
	</ul>
	<div class="carm" id="divPlugin"></div>
	<table cellpadding="0" cellspacing="3" border="0" style="display: none">
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
	</section> <!-------------------------------视频--------------------------------------->
	<section class="wsda">
	<section class="bj">
	<h2>
		<a href="javascript:location.href=config.alarm"> 报警</a>
	</h2>
	<ul id="alarm">
	</ul>
	</section>
	<section class="rfid">
	<h2>
		<a href="javascript:location.href=config.rfid">RFID盘点</a>
	</h2>
	<ul id="rfidInty">
	</ul>
	</section>  </section> <!-------------------------------报警--------------------------------------->
	</article>
	<!-- 引入尾部文件 -->
	<%@ include file="/WEB-INF/view/web/common/footer.jsp"%>
</body>
</html>
<!-- 最新报警纪录 <div class="cir"></div> -->
<script id="alarm-data-list-tmpl" type="text/html">
		
    <!--[for(i=0;i<2;i++){]-->
      <!--[if(i==0){]-->
		<li class="zc" >
      <!--[}else{]-->
		<li>  
      <!--[}]-->
			<p>
				<!--[=list[i].day]--><br>
				<s><!--[=list[i].dayHms]--></s>
			</p> <span class="jb2"><img title="" alt=""
				src="${STATIC_URL}/images/web/i_bj_new.png" /> <em>R</em></span>
			<p>
				<em><!--[=list[i].remark]--></em><!--[=list[i].deviceName]-->
			</p>
		</li>
    <!--[}]-->
</script>
<!-- 档案操作 -->
<script id="archive-data-list-tmpl" type="text/html">
		<!--[for(i=0;i<3;i++){ ]-->
        <!--[ if(i==0){ ]-->
            <li><span class="cr"><img class="jb2" title="" alt="" src="${STATIC_URL}/images/web/
        <!--[if(AmsActLogList[i].type==4){]-->
            i_danga_go_icon.png
        <!--[ }else{]-->
			i_danga_come_icon.png
        <!--[}]-->
            "></span><p class="jb1">
		<!--[=AmsActLogList[i].day]-->
				<br><em class="jb1">
		<!--[=AmsActLogList[i].archivesName]-->
             </em></p> <a class="jb3" href="#" onclick='clickStartPlaybackindex("a<!--[=i]-->","<!--[=AmsActLogList[i].playStime]-->","<!--[=AmsActLogList[i].playEtime]-->"
            )'><img style="display:none" id="a<!--[=i]-->"/></a> <span class="new"></span></li>
        <!--[}else{]-->
            <li><span class="cr"><img title="" alt="" src="${STATIC_URL}/images/web/
		<!--[if(AmsActLogList[i].type==4){]-->
            i_danga_go_icon.png
        <!--[}else{]-->
			i_danga_come_icon.png
        <!--[}]-->
			"></span><p>
        <!--[=AmsActLogList[i].day]--> 
				<br><em>
	    <!--[=AmsActLogList[i].archivesName]-->
				</em></p> <a href="#" onclick='clickStartPlaybackindex("a<!--[=i]-->","<!--[=AmsActLogList[i].playStime]-->","<!--[=AmsActLogList[i].playEtime]-->"
		)'><img style="display:none" id="a<!--[=i]-->"/></a></li>
        <!--[}]-->
        <!--[}]-->
</script>
<!-- RFID盘点-->
<script id="rfidInty-data-list-tmpl" type="text/html">
		<!--[for(i=0;i<RfidIntyList.length;i++){ ]-->
			<!--[if(i==0){]-->
            <li onclick="webjumpservice(<!--[=i]-->)">
			<span class="cr"><!--[=RfidIntyList[i].storeName]--></span>
			<p class="jb1">
		    <em class="jb1">
		    <!--[=RfidIntyList[i].vartime]-->日盘点记录
             </em></p>
			<a>详情</a>
 			<span class="new">
			</span>
			</li>
        <!--[}else{]-->
			 <li onclick="webjumpservice(<!--[=i]-->)">
			<span class="cr"><!--[=RfidIntyList[i].storeName]--></span>
			<p class="jb1">
		    <em>
		   <!--[=RfidIntyList[i].vartime]-->日盘点记录
             </em></p>
			<a>详情</a>
			</span>
			</li>
        <!--[}]-->
        <!--[}]-->
</script>
<script src="${STATIC_URL}/modules/web/js/index/index.js"
	type="text/javascript"></script>

