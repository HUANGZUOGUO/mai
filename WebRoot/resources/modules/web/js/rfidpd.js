var rfidtype=-1;
var getpage=1
var storeId=0;
var pagetime=0
jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
jQuery(".slideTxtBox").slide({trigger:"click"});
$(document).ready(function(){
	getSession();
	getRfidList();
	$("#warehouse-all").click(function(){ 
		$("#nowpage").val(1);
		rfidtype=-1;
		getRfidList()
	});

	$("#warehouse-in").click(function(){ 
		$("#nowpage").val(1);
		rfidtype=0;
		getRfidList();		
	});
	getRfidList()
	$("#warehouse-out").click(function(){ 
		$("#nowpage").val(1);
		rfidtype=1;
		getRfidList();
	});

	$("#warehouse-wro").click(function(){ 
		$("#nowpage").val(1);
		rfidtype=2;
		getRfidList();	
	});
	$("#firstpage").click(function(){ 
		$("#nowpage").val(1);
		getRfidList()
	});
	$("#lastpage").click(function(){ 
		$("#nowpage").val(getpage);
		getRfidList()
	});
	$("#arc_b_prev").click(function(){ 
		var page=$("#nowpage").val();
		if(page>1){
			$("#nowpage").val(--page);
		}
		getRfidList()
	});
	$("#arc_b_next").click(function(){ 
		var page=$("#nowpage").val();
		if(page<getpage){
			$("#nowpage").val(++page);
		}
		getRfidList()
	});
	$(".search-box__button").click(function(){ 
		$("#nowpage").val(1);
		getRfidList()
	});
})
//获取库房盘点数据
function getRfidList(){
	pagetime=$("#nyr").val();
	var search=$(".search-box__input").val();
	if(search !=""){
		var page=$("#nowpage").val();
		Ajax.custom({
			url : config.getRfidByType,
			data : {
				time:pagetime,
				storeId:storeId,
				tittle:search,
				type:rfidtype,
				page:page
			},// 传递参数
			type : 'POST'
		}, function(data) {
			$("#extra").html(template.render("extra-text", {
				list : data.data.rfid,
			}));
			getpage= Math.ceil(data.data.page/5)
			$("#totlePageCount").html("共计"+getpage+"页&nbsp;"+data.data.page+"条数据")
		})
		return;
	}
	var page=$("#nowpage").val();
	Ajax.custom({
		url : config.getRfidByType,
		data : {
			time:pagetime,
			storeId:storeId,
			type:rfidtype,
			page:page
		},// 传递参数
		type : 'POST'
	}, function(data) {
		$("#extra").html(template.render("extra-text", {
			list : data.data.rfid
		}));
		getpage= Math.ceil(data.data.page/5)
		$("#totlePageCount").html("共计"+getpage+"页&nbsp;"+data.data.page+"条数据")
	})
	}

//初始化年月日与库区
function getSession(){
	storeId=$("#storeName").attr("class");
	pagetime=$("#nyr").val();
	$("#storeName").html(storeName);
}
function showInfo() {
	getRfidList()
}