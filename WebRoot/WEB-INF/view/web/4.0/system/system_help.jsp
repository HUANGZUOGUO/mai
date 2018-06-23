<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<%@ include file="/WEB-INF/view/web/4.0/common/resource.jsp"%>
		<title></title>
	</head>
	<body>
		<!--主体-->
		<div class="datamain">
			<div class="datatitle">
			    <span>常见问题</span>
			</div>
			<!--内容-->
			
				<!--问题搜索-->
				<form class="file_query">
					<span>问题搜索</span>
					<input name="" type="text" placeholder="请输入问题" class="input-box" />
   					 <input name="" type="submit" value="" class="button" />
				</form>
				<!--问题搜索-->
				
				<!--常见问题解决方案-->
				<div class="solution">
					<h5>常见问题解决方案</h5>
					<ol>
						<li onclick="divtolg(this);" >无法登陆<p>请确认账户、密码是否错误,网络连接是否异常;</p></li>
						<li onclick="divtolg(this);">忘记密码<p>忘记密码,请联系相应系统管理员,重置密码;</p></li>
						<li onclick="divtolg(this);">自助注册<p>目前系统暂不支持自助注册,申请账号,请联系系统管理员;</p></li>
						<li onclick="divtolg(this);">温湿度数据显示异常<p>请确认网络连接是否异常,网络正常情况下,请查看温湿度服务器是否开启,相应连接端口是否打开;如排除上述问题,数据仍然异常,请联系技术支持.</p></li>
					</ol>
				</div>
				<!--常见问题解决方案-->
				
				<!--关于我们-->
				<div class="camera newly">
					<div class="datatitle">
			    			<span>关于我们</span>
					</div>
				  <div class="camera_police">
				  	<div class="camera_police_left ">
				  		<p> 技术服务邮箱：toki@bayi.cc</p>
					  	<p>技术服务网址：www.bayiproducts.com/cn/service.asp</p 

>
				  	</div>
				  	<div class="camera_police_right">
				  		<p>总线：0574-87906746</p>
					  	<p>技术服务：0574-87564112</p>
				  	</div>
				  </div>
				</div>
				<!--关于我们-->

			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边终端设备等-->
	    <div class="sideright terminal_equipment_bg">
			<div class="datatitle">
			    <span>终端设备</span>
		    </div>
		    <div>
		    	  <ul class="terminal_equipment_show">
		    	  	<li>
		    	  		<img src="${STATIC_URL}/images/web/4.0/system/icon_terrace.png" />
		    	  		<div class="display_status">
		    	  			<p>系统运行状态:<span><i class="green"></i>正常</span></p>
		    	  			<p>系统版本状态:<span><i class="yellow"></i>可升级</span></p>
		    	  		</div>
		    	  	</li>
		    	  	<li></li>
		    	  	<li></li>
		    	  </ul>
		    	  <ul class="terminal_equipment_btn">
		    	  	<li>
		    	  		<span></span>
		    	  		<i>智慧馆库平台</i>
		    	  	</li>
		    	  	<li>
		    	  		<span></span>
		    	  		<i>密集架操作系统</i>
		    	  	</li>
		    	  	<li>
		    	  		<span></span>
		    	  		<i>PDA系统</i>
		    	  	</li>
		    	  </ul>
		    </div>
			<div class="camera website">
			    <div class="datatitle">
			      	<span>官网介绍</span>
			    </div> 
			   <ul class="about_us">
			    	  <li>
			    	  	<img src="${STATIC_URL}/images/web/4.0/system/fwybz_bayi_logo.png">
			    	  	<p>八益集团</p>
			    	  </li>
			    	  <li>
			    	  	<img src="${STATIC_URL}/images/web/4.0/system/fwybz_weecan_logo.png">
			    	  	<p>物佳科技</p>
			    	  </li>
				</ul>   	
			</div>
	    </div>
	    <!--右边终端设备等-->
	</body>
<%-- <script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_dagl.js"></script> --%>
<script type="text/javascript">
$(document).ready(function(){
	$(".solution ol li p").hide();	  	   
});
function divtolg(obj){
	$(".solution ol li p").hide();
	$(obj).children().toggle();
}
</script>
</html>
