var starOpenChanal = 1;// 预览窗口数量
var openWinNum = 1;// 几宫格
var vmsList = new Array();
$(document).ready(function(){
	clickLogin();
	rfidinfo();
	$("#roll_qdsq").on("click","li td",function() {
		$("#amsactlog").empty();
		var pagetime=$(this).children().eq(0).html()
		rifdpd()
	})
	
})

function rfidinfo(){
	Ajax.custom({
		url : config.getRfidIntyByday,
		data : {
			time : "2017-10",
		},// 传递参数
		type : 'POST'
	}, function(data) {
			for(var i=0;i<data.data.one.length;i++){
				data.data.one[i].sttime=new Date(
						data.data.one[i].ctime - 30000)
				.format("yyyy-MM-dd hh:mm:ss");
				data.data.one[i].entime=new Date(
						data.data.one[i].ctime + 30000)
				.format("yyyy-MM-dd hh:mm:ss");
				$("#roll_qdsq").append(
					"<tr onclick='rifdpd(this)'><td>"+data.data.one[i].time+"</td>"+
					"<td>"+data.data.one[i].a+"</td>"+
					"<td>"+data.data.one[i].b+"</td>"+
					"<td>"+data.data.one[i].c+"</td>"+
					"<td>"+data.data.one[i].d+"</td>"+
					"<td onclick='clickStartPlaybackindex("+"\""+data.data.one[i].sttime+"\",\""+data.data.one[i].entime+"\""+")' ><img src='../../resources/images/web/4.0/video/icon_shape.png'  class='select'/></td></tr>"	
				)
			}
	});
}
function rifdpd(ent){
	$("#amsactlog").empty();
	var pagetime=$(ent).children().eq(0).html()
	Ajax.custom({
		url : config.getRfidByType,
		data : {
			time:pagetime,
			type:"-1"
		},// 传递参数
		type : 'POST'
	}, function(data) {
		for(var i=0;i<data.data.rfid.length;i++){
			$("#amsactlog").append(
				"<tr onclick='rifdpdById(this)'><td>"+data.data.rfid[i].rfidIntyId+"</td>"+
				"<td>"+data.data.rfid[i].tittle+"</td>"+
				"<td>"+data.data.rfid[i].type+"</td>"+
				"<td>"+data.data.rfid[i].status+"</td>"+
				"<td>"+data.data.rfid[i].time+"</td></tr>"	
			)
		}
	})
	}
function rifdpdById(ent){
	var rfidIntyId=$(ent).children().eq(0).html()
	Ajax.custom({
		url : config.getRfidById,
		data : {
		id:rfidIntyId,
		},// 传递参数
		type : 'POST'
	}, function(data) {
		$(".ranking").eq(0).html(data.data.tittle);
		$(".ranking").eq(1).html(data.data.archiveno);
		$(".ranking").eq(2).html(data.data.archiveId);
		$(".ranking").eq(3).html(data.data.type);
		$(".ranking").eq(4).html(data.data.storeplace);
		$(".ranking").eq(5).html(data.data.ctime);
	})
	
}
//视频回放
function clickStartPlaybackindex(szStartTime, szEndTime) {
	g_iWndIndex = 0;// 默认第一个窗口
	changeWndNum(1);// 显示一个窗口
	clickStartPlayback(szStartTime, szEndTime);
}