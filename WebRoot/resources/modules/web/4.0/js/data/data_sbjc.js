$(document).ready(function() {
	shelvestu();
});

// 设备详细信息
function shelvestu() {
	var myChart = echarts.init(document.getElementById("shelvestu")),

	// 指定图表的配置项和数据
	option = {
		color : [ "#5969fe", "#00f8fe", "#2b8dff", "#00f9ff", "#5377fe",
				"#00fec5", "#1ec9fc", "#00bb90",

		],
		title : {
			show : true,
			text : '设备详细信息',
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
				type : 'line' // 默认为直线，可选为：'line' | 'shadow'
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
