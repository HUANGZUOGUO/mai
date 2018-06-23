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
			<div class="datatitle device_video_title">
			    <span>实时视频</span>
			</div>
			<!--选择区域-->
			<form>
				<select class="warehouse_select" name="warehouse_select">
					<option value="" selected="selected">选择库房</option>
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
				<select class="camera_select" name="camera_select">
					<option value="" selected="selected">选择探头</option>
					<option value="南一探头">南一探头</option>
					<option value="东一探头">东一探头</option>
					<option value="东二探头">东二探头</option>
					<option value="东三探头">东三探头</option>
					<option  value="东四探头">东四探头</option>
					<option value="东五探头">东五探头</option>
					<option value="东六探头">东六探头</option>
					<option value="东七探头">东七探头</option>
					<option value="南二探头">南二探头</option>
					<option value="南三探头">南三探头</option>
				</select>
			</form>
			<!--选择区域-->
			
			<!--选择摄像头展示区域-->
				<ul class="real_time_video_btn">
				<li value="1" onclick="CHOSEWND(this);">1宫格</li>
				<li value="2" onclick="CHOSEWND(this);">4宫格</li>
				<li value="3" onclick="CHOSEWND(this);">9宫格</li>
				</ul>
				<div class="video_content" id="divPlugin">
				</div>	
			<!--选择摄像头展示区域-->	
			
			<!--视频操作配置-->
				<div class="camera video_control" id="device_camera">
					<div class="datatitle">
						<span>预览配置</span>
					</div>
					<div class="video_control_content  configuration">
						<form>
							<p>
								<span>码流类型</span>
								<select class="code_select" name="code_select">
									<option value="主码流" selected="selected">主码流</option>
									<option value="子码流">子码流</option>
								</select>
							</p>
							<p>
								<span>音量设置</span>
								<select class="code_select" name="code_select">
									<option value="50" selected="selected">50</option>
									<option value="100">100</option>
								</select>
								<span id="text_select">范围（0~100）</span>
							</p>
							<p>
								<span>对讲通道</span>
								<select class="code_select" name="code_select">
									<option value="1" selected="selected">1</option>
									<option value="2">2</option>
								</select>
							</p>
						</form>
						<ul class="video_btn_recording">
							<li>
								<span></span>
								<i>开始录像</i>
							</li>
							<li>
								<span></span>
								<i>停止录像</i>
							</li>
							<li>
								<span></span>
								<i>抓图</i>
							</li>
						</ul>
						<ul class="video_btn_adjust">
							<li>
								<span></span>
								<i>开始预览</i>
							</li>
							<li>
								<span></span>
								<i>停止预览</i>
							</li>
							<li>
								<span></span>
								<i>打开声音</i>
							</li>
							<li>
								<span></span>
								<i>停止对讲</i>
							</li>
							<li>
								<span></span>
								<i>启用电子放大</i>
							</li>
							<li>
								<span></span>
								<i>启用3D放大</i>
							</li>
						</ul>
						<ul class="video_btn_download">
							<li>
								<span></span>
								<i>保存路径</i>
							</li>
						</ul>
					</div>
				</div>
			<!--视频操作配置-->
		</div>
		<!--主体-->
			
		<!--右边云台控制等-->
	    <div class="sideright">
			<div class="datatitle">
			    <span>云台控制</span>
		    </div>
			<div class="console_contro"></div>
			<ul class="console_contro_settingup">
				<li>
					<ul class="console_ratio_btn">
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<p>倍率：<i>1</i>倍</p>
				</li>
				<li>
					<ul class="console_focallength_btn">
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<p>焦距：<i>50</i>mm</p>
				</li>
				<li>
					<ul class="console_aperture_btn">
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<p>光圈：f<i>16</i></p>
				</li>
			</ul>
			<ul class="video_btn_quick_put">
				<li>
					<span></span>
				</li>
				<li>
					<span>2x</span>
				</li>
				<li>
					<span></span>
				</li>
				<p>云台速率：<i>2</i>倍</p>
			</ul>
			<form class="set_dit">
				<p>
					<span>预置点号</span>
					<select class="code_select">	
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</p>
				<input type="button" value="设置" class="timing_btn set">
				<input type="button" value="调用" class="timing_btn call">
			</form>
	    </div>
	    <!--右边云台控制等-->
	</body>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/device/video_control.js"></script>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/4.0/js/video/hkvideo.js"></script>
</html>
