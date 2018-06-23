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
<body class="htms">
	<div class="body">
		<div class="header">
			<div class="header_logo"><a href="javascript:location.href=config.service">
				<img class="header_logo_bayi"
					src="${STATIC_URL}/images/web/4.0/common/header_logo_bayi.png"
					height="54" width="147" /> <img class="header_logo_gk"
					src="${STATIC_URL}/images/web/4.0/common/header_logo_gk.png"
					height="58" width="178" /></a>
			</div>
			<div class="header_nav">
				<ul>
					<li><a href="javascript:location.href=config.index">首页</a></li>
					<li><a href="${BASE_URL}/webJump/common?type=data">数据分析中心</a></li>
					<li><a href="${BASE_URL}/webJump/common?type=device">设备控制中心</a></li>
					<li><a href="${BASE_URL}/webJump/common?type=video">视频管理中心</a></li>
					<li><a href="${BASE_URL}/webJump/common?type=ams">档案操作中心</a></li>
					<li><a href="${BASE_URL}/webJump/common?type=system">系统管理中心</a></li>
				</ul>
				<!--<img class="header_nav_bottom" src="${STATIC_URL}/images/web/4.0/index/header_top_nav_buttom.png" height="6" width="1000"/>-->
			</div>
			<div class="header_nav_right">
				<div class="header_nav_right_content">
					<!--<img src="${STATIC_URL}/images/web/4.0/index/header_top_nav_right_bg.png" height="45" width="405"/>-->
					<!-- <a>档案馆健康指数<span>&nbsp;98&nbsp;</span><em>非常健康</em></a> -->
					<span>档案馆健康指数</span> <span>96%</span> <span>非常健康</span>
				</div>
			</div>
		</div>
		<div class="main">
			<div class="main_left">
				<div class="main_left_devstu">
					<div class="function_tittle">
						<span>设备运行状态</span></span>
					</div>
					<div class="main_left_devstu_img">
						<div class="main_left_devstu_img_img">
							<img
								src="${STATIC_URL}/images/web/4.0/index/body_devstu_video_open.png" />
						</div>
						<div class="main_left_devstu_img_stu">
							<!-- <div> -->
								<a>状态：</a><span><img
									src="${STATIC_URL}/images/web/4.0/index/body_devstu_normal.png" /></span>&nbsp;<a
									class="main_left_devstu_img_stu_text">正常</a>
							<!-- </div> -->
						</div>
					</div>
					<div class="main_left_devstu_icon">
						<ul>
							<li><img title="1" onclick="change(this);"
								src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_hj.png"
								height="62" width="73" /><a>温湿度设备</a></li>
							<li><img title="2" onclick="change(this);"
								src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_ims.png"
								height="65" width="66" /><a>密集架设备</a></li>
							<li><img title="3" onclick="change(this);"
								src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_light.png"
								height="62" width="47" /><a>灯光设备</a></li>
							<li><img title="4" onclick="change(this);"
								src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_video.png"
								height="57" width="62" /><a>视频设备</a></li>
							<li><img title="5" onclick="change(this);"
								src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_mj.png"
								height="59" width="60" /><a>门禁设备</a></li>
							<li><img title="6" onclick="change(this);"
								src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_rfid.png"
								height="45" width="47" /><a>RFID设备</a></li>
						</ul>
					</div>
				</div>
				<div class="main_left_devsh">
					<div class="function_tittle">
						<span>设备损耗率</span></span>
					</div>
					<div class="main_left_devsh_chart">
					<div id="devsh_chart" class="main_left_devsh_chart_size"></div>
					</div>
				</div>
				<div class="main_left_wifi">
					<div class="function_tittle">
						<span>网络运行状态</span></span>
					</div>

					<div id="wifi_chart" class="main_left_wifi_chart"></div>
				</div>
			</div>
			<div class="main_main">
				<div class="main_main_lb">
					<div class="function_tittle">
						<span>智能报表</span></span>
					</div>
					<div class="main_main_lb1">
						<div class="main_main_lb1_left">
							<ol class="main_main_lb1_left_ams">
								<p>
									<img src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_circle_headline.png" />
									<span>2017年，</span>共进行了
								</p>
								<li>
									借档<em> 6666 </em>次
								</li>
								<li>
									还档<em> 8888 </em>次
								</li> 
								<li>
									盘点<em> 126 </em>次
								</li>
								<li>
									平台处理异常情况<em> 999 </em>次
								</li>
							</ol>
							<ol class="main_main_lb1_left_yuce main_main_lb1_left_ams">
								<p>
									<img src="${STATIC_URL}/images/web/4.0/index/body_devstu_icon_circle_headline.png" />
									<span>未来预测</span>
								</p>
								<li>预计<span>2018年度</span></li>
								<li>3月份为借还档案<em>业务高峰期，</em>请提前做好档案整理工作</li>
								<li>8月1日至20日为<em>高温阶段，</em>请做好密集架通风工作</li>
								<li>二库房一库区灯光设备<em>报警次数过高，</em>请定期进行维护</li>
							</ol>
						</div>
						<div class="main_main_lb1_right">
							<div id="lb1_chart" class="main_main_lb1_right_chart"></div>
						</div>
					</div>
					<div class="main_main_lb2"></div>
					<div class="main_main_lb3"></div>
					<div class="main_main_lb4"></div>
					<ul>
						<li><img
							src="${STATIC_URL}/images/web/4.0/index/body_devstu_slideshow_icon_roundness_show.png"
							height="20" width="20" /></li>
						<li><img
							src="${STATIC_URL}/images/web/4.0/index/body_devstu_slideshow_icon_roundness_normal.png"
							height="20" width="20" /></li>
						<li><img
							src="${STATIC_URL}/images/web/4.0/index/body_devstu_slideshow_icon_roundness_normal.png"
							height="20" width="20" /></li>
						<li><img
							src="${STATIC_URL}/images/web/4.0/index/body_devstu_slideshow_icon_roundness_normal.png"
							height="20" width="20" /></li>
					</ul>
				</div>
				<div class="main_main_hj">
					<div class="function_tittle">
						<span>环境数据</span></span>
					</div>
					<div class="main_main_hj_left">
						<ul>
							<li id="test02"><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_temperature.png"
								height="54" width="54" /><span id="test01">26℃</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_protection.png"
								height="29" width="24" /></li>
							<li><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_humidity.png"
								height="54" width="54" /><span>69%RH</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_risk.png"
								height="34" width="34" /></li>
							<li><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_tvoc.png"
								height="54" width="54" /><span>1.4mg/m3</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_protection.png"
								height="29" width="24" /></li>
							<li><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_bacteria.png"
								height="54" width="54" /><span>1.4mg/m3</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_protection.png"
								height="29" width="24" /></li>
						</ul>
					</div>
					<div class="main_main_hj_chart">
						<div id="hj_chart" class="main_main_hj_chart_chart"></div>
					</div>
					<div class="main_main_hj_right">
						<ul>
							<li><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_protection.png"
								height="29" width="24" /><span>1.4mg/m3</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_formaldehyde.png"
								height="54" width="54" /></li>
							<li><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_protection.png"
								height="29" width="24" /><span>1.4mg/m3</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_pm.png"
								height="54" width="54" /></li>
							<li><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_protection.png"
								height="29" width="24" /><span>1.4mg/m3</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_eco.png"
								height="54" width="54" /></li>
							<li><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_protection.png"
								height="29" width="24" /><span>1.4mg/m3</span><img
								src="${STATIC_URL}/images/web/4.0/index/bottom_icon_noxious.png"
								height="54" width="54" /></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="main_right">
				<div class="main_right_rl">
					<div class="function_tittle">
						<span>智能日历</span></span>
					</div>
					<div id="calendar" class="calendar"></div>
					<div class="main_right_rl_dealAlm">
						<a>系统已自动为您处理 <span>6666</span> 次异常
						</a>
					</div>
				</div>
				<div class="main_right_rz">
					<!--<div class="function_tittle_rz"><span>实时记录</span></span></div>-->
					<div class="main_right_rz_time">
						<input id="" type="text" onClick="WdatePicker()"
							value="2018-01-01" /><span>日记录</span>
					</div>
					<ul class="main_right_rz_data">
						<li><div>
								<img
									src="${STATIC_URL}/images/web/4.0/index/bottom_right_iocn_check.png"
									height="60" width="55" /><span>RFID盘点</span>
							</div>
							<div>
								<a>人员：A</a><br>
								<a>错架：32卷</a>
							</div></li>
						<li><div>
								<img
									src="${STATIC_URL}/images/web/4.0/index/bottom_right_iocn_door.png"
									height="48" width="42" /><span>门 禁</span>
							</div>
							<div>
								<a>人员：A</a>
							</div></li>
						<li><div>
								<img
									src="${STATIC_URL}/images/web/4.0/index/bottom_right_iocn_come.png"
									height="48" width="47" /><span>档案出入</span>
							</div>
							<div>
								<a>人员：A</a><br>
								<a>错架：32卷</a>
							</div></li>
						<li><div>
								<img
									src="${STATIC_URL}/images/web/4.0/index/bottom_right_iocn_borrowing.png"
									height="48" width="48" /><span>档案借还</span>
							</div>
							<div>
								<a>人员：A</a><br>
								<a>错架：32卷</a>
							</div></li>
						<li><div>
								<img
									src="${STATIC_URL}/images/web/4.0/index/bottom_right_iocn_operation.png"
									height="48" width="48" /><span>设备操作</span>
							</div>
							<div>
								<a>人员：A</a>
							</div></li>
						<li><div>
								<img
									src="${STATIC_URL}/images/web/4.0/index/bottom_right_iocn_tocsin.png"
									height="45" width="48" /><span>报 警</span>
							</div>
							<div>
								<a>人员：A</a>
							</div></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/4.0/js/common/nav_sp.js"></script>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/4.0/js/index/index.js"></script>
<script type="text/javascript"
	src="${STATIC_URL}/modules/web/4.0/js/index/alarmDealDemo.js"></script>	
</html>