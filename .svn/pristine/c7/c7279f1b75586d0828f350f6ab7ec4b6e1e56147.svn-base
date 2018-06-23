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
			    <span>报警TOP榜</span>
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
				
				<!--TOP数据报表榜-->
				<div class="top_data_statement">
				   <div class="top_statement">
					   	<div class="top_year_statement" id="alarmyear"></div>
						<div class="top_quarter_statement"  id="alarmquarter"></div>
				   </div>
				   <div class="top_monthly_statement"  id="alarmmonth"></div>	
				</div>
				<!--TOP数据报表榜-->
				
				<!--摄像头报警-->
				<div class="camera">
				<div class="datatitle">
			    <span>报警信息</span>
				</div>
				  <div class="camera_police">
				  	<div class="camera_police_left">
				  		<p>NO.1<i class="ranking">摄像头4：报警24次</i></p>
					  	<p>NO.2<i class="ranking">摄像头3：报警23次</i></p>
					  	<p>NO.3<i class="ranking">摄像头6：报警22次</i></p>
				  	</div>
				  	<div class="camera_police_right">
				  		<p>NO.4<i class="ranking">摄像头7：报警21次</i></p>
					  	<p>NO.5<i class="ranking">摄像头2：报警18次</i></p>
					  	<p>NO.6<i class="ranking">摄像头9：报警15次</i></p>
				  	</div>
				  </div>
				</div>
			    <!--摄像头报警-->
			    
			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边异常指数等-->
	    <div class="sideright sbjc_sideright">
			<div class="datatitle">
			    <span>异常指数</span>
		    </div>
		    <div class="abnormal_index" id="alarmindex"></div>
			 <div class="forecast">
			 	<div class="datatitle">
			   		 <span>智能预警</span>
		    		</div>
		    		<div class="early_warning">
		    			<p><i class="text_font_size">温湿度数据</i>超标次数较高</p>
		    			<p><i class="text_font_color">2017年度</i>共计超标<i>88</i>次</p>
		    			<p>请注意排查问题</p>
		    			<p>消防设备报警处理速度较慢</p>
		    			<p>为消除安全隐患，请及时处理</p>
		    		</div>
			 </div>
			 <div class="essential_information">
			 	<div class="datatitle">
			   		 <span>报警列表</span>
		    		</div>
		    		<!--表格-->
		    		<table class="police_list">
					<thead>
						<tr>
							<th>报警地点<i class="decline"></i></th>
							<th>报警时间<i class="decline"></i></th>
							<th>报警类型<i class="decline"></i></th>
							<th>操作<i class="decline"></i></th>
						</tr>
					</thead>
					<tbody id="roll">
						<tr>
							<td>门禁1</td>
							<td>2017-12-11</td>
							<td>非法刷卡</td>
							<td>
								<img src="${STATIC_URL}/images/web/4.0/data/2/ycbj_wrong_icon.png" class="select"/>
							</td>
						</tr>
						<tr>
							<td>门禁1</td>
							<td>2017-12-11</td>
							<td>非法刷卡</td>
							<td>
								<img src="${STATIC_URL}/images/web/4.0/data/2/ycbj_correct_icon.png" class="select"/>
							</td>
						</tr>
						<tr>
							<td>门禁1</td>
							<td>2017-12-11</td>
							<td>非法刷卡</td>
							<td>
								<img src="${STATIC_URL}/images/web/4.0/data/2/ycbj_wrong_icon.png" class="select"/>
							</td>
						</tr>
						<tr>
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
						</tr>
						<tr>
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
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>
								<form class="page_btn  police_page_btn">
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
			 </div>
	    </div>
	    <!--右边异常指数等-->
	</body>
	<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_ycjc.js"></script>
</html>
