var starOpenChanal = 4;// 预览窗口数量
var openWinNum = 2;// 几宫格
var vmsList = new Array();
$(document).ready(function() {
	// 视频数据
	$(".real_time_video_btn li:nth-child(2)").addClass("videochosewud");
	clickLogin();
	// 加载最新档案操作数据
	getamsact();
	//setInterval('getamsact()', 10000);
});
// 打开窗口选中事件
function CHOSEWND(obj) {
	var arr = $(".real_time_video_btn li").removeClass("videochosewud");
	$(obj).addClass("videochosewud");
	// 批量预览
	if (obj.value == "1") {
		starOpenChanal = 1;
		openWinNum = 1;
	} else if (obj.value == "2") {
		starOpenChanal = 4;
		openWinNum = 2;
	} else if (obj.value == "3") {
		starOpenChanal = 9;
		openWinNum = 3;
	}
	changeWndNum(openWinNum);
	plStartRealPlay(starOpenChanal);
}
//加载最新档案操作数据
function getamsact() {
	// 加载最新档案操作数据
	Ajax.custom({
				url : config.getNewAmsActLogList,
				data : {

				},// 传递参数
				type : 'GET'
			},
					function(data) {
						for (var i = 0; i < data.data.data.length; i++) {
							/** 格式化时间 day：年月日 dayHms：时分秒* */
							// 判断当前报警是否是当天
//							if (new Date(data.data.data[i].ctime)
//									.format("yyyy-MM-dd") == new Date()
//									.format("yyyy-MM-dd")) {
//								data.data.data[i].day = "今天";
//							} else {
								data.data.data[i].day = new Date(
										data.data.data[i].ctime)
										.format("yyyy-MM-dd hh:mm:ss");
//							}
							data.data.data[i].playStime = new Date(
									data.data.data[i].ctime - 30000)
									.format("yyyy-MM-dd hh:mm:ss");
							data.data.data[i].playEtime = new Date(
									data.data.data[i].ctime + 60000)
									.format("yyyy-MM-dd hh:mm:ss");
						}
						$("#amsactlog").html(
								template.render("archive-data-list-tmpl", {
									AmsActLogList : data.data.data
								}));
					});
}
//视频回放
function clickStartPlaybackindex(szStartTime, szEndTime) {
	g_iWndIndex = 0;// 默认第一个窗口
	changeWndNum(1);// 显示一个窗口
	clickStartPlayback(szStartTime, szEndTime);
}