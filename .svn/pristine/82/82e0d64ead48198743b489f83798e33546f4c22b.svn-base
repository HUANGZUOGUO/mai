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
		<div class="datamain device_control_bg">
			<div class="datatitle">
			    <span>操控面板</span>
			</div>
			<!--内容-->
			
				<!--库房选择区域-->
				<div class="btn_warehouse">
					<div class="btn_warehouse_left">
						<div class="btn_warehouse_left_circle">
							<img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_1.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_2.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_4.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_5.png">
						</div>
					</div>
					<!--库房下拉框-->
						<select class="btn_warehouse_select" name="btn_warehouse_select">
							<!--<option value="" selected="selected">选择库房</option>-->
							<option value="一库房">一库房</option>
							<option value="二库房">二库房</option>
							<option value="三库房">三库房</option>
							<option value="四库房">四库房</option>
							<option  value="五库房">五库房</option>
							<option value="六库房">六库房</option>
							<option value="七库房">七库房</option>
							<option value="八库房">八库房</option>
							<option value="九库房">九库房</option>
							<option value="十库房">十库房</option>
						</select>
						<select class="btn_reservoir_select" name="btn_reservoir_select">
							<!--<option value="" selected="selected">选择库区</option>-->
							<option value="一库区">一库区</option>
							<option value="二库区">二库区</option>
							<option value="三库区">三库区</option>
							<option value="四库区">四库区</option>
							<option  value="五库区">五库区</option>
							<option value="六库区">六库区</option>
							<option value="七库区">七库区</option>
							<option value="八库区">八库区</option>
							<option value="九库区">九库区</option>
							<option value="十库区">十库区</option>
						</select>
					<!--库房下拉框-->
					<div class="btn_warehouse_right">
						<div class="btn_warehouse_right_circle">
							<img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_1.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_2.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_4.png">
							<img src="${STATIC_URL}/images/web/4.0/data/2/main_right_btn_1.png">
						</div>
					</div>
				</div>
				<!--库房选择区域-->
				
				<!--设备选择-->
				<div class="equipment_selection device">
					<ul class="device_display">
						<li>
							<p></p>
							<span>密集架第1列</span>
						</li>
						<li>
							<p></p>
							<span>密集架第2列</span>
						</li>
						<li>
							<p></p>
							<span>密集架第3列</span>
						</li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<ul class="operate_btn">
						<li onclick="openleft(11,this);">
							<p>
								<span></span>
							</p>
							<div class="operate_btn_click">
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_1.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_2.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_3.png"/>
							</div>
							<i>左开</i>
						</li>
						<li  onclick="openright(11,this);">
							<p>
								<span></span>
							</p>
							<div class="operate_btn_click">
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_1.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_2.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_3.png"/>
							</div>
							<i>右开</i>
						</li>
						<li  onclick="stop(11,this);">
							<p>
								<span></span>
							</p>
							<div class="operate_btn_click">
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_1.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_2.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_3.png"/>
							</div>
							<i>停止</i>
						</li>
						<li  onclick="wind(11,this);">
							<p>
								<span></span>
							</p>
							<div class="operate_btn_click">
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_1.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_2.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_3.png"/>
							</div>
							<i>通风</i>
						</li>
						<li  onclick="closeshelve1(11,this);">
							<p>
								<span></span>
							</p>
							<div class="operate_btn_click">
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_1.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_2.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_3.png"/>
							</div>
							<i>合拢</i>
						</li>
					</ul>
					<ul class="switch_btn">
						<li>
							<p>
								<span></span>
							</p>
							<div class="operate_btn_click">
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_1.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_2.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_3.png"/>
							</div>
							<i>打开</i>
						</li>
						<li>
							<p>
								<span></span>
							</p>
							<div class="operate_btn_click">
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_1.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_2.png"/>
								<img src="${STATIC_URL}/images/web/4.0/device/icon_bg_sel_3.png"/>
							</div>
							<i>关闭</i>
						</li>
					</ul>					
				</div>
				<!--设备选择-->
				
				<!--最新操作记录-->
				<div class="camera device_camera" id="device_camera">
					<div class="datatitle">
			    			<span>操控面板</span>
					</div>
				  <div class="camera_police">
				  	<div class="camera_police_left ">
				  		<p>操作人员：<i class="ranking">人员A</i></p>
					  	<p>操作时间：<i class="ranking">2017-12-21&nbsp;&nbsp;16:47</i></p>
				  	</div>
				  	<div class="camera_police_right">
				  		<p>操作内容：<i class="ranking">密集架设备控制</i></p>
					  	<p>异常记录：本月共计异常<i class="ranking">4</i>次</p>
				  	</div>
				  </div>
				</div>
				<!--最新操作记录-->
			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边日历等-->
	    <div class="sideright">
			<div class="datatitle">
			    <span>设备信息</span>
		    </div>
		    <ul class="facility_message">
		    	  <li>
		    	  	   <span>设备名称</span><i>密集架设备</i>
		    	  </li>
		    	  <li>
		    	  		<span>设备位置</span><i>一库房二库区</i>
		    	  </li>
		    	  <li>
		    	  		<span>设备状态</span><i>运行正常</i>
		    	  </li>
		    	  <li>
		    	  		<span>设备操作</span><i>可以操作</i>
		    	  </li>
		    </ul>
			<div class="camera video_linkage">
		    	    <div class="datatitle">
			    		<span>视频联动</span>
		    		</div>
		    		<div class="video_player" id="divPlugin"></div>
		    </div>
	    </div>
	    <!--右边日历等-->
	</body>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/device/device_control.js"></script>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/video/hkvideo.js"></script>
</html>
