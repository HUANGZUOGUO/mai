var starOpenChanal = 1;// 预览窗口数量
var openWinNum = 1;// 几宫格
var vmsList = new Array();
$(document).ready(function() {
	clickLogin();
});
//通风
function wind(slie){
	$(".step_text").text("正在运行通风模式");
	Ajax.custom({
		url : config.operateDevice,
		data : {
			"userId":1,// 用户id
	        "deviceId":slie,// 设备id
	        "categoryId":5,// 设备类型
	        "actionType":6,// 操作类型
	        "isSelect":0// 全选表示
		},// 传递参数
		type : 'GET'
	}, function(data) {
		
	})
	setTimeout('ss("情景模式动作展示");',5000);
}
function ss(cc){
	alert("执行成功");
	$(".step_text").text(cc);
}
//合拢
function closeshelve1(slie){
	$(".step_text").html("正在运行离开模式");
	Ajax.custom({
		url : config.operateDevice,
		data : {
			"userId":1,// 用户id
	        "deviceId":slie,// 设备id
	        "categoryId":5,// 设备类型
	        "actionType":7,// 操作类型
	        "isSelect":0// 全选表示
		},// 传递参数
		type : 'GET'
	}, function(data) {
	})
	setTimeout('ss("情景模式动作展示");',5000);
}