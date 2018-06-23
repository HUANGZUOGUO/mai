$(document).ready(function() {
	amsborrow();
	deviceage();
	humtem();
	devicetop();
	healthindex();
});

// 档案借还统计图
function amsborrow() {
	var myChart = echarts.init(document.getElementById("amsborrow")),
	// 指定图表的配置项和数据
    option = {
    	color: [
            "#00fec5",
            "#00f8fe",
            "#1ec9fc",
            "#00bb90",

        ],
        title:{
    		show: true,
    		text: '档案借还统计图',
    		textStyle:{
    			color: '#00f8fe',
    			fontStyle:'',
    			fontSize: 18,
    			fontFamily: 'PingFangSC-Light',
    			
    		}
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
        legend: {
            bottom:"1%",
            left:"center",
            itemGap: 15,
            orient: 'horizontal',
            align: 'left',
            inactiveColor: '#ccc',//图例关闭时颜色
            pageButtonItemGap:0,
            pageButtonGap:3,
            pageIconColor:"#00fec5",
            pageIconInactiveColor:"#5969fe",
            pageIconSize:10,
            pageTextStyle:{
                color:"#ffffff",//图例翻页数值颜色
            },
            textStyle: {
                color: "#03faff",//图例文字颜色
            },
            data: ['总量', '当日']
        },
        grid: {
           	top:'10%',
            left: '2%',
            right: '2%',
            bottom: '10%',
            containLabel: true,
        },
        xAxis: {
        		type: 'category',
            data: ['档案借阅','档案归还'],
            axisLine: {
                lineStyle: {
                		color: '#00f8fe',
                }
           },
           axisTick:{
        	   		show:false,
           }
        },
        yAxis: {
        		type: 'value',
        		boundaryGap: [0, 0.01],
        		axisLine: {
                    lineStyle: {
                    		color: '#00f8fe',
                	
                    }
               },
               splitLine:{
                   show:false,
               },
        },
        axisLabel:{
        	      color:"#ffffff"
        },
        series: [
            {
                name: '总量',
                type: 'bar',
                label:{
                    normal:{
                        show: true,
                        position:"top",
                        color:"#01f8ff",
                        fontSize:16,
                        lineHeight:10,
                    },
                },
                itemStyle: {
                    normal: {
                    	borderColor:"#1EC9FC",
                    	borderWidth: 2,
                    	opacity:0.9,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2B8F9E'},
                                {offset: 0.5, color: '#0D3C47'},
                                {offset: 1, color: '#000000'}
                            ]
                        )
                    }
                },
                data: [8203, 3489],
                
            },
            {
                name: '当日',
                type: 'bar',
                label:{
                    normal:{
                        show: true,
                        position:"top",
                        color:"#00f8fe",
                        fontSize:16,
                        lineHeight:10,
                    },
                },
                itemStyle: {
                    normal: {
                    	borderColor:"#2b82e2",
                    	borderWidth: 2,
                    	opacity:0.9,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                            	   {offset: 0, color: '#34779E'},
                                {offset: 0.5, color: '#13314C'},
                                {offset: 1, color: '#000000'}
                            ]
                        )
                    }
                },
                data: [1325, 1438]
            }
        ]
    };
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
//设备科永年县统计图
function deviceage() {
	var myChart = echarts.init(document.getElementById("deviceage")),
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
//温湿度统计图
function humtem() {
	var myChart = echarts.init(document.getElementById("humtem")),
	option = {
	    title: [{
			show : true,
			text : '温湿度统计图',
			textStyle : {
				color : '#00f9ff',
				fontStyle : '',
				fontSize : 18,
				fontFamily : 'PingFangSC-Light',

			}
		}, {
	        
	    }],
	    tooltip: {
	        trigger: 'axis'
	    },
	    xAxis: [{
	        data: [1,2,3,4,5],
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
	    }, {
	        data: [1,2,3,4,5],
	        gridIndex: 1,
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
	    }],
	    yAxis: [{
	        splitLine: {show: false},
	        axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : true,
			}
	    }, {
	        splitLine: {show: false},
	        gridIndex: 1,
	        axisLine : {
				lineStyle : {
					color : '#00f8fe',
				}
			},
			axisTick : {
				show : true,
			}
	    }],
	    grid: [{
	        bottom: '60%'
	    }, {
	        top: '60%'
	    }],
	    series: [{
	    	name : '温度',
	        type: 'line',
	        showSymbol: false,
	        data: [2,3,3,2,4,5,3,8,6,8,9,5,4,3]
	    }, {
	    	name : '温度',
	        type: 'line',
	        showSymbol: false,
	        data: [2,3,3,2,4,5,3,8,6,8,9,5,4,3],
	        xAxisIndex: 1,
	        yAxisIndex: 1,
	    }]
	};
	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}
