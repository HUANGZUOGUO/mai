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
			    <span>环境统计</span>
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
				
				<!--图表-->
				<div class="statistical_environmental">
					<div class="statistical_environmental_humiture">
						<div class="statistical_environmental_temperature" id="temsata"></div>
						<div class="statistical_environmental_humidity" id="humsata"></div>
					</div>
					<div class="statistical_environmental_index" id="indexsata"></div>
				</div>
				<!--图表-->
				
			<!--内容-->
		</div>
		<!--主体-->
			
		<!--右边温湿度等-->
	    <div class="sideright">
			<div class="datatitle">
			    <span>实时数据</span>
		    </div>
		    <div class="real_time_data">
			    	<ul class="left_data">
				    	<li>
				    		<div>
				    			<span>25℃</span>
				    			<span>优质</span>
				    		</div>
				    	</li>
				    	<li>
				    		<div>
				    			<span>1.3mg/m3</span>
				    			<span>优质</span>
				    		</div>
				    	</li>
				    	<li>
				    		<div>
				    			<span>1.3mg/m3</span>
				    			<span>优质</span>
				    		</div>
				    	</li>
				    	<li>
				    		<div>
				    			<span>1.8mg/m3</span>
				    			<span id="contamination">轻度污染</span>
				    		</div>
				    	</li>
			    </ul>
			    <ul class="right_data">
				    	<li>
				    		<div>
				    			<span>64%RH</span>
				    			<span>优质</span>
				    		</div>
				    	</li>
				    	<li>
				    	   <div>
					    	   	<span>1.8mg/m3</span>
					    		<span id="contamination">轻度污染</span>
				    	   </div>
				    	</li>
				    	<li>
				    		<div>
				    			<span>1.8mg/m3</span>
				    			<span id="contamination">轻度污染</span>
				    		</div>
				    	</li>
				    	<li>
				    		<div>
				    			<span>1.8mg/m3</span>
				    			<span id="contamination">轻度污染</span>
				    		</div>
				    	</li>
				</ul>
		    </div>
	    </div>
	    <!--右边日历等-->
	</body>
	<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_hjgl.js"></script>
</html>
