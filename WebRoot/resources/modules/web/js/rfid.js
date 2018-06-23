var oneId=1
$(document).ready(function() {
	getStoreList();
	initNy();
	getRfidInty()
	$(" .article .outBox .hd ur li:eq(0)").click(function() {
		oneId=1
		initMonth();
	});

	$(" .article .outBox .hd ur li:eq(0)").click(function() {
		oneId=1
		initYear();
	});
	$("#month").click(function() {
		oneId=1
		getRfidInty()
	})
	$("#year").click(function() {
		oneId=1
		getRfidInty()
	})
	$(".outBox").slide({
		trigger : "click"
	});
})

// 获取库房列表
function getStoreList() {
	Ajax.custom({
		url : config.getStoreList,
		data : {},// 传递参数
		type : 'POST'
	}, function(data) {
		var store = "";
		for (var i = 0; i < data.data.length; i++) {
			if(i==0){
				store = store + "<li class='on warehouse' id='store"+data.data[i].storeId+"' onclick=getOneId("
				+ data.data[i].storeId + ")>" + data.data[i].name + "</li>"
			}else{
			store = store + "<li class='warehouse' id='store"+data.data[i].storeId+"' onclick=getOneId("
					+ data.data[i].storeId + ")>" + data.data[i].name + "</li>"
			}
		}
		$(".ware-11").html(store);
	})
}
function getOneId(id){
	Ajax.custom({
		url : config.getStoreList,
		data : {},// 传递参数
		type : 'POST'
	}, function(data) {
		for (var i = 0; i < data.data.length; i++) {
				$("#store"+data.data[i].storeId).attr("class", "warehouse")
		}
		$("#store"+id).attr("class", "on warehouse")
})
	
	oneId=id
	getRfidInty()
}
// 获取库房藏量的数据
function getRfidInty() {
	var ams=0;
	Ajax.custom({
		url : config.getCountAms,
		data : {
			storeId :oneId,
		},// 传递参数
		type : 'POST'
	}, function(data) {
		ams=data.data;
	});
	var monthTime = $("#ny").val();
	var yearTime = $("#n").val();
	Ajax.custom({
		url : config.getRfidIntyByday,
		data : {
			storeId :oneId,
			monthTime : monthTime,
		},// 传递参数
		type : 'POST'
	}, function(data) {
		$("#inBd1").html(template.render("overview-detail", {
			list : data.data,
			list1 : ams,
			list2 :	"盘点记录（按日）"
		}));
	});
	// 获取一库房的日rfid盘点

	Ajax.custom({
		url : config.getRfidIntyByday,
		data : {
			storeId : oneId,
			yearTime : yearTime,
		},// 传递参数
		type : 'POST'
	}, function(data) {
		$("#inBd2").html(template.render("overview-detail", {
			list : data.data,
			list1 : ams,
			list2 :	"盘点记录（按月）"
		}));
	});
}
//转接 
function webjumpservice(time){
	location.href=config.rfidpd+'?storeId='+oneId+'&time='+time
}
// 按日期获取月度档案数据
function getRfidTypeByMonth() {
	var monthTime = $("#ny").val();
	Ajax.custom({
		url : config.getRfidIntyByday,
		data : {
			monthTime : monthTime
		},// 传递参数
		type : 'POST'
	}, function(data) {
		if (data.data.one == "") {
			pieChartA1(null);
		} else {
			pieChartA1(data.data.all);
		}
	});
	Ajax.custom({
		url : config.getRfid,
		data : {
			monthTime : monthTime
		},// 传递参数
		type : 'POST'
	}, function(data) {
		if (data.data.ams == "") {
			pieChartB1(null);
		} else {
			pieChartB1(data.data);
		}
	});
}
// 按日期获取年度档案数据
function getRfidTypeByYear() {
	var yearTime = $("#n").val();
	Ajax.custom({
		url : config.getRfidIntyByday,
		data : {
			yearTime : yearTime
		},// 传递参数
		type : 'POST'
	}, function(data) {
		if (data.data.one == "") {
			pieChartA2(null);
		} else {
			pieChartA2(data.data.all);
		}
	});
	Ajax.custom({
		url : config.getRfid,
		data : {
			yearTime : yearTime
		},// 传递参数
		type : 'POST'
	}, function(data) {
		if (data.data.ams == "") {
			pieChartB2(null);
		} else {
			pieChartB2(data.data);
		}
	});
}

