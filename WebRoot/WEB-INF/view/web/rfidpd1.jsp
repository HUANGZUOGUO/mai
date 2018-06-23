<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 引入资源文件 -->
<%@ include file="/WEB-INF/view/web/common/resource.jsp"%>
<title>Insert title here</title>
</head>
<body>
<!-- 引入头部文件 -->
<%@ include file="/WEB-INF/view/web/common/header.jsp"%>
<div class="article  subject">
			<div class="archives" id="he">
				<h2>
				 <form  method="get" action="">	
                  <img alt="" title="" src="http://122.227.168.14:8089/bis_app/resources/images/web/i_dangacr_act_icon.png">
                  <span id="storeName" class="${sessionScope.storeId}"></span>${sessionScope.storeName}
                  <input  id="nyr" class="Wdate my97" value="${sessionScope.time}" onFocus="WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM',onpicked:function(){console.log($('#ny').val());showInfo();},maxDate:'%y-{%M}'})"/>
	              </form>
                </h2>
                <div class="slideTxtBox" id="data">
                	<div class="hd" id="data_a">
	                	<ul>
	                		<li class="warehouse" id="warehouse-all">所有</li>
	                		<li class="warehouse" id="warehouse-in">在架</li>
	                		<li class="warehouse" id="warehouse-out">离架</li>
	                		<li class="warehouse" id="warehouse-wro">错架</li>
	                		<from class="search-box" method="get" action="">
	                			<input type="text" name="text" placeholder="请输入档案名称" class="search-box__input"/>
					            <input type="submit" name="submit" value="搜索"  class="search-box__button"/>
	                		</from>
	                	</ul>
                	</div>
                	<div class="bd" id="data_b">
                		<ul>
                           <table  id="extra">
                           </table>
                            <h4 id="door_yema">
						        <a href="#" id="firstpage"> 首页</a>
						        <span id="arc_b_prev"><img src="http://122.227.168.14:8089/bis_app/resources/images/web/dang_icon_left.png"></span>
						        <input id="nowpage" type="text" value="1">
						        <span id="arc_b_next"><img src="http://122.227.168.14:8089/bis_app/resources/images/web/dang_icon_right.png"></span>
						        <a href="#" id="lastpage"> 尾页</a> 
						        <em id="totlePageCount"></em>
						    </h4>
                		</ul>
                	</div>
                </div>
            </div>
        </div>    
        <!--表单-->
          <!-- 引入尾部文件 -->
	<%@ include file="/WEB-INF/view/web/common/footer.jsp"%>
</body>
<script type="text/javascript" src="${STATIC_URL}/modules/web/js/rfidpd.js"></script>
   <script id="extra-text" type="text/html">
   	 	<!--[if(list.length==0){]-->
						<h1>没有盘点数据</h1>
			<!--[}else{]-->
   	 	<thead>
			<tr>
				<th>档案号</th>
				<th>档案名称</th>
				<th>在库状态</th>
				<th>是否错架</th>
				<th>盘点时间</th>
			</tr>
		</thead>	
		<tbody>
		<!--[for(var i=0;i<list.length;i++){]-->
			<tr>
				<td><span><!--[=list[i].archiveno]--></span></td>
				<td><span><!--[=list[i].tittle]--></span></td>
				<td><span><!--[=list[i].type]--></span></td>
				<td><span><!--[=list[i].status]--></span></td>
				<td><span><!--[=list[i].time]--></span></td>
			</tr>
		<!--[}]-->
		<!--[}]-->
   </script>
    
</html>