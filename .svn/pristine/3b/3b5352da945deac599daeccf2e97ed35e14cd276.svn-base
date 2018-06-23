var starOpenChanal = 4;// 预览窗口数量
var openWinNum = 2;// 几宫格
var vmsList = new Array();
$(document).ready(function() {
	// 视频数据
	$(".real_time_video_btn li:nth-child(2)").addClass("videochosewud");
	clickLogin();
	// 加载最新档案操作数据
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
//视频回放
function clickStartPlaybackindex(szStartTime, szEndTime) {
	g_iWndIndex = 0;// 默认第一个窗口
	changeWndNum(1);// 显示一个窗口
	clickStartPlayback(szStartTime, szEndTime);
}