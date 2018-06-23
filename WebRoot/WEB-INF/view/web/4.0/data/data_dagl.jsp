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
			<div class="datamain dagl_bg">
				<div class="datatitle">
					<span>档案统计</span>
				</div>
				<!--内容-->
				<div class="mainWrapper">
					<div class="inmainwrapper">
						<!--档案类型统计图-->
						<div class="record_statistical" id="record_statistical">
							<!-- <h5>档案类型统计图</h5>
							<div class="record_content">
								<ul>
									<li>一库房</li>
									<li>二库房</li>
									<li>三库房</li>
									<li>四库房</li>
								</ul>
							<div class="circleProgress_wrapper">
						    </div>
							</div>
							    <ul>
									<li><i></i>文书档案</li>
									<li><i clss="science"></i>科技档案</li>
									<li><i class="sound"></i>声像档案</li>
									<li><i class="accountant"></i>会计档案</li>
									<li><i class="administrative"></i>行政档案</li>
								</ul> -->
							</div>
							<!--档案类型统计图-->
							
							<!--密极统计图-->
							<div class="intensive" id="intensive">
								<!-- <h5>密级统计图</h5>
								<div class="intensive_content">
									<ul>
										<li>一库房</li>
										<li>二库房</li>
										<li>三库房</li>
										<li>四库房</li>
									</ul>
									<div class="circleProgress_wrapper_2">
									</div>
								</div>
								<ul>
										<li><i></i>普通</li>
										<li><i class="secret"></i>秘密</li>
										<li><i class="secret_jm"></i>机密</li>
										<li><i class="secret_highest"></i>绝密</li>
								</ul> -->
							</div>
							<!--密极统计图-->
							
							<!--年限统计图-->
							<div class="agelimit" id="agelimit">
								<!-- <h5>年限统计图</h5>
								<div class="agelimit_content">
									<ul>
										<li>一库房</li>
										<li>二库房</li>
										<li>三库房</li>
										<li>四库房</li>
									</ul>
									<div class="circleProgress_wrapper_3">
									</div>
								</div>
								<ul>
									<li><i></i>永久</li>
									<li><i class="secret"></i>长期</li>
									<li><i class="secret_jm"></i>短期</li>
									<li><i class="secret_highest"></i>30年</li>
									<li><i class="secret_decade"></i>10年</li>
								</ul> -->
							</div>
							<!--年限统计图-->
						</div>
						<!--分类图-->
						<ul class="mainWrapper_btn">
						   <li><a href="" class="btn_classification"></a></li>
						   <li><a href="" class="btn_thermodynamic"></a></li>
						   <li><a href="" class="btn_thick"></a></li>
						   <li><a href="" class="btn_flow "></a></li>
						</ul>
						<!--分类图-->
					</div>
					<!--内容-->
				</div>	
			<!--主体-->
			
			<!--右边柱形图-->
			    <div class="sideright">
			      	<div class="datatitle">
			      		<span>档案状况</span>
			      	</div>
			      	<h5>总馆藏量<span>28633848卷</span></h5>
			      	<div class="sideright_diagram_top" id="sideright_diagram_top">
			      		<%-- <h5>档案出入库统计图</h5>
			      		<div><img src="${STATIC_URL}/images/web/4.0/data/2/sideright_diagram_top.png"></div>
			      		<ul>
			      			<li><i class="sideright_diagram_top_jx-1"></i>总计</li>
			      			<li><i class="sideright_diagram_top_jx-2"></i>当日</li>
			      		</ul> --%>
			      	</div>
			      	<div class="sideright_diagram_top sideright_diagram_bottom" id="sideright_diagram_bottom">
			      		<%-- <h5>档案借还库统计图</h5>
			      		<div><img src="${STATIC_URL}/images/web/4.0/data/2/sideright_diagram_top.png"></div>
			      		<ul>
			      			<li><i class="sideright_diagram_top_jx-1"></i>总计</li>
			      			<li><i class="sideright_diagram_top_jx-2"></i>当日</li>
			      		</ul> --%>
			      	</div>
			    </div>
		 	<!--右边柱形图-->
	</body>
<script type="text/javascript" src="${STATIC_URL}/modules/web/4.0/js/data/data_dagl.js"></script>
</html>
