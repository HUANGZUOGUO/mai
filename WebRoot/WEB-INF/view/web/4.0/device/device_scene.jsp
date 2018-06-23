<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
			<span>操控步骤</span>
		</div>
		<!--内容-->
		<div class="operating">
			<ul class="operating_steps">
				<li>
					<p>STEP&nbsp;1</p>
					<div class="operating_click">
						<img src="${STATIC_URL}/images/web/4.0/device/icon_mode_2_sel.png" />
						<div class="contain">
							<img class="donut donut-front" src="${STATIC_URL}/images/web/4.0/device/icon_mode_1_sel.png" /> 
							<img class="donut donut-back" src="${STATIC_URL}/images/web/4.0/device/icon_mode_1_sel.png" />
						</div>
						<img src="${STATIC_URL}/images/web/4.0/device/icon_mode_3_sel.png" />
						<p>STEP&nbsp;1</p>
					</div>
				</li>
				<li></li>
				<li>
					<p>STEP&nbsp;2</p>
					<div class="operating_click">
						<img src="${STATIC_URL}/images/web/4.0/device/icon_mode_2_sel.png" />
						<div class="contain">
							<img class="donut donut-front"
								src="${STATIC_URL}/images/web/4.0/device/icon_mode_1_sel.png" /> <img
								class="donut donut-back"
								src="${STATIC_URL}/images/web/4.0/device/icon_mode_1_sel.png" />
						</div>
						<img src="${STATIC_URL}/images/web/4.0/device/icon_mode_3_sel.png" />
						<p>STEP&nbsp;2</p>
					</div>
				</li>
				<li></li>
				<li>
					<p>STEP&nbsp;3</p>
					<div class="operating_click">
						<img src="${STATIC_URL}/images/web/4.0/device/icon_mode_2_sel.png" />
						<div class="contain">
							<img class="donut donut-front"
								src="${STATIC_URL}/images/web/4.0/device/icon_mode_1_sel.png" /> <img
								class="donut donut-back"
								src="${STATIC_URL}/images/web/4.0/device/icon_mode_1_sel.png" />
						</div>
						<img src="${STATIC_URL}/images/web/4.0/device/icon_mode_3_sel.png" />
						<p>STEP&nbsp;3</p>
					</div>
				</li>
			</ul>
			<p class="step_text">情景模式动作展示</p>
		</div>
		<!--设备选择-->
		<div class="equipment_selection"></div>
		<!--设备选择-->

		<!--最新操作记录-->
		<div class="camera device_camera" id="device_camera">
			<div class="datatitle">
				<span>最新操作记录</span>
			</div>
			<div class="camera_police">
				<div class="camera_police_left ">
					<p>
						操作人员：<i class="ranking">人员A</i>
					</p>
					<p>
						操作时间：<i class="ranking">2017-12-21&nbsp;&nbsp;16:47</i>
					</p>
				</div>
				<div class="camera_police_right">
					<p>
						操作内容：<i class="ranking">密集架设备控制</i>
					</p>
					<p>
						异常记录：本月共计异常<i class="ranking">4</i>次
					</p>
				</div>
			</div>
		</div>
		<!--最新操作记录-->
		<!--内容-->
	</div>
	<!--主体-->

	<!--右边情景模式等-->
	<div class="sideright model_left_bg">
		<div class="datatitle">
			<span>情景模式</span>
		</div>
		<div class="contextual_model">
			<p>调档模式</p>
			<ul class="contextual_model_btn">
				<li></li>
				<li onclick="closeshelve1(11);"></li>
				<li onclick="wind(11);"></li>
			</ul>
			<div class="sea">
				<div class="bubble bubble1"></div>
				<div class="bubble bubble2"></div>
				<div class="bubble bubble3"></div>
				<div class="bubble bubble4"></div>
				<div class="bubble bubble5"></div>
				<div class="bubble bubble6"></div>
				<div class="bubble bubble7"></div>
				<div class="jellyfish jellyfish1">
					<div class="jellyfish_head"></div>
					<div class="jellyfish_tail">
						<div class="jellyfish_tail_in"></div>
					</div>
				</div>
				<div class="jellyfish jellyfish2">
					<div class="jellyfish_head"></div>
					<div class="jellyfish_tail">
						<div class="jellyfish_tail_in"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="camera video_linkage">
			<div class="datatitle">
				<span>视频联动</span>
			</div>
			<div class="video_player" id="divPlugin"></div>
		</div>
	</div>
	<!--右边情景模式等-->
</body>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/device/device_scene.js"></script>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/4.0/js/video/hkvideo.js"></script>
</html>
