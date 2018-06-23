$(document).ready(function() {
	$('#calendar').css({"padding-top":"20px"})//日历标题问题
	pdsata();
	padauser();
	pdnum();
	pdtype();
});

// 盘点统计
function pdsata() {
	var myChart = echarts.init(document.getElementById("pdsata")),

	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
				"#00fec5", "#1ec9fc", "#00bb90",

		],
		title : {
			show : true,
			text : '盘点结果统计图',
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
		legend : {
			data : [ '在架', '错架', '离架' ],
			textStyle : {
				color : "#03faff",// 图例文字颜色
			},
		},
		grid : {
			top : '15%',
			left : '1%',
			right : '4%',
			bottom : '5%',
			containLabel : true
		},
		xAxis : {
			name:"盘点时间",
			nameGap:"1",
			type : 'category',
			data : [ '2018-1-1', '2018-1-2', '2018-1-3', '2018-1-4',
					'2018-1-5', '2018-1-6', '2018-1-7', '2018-1-8', '2018-1-9',
					'2018-1-10', '2018-1-11', '2018-1-12', '2018-1-13',
					'2018-1-14', '2018-1-15' ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			}
		},
		yAxis : {
			name:"盘点结果",
			nameGap:"7",
			type : 'value',
			axisLine : {
				lineStyle : {
					color : '#00f8fe',

				}
			},
			splitLine : {
				show : false,
			},
		},
		 axisLabel:{
   	      color:"#ffffff"
		 },
		series : [
				{
					name : '在架',
					type : 'bar',
					stack : '总量',
					label : {
						normal : {
							show : true,
							position : 'inside'
						}
					},
					itemStyle : {
						normal : {
							borderColor : "#2b82e2",
							borderWidth : 2,
							opacity : 0.8,
							color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [ {
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
					data : [ 1320, 1302, 1301, 1334, 1390, 1330, 1320, 1320,
							1302, 1301, 1334, 1390, 1330, 1320, 1340 ]
				},
				{
					name : '错架',
					type : 'bar',
					stack : '总量',
					label : {
						normal : {
							show : true,
							position : 'inside'
						}
					},
					itemStyle : {
						normal : {
							borderColor : "#2b82e2",
							borderWidth : 2,
							opacity : 0.8,
							color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [ {
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
					data : [ 120, 132, 101, 134, 90, 230, 210, 120, 132, 101,
							134, 90, 230, 210, 220 ]
				},
				{
					name : '离架',
					type : 'bar',
					stack : '总量',
					label : {
						normal : {
							show : true,
							position : 'inside'
						}
					},
					itemStyle : {
						normal : {
							borderColor : "#2b82e2",
							borderWidth : 2,
							opacity : 0.8,
							color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [ {
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
					data : [ 220, 182, 191, 234, 290, 330, 310, 220, 182, 191,
							234, 290, 330, 310, 320 ]
				} ]
	};
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
// 盘点用户统计
function padauser() {
	var myChart = echarts.init(document.getElementById("padauser")),

	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
			"#00fec5", "#1ec9fc", "#00bb90",

	],
	title : {
		show : true,
		text : '盘点人员统计图',
		textStyle : {
			color : '#FAF560',
			fontStyle : '',
			fontSize : 18,
			fontFamily : 'PingFangSC-Light',

		}
	},
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : {
			type : 'category',
			data : [ '人员一', '人员二', '人员一', '人员二', '人员一', '人员二', '人员一',  ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			}
		},
		yAxis : {
			type : 'value',
			boundaryGap : [ 0, 0.01 ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',

				}
			},
			splitLine : {
				show : false,
			},
		},
		axisLabel : {
			color : "#ffffff"
		},
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '60%',
	            data:[10, 52, 200, 334, 390, 330, 220],
	            label:{
	                normal:{
	                    show: true,
	                    position:"top",
	                    color:"#19918b",
	                    fontSize:16,
	                    lineHeight:10,
	                },
	            },
	            itemStyle : {
					normal : {
						borderColor : "#2b82e2",
						borderWidth : 2,
						opacity : 0.8,
						color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [ {
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
	    ]
	};
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
// 库房盘点次数统计图
function pdnum() {
	var myChart = echarts.init(document.getElementById("pdnum")),

	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
			"#00fec5", "#1ec9fc", "#00bb90",

	],
	title : {
		show : true,
		text : '库房盘点次数统计图',
		textStyle : {
			color : '#FAF560',
			fontStyle : '',
			fontSize : 18,
			fontFamily : 'PingFangSC-Light',

		}
	},
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : {
			type : 'category',
			data : [ '人员一', '人员二', '人员一', '人员二', '人员一', '人员二', '人员一',  ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			}
		},
		yAxis : {
			type : 'value',
			boundaryGap : [ 0, 0.01 ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',

				}
			},
			splitLine : {
				show : false,
			},
		},
		axisLabel : {
			color : "#ffffff"
		},
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '60%',
	            data:[10, 52, 200, 334, 390, 330, 220],
	            label:{
	                normal:{
	                    show: true,
	                    position:"top",
	                    color:"#19918b",
	                    fontSize:16,
	                    lineHeight:10,
	                },
	            },
	            itemStyle : {
					normal : {
						borderColor : "#2b82e2",
						borderWidth : 2,
						opacity : 0.8,
						color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [ {
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
	    ]
	};
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}

// 最新盘点结果
function pdtype() {
	var myChart = echarts.init(document.getElementById("pdtype")),

	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
			"#00fec5", "#1ec9fc", "#00bb90",

	],
	title : {
		show : true,
		text : '最新盘点结果统计图',
		textStyle : {
			color : '#FAF560',
			fontStyle : '',
			fontSize : 18,
			fontFamily : 'PingFangSC-Light',

		}
	},
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : {
			type : 'category',
			data : [ '在架', '错架', '离架'],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : false,
			}
		},
		yAxis : {
			type : 'value',
			boundaryGap : [ 0, 0.01 ],
			axisLine : {
				lineStyle : {
					color : '#00f8fe',

				}
			},
			splitLine : {
				show : false,
			},
		},
		axisLabel : {
			color : "#ffffff"
		},
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '60%',
	            data:[10000, 52, 200],
	            label:{
	                normal:{
	                    show: true,
	                    position:"top",
	                    color:"#19918b",
	                    fontSize:16,
	                    lineHeight:10,
	                },
	            },
	            itemStyle : {
					normal : {
						borderColor : "#2b82e2",
						borderWidth : 2,
						opacity : 0.8,
						color : new echarts.graphic.LinearGradient(0, 1, 0, 0, [ {
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
	    ]
	};
	

	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
