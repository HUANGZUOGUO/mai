<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
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
			    <span>操作日志</span>
			</div>
			<!--内容-->
			
				<!--库房选择区域-->
				<div class="btn_warehouse">
					<div class="btn_warehouse_left">
						<div class="btn_warehouse_left_circle">
							<img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_1.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_2.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_4.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_5.png">
						</div>
					</div>
					<!--库房下拉框-->
					<select class="btn_warehouse_select" name="btn_warehouse_select">
						<option value="" selected="selected">选择库房</option>
						<option value="一库房">一库房</option>
						<option value="二库房">二库房</option>
						<option value="三库房">三库房</option>
						<option value="四库房">四库房</option>
						<option  value="五库房">五库房</option>
						<option value="六库房">六库房</option>
						<option value="七库房">七库房</option>
						<option value="八库房">八库房</option>
						<option value="九库房">九库房</option>
						<option value="十库房">十库房</option>
					</select>
					<select class="btn_reservoir_select" name="btn_reservoir_select">
						<option value="" selected="selected">选择库区</option>
						<option value="一库区">一库区</option>
						<option value="二库区">二库区</option>
						<option value="三库区">三库区</option>
						<option value="四库区">四库区</option>
						<option  value="五库区">五库区</option>
						<option value="六库区">六库区</option>
						<option value="七库区">七库区</option>
						<option value="八库区">八库区</option>
						<option value="九库区">九库区</option>
						<option value="十库区">十库区</option>
					</select>
					<!--库房下拉框-->
					<div class="btn_warehouse_right">
						<div class="btn_warehouse_right_circle">
							<img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_1.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_2.png">
						    <img src="${STATIC_URL}/images/web/4.0/data/2/main_left_btn_4.png">
							<img src="${STATIC_URL}/images/web/4.0/data/2/main_right_btn_1.png">
						</div>
					</div>
				</div>
				<!--库房选择区域-->
				
				<!--表格-->
				<table class="table_jlrz">
					<thead>
						<tr>
							<th>名称<i class="decline"></i></th>
							<th>时间<i class="decline"></i></th>
							<th>设备通讯状态<i class="decline"></i></th>
							<th>设备运行状态<i class="decline"></i></th>
							<th>设备异常次数<i class="decline"></i></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>门禁1</td>
							<td>2017-12-11</td>
							<td>良好</td>
							<td>异常</td>
							<td>4</td>
						</tr>
						<tr>
							<td>门禁1</td>
							<td>2017-12-11</td>
							<td>良好</td>
							<td>良好</td>
							<td>4</td>
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
				<!--表格-->
				
			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边数据报表等-->
	    <div class="sideright jlrz_right_bg">
			<div class="datatitle">
			    <span>设备类型</span>
		    </div>
		    <div class="device_type">
		    	   <ul>
		    	   	<li><img src="${STATIC_URL}/images/web/4.0/data/2/body_devstu_mj.png"/></li>
		    	   	<li></li>
		    	   	<li></li>
		    	   	<li></li>
		    	   	<li></li>
		    	   	<li></li>
		    	   </ul>
		    	   <ul>
		    	   	<li class="door_btn"></li>
		    	   	<li class="borrow_btn"></li>
		    	   	<li class="access_btn"></li>
		    	   	<li class="rfid_btn"></li>
		    	   	<li class="operation_btn"></li>
		    	   	<li class="maintain_btn"></li>
		    	   </ul>
		    </div>
		    <div class="video_linkage">
		    	    <div class="datatitle  video_title">
			    		<span>视频联动</span>
		    		</div>
		    		<div class="video_player"></div>
		    </div>
	    </div>
	    <!--右边数据报表等-->
	</body>
	<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_jlrz.js"></script>
</html>