// 月度档案状态的饼图
function pieChartA1(data) {
	var pieData = new Array();// 盘点结果分类

	if (data != null) {
		pieData[0] = new Array();
		pieData[0][0] = "在架";
		pieData[0][1] = data.b;
		pieData[1] = new Array();
		pieData[1][0] = "离架";
		pieData[1][1] = data.c;
		pieData[2] = new Array();
		pieData[2][0] = "错架";
		pieData[2][1] = data.d;
	}
	$('#jqChartA-1').jqChart(
			{
				legend : {
					location : 'right'
				},
				animation : {
					duration : 1
				},

				noDataMessage : {
					text : '查询无数据',
					font : '20px sans-serif'
				},

				tooltips : { // 提示数据
					disabled : false, // 是否不引用
					type : 'normal', // 类型 正常或共享
					background : 'white', // 背景颜色
					borderColor : '#90be7c', // 边框颜色
				},
				series : [ {
					type : 'pie',
					fillStyles : [ '#418CF0', '#FCB441', '#E0400A', '#056492',
							'#BFBFBF', '#1A3B69', '#FFE382' ],
					labels : {
						stringFormat : '%.1f%%',
						valueType : 'percentage',
						font : '15px sans-serif',
						fillStyle : 'black'
					},
					explodedRadius: 10,
                    dataLabelsField: 'name',
                    dataValuesField: 'value',
                    explodedField: 'exploded',
					explodedSlices : [ 5 ],
					data : pieData

				} ]
			});
	/*
	 * $('#jqChartA-1').jqChart({ border: { strokeStyle: '#FFFFFF' }, animation: {
	 * duration: 1 }, noDataMessage : { text : '查询无数据', font : '20px sans-serif' },
	 * shadows: { enabled: true }, series: [ { type: 'pie', fillStyles:
	 * ['#418CF0', '#FCB441', '#E0400A', '#056492', '#BFBFBF', '#1A3B69',
	 * '#FFE382'], labels: { stringFormat: '%.1f%%', valueType: 'percentage',
	 * font: '15px sans-serif', fillStyle: 'white' }, explodedRadius: 10,
	 * explodedSlices: [5], data: [['盘点在架:'+data.b+'份', data.b],
	 * ['盘点错架:'+data.c+'份', data.c], ['盘点离架:'+data.d+'份',data.d]] } ] });
	 * 
	 * $('#jqChartA-1').bind('tooltipFormat', function (e, data) { var
	 * percentage = data.series.getPercentage(data.value); percentage =
	 * data.chart.stringFormat(percentage, '%.2f%%');
	 * 
	 * return '<b>' + data.dataItem[0] + '</b><br />' + data.value + ' (' +
	 * percentage + ')'; });
	 */
}
// 月度档案盘点的饼图
function pieChartB1(data) {
	var pieData = new Array();// 盘点结果分类

	if (data != null) {
		pieData[0] = new Array();
		pieData[0][0] = "盘点";
		pieData[0][1] = data.rfid;
		pieData[1] = new Array();
		pieData[1][0] = "未盘点";
		pieData[1][1] = data.ams;
	}
	$('#jqChartB-1').jqChart(
			{
				legend : {
					location : 'right'
				},
				animation : {
					duration : 1
				},

				noDataMessage : {
					text : '查询无数据',
					font : '20px sans-serif'
				},

				tooltips : { // 提示数据
					disabled : false, // 是否不引用
					type : 'normal', // 类型 正常或共享
					background : 'white', // 背景颜色
					borderColor : '#90be7c', // 边框颜色
				},
				series : [ {
					type : 'pie',
					fillStyles : [ '#418CF0', '#FCB441', '#E0400A', '#056492',
							'#BFBFBF', '#1A3B69', '#FFE382' ],
					labels : {
						stringFormat : '%.1f%%',
						valueType : 'percentage',
						font : '15px sans-serif',
						fillStyle : 'black'
					},

					explodedRadius: 10,
                    dataLabelsField: 'name',
                    dataValuesField: 'value',
                    explodedField: 'exploded',
					explodedSlices : [ 5 ],
					data : pieData

				} ]
			});
}
// 年度档案状态的饼图
function pieChartA2(data) {
	var pieData = new Array();// 盘点结果分类

	if (data != null) {
		pieData[0] = new Array();
		pieData[0][0] = "在架";
		pieData[0][1] = data.b;
		pieData[1] = new Array();
		pieData[1][0] = "离架";
		pieData[1][1] = data.c;
		pieData[2] = new Array();
		pieData[2][0] = "错架";
		pieData[2][1] = data.d;
	}
	$('#jqChartA-2').jqChart(
			{
				legend : {
					location : 'right'
				},
				animation : {
					duration : 1
				},

				noDataMessage : {
					text : '查询无数据',
					font : '20px sans-serif'
				},

				tooltips : { // 提示数据
					disabled : false, // 是否不引用
					type : 'normal', // 类型 正常或共享
					background : 'white', // 背景颜色
					borderColor : '#90be7c', // 边框颜色
				},
				series : [ {
					type : 'pie',
					fillStyles : [ '#418CF0', '#FCB441', '#E0400A', '#056492',
							'#BFBFBF', '#1A3B69', '#FFE382' ],
					labels : {
						stringFormat : '%.1f%%',
						valueType : 'percentage',
						font : '15px sans-serif',
						fillStyle : 'black'
					},

					explodedRadius: 10,
                    dataLabelsField: 'name',
                    dataValuesField: 'value',
                    explodedField: 'exploded',
					explodedSlices : [ 5 ],
					data : pieData

				} ]
			});
}
// 年度档案盘点的饼图
function pieChartB2(data) {
	var pieData = new Array();// 盘点结果分类

	if (data != null) {
		pieData[0] = new Array();
		pieData[0][0] = "盘点";
		pieData[0][1] = data.rfid;
		pieData[1] = new Array();
		pieData[1][0] = "未盘点";
		pieData[1][1] = data.ams;
	}
	$('#jqChartB-2').jqChart(
			{
				legend : {
					location : 'right'
				},
				animation : {
					duration : 1
				},

				noDataMessage : {
					text : '查询无数据',
					font : '20px sans-serif'
				},

				tooltips : { // 提示数据
					disabled : false, // 是否不引用
					type : 'normal', // 类型 正常或共享
					background : 'white', // 背景颜色
					borderColor : '#90be7c', // 边框颜色
				},
				series : [ {
					type : 'pie',
					fillStyles : [ '#418CF0', '#FCB441', '#E0400A', '#056492',
							'#BFBFBF', '#1A3B69', '#FFE382' ],
					labels : {
						stringFormat : '%.1f%%',
						valueType : 'percentage',
						font : '15px sans-serif',
						fillStyle : 'black'
					},
					explodedRadius: 10,
                    dataLabelsField: 'name',
                    dataValuesField: 'value',
                    explodedField: 'exploded',
					explodedSlices : [ 5 ],
					data : pieData
				} ]
			});
}
// 初始化年月日
function initNy() {
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var ss = y + "-" + m;
	var s = y;
	$("#ny").val(ss);
	$("#n").val(s);
	getRfidTypeByYear();
	getRfidTypeByMonth();
	getRfidInty();
};

function initMonth() {
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var ss = y + "-" + m;
	$("#ny").val(ss);
	getRfidTypeByMonth()
	getRfidInty();
}

function initYear() {
	var date = new Date();
	var y = date.getFullYear();
	var s = y;
	$("#n").val(s);
	getRfidTypeByYear()
	getRfidInty();
}
function showInfo() {
	getRfidInty();
	getRfidTypeByYear();
	getRfidTypeByMonth();
}
