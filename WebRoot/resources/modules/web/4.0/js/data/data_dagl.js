$(document).ready(function () {
	amstype();
	security();
	keepyear();
	amsinout();
	amsborrowback();
});

//档案类型
function amstype() {
    var myChart = echarts.init(document.getElementById("record_statistical")),

    // 指定图表的配置项和数据
    option = {
        color: [
            "#5969fe",
            "#00f8fe",
            "#2b8dff",
            "#00f9ff",
            "#5377fe",
            "#00fec5",
            "#1ec9fc",
            "#00bb90",

        ],
        title:{
        		show: true,
        		text: '档案类型统计图',
        		textStyle:{
        			color: '#FAF560',
        			fontStyle:'',
        			fontSize: 18,
        			fontFamily: 'PingFangSC-Light',
        			
        		}
        },
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },
        //图例
        legend:{
            show: true,
            type:"scroll",//多图例翻页
            right:"5%",
            bottom:"1%",
            left:"5%",
            itemGap: 5,
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
            data:["一库房","二库房","三库房","四库房","五库房","六库房","七库房","八库房","九库房","十库房","十一库房","十二库房"],
        },
        toolbox: {
            feature: {
                saveAsImage: {
                	backgroundColor : '#010102',
                }
            },
            top:"5%",
            right:"5%",
        },
        angleAxis: {
            axisLine:{
                lineStyle:{
                    color: '#65450f',//坐标轴颜色
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#f5a623",//刻度线颜色
                },
            },
            axisLabel:{
                color:"#03faff"//刻度标签颜色
            },
            splitLine: {
                lineStyle: {
                    color: "#65450f",//区域刻度线
                },
            }
        },
        radiusAxis: {
            // nameLocation:'center',
            type: 'category',
            data: ["文书档案","声像档案","会计档案","科技档案","实物档案","人事档案"],
            z: 10,
            axisLine:{
                show: true,
                symbol: 'none',
                symbolSize: [10, 15],
                 lineStyle: {
                    color: '#f5a623',//坐标轴颜色
                },
             },
            axisTick: {
                lineStyle: {
                   color: "#f5a623",//刻度线颜色
                },
            },
            axisLabel:{
                color:"#f5a623"//刻度标签颜色
            },
        },
        polar: {

        },


        animationDuration:5000,
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4,6,9],
            coordinateSystem: 'polar',
            name: '一库房',
            stack: 'a',
        }, {
            type: 'bar',
            data: [2, 4, 6, 8,2, 3],
            coordinateSystem: 'polar',
            name: '二库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 3,4,6,9,3],
            coordinateSystem: 'polar',
            name: '三库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4, 6, 8,2,3, 4],
            coordinateSystem: 'polar',
            name: '四库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4,6,9,2, 3, 4],
            coordinateSystem: 'polar',
            name: '五库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3,4,6,9,],
            coordinateSystem: 'polar',
            name: '六库房',
            stack: 'a'
        },{
            type: 'bar',
            data: [1, 2, 3, 4,6,9],
            coordinateSystem: 'polar',
            name: '七库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8,2, 3],
            coordinateSystem: 'polar',
            name: '八库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 3,4,6,9,3],
            coordinateSystem: 'polar',
            name: '九库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4, 6, 8,2,3, 4],
            coordinateSystem: 'polar',
            name: '十库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4,6,9,2, 3, 4],
            coordinateSystem: 'polar',
            name: '十一库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3,4,6,9,],
            coordinateSystem: 'polar',
            name: '十二库房',
            stack: 'a'
        }]
    };
    myChart.clear();
    // myChart.showLoading();
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
//保密等级
function security() {
    var myChart = echarts.init(document.getElementById("intensive")),

    // 指定图表的配置项和数据
    option = {
        color: [
            "#5969fe",
            "#00f8fe",
            "#2b8dff",
            "#00f9ff",
            "#5377fe",
            "#00fec5",
            "#1ec9fc",
            "#00bb90",

        ],
        title:{
        		show: true,
        		text: '保密等级统计图',
        		textStyle:{
        			color: '#FAF560',
        			fontStyle:'',
        			fontSize: 18,
        			fontFamily: 'PingFangSC-Light',
        			
        		}
        },
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },
        //图例
        legend:{
            show: true,
            type:"scroll",//多图例翻页
            right:"6%",
            bottom:"1%",
            left:"5%",
            itemGap: 5,
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
            data:["一库房","二库房","三库房","四库房","五库房","六库房","七库房","八库房","九库房","十库房","十一库房","十二库房"],
        },
        toolbox: {
            feature: {
                saveAsImage: {
                	backgroundColor : '#010102',
                }
            },
            top:"5%",
            right:"5%",
        },
        angleAxis: {
            axisLine:{
                lineStyle:{
                    color: '#65450f',//坐标轴颜色
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#f5a623",//刻度线颜色
                },
            },
            axisLabel:{
                color:"#03faff"//刻度标签颜色
            },
            splitLine: {
                lineStyle: {
                    color: "#65450f",//区域刻度线
                },
            }
        },
        radiusAxis: {
            // nameLocation:'center',
            type: 'category',
            data: ["普通","秘密","机密","绝密"],
            z: 10,
            axisLine:{
                show: true,
                symbol: 'none',
                symbolSize: [10, 15],
                 lineStyle: {
                    color: '#f5a623',//坐标轴颜色
                },
             },
            axisTick: {
                lineStyle: {
                   color: "#f5a623",//刻度线颜色
                },
            },
            axisLabel:{
                color:"#f5a623"//刻度标签颜色
            },
        },
        polar: {

        },


        animationDuration:5000,
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: '一库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: '二库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 3,4,6],
            coordinateSystem: 'polar',
            name: '三库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4, 6, 8,2],
            coordinateSystem: 'polar',
            name: '四库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4,6,9,2],
            coordinateSystem: 'polar',
            name: '五库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3,4],
            coordinateSystem: 'polar',
            name: '六库房',
            stack: 'a'
        },{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: '七库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: '八库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 3,4,6],
            coordinateSystem: 'polar',
            name: '九库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4, 6, 8,2],
            coordinateSystem: 'polar',
            name: '十库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4,6,9,2],
            coordinateSystem: 'polar',
            name: '十一库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3,4],
            coordinateSystem: 'polar',
            name: '十二库房',
            stack: 'a'
        }]
    };
    myChart.clear();
    // myChart.showLoading();
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
//保管年限
function keepyear() {
    var myChart = echarts.init(document.getElementById("agelimit")),

    // 指定图表的配置项和数据
    option = {
        color: [
            "#5969fe",
            "#00f8fe",
            "#2b8dff",
            "#00f9ff",
            "#5377fe",
            "#00fec5",
            "#1ec9fc",
            "#00bb90",

        ],
        title:{
        		show: true,
        		text: '保管年限统计图',
        		textStyle:{
        			color: '#FAF560',
        			fontStyle:'',
        			fontSize: 18,
        			fontFamily: 'PingFangSC-Light',
        			
        		}
        },
        tooltip: {
            trigger: 'item',
            backgroundColor : 'rgba(0,0,250,0.2)'
        },
        //图例
        legend:{
            show: true,
            type:"scroll",//多图例翻页
            right:"6%",
            bottom:"1%",
            left:"5%",
            itemGap: 5,
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
            data:["一库房","二库房","三库房","四库房","五库房","六库房","七库房","八库房","九库房","十库房","十一库房","十二库房"],
        },
        toolbox: {
            feature: {
                saveAsImage: {
                	backgroundColor : '#010102',
                }
            },
            top:"5%",
            right:"5%",
        },
        angleAxis: {
            axisLine:{
                lineStyle:{
                    color: '#65450f',//坐标轴颜色
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#f5a623",//刻度线颜色
                },
            },
            axisLabel:{
                color:"#03faff"//刻度标签颜色
            },
            splitLine: {
                lineStyle: {
                    color: "#65450f",//区域刻度线
                },
            }
        },
        radiusAxis: {
            // nameLocation:'center',
            type: 'category',
            data: ["10年","30年","短期","长期","永久"],
            z: 10,
            axisLine:{
                show: true,
                symbol: 'none',
                symbolSize: [10, 15],
                 lineStyle: {
                    color: '#f5a623',//坐标轴颜色
                },
             },
            axisTick: {
                lineStyle: {
                   color: "#f5a623",//刻度线颜色
                },
            },
            axisLabel:{
                color:"#f5a623"//刻度标签颜色
            },
        },
        polar: {

        },


        animationDuration:5000,
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4,6],
            coordinateSystem: 'polar',
            name: '一库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8,6],
            coordinateSystem: 'polar',
            name: '二库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 3,4,6,6],
            coordinateSystem: 'polar',
            name: '三库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4, 6, 8,2,6],
            coordinateSystem: 'polar',
            name: '四库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4,6,9,2,6],
            coordinateSystem: 'polar',
            name: '五库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3,4,6],
            coordinateSystem: 'polar',
            name: '六库房',
            stack: 'a'
        },{
            type: 'bar',
            data: [1, 2, 3, 4,6],
            coordinateSystem: 'polar',
            name: '七库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8,6],
            coordinateSystem: 'polar',
            name: '八库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 3,4,6,6],
            coordinateSystem: 'polar',
            name: '九库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4, 6, 8,2,6],
            coordinateSystem: 'polar',
            name: '十库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [4,6,9,2,6],
            coordinateSystem: 'polar',
            name: '十一库房',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3,4,6],
            coordinateSystem: 'polar',
            name: '十二库房',
            stack: 'a'
        }]
    };
    myChart.clear();
    // myChart.showLoading();
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
//档案出入库统计
function amsinout() {
    var myChart = echarts.init(document.getElementById("sideright_diagram_top")),

    option = {
    	color: [
            "#00fec5",
            "#00f8fe",
            "#1ec9fc",
            "#00bb90",

        ],
        title:{
    		show: true,
    		text: '档案出入库统计图',
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
            data: ['档案出库','档案入库'],
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
                        color:"#1EC9FC",
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
//档案借还统计
function amsborrowback() {
    var myChart = echarts.init(document.getElementById("sideright_diagram_bottom")),

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