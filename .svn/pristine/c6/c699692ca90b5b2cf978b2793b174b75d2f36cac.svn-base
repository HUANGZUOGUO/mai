var starOpenChanal = 4;// 自动预览窗口数量
var openWinNum = 2;// 默认显示窗口数
var nhData = new Array();// 能耗数据
var urldata=""
var background = {
	type : 'linearGradient',
	x0 : 0,
	y0 : 0,
	x1 : 0,
	y1 : 1,
	colorStops : [ {
		offset : 0,
		color : '#d2e6c9'
	}, {
		offset : 1,
		color : 'white'
	} ]
};
$(document).ready(function() {
	// 初始化实时监控不显示返回实时监控
	$(".sp .back_carm").hide();
	// 加载温湿度数据
	gethcs();
	setInterval('gethcs()',10000);
	// 加载最新报警数据
	getalam();
	setInterval('getalam()',10000);
	// 加载最新档案操作数据
	getamsact();
	setInterval('getamsact()',10000);
	// 加载馆藏量数据
	getholding();
	setInterval('getholding()',17000);
	// 加载能耗数据
	getnh();
	setInterval('getnh()',24000);
	// 加载盘点数据
	getinty();
	//setInterval('getinty()',10000);
	//加载视频
	setTimeout('openvideo()',1000); 
	//openvideo();
});
// 加载温湿度数据
function gethcs() {
	// 加载温湿度数据
	Ajax.custom({
		url : config.getNewHumiture,
		data : {

		},// 传递参数
		type : 'GET'
	}, function(data) {
		var hum = new Array();
		var tem = new Array();
		for (var i = 0; i < data.data.length; i++) {
			var humlist = new Array();
			var temlist = new Array();
			humlist[0] = data.data[i].storeName
			humlist[1] = data.data[i].avghum
			temlist[0] = data.data[i].storeName
			temlist[1] = data.data[i].avgtem
			hum[i] = humlist
			tem[i] = temlist
		}
		$("#humiture").jqChart({
			noDataMessage : {
				text : '无记录',
				font : '20px sans-serif'
			},
			animation : {
				duration : 1
			},
			shadows : {
				enabled : true
			},
			legend : {
				font : '15px sans-serif'
			},
			axes : [ {
				location : 'bottom',
			} ],
			series : [ {
				type : 'bar',
				labels : {
					stringFormat : '%d%RH',
					font : '15px sans-serif',
					fillStyle : 'blue'
				},
				title : '湿度',
				fillStyle : '#FCB441',
				data : hum.slice(0, 2)
			}, {
				type : 'bar',
				labels : {
					stringFormat : '%d℃',
					font : '15px sans-serif',
					fillStyle : 'blue'
				},
				title : '温度',
				fillStyle : '#418CF0',
				data : tem.slice(0, 2)
			}, ]
		});
	});
}
// 加载最新报警数据
function getalam() {
	// 加载最新报警数据
	Ajax.custom({
				url : config.getNewAlarmList,
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
										.format("yyyy-MM-dd");
//							}
							data.data.data[i].dayHms = new Date(
									data.data.data[i].ctime).format("hh:mm:ss")
						}
						$("#alarm").html(
								template.render("alarm-data-list-tmpl", {
									list : data.data.data
								}));
					});
}
// 加载最新档案操作数据
function getamsact() {
	// 加载最新档案操作数据
	Ajax
			.custom({
				url : config.getNewAmsActLogList,
				data : {

				},// 传递参数
				type : 'GET'
			},
					function(data) {
						for (var i = 0; i < data.data.data.length; i++) {
							/** 格式化时间 day：年月日 dayHms：时分秒* */
							// 判断当前报警是否是当天
							if (new Date(data.data.data[i].ctime)
									.format("yyyy-MM-dd") == new Date()
									.format("yyyy-MM-dd")) {
								data.data.data[i].day = "今天";
							} else {
								data.data.data[i].day = new Date(
										data.data.data[i].ctime)
										.format("yyyy-MM-dd hh:mm:ss");
							}
							data.data.data[i].playStime = new Date(
									data.data.data[i].ctime - 30000)
									.format("yyyy-MM-dd hh:mm:ss");
							data.data.data[i].playEtime = new Date(
									data.data.data[i].ctime + 60000)
									.format("yyyy-MM-dd hh:mm:ss");
						}
						$("#archive").html(
								template.render("archive-data-list-tmpl", {
									AmsActLogList : data.data.data
								}));
					});
}
// 加载最新档案操作数据
function getamsact() {
	// 加载最新档案操作数据
	Ajax
	.custom({
		url : config.getNewAmsActLogList,
		data : {
			
		},// 传递参数
		type : 'GET'
	},
	function(data) {
		for (var i = 0; i < data.data.data.length; i++) {
			/** 格式化时间 day：年月日 dayHms：时分秒* */
			// 判断当前报警是否是当天
//			if (new Date(data.data.data[i].ctime)
//			.format("yyyy-MM-dd") == new Date()
//			.format("yyyy-MM-dd")) {
//				data.data.data[i].day = "今天";
//			} else {
				data.data.data[i].day = new Date(
						data.data.data[i].ctime)
				.format("yyyy-MM-dd hh:mm:ss");
//			}
			data.data.data[i].playStime = new Date(
					data.data.data[i].ctime - 30000)
			.format("yyyy-MM-dd hh:mm:ss");
			data.data.data[i].playEtime = new Date()
			.format("yyyy-MM-dd hh:mm:ss");
		}
		$("#archive").html(
				template.render("archive-data-list-tmpl", {
					AmsActLogList : data.data.data
				}));
	});
}
// 加载盘点数据
function getinty() {
	// 加载最新档案操作数据
	Ajax
	.custom({
		url : config.getNewRfid,
		data : {
			
		},// 传递参数
		type : 'POST'
	},function(data) {
		urldata=data.data
		if(urldata.length<1){
			$("#rfidInty").html("没有盘点记录")
			return;
		}
		$("#rfidInty").html(
				template.render("rfidInty-data-list-tmpl", {
					RfidIntyList : data.data
				}));
	});
}
function webjumpservice(i){
	location.href=config.rfidpd+'?storeId='+urldata[i].strore_id+'&storeName='+urldata[i].storeName+'&time='+urldata[i].vartime
}
// 加载馆藏量数据
function getholding() {
	// 加载馆藏量数据
	Ajax.custom({
		url : config.getNewHolding,
		data : {

		},// 传递参数
		type : 'GET'
	}, function(data) {
		var listHolding = new Array();
		var total = 0;
		for (var i = 0; i < data.data.length; i++) {
			var list = new Array();
			list[0] = data.data[i].typeName
			list[1] = data.data[i].count
			total += parseInt(list[1])
			listHolding[i] = list
		}
		$('#holding').jqChart({
			noDataMessage : {
				text : '无数据',
				font : '20px sans-serif'
			},
			/* title: { text: 'Pie Chart Labels' }, *//* 图标上方标题 */
			legend : { /* title: { text: '档案类型',font: '15px sans-serif' }, *//* 图例标题 */
				location : 'bottom',
				font : '10px sans-serif',
			},
			animation : {
				duration : 1
			},/* 图片动画 */
			border : {
				strokeStyle : '#6ba851'
			},
			background : background,
			shadows : {
				enabled : true
			},
			series : [ {
				type : 'pie',
				labels : {
					stringFormat : '%.1f%%',
					valueType : 'percentage',
					font : '15px sans-serif',
					fillStyle : 'black'
				},
				data : listHolding,
				labelsPosition : 'outside', // inside, outside 文字位置
				labelsAlign : 'circle', // circle, column 数字位置
				labelsExtend : 10,// 线长度
				leaderLineWidth : 1,// 线粗细
				leaderLineStrokeStyle : 'red' // 线颜色
			} ]
		});
		$("#tatal").html(total);
	});
}
// 加载能耗数据getDataForYear
function getnh() {
	nhData.length = 0;
	// 节能
	var year="";
	Ajax.custom({
		url : config.getTotalData,
		data : {

		},// 传递参数
		type : 'GET'
	}, function(data) {
		var date = new Date();
		year = date.getFullYear() + "年度";

		for (var i = 0; i < data.data.length; i++) {
			nhData[i] = data.data[i];
		}
		var ss;
		ss = "<p>总能耗指标：" + nhData[0][1]
				+ "<s>kWh</s> <span></span></p> <p>已使用能耗：" + nhData[1][1]
				+ "<s>kWh</s> <span></span></p>"
		$(".nhjs").html(ss);
		// 能耗
		$('#nhjqChart').jqChart({

			title : {
				text : ''
			},
			legend : {
				location : 'top'
			},
			animation : {
				duration : 1
			},
			shadows : {
				enabled : true
			},
			axes : [ {
				// type: 'linear',
				location : 'left',
				strokeStyle : 'red',
				labels : {
					fillStyle : 'red',
					// stringFormat: '%d %%',
					font : '12px sans-serif'
				},
				minimum : 100,
				maximum : 10000, // 也可以给一个固定值如100parseInt(maxCount)+10
				interval : 1000
			}, { // 坐标
				location : 'bottom',
				lineWidth : 1,
				strokeStyle : 'red',
				labels : {
					fillStyle : 'red'
				}
			} ],

			series : [ {
				// type: 'stacked100Column',
				type : 'column',
				title : year,
				data : nhData,
				fillStyles : [ '#E4892B', '#59B0D9' ],
				// fillStyles:['red', 'blue'],
				labels : {
					stringFormat : '%d kWh',
					// valueType: 'percentage',
					font : '15px sans-serif'
				},

			}

			]
		});
	});

	
}
// 返回实时视频
function clickLoginindex() {
	var path = config.serverPath
			+ "/resources/images/web/i_danga_huif_icon.png";
	$(".sp .back_carm").hide();
	$(".sp .back_carmo").hide();
	document.getElementById("a0").src = path;
	document.getElementById("a1").src = path;
	document.getElementById("a2").src = path;
	changeWndNum(2);
	clickStartRealPlay(chanalFixNos[0]);
}
// 窗口1、4点击样式
$(".fp li").click(function() {
	$(this).addClass("def").siblings().removeClass("def");
});
// 视频回放
function clickStartPlaybackindex(id, szStartTime, szEndTime) {

	var display = $('.back_carmo').css('display');
	if (display == 'block') {
		alert("请先打开视频！");
		return false;

	}
	var path = config.serverPath
			+ "/resources/images/web/i_danga_huif_icon.png";
	var pathzh = config.serverPath
			+ "/resources/images/web/i_danga_huif_zh_act_icon.png";
	$(".sp .back_carm").show();
	$(".sp .back_carmo").hide();
	$("#" + id + "").show();
	document.getElementById("a0").src = path;
	document.getElementById("a1").src = path;
	document.getElementById("a2").src = path;
	document.getElementById(id).src = pathzh;
	g_iWndIndex = 0;// 默认第一个窗口
	changeWndNum(1);// 显示一个窗口
	clickStartPlayback(szStartTime, szEndTime);
}
// 打开视频
function openvideo() {
	$(".sp .back_carmo").hide();
	$(".sp .back_carm").hide();
	clickLogin();
}
