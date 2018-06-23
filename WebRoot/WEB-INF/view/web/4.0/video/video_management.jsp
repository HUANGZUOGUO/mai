<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<!-- 引入资源文件 -->
<%@ include file="/WEB-INF/view/web/4.0/common/resource.jsp"%>
<title>智慧管库系统4.0</title>
</head>
<body>
	<div class="video_bg">
		<!--主体-->
		<div class="video_main">
			<div class="datatitle">
				<span>实时视频</span>
			</div>
			<!--内容-->
			<ul class="real_time_video_btn">
				<li value="1" onclick="CHOSEWND(this);">1宫格</li>
				<li value="2" onclick="CHOSEWND(this);">4宫格</li>
				<li value="3" onclick="CHOSEWND(this);">9宫格</li>
			</ul>
			<div class="video_content" id="divPlugin">
				<!-- 视屏播放窗口 -->
			</div>
			<div class="camera video_control">
				<div class="datatitle">
					<span>实时视频</span>
				</div>
				<div class="video_control_content">
					<ul class="video_btn_recording">
						<li><span></span> <i>开始录像</i></li>
						<li><span></span> <i>停止录像</i></li>
						<li><span></span> <i>抓图</i></li>
					</ul>
					<ul class="video_btn_play">
						<li><span></span> <i>开始回放</i></li>
						<li><span></span> <i>停止回放</i></li>
						<li><span></span> <i>暂停回放</i></li>
						<li><span></span> <i>倒放</i></li>
						<li><span></span> <i>单帧播放</i></li>
					</ul>
					<ul class="video_btn_quick_put">
						<li><span></span></li>
						<li><span>2x</span> <i>播放速率</i></li>
						<li><span></span></li>
					</ul>
					<!-- <form class="transcoding_stream">
							<label><input type="checkbox" name="transcoding" value="" />启用转码码流</label>
						</form> -->
				</div>
			</div>
		</div>
		<!--主体-->

		<!--右边框内容-->
		<div class="sideright video_right_bg">
			<div class="datatitle">
				<span>事件回溯</span>
			</div>
			<ul class="event_back">
				<li><span></span> <i>出入门禁</i></li>
				<li><span></span> <i>档案存取</i></li>
				<li><span></span> <i>设备操作</i></li>
				<li><span></span> <i>RFID盘点</i></li>
			</ul>
			<!--表格-->
			<table class="police_list event_back_list">
				<thead>
					<tr>
						<th>操作人员<i class="decline"></i></th>
						<th>操作时间<i class="decline"></i></th>
						<th>档案名称<i class="decline"></i></th>
						<th>类型<i class="decline"></i></th>
						<th style="width:12.5%">视频<i class="decline"></i></th>
					</tr>
				</thead>
				<tbody id="amsactlog">
				</tbody>
				<tfoot>
					<tr>
						<td>
							<form class="page_btn  police_page_btn">
								<a href="#">首页</a>
								<button type="button" class="left_btn"></button>
								&nbsp; <input type="text" name="text" value="1" class="figure">&nbsp;
								<button type="button" class="right_btn"></button>
								<a href="#">尾页</a> <span>共计&nbsp;<i>40</i>&nbsp;页
								</span> <span>&nbsp;<i>30</i>&nbsp;条数据
								</span>
							</form>
						</td>
					</tr>
				</tfoot>
			</table>
			<!--表格-->
			<div class="camera video_back">
				<div class="datatitle">
					<span>视频回溯</span>
				</div>
				<form class="timing">
					<p>2017年11月11日14：00 星期五</p>
					<div class="time_selection">
						<p>
							开始时间 <select>
								<option value="">2017年11月11日14：00</option>
								<option value="">2017年11月11日14：00</option>
								<option value="">2017年11月11日14：00</option>
								<option value="">2017年11月11日14：00</option>
							</select>
						</p>
						<p>
							结束时间 <select>
								<option value="">2017年11月11日14：00</option>
								<option value="">2017年11月11日14：00</option>
								<option value="">2017年11月11日14：00</option>
								<option value="">2017年11月11日14：00</option>
							</select>
						</p>
					</div>
					<div class="choose_warehouse">
						<p>
							选择库房 <select>
								<option value="">一库房</option>
								<option value="">二库房</option>
								<option value="">三库房</option>
								<option value="">四库房</option>
							</select>
						</p>
						<p>
							选择摄像头 <select>
								<option value="">第三摄像头</option>
								<option value="">第四摄像头</option>
								<option value="">第五摄像头</option>
								<option value="">第六摄像头</option>
							</select>
						</p>
					</div>
					<input type="button" value="" class="timing_btn">
					<button type="button" value="" class="real_time_video">实时视频</button>
				</form>
			</div>
		</div>
		<!--右边框内容-->
	</div>
</body>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/4.0/js/video/video_management.js"></script>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/4.0/js/video/hkvideo.js"></script>
</html>
<!-- 档案操作DOM渲染 -->
<script id="archive-data-list-tmpl" type="text/html">
<!--[for(i=0;i<AmsActLogList.length;i++){ ]-->
<tr><td>
<!--[=AmsActLogList[i].userName]-->
</td>
<td>
<!--[=AmsActLogList[i].day]-->
</td>
<td>
<!--[=AmsActLogList[i].archivesName]-->
</td>
<td>
<!--[if(AmsActLogList[i].type==4){]-->
出库
<!--[ }else{]-->
入库
<!--[}]-->
</td>
<td><i onclick='clickStartPlaybackindex("<!--[=AmsActLogList[i].playStime]-->","<!--[=AmsActLogList[i].playEtime]-->")'></i></td>
</tr>
<!--[}]-->
</script>