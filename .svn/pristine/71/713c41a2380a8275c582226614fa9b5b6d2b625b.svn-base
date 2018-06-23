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
		<div class="datamain xtwh_main_bg">
			<div class="datatitle">
			    <span>检测结果</span>
			</div>
			<!--内容-->
			<div class="daily">
				<ul class="daily_maintenance">
					<!--检测内容-->
					<li	 class="matters_need inspection_list">
						<ol>
							<li>软件运行状态检测<i class="choice"></i></li>
							<li>硬件运行状态检测<i class="choice"></i></li>
							<li>网络通讯状态检测<i class="choice"></i></li>
							<li>档案数据健康状态检测<i class="choice"></i></li>
							<li>盘点数据健康状态检测<i class="abnormal"></i></li>
							<li>环境健康状态检测<i class="choice"></i></li>
						</ol>
						<form>
				      		<input type="button" value="一键修复" class="repair">
				      	</form>	
					</li>
					<!--检测内容-->
				</ul>
				<!--检测异常-->
				<div class="detect_img">
						<p class="detect_btn">
							<span onclick="updatakey()">检测异常</span>
						</p>
						<div class="detect_cartoon">
							<img src="${STATIC_URL}/images/web/4.0/system/ptjc_icon_4_img.png" />
							<img src="${STATIC_URL}/images/web/4.0/system/ptjc_icon_3_img.png" />
							<img src="${STATIC_URL}/images/web/4.0/system/ptjc_icon_2_img.png" />
							<img  onclick="updatakey()" src="${STATIC_URL}/images/web/4.0/system/ptjc_icon_1_img.png" />
						</div>
				</div>
				<!--检测异常-->
			</div>	
				<!--检测列表-->
				<div class="camera">
					<div class="datatitle">
			    			<span>检测列表</span>
					</div>
				  <div class="camera_police">
				  	<div class="camera_police_left ">
				  		<p>检测人员：<i class="ranking">人员A</i></p>
					  	<p>检测时间：<i class="ranking">2017-12-21&nbsp;16:47</i></p>
				  	</div>
				  	<div class="camera_police_right">
				  		<p>检测设备：<i class="ranking">智慧馆库平台</i></p>
					  	<p>备注：<i class="ranking"></i></p>
				  	</div>
				  </div>
				</div>
				<!--检测列表-->
			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边自检日历等-->
	    <div class="sideright">
			<div class="datatitle">
			    <span>自检日历</span>
		    </div>
		    <div id="calendar" class="calendar"></div>
		     <div style="color:#1EC9FC;font-size: 24px;text-align: center;">
		     <p>距下次维护还有<span style="color:#03faff;font-size: 35px;margin: 10px;">2</span>天</p></div>
			<!--历史记录-->
			<div class="camera history">
			    <div class="datatitle">
			      	<span>历史记录</span>
			    </div> 
			    <div class="exception_record">
			    	  <h5>异常记录</h5>
			    	  <ul class="exception">
			    	  	<li>异常时间：2016-8-12<span>原因：通讯异常</span></li>
			    	  	<li>异常时间：2016-8-12<span>原因：通讯异常</span></li>
			    	  	<li>异常时间：2016-8-12<span>原因：通讯异常</span></li>
			    	  	<li>异常时间：2016-8-12<span>原因：通讯异常</span></li>
			    	  </ul>
			    </div>
			    <div class="exception_record">
			    	  <h5>逾期记录</h5>
			    	  <ul class="exception">
			    	  	<li>逾期时间：2016-8-12<span>原因：维护逾期</span></li>
			    	  	<li>逾期时间：2016-8-12<span>原因：维护逾期</span></li>
			    	  	<li>逾期时间：2016-8-12<span>原因：维护逾期</span></li>
			    	  	<li>逾期时间：2016-8-12<span>原因：维护逾期</span></li>
			    	  </ul>
			    </div>
			</div>
			<!--历史记录-->
	    </div>
	    <!--右边自检日历等-->
	</body>
<%-- <script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_dagl.js"></script> --%>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/system/system_ptjc.js"></script>
</html>
