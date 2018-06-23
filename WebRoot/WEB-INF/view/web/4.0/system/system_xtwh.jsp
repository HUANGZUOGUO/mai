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
		<div class="main xtwh_main_bg">
			<div class="datatitle">
			    <span>日常维护</span>
			</div>
			<!--内容-->
			<div class="daily">
				<ul class="daily_maintenance">
					<!--维护内容-->
					<li	 class="maintenance">
						<h5>维护内容</h5>
						<ol>
							<li>软件运行状态定期检测</li>
							<li>网络通讯状态定期检测</li>
							<li>密集架定期维护</li>
							<li>灯光设备定期维护</li>
							<li>消防设备定期维护</li>
							<li>门禁设备定期维护</li>
						</ol>
					</li>
					<!--维护内容-->
					
					<!--注意事项-->
					<li class="matters_need">
						<h5>注意事项</h5>
						<ol>
							<li>请每月定期检查灯光设备损耗情况</li>
							<li>请每年定期检查密集架滚轮磨损情况</li>
							<li>请每年定期检查烟雾报警系统灵敏度</li>
						</ol>
					</li>
					<!--注意事项-->
				</ul>	
				<!--维护-->
				<div class="maintenance_img">
						<p class="maintenance_btn">
							<span onclick="updatakey()">维护</span>
						</p>
						<div class="maintenance_cartoon">
							<img src="${STATIC_URL}/images/web/4.0/system/btn_icon_8.png" />
							<img src="${STATIC_URL}/images/web/4.0/system/btn_icon_7.png" />
							<img src="${STATIC_URL}/images/web/4.0/system/xtwh_icon_5_img.png" />
							<img src="${STATIC_URL}/images/web/4.0/system/xtwh_icon_4_img.png" />
							<img src="${STATIC_URL}/images/web/4.0/system/xtwh_icon_3_img.png" />
							<img src="${STATIC_URL}/images/web/4.0/system/xtwh_icon_2_img.png" />
							<img onclick="updatakey()" src="${STATIC_URL}/images/web/4.0/system/xtwh_icon_1_img.png" />
						</div>
				</div>
				<!--维护-->
			</div>	

				<!--维护最新记录-->
				<div class="camera">
					<div class="datatitle">
			    			<span>维护最新记录</span>
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
				<!--维护最新记录-->
			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边维护日历等-->
	    <div class="sideright">
			<div class="datatitle">
			    <span>维护日历</span>
		    </div>
		    <div id="calendar" style="padding-top: 1px;" class="calendar"></div>
		    
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
	    <!--右边维护日历等-->
	</body>
<%-- <script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_dagl.js"></script> --%>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/system/system_xtwh.js"></script>
</html>
