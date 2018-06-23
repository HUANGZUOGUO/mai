<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<%@ include file="/WEB-INF/view/web/4.0/common/resource.jsp"%>
		<title></title>
	</head>
	<body>
		<!--主体-->
		<div class="datamain">
			<div class="datatitle">
			    <span>还档操作</span>
			</div>
			<!--内容-->
			
				<!--档案查询区域-->
				<form class="file_query">
					<span>档案查询</span>
					<input name="" type="text" placeholder="请输入档案号" class="input-box" />
   					 <input name="" type="submit" value="" class="button" />
				</form>
				<!--档案查询区域-->
				
				<!--表格-->
				<table class="table_sbjc archive_table">
					<thead>
						<tr>
							<th>档案编号<i class="decline"></i></th>
							<th>档案名称<i class="decline"></i></th>
							<th>档案类型<i class="decline"></i></th>
							<th>档案位置<i class="decline"></i></th>
							<th>档案密极<i class="decline"></i></th>
							<th>选择</th>
						</tr>
					</thead>
					<tbody id="roll_qdsq">
						<tr>
							<td>x193847467</td>
							<td>2016房产档案001-2016年档案</td>
							<td>文书档案</td>
							<td>二库房一库区第4列R面第2层第2格</td>
							<td>绝密</td>
							<td>
								<img src="${STATIC_URL}/images/web/4.0/ams/icon_select.png"  class="select"/>
							</td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>
								<form class="page_btn">
									<a href="#">首页</a>
									<button  type="button" class="left_btn"></button>&nbsp;
									<input type="text" name="text"  value="1"  class="figure">&nbsp;
								    <button  type="button" class="right_btn"></button>	
								    <a href="#">尾页</a>
								    <span>共计&nbsp;<i>40</i>&nbsp;页</span>
								    <span>&nbsp;<i>30</i>&nbsp;条数据</span>
								</form>
							</td>	
						</tr>
					</tfoot>
				</table>
				<form class="check_all">
					<label><input type="checkbox" name="transcoding" value="" />全选</label>
				</form>
				<!--表格-->
				
				<!--档案详情-->
				<div class="camera particulars" id="device_camera">
					<div class="datatitle">
			    			<span>档案详情</span>
					</div>
				  	<div class="camera_police particulars_police">
					  	<div class="camera_police_left ">
					  		<p>档案名称：<i class="ranking">2016房产档案001-2016年档案</i></p>
						  	<p>保管年限：<i class="ranking">30年</i></p>
						  	<p>RFID号：<i class="ranking">33</i></p>
					  	</div>
				  	    <div class="camera_police_right">
					  		<p>现有数量：<i class="ranking">1</i></p>
						  	<p>总数量：<i class="ranking">4</i></p>
						  	<p>其他相关档案：<i class="ranking">33卷</i></p>
				  		</div>
				  	</div>
				</div>
				<!--档案详情-->
			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边已选档案等-->
	    <div class="sideright">
			<div class="datatitle">
			    <span>已选档案</span>
		    </div>
			      	<!--表格-->
		    		<table class="police_list selected">
					<thead>
						<tr>
							<th>出入人员<i class="decline"></i></th>
							<th>出入时间<i class="decline"></i></th>
							<th>门禁名称<i class="decline"></i></th>
							<th>类型<i class="decline"></i></th>
							<th>视频<i class="decline"></i></th>
						</tr>
					</thead>
					<tbody id="roll_qdsq_right">
						<tr>
							<td>某某某</td>
							<td>2017-12-11</td>
							<td>非法刷卡</td>
							<td>进入</td>
							<td><i></i></td>
						</tr>
						<tr>
							<td>某某某</td>
							<td>2017-12-11</td>
							<td>非法刷卡</td>
							<td>进入</td>
							<td><i></i></td>
						</tr>
						<tr>
							<td>某某某</td>
							<td>2017-12-11</td>
							<td>非法刷卡</td>
							<td>进入</td>
							<td><i></i></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<!--表格-->
				<form>
			      		<input type="button" value="确认还档" class="timing_btn">
			      	</form>
	    </div>
	    <!--右边已选档案等-->
	</body>
<%-- <script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_dagl.js"></script> --%>
</html>
