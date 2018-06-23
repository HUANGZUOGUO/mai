$(document).ready(function () {
        $(".body").css("width", $(window).width());
        $(".body").css("height", ($(".body").width()) / 1.7777777777777777777777);
        //初始化头部尺寸
        $(".header").css("width", $(".body").width());
        $(".header").css("height", $(".body").height() / (10.8));
        //左侧logo
        $(".header_logo").css({
            "width": $(".body").width() / (4.20131),
            "height": $(".header").height(),
        });
        $(".header_logo_bayi,.header_logo_gk").css(
            {
                "margin-left": $(".header_logo").width() / (8.1556),
                "height": $(".header_logo").height() / (1.852),
                "margin-top": "-" + ($(".header_logo").height() / (1.552)) / 2 + "px",
            });
        $(".header_logo_gk").css(
            {
                "margin-left": $(".header_logo").width() / (1.899)
            });
        //中部导航栏
        $(".header_nav").css({
            "width": $(".body").width() / (1.92),
            "height": $(".header").height(),
//            "background": "url("+a+"/images/web/4.0/common/header_top_nav_bottom.png)no-repeat 0px "+$('.body').width() / (24)+"px",
            "background-size": "100% "+$('.body').width() / (320)+"px",
            "background-position":" 0px "+$('.body').width() / (24)+"px",

        });
        $(".header_nav ul li").css({
            "width": $(".header_nav").width() / (6.01),
            "height": $(".header_nav").height() / 1.25,
        });
        $(".header_nav ul li a").css({
            "font-size": $(".header_nav").height() / (5),
            "line-height": $(".header_nav li").height() + "px",
        });
        //右侧健康指数
        $(".header_nav_right").css({
            "width": $(".body").width() - $(".header_nav").width() - $(".header_logo").width()-1,
            "height": $(".header").height(),
        });
        $(".header_nav_right_content").css({
        		"margin-top":$(".body").width() / (121.38),
        });
        $(".header_nav_right span:nth-child(1),.header_nav_right span:nth-child(2),.header_nav_right span:nth-child(3)").css({
            "font-size": $(".header_nav_right").height() / (5.55555555556),
            "vertical-align": $(".body").width() / (162),
        });
        $(".header_nav_right span:nth-child(2)").css({
            "font-size": $(".body").width() / (52.86),
            "margin-left":$(".body").width() / (137.14),
            "margin-right":$(".body").width() / (96),
        });
        $(".header_nav_right span:nth-child(3)").css({
            "font-size": $(".body").width() / (80),
            "vertical-align": $(".body").width() / (164),
        });
    }
);
$(window).resize(function () {
    window.location.reload();
});