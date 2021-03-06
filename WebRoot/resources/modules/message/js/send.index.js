var userList = null;
var messageList = null;
$(document).ready(function() {
//获取用户列表
	
	$.ajax({
		url:BASE_URL + '/adminUser/getUserList',
		dataType:'JSON',
		data:{ },
		type:'POST',
		async:false,
		complete:function(response){
			userList = response.responseJSON.data;
			
		}
	});
	//获取消息
	
	$.ajax({
		url:BASE_URL + '/messageInfo/getMessageList',
		dataType:'JSON',
		data:{ },
		type:'POST',
		async:false,
		complete:function(response){
			messageList = response.responseJSON.data;
			loadDataGridContent(columnsDefined(), 'formatData');
		}
	});
	

	/**
	 * 刷新或搜索
	 */
	$('body').delegate('.action-refresh, #action_search', 'click', function() {
		$('#content_listing').datagrid('reload');
	});

	/**
	 * 关键字搜索 - 支持回车
	 */
	$("input[name=key]").on('keypress', function(event) {
		if (event.which == '13') {
			$('#content_listing').datagrid('reload');
			return false;
		}
	});

	/**
	 * 单个删除
	 */
	$('body').delegate('.operate-delete', 'click', function() {
		var del = confirm('确定要删除吗？');
		if (!del) {
			return false;
		}
		
				var sendId = $(this).attr("sendId");
		
		/* 执行 */
		$.ajax({
			type : 'post',
			url : BASE_URL + '/messageSend/delete',
			data : 'sendId=' + sendId,
			dataType : 'json',
			timeout : 10000,
			async:false,
			success : function(data) {
				if (data.status == 0) {
					$('#content_listing').datagrid('reload');
				} else {
					alert(data.msg);
				}
				return false;
			}
		});
	});
});

function columnsDefined() {
	return [
				{
					property: '_query',
					label: ''
				},
				/*{
					property : 'sendId',
					label : '主键ID',
					sortable : false
				},*/
				{
					property : 'messageId',
					label : '消息',
					sortable : false
				},
				{
					property : 'userId',
					label : '用户',
					sortable : false
				},
				{
					property : 'isDel',
					label : '删除标示',
					sortable : false
				},
				{
					property : 'creator',
					label : '发送人',
					sortable : false
				},
				{
					property : 'ctime',
					label : '发送时间',
					sortable : false
				},
				/*{
					property : 'modifier',
					label : '修改人',
					sortable : false
				},
				{
					property : 'mtime',
					label : '最后一次更新时间',
					sortable : false
				},*/
				{
					property : '_action',
					label : '操作',
					sortable : false
				} 
			];
}

function formatData(items) {
	$.each(items, function(index, item) {
		item._query = '<a href="'+BASE_URL + '/messageSend/detail?sendId=' + item.sendId + '"  class="modal-detail"><i class="fa fa-search-plus" title="查看详情"></i></a>';
		item._action = '<a href="' + BASE_URL + '/messageSend/edit?sendId=' + item.sendId
				+ '" class="operating-edit" title="编辑"><i class="fa fa-pencil"></i></a>&nbsp;&nbsp;'
				+ '<a href="javascript:;" class="operate-delete" id="sendId_' + item.sendId + '" sendId="' + item.sendId
				+ '" title="删除"><i class="fa fa-trash-o"></i></a>';


		var strIsDel = '未知';
		if (item.isDel == 0) {
			strIsDel = '否';
		} else if (item.isDel == 1) {
			strIsDel = '是		';
		}
        item.isDel = strIsDel;
		item.ctime = dateConverter(item.ctime, PATTERN_ENUM.datetime);
		item.mtime = dateConverter(item.mtime, PATTERN_ENUM.datetime);
		
					for(var i=0;i<userList.length;i++){
			        	if(item.userId==userList[i].userId){
			        		item.userId=userList[i].fullname;
			        		break;
			        	}
			        }
			        for(var i=0;i<messageList.length;i++){
			        	if(item.messageId==messageList[i].messageId){
			        		item.messageId=messageList[i].title;
			        		break;
			        	}
			        }
	});
}