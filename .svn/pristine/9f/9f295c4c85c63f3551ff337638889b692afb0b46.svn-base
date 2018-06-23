var config = {
	// 当前第几页，从0开始
	begin : 0,
	// 默认分页大小
	count : 10,
	projectName:location.pathname.substring(0,location.pathname.substr(1).indexOf('/')+1),
	// 项目根目录
	serverPath:location.protocol + '//' + location.host,
	// web端服务器请求地址
	server : location.protocol + '//' + location.host+ "/web/",
	// 接口地址
	interfaceServer : location.protocol + '//' + location.host+ '/web/',
	// 静态页面跳转地址
    jumpServer:location.protocol + '//' + location.host+ '/webJump/'
};

if (location.href.indexOf(config.projectName) != -1) {
	// 项目根目录
	config.serverPath = location.protocol + '//' + location.host + config.projectName;
	// web端服务器请求地址
	config.server = location.protocol + '//' + location.host + config.projectName+"/web/",
	// 接口地址
	config.interfaceServer = location.protocol + '//' + location.host + config.projectName + '/web/',
	// 静态页面跳转地址
	config.jumpServer = location.protocol + '//' + location.host + config.projectName + '/webJump/';
}
/** ********************静态页面跳转管理地址--begin--**************************** */
// 首页跳转地址
config.index = config.jumpServer+"index";
//馆藏量跳转地址
config.holding = config.jumpServer+"holding";
//库房平面图跳转地址
config.layout = config.jumpServer+"layout";
//温湿度跳转地址
config.humiture = config.jumpServer+"humiture";
//视频跳转地址
config.video = config.jumpServer+"video";
//档案出入跳转地址
config.archive = config.jumpServer+"archive";
//报警跳转地址
config.alarm = config.jumpServer+"alarm";
//后台跳转地址
config.service = config.serverPath+"/service";
//能耗跳转地址
config.ecs = config.jumpServer+"ecs";
//rfid跳转地址
config.rfid = config.jumpServer+"rfid";
//rfid盘点跳转地址
config.rfidpd = config.jumpServer+"rfidpd";
/** ********************静态页面跳转管理地址--end--****************************** */

/** ********************动态数据异步加载管理地址--begin--************************* */
// 加载最新报警数据
config.getNewAlarmList = config.interfaceServer+"alarm/getNewAlarmList";
// 加载最新档案操作数据
config.getNewAmsActLogList = config.interfaceServer+"amsActlog/getNewAmsActLogList";
// 加载馆藏量数据
config.getNewHolding = config.interfaceServer+"holding/getNewHolding";
// 加载温湿度数据
config.getNewHumiture = config.interfaceServer+"humiture/getNewHumiture";
// 加载馆藏量基础统计数据数量（库房，密集架，档案）
config.getBaseNum = config.interfaceServer+"holding/getBaseNum";
// 加载馆藏量获取档案统计数据
config.getAmsSatas = config.interfaceServer+"holding/getAmsSatas";
// 加载库房温湿度报表
config.getHumitureReport = config.interfaceServer+"humiture/getHumitureReport";
// 加载库房温湿度报表
config.getHumiturexlsReport = config.interfaceServer+"humiture/toexcel";
// 获取库房档案进出统计
config.getNewInOutAms = config.interfaceServer+"archive/getNewInOutAms";
// 获取待执行档案列表
config.getNewAuditAms = config.interfaceServer+"archive/getNewAuditAms";
// 获取报警统计
config.getAlarmSata = config.interfaceServer+"alarm/getAlarmSata";
// 获取未处理报警列表
config.searchList = config.interfaceServer+"alarm/searchList";
// 处理报警
config.handleAlarm = config.interfaceServer+"alarm/handle";
// 获取视频设备基础数据
config.getVideoList = config.interfaceServer+"video/getVideoList";
// 获取视频连接属性
config.getVideoLinkVal = config.interfaceServer+"video/getVideoLinkVal";
// 获取视频通道号
config.getDeviceChanal = config.interfaceServer+"video/getDeviceChanal";
//获取指定展示的视频列表
config.getFixVideoList = config.interfaceServer+"video/getFixVideoList";
//视频插件下载
config.getVideoplugin = config.interfaceServer+"video/getVideoplugin";
// 设备操作
config.operateDevice = config.interfaceServer+"layout/operateDevice";
// 馆能耗页数据
config.getTotalData = config.interfaceServer+"ecs/getTotalData";
// 馆能耗类型统计数据
config.getTypeEcs = config.interfaceServer+"ecs/getTypeEcs";
// 馆能耗库房统计数据
config.getStoreEcs = config.interfaceServer+"ecs/getStoreEcs";
// 馆能耗库房统计数据
config.getNewIntyList = config.interfaceServer+"rfid/getNewIntyList";
//获取rfid盘点记录
config.getRfidIntyByday = config.serverPath+"/rfidInty/getRfidIntyByday";
//获取档案与rfid的总数
config.getRfid = config.serverPath+"/rfidInty/getRfid";
// 按类型查询rfid信息
config.getRfidByType = config.serverPath+"/rfidInty/getRfidByType";
//获取最新rfid记录
config.getNewRfid = config.serverPath+"/rfidInty/getNewRfid";
//按库房查询档案的总藏量
config.getCountAms = config.serverPath+"/amsArchives/getCountAms";
//获取库房列表
config.getStoreList = config.serverPath+"/wmsStore/getWmsStore";

/** ********************动态数据异步加载管理地址--end----************************* */

