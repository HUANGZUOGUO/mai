<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 引入资源文件 -->
<%@ include file="/WEB-INF/view/web/common/resource.jsp"%>
<title>智慧馆库系统</title>
</head>
<body>
<!-- 引入头部文件 -->
<%@ include file="/WEB-INF/view/web/common/header.jsp"%>
		<!--表单-->
		<div class="article ">
			<div class="archives">
				<h2>
                  <img alt="" title="" src="http://122.227.168.14:8089/bis_app/resources/images/web/i_dangacr_act_icon.png"> 盘点智能盘点 
                </h2>
                <div class="outBox">
                	<div class="hd">
                	  <ul>
	                 	<li id="month">
	                 		<h2>月度盘点
	                 			<i class="tri"></i>
	                 		</h2>
	                 	</li>
	                 	<li id="year">
	                 		<h2>年度盘点
	                 			<i class="tri"></i>
	                 		</h2>
	                 	</li>
                      </ul>
                    </div>
                    <div class="tempWrap">
				      <dciv class="bd">
					    <div class="inBox">
							<form class="filter-ordertype" method="get" action="">
		                    	<span>当前年月:</span>
		                    	<input  id="ny" class="Wdate my97" onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM',onpicked:function(){console.log($('#ny').val());showInfo();},maxDate:'%y-{%M}'})"/>
	 						</form>
	                    	<div class="arc_crk_tu">
	                    	   <div class="arc">
								     <div id="jqChartA-1" style="width: 400px; height: 250px;">
        							 </div>
	                    	    </div>
	                    	    <div class="arc-b">
								     <div id="jqChartB-1" style="width: 400px; height: 250px;">
        							 </div>
	                    	    </div>
	                    	</div>
                            <div class="inHd">
								<ul class="ware-11">
									
								</ul>
						    </div>
                			<div class="inBd" id="inBd1">
		                		
		                	</div>  
		             
			            </div>
			            
			            <div class="inBox">
							<form class="filter-ordertype" method="get" action="">
		                    	<span>当前年:</span>
		                    	<input id="n"  class="Wdate my97" onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy',onpicked:function(){console.log($('#n').val());showInfo();},maxDate:'%y'})"/>
		                   </form>
	                    	<div class="arc_crk_tu">
	                    	    <div class="arc">
								     <div id="jqChartA-2" style="width: 400px; height: 250px;">
        							 </div>
	                    	    </div>
	                    	    <div class="arc-b">
								     <div id="jqChartB-2" style="width: 400px; height: 250px;">
        							 </div>
	                    	    </div>
	                    	</div>

                            <div class="inHd">
								<ul class="ware-11">
									
								</ul>
						    </div>
                			<div class="inBd" id="inBd2">
		                		
		                	</div>	
		                	<div class="arc-b">
      						 </div>
			           	 </div>
		              </div>
                </div>
            </div>
        </div>
		<!--表单-->
		    <!-- 引入尾部文件 -->
	
	<%@ include file="/WEB-INF/view/web/common/footer.jsp"%>
	
</body>
</html>
<script type="text/javascript" src="${STATIC_URL}/modules/web/js/rfid.js"></script>
<script id="overview-detail" type="text/html">
		<ul>
		   	  <li id="rate-detail">   
		  	  		<h1><span><!--[=list1.storeName]-->  </span>库藏量：<span><!--[=list1.ams]--></span></h1>
		  	  		<h5><em>本月度一共盘点档案：</em>
						<span><!--[=list.all.a]--><em>份，其中在架：</em>
						<span><!--[=list.all.b]--><em>份，离架：</em>
						<span><!--[=list.all.c]--><em>份，错架：</em>
						<span><!--[=list.all.d]--><em>份</em>
					</h5>
					<h5><span><!--[=list2]--></span></h5>
		  	  </li>
			<ul class="overview">
			<!--[if(list.one.length==0){]-->
				<li>  
					没有盘点数据
				</li>
			<!--[}else{]-->
			<!--[for(var i=0;i<list.one.length;i++){]-->
				<li onclick="webjumpservice('<!--[=list.one[i].time]-->')">  
				<span><!--[=list.one[i].time]--></span><em>    盘点记录（一共盘点</em>
				<span><!--[=list.one[i].a]--></span><em>份，        其中在架：</em>
				<span><!--[=list.one[i].b]--></span><em>份，        离架：</em>
				<span><!--[=list.one[i].c]--></span><em>份，        错架：</em>
				<span><!--[=list.one[i].d]--></span><em>份）</em>
				</li>
			<!--[}]-->
			<!--[}]-->
		</ul>
		</ul>
</script>