$(document).ready(function() {
	alarmyear();
	alarmquarter();
	alarmmonth();
	alarmindex();
});

// 年度top
function alarmyear() {
	var myChart = echarts.init(document.getElementById("alarmyear")),

	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
				"#00fec5", "#1ec9fc", "#00bb90",

		],
		title : {
			show : true,
			text : '年度TOP榜',
			textStyle : {
				color : '#00f9ff',
				fontStyle : '',
				fontSize : 18,
				fontFamily : 'PingFangSC-Light',

			}
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid : {
			left : "2%",
			right : "3%",
			bottom : 0,
			containLabel : true
		},
		xAxis : {
			type : "value",
			data : [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			splitLine : {
				show : false
			},
			axisTick : {
				show : true,
			}
		},
		yAxis : {
			data : [ "密集架设备", "消防设备", "灯光设备" ],
			type : "category",
			lineStyle : {
				color : '#00f8fe',
			},
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			},
//			axisLabel : {
//				inside : true,
//			},
//			z : 10,
		},
		axisLabel : {
			color : "#ffffff"
		},

		toolbox : {
			feature : {
				saveAsImage : {}
			},
			top : "5%",
			right : "10%",
		},
		series : {
			name : '温度',
			type : 'bar',
			data : [ 92, 83, 74 ],
			label:{
                normal:{
                    show: true,
                    position:"right",
                    color:"#19918b",
                    fontSize:16,
                    lineHeight:10,
                    offset: [10,0],
                },
            },
//			markLine : {
//				silent : true,
//				type:"solid",
//				lineStyle: {color: "#2b82e2",},
//				data : [ {
//					xAxis : 100
//				} ]
//			},
//			barGap: "80%",
			barWidth: "60%",
			itemStyle : {
				normal : {
					borderColor : "#2b82e2",
					borderWidth : 2,
					opacity : 0.8,
					color : new echarts.graphic.LinearGradient(0, 0, 1, 0, [ {
						offset : 0,
						color : '#000000'
					}, {
						offset : 0.5,
						color : '#0D3C47'
					}, {
						offset : 1,
						color : '#2B8F9E'
					} ])
				}
			},
		}
	}
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
// 季度top
function alarmquarter() {
	var myChart = echarts.init(document.getElementById("alarmquarter")),

	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
				"#00fec5", "#1ec9fc", "#00bb90",

		],
		title : {
			show : true,
			text : '季度TOP榜',
			textStyle : {
				color : '#00f9ff',
				fontStyle : '',
				fontSize : 18,
				fontFamily : 'PingFangSC-Light',

			}
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid : {
			left : "2%",
			right : "3%",
			bottom : 0,
			containLabel : true
		},
		xAxis : {
			type : "value",
			data : [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			splitLine : {
				show : false
			},
			axisTick : {
				show : true,
			}
		},
		yAxis : {
			data : [ "密集架设备", "消防设备", "灯光设备" ],
			type : "category",
			lineStyle : {
				color : '#00f8fe',
			},
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			},
//			axisLabel : {
//				inside : true,
//			},
//			z : 10,
		},
		axisLabel : {
			color : "#ffffff"
		},

		toolbox : {
			feature : {
				saveAsImage : {}
			},
			top : "5%",
			right : "10%",
		},
		series : {
			name : '温度',
			type : 'bar',
			data : [ 92, 83, 74 ],
			label:{
                normal:{
                    show: true,
                    position:"right",
                    color:"#19918b",
                    fontSize:16,
                    lineHeight:10,
                    offset: [10,0],
                },
            },
//			markLine : {
//				silent : true,
//				type:"solid",
//				lineStyle: {color: "#2b82e2",},
//				data : [ {
//					xAxis : 100
//				} ]
//			},
//			barGap: "80%",
			barWidth: "60%",
			itemStyle : {
				normal : {
					borderColor : "#1fb1de",
					borderWidth : 2,
					opacity : 0.8,
					color : new echarts.graphic.LinearGradient(0, 0, 1, 0, [ {
						offset : 0,
						color : '#000000'
					}, {
						offset : 0.5,
						color : '#0D3C47'
					}, {
						offset : 1,
						color : '#2B8F9E'
					} ])
				}
			},
		}
	}
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
// 月度top
function alarmmonth() {
	var myChart = echarts.init(document.getElementById("alarmmonth"));
	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
				"#00fec5", "#1ec9fc", "#00bb90",

		],
		title : {
			show : true,
			text : '月度TOP榜',
			textStyle : {
				color : '#00f9ff',
				fontStyle : '',
				fontSize : 18,
				fontFamily : 'PingFangSC-Light',

			}
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid : {
			left : "2%",
			right : "3%",
			bottom : 0,
			containLabel : true
		},
		yAxis : {
			type : "value",
			data : [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			splitLine : {
				show : false
			},
			axisTick : {
				show : true,
			}
		},
		xAxis : {
			data : [ "密集架设备", "消防设备", "灯光设备","视频设备","RFID设备","环境设备" ],
			type : "category",
			lineStyle : {
				color : '#00f8fe',
			},
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			},
//			axisLabel : {
//				inside : true,
//			},
//			z : 10,
		},
		axisLabel : {
			color : "#ffffff"
		},

		toolbox : {
			feature : {
				saveAsImage : {}
			},
			top : "5%",
			right : "10%",
		},
		series : {
			name : '温度',
			type : 'bar',
			data : [ 92, 83, 74,23,45,67 ],
			label:{
                normal:{
                    show: true,
                    position:"top",
                    color:"#19918b",
                    fontSize:16,
                    lineHeight:10,
//                    offset: [0,10],
                },
            },
//			markLine : {
//				silent : true,
//				type:"solid",
//				lineStyle: {color: "#2b82e2",},
//				data : [ {
//					xAxis : 100
//				} ]
//			},
//			barGap: "80%",
			barWidth: "60%",
			itemStyle : {
				normal : {
					borderColor : "#496ae2",
					borderWidth : 2,
					opacity : 0.8,
					color : new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
						offset : 0,
						color : '#2B8F9E'
					}, {
						offset : 0.5,
						color : '#0D3C47'
					}, {
						offset : 1,
						color : '#000000'
					} ])
				}
			},
		}
	}
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
//异常指数
function alarmindex() {
	var myChart = echarts.init(document.getElementById("alarmindex"));
	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
				"#00fec5", "#1ec9fc", "#00bb90",

		],
		title : {
			show : true,
			text : '异常指数',
			textStyle : {
				color : '#FAF560',
				fontStyle : '',
				fontSize : 18,
				fontFamily : 'PingFangSC-Light',

			}
		},
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid : {
			left : "2%",
			right : "3%",
			bottom : 0,
			containLabel : true
		},
		xAxis : {
			type : "value",
			data : [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			splitLine : {
				show : false
			},
			axisTick : {
				show : true,
			}
		},
		yAxis : {
			data : [ "运行状态", "通讯状态", "损耗率" ],
			type : "category",
			lineStyle : {
				color : '#00f8fe',
			},
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			},
			axisLabel : {
				inside : true,
			},
			z : 10,
		},
		axisLabel : {
			color : "#ffffff"
		},

		toolbox : {
			feature : {
				saveAsImage : {}
			},
			top : "5%",
			right : "10%",
		},
		series : {
			name : '温度',
			type : 'bar',
			data : [ 92, 83, 74 ],
			label:{
                normal:{
                    show: true,
                    position:"right",
                    color:"#19918b",
                    fontSize:16,
                    lineHeight:10,
                    offset: [10,0],
                },
            },
//			markLine : {
//				silent : true,
//				type:"solid",
//				lineStyle: {color: "#2b82e2",},
//				data : [ {
//					xAxis : 100
//				} ]
//			},
			barWidth: "60%",
			itemStyle : {
				normal : {
					borderColor : "#2b82e2",
					borderWidth : 2,
					opacity : 0.8,
					color : new echarts.graphic.LinearGradient(0, 0, 1, 0, [ {
						offset : 0,
						color : '#000000'
					}, {
						offset : 0.5,
						color : '#0D3C47'
					}, {
						offset : 1,
						color : '#2B8F9E'
					} ])
				}
			},
		}
	}
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
