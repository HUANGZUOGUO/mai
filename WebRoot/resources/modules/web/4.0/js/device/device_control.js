var starOpenChanal = 1;// 预览窗口数量
var openWinNum = 1;// 几宫格
var vmsList = new Array();
$(document).ready(function() {
	clickLogin();
});
//左开
function openleft(slie,obj){
	$(".operate_btn_click").removeClass("deviceconstatus");
	$(obj.children[1]).addClass("deviceconstatus");
	Ajax.custom({
		url : config.operateDevice, 
		data : {
			"userId":1,// 用户id
	        "deviceId":slie,// 设备id
	        "categoryId":5,// 设备类型
	        "actionType":4,// 操作类型
	        "isSelect":0// 全选表示
		},// 传递参数
		type : 'GET'
	}, function(data) {
		
	})
}
//又开
function openright(slie,obj){
	var arr = $(".operate_btn_click").removeClass("deviceconstatus");
	$(obj.children[1]).addClass("deviceconstatus");
	Ajax.custom({
		url : config.operateDevice,
		data : {
			"userId":1,// 用户id
	        "deviceId":slie,// 设备id
	        "categoryId":5,// 设备类型
	        "actionType":5,// 操作类型
	        "isSelect":0// 全选表示
		},// 传递参数
		type : 'GET'
	}, function(data) {
		
	})
}
//停止
function stop(slie,obj){
	var arr = $(".operate_btn_click").removeClass("deviceconstatus");
	$(obj.children[1]).addClass("deviceconstatus");
	Ajax.custom({
		url : config.operateDevice,
		data : {
			"userId":1,// 用户id
	        "deviceId":slie,// 设备id
	        "categoryId":5,// 设备类型
	        "actionType":3,// 操作类型
	        "isSelect":0// 全选表示
		},// 传递参数
		type : 'GET'
	}, function(data) {
		
	})
}
//通风
function wind(slie,obj){
	var arr = $(".operate_btn_click").removeClass("deviceconstatus");
	$(obj.children[1]).addClass("deviceconstatus");
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
}
//合拢
function closeshelve1(slie,obj){
	var arr = $(".operate_btn_click").removeClass("deviceconstatus");
	$(obj.children[1]).addClass("deviceconstatus");
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
}