//设备异常top
function devicetop() {
	var myChart = echarts.init(document.getElementById("devicetop")),
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
//健康指数
function healthindex() {
	var myChart = echarts.init(document.getElementById("healthindex"));
	 // 指定图表的配置项和数据
    var storeList=["一库房","二库房","三库房","四库房","五库房","六库房","七库房","八库房","九库房","十库房","十一库房","十二库房"];

    var option;
    var color=[
    "#5969fe",
    "#00f8fe",
    "#2b8dff",
    "#00f9ff",
    "#5377fe",
    "#00fec5",
    "#1ec9fc",
    "#00bb90",
    "#5377fe",
    "#00fec5",
    "#1ec9fc",
    "#00bb90",
    "#5377fe",
    "#00fec5",
    "#5377fe",
    "#00fec5"
];
option = {
    color: color,
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)'
    },
    legend: {
        type: 'scroll',
        bottom: -5,
        right:20,
        itemGap: 5,
        pageButtonItemGap:0,
        pageIconColor:"#00fec5",
        pageIconInactiveColor:"#5969fe",
        pageTextStyle:{
            color:"#ffffff",//图例翻页数值颜色
        },
        textStyle: {
            color: "#03faff",//图例文字颜色
        },
        data: (function () {
            var list = [];
            for (var i = 0; i < storeList.length; i++) {
                list.push(storeList[i]);
            }
            return list;
        })()
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        },
        top:"5%",
        right:"10%",
    },
    visualMap: {
        show:false,
        top: 'middle',
        right: 10,
        color: ['#5377fe', '#01f5c3'],
        calculable: true,
        max: 100,
        textStyle:{
            color: "#03faff",
    },
        itemWidth:"15",
        // itemHeight:"80",
    },
    radar: {
        indicator: [
            {text: '档案指数', max: 110},
            {text: '环境指数', max: 110},
            {text: '设备指数', max: 110},
            {text: '报警指数', max: 110},
            {text: '盘点指数', max: 110}
        ],
         shape: 'circle',

        name: {
            textStyle: {
                color: '#03faff'
            }
        },
        axisLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        axisLable: {
            show:true,
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.0)', 'rgba(238, 197, 102, 1)',
                    'rgba(238, 197, 102, 1)', 'rgba(238, 197, 102, 1)',
                    'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitNumber: 4,
        splitArea: {
            show:false,
        },

    },
    series: (function () {
        var series = [];
        for (var i = 0; i < storeList.length; i++) {
            series.push({
                type: 'radar',
                symbol: 'none',
                tooltip: {
                    trigger: 'item'
                },
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 1
                        },
                        areaStyle: {
                            // type: 'default',
                            color:(function () {
                                var x;
                                if(i>=color.length){
                                    x=i-x;
                                }else{
                                    x=i;
                                }
                                return color[x];
                            })(),
                            opacity:0.2,
                        },
                    },
                },
                areaStyle: {type: 'default'},
                data: [
                    {
                        value: [
                            50 + parseInt(Math.random() * (50 - 0 + 1) + 0),
                            50 + parseInt(Math.random() * (40 - 0 + 1) + 0),
                            50 + parseInt(Math.random() * (50 - 0 + 1) + 0),
                            50 + parseInt(Math.random() * (50 - 0 + 1) + 0),
                            50 + parseInt(Math.random() * (30 - 0 + 1) + 0),
                        ],
                        name: storeList[i]
                    }
                ]
            });
        }
        return series;
    })()
};

	myChart.clear();
	// myChart.showLoading();
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}