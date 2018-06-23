var num = 0;
var change = false;
$(document).ready(function() {
	
	//setInterval(getAlarmMsg,2000);
	
	setInterval(getHumData,1000);
	//setTimeout(trTestChange(),5000);
	
});
function trTestChange(){
	if(num == 1){
		
		var  everow = "<span>温度超标,正在为您处理...</span>";
		$(".header_nav_right_content").empty();
		$(".header_nav_right_content").append(everow);
		$(".header_nav_right_content").css({
    		"margin-top":$(".body").width() / (110),
    });
		
		$(".header_nav_right span:nth-child(1)").css({
			"font-size": $(".body").width() / (65),
            "vertical-align": $(".body").width() / (162),
            "color":"#FAF560"
        });
		$(".header_nav_right span:nth-child(1)").addClass("flash");
		
	}else{
		var  everow = "<span>档案馆健康指数</span> <span>96%</span><span>非常健康</span>";
		$(".header_nav_right_content").empty();
		$(".header_nav_right_content").append(everow);
		$(".header_nav_right_content").css({
    		"margin-top":$(".body").width() / (121.38),
    });
    $(".header_nav_right span:nth-child(1),.header_nav_right span:nth-child(2),.header_nav_right span:nth-child(3)").css({
        "font-size": $(".header_nav_right").height() / (5.55555555556),
        "vertical-align": $(".body").width() / (162),
    });
    $(".header_nav_right span:nth-child(2)").css({
        "font-size": $(".body").width() / (52.86),
        "margin-left":$(".body").width() / (137.14),
        "margin-right":$(".body").width() / (96),
    });
    $(".header_nav_right span:nth-child(3)").css({
        "font-size": $(".body").width() / (80),
        "vertical-align": $(".body").width() / (164),
    });
    $(".header_nav_right span:nth-child(1)").removeClass("flash");
		if (change) {
			setTimeout("trTestChange2()",1000);
			change = false;
		}
	}
	
	
}
function trTestChange2(){
	
	var  everow2 = "<a>系统已自动为您处理 <span>6667</span>次异常</a>";
	$(".main_right_rl_dealAlm").empty();
	$(".main_right_rl_dealAlm").append(everow2);
	$(".main_right_rl_dealAlm").css({
        "height": $(".main_right_rl").height() / 6.3685,
    });
    $(".main_right_rl_dealAlm a").css({
        "font-size": $(".body").width() / 120,
    });
    $(".main_right_rl_dealAlm a span").css({
        "font-size": $(".body").width() / 68.5714,
        // "margin-top": $(".body").width() / 384+"px",
    });
}
/*function getAlarmMsg(){
	Ajax.custom({
		url : config.searchList,
		data : {
			"status":0,
			"pageIndex":1,
			"pageSize":30
		},// 传递参数
		type : 'GET'
	}, function(data) {
		var boolean = false;
		for(var i=0;i<data.data.data.length;i++){
			if(data.data.data[i].alarmType == 2){
				boolean = true;
				num=1;
				break;
			}
		}
		if(boolean == true){
			change = true;
			$("#test01").text("50℃");
			$("#test01").css({"color":"black"});
			$("#test02").css({"background":"red"});
			setTimeout("trTestChange()",1000);
		}else{
			$("#test01").text("26℃");
			$("#test01").css({"color":"#01c2fc"});
			$("#test02").css({"background":""});
			num=0;
			setTimeout("trTestChange()",1000);
			
		}
		
		
		//setTimeout(trTestChange(),5000);
		
	});
	
}*/
function getHumData(){
	Ajax.custom({
		url : config.getHumForAlarm,
		data : {
			
		},
		type : 'GET'
	}, function(data) {
		
		if(data.data>28){
			change = true;
			$("#test01").css({"color":"#f00"});
			$("#test01").css({"text-shadow":"0px -2px 10px #f00"});
			$("#test01").addClass("shine");
			num=1;
			
		}else{
			$("#test01").css({"color":"#01c2fc"});
			$("#test01").css({"text-shadow":"none"});
			$("#test01").removeClass("shine");
			num=0;
			
		}
		setTimeout("trTestChange()",1000);
		if(data.data == null ||data.data.isEmpty()||data.data == "{}"){
		$("#test01").text("26℃");
		}else{
			$("#test01").text(data.data+"℃");
			
		}
		
	});
}