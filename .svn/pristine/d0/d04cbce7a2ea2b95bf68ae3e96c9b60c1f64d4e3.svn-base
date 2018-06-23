/**
 * 完整代码
 */


// 关于月份： 在设置时要-1，使用时要+1
$(function () {
	var width=$(".body").width();//为了适配固定尺寸页面.body只有适配尺寸页面才有
    $('#calendar').calendar({
        ifSwitch: true, // 是否切换月份
        hoverDate: true, // hover是否显示当天信息
        backToday: true // 是否返回当天d
    });
    if(width==null||width==0||width==""||width==undefined){
     	width=1920;
    }
    //动态加载样式
    $(".calendar").css({
        "height": width / 5.2,
    });

    $("#backToday").css({
        "height": "100%",
        "width": width / 52.77778 + "px",
    });
    $(".calendar-title").css({
        "height": width / 52.6667,
        "line-height": width / 52.6667 + "px",
    });
    $(".calendar-title a.title").css({
        "font-size": width / 90.7692,
        "text-indent": width / 158 + "px",
    });
    $(".calendar-title .arrow").css({
        "right": width / 105.3333,
        "top": "-"+width / 671.8 + "px",
        "width": width / 31.6 + "px",
    });
    $(".calendar-title .arrow span").css({
        "font-size": width / 60.7692,
    });
    $(".calendar-week .item").css({
        "width": width / 32.8 +"px",
        "height": width / 32.8+"px",
        "line-height": width / 32.8+"px",
    });
    $(".calendar-week").css({
        "font-size": width / 98.75,
    });
    $(".calendar-date .item").css({
        "font-size": width / 112.857,
        "width": width / 42.702702 +"px",
        "margin-left": width / 283.07692 +"px",
        "margin-right": width / 283.07692 +"px",
        "height": width / 42.702702+"px",
        "line-height": width / 42.702702+"px",
    });
    $(".calendar-today").css({
        "width": width / 17.55555 +"px",
        "height": width / 32.9166+"px",
        "padding-top": width / 263.3333,
        "padding-right": width / 158,
        "padding-bottom": width / 263.3333,
        "padding-left": width / 158,
    });
    $(".calendar-today .triangle").css({
        "left": width / 14.445 +"px",
        "border-width": width / 297.5+"px",
        "margin-top": "-"+width / 297.5+"px",
    });
    $(".calendar-today p").css({
        "font-size": width / 112.8571 +"px",
        "line-height": width / 65.833333+"px",
    });
    setInterval(function(){
 	var dateold = "";
 	if($(".calendar-title a.title").html()!=null&&$(".calendar-title a.title").html()!=undefined){
 		dateold = $(".calendar-title a.title").html().substring(0, 7);
 	}else{
 		return;
 	}
    	var datenow = new Date().getFullYear()+"/"+(parseInt(new Date().getMonth()+1)<10?("0"+parseInt(new Date().getMonth()+1)):(parseInt(new Date().getMonth()+1)));
    	if(dateold==datenow){
    		if(new Date().toLocaleString().substring(6, 7)=="/"){
    			$(".calendar-title a.title").text(new Date().toLocaleString().substring(0, 5)+"0"+new Date().toLocaleString().substring(5, 50));
    		}else{
    			$(".calendar-title a.title").text(new Date().toLocaleString());
    		}
    		}
    },1000);
});

;(function ($, window, document, undefined) {

    var Calendar = function (elem, options) {
        this.$calendar = elem;

        this.defaults = {
            ifSwitch: true,
            hoverDate: false,
            backToday: false
        };

        this.opts = $.extend({}, this.defaults, options);

        // console.log(this.opts);
    };

    Calendar.prototype = {
        showHoverInfo: function (obj) { // hover 时显示当天信息
            var _dateStr = $(obj).attr('data');
            var offset_t = $(obj).position().top- this.$calendar_today.innerHeight()/2+$(obj).innerHeight()/2;
            var offset_l = $(obj).position().left - this.$calendar_today.innerWidth()-this.$calendar_today.innerWidth()/8;
            var changeStr = addMark(_dateStr);
            var _week = changingStr(changeStr).getDay();
            var _weekStr = '';

            this.$calendar_today.show();

            this.$calendar_today
                .css({left: offset_l, top: offset_t})
                .stop()
                .animate({left: offset_l , top: offset_t});

            switch (_week) {
                case 0:
                    _weekStr = 'Sunday';
                    break;
                case 1:
                    _weekStr = 'Monday';
                    break;
                case 2:
                    _weekStr = 'Tuesday';
                    break;
                case 3:
                    _weekStr = 'Wednesday';
                    break;
                case 4:
                    _weekStr = 'Thursday';
                    break;
                case 5:
                    _weekStr = 'Friday';
                    break;
                case 6:
                    _weekStr = 'Saturday';
                    break;
            }

            this.$calendarToday_date.text(changeStr);
            this.$calendarToday_week.text(_weekStr);
        },

        showCalendar: function () { // 输入数据并显示
            var self = this;
            var year = dateObj.getDate().getFullYear();
            var month = dateObj.getDate().getMonth() + 1;
            var dateStr = returnDateStr(dateObj.getDate());
            var firstDay = new Date(year, month - 1, 1); // 当前月的第一天

            this.$calendarTitle_text.text(year + '/' + dateStr.substr(4, 2));

            this.$calendarDate_item.each(function (i) {
                // allDay: 得到当前列表显示的所有天数
                var allDay = new Date(year, month - 1, i + 1 - firstDay.getDay());
                var allDay_str = returnDateStr(allDay);

                $(this).text(allDay.getDate()).attr('data', allDay_str);

                if (returnDateStr(new Date()) === allDay_str) {
                    $(this).attr('class', 'item item-curDay');
                } else if (returnDateStr(firstDay).substr(0, 6) === allDay_str.substr(0, 6)) {
                    $(this).attr('class', 'item item-curMonth');
                } else {
                    $(this).attr('class', 'item');
                }
            });

            // 已选择的情况下，切换日期也不会改变
            if (self.selected_data) {
                var selected_elem = self.$calendar_date.find('[data=' + self.selected_data + ']');

                selected_elem.addClass('item-selected');
            }
        },

        renderDOM: function () { // 渲染DOM
            this.$calendar_title = $('<div class="calendar-title"></div>');
            this.$calendar_week = $('<ul class="calendar-week"></ul>');
            this.$calendar_date = $('<ul class="calendar-date"></ul>');
            this.$calendar_today = $('<div class="calendar-today"></div>');


            var _titleStr = '<a href="#" class="title"></a>' +
                '<a href="javascript:;" id="backToday"></a>' +
                '<div class="arrow">' +
                '<span class="arrow-prev"><</span>' +
                '<span class="arrow-next">></span>' +
                '</div>';
            var _weekStr = '<li class="item">日</li>' +
                '<li class="item">一</li>' +
                '<li class="item">二</li>' +
                '<li class="item">三</li>' +
                '<li class="item">四</li>' +
                '<li class="item">五</li>' +
                '<li class="item">六</li>';
            var _dateStr = '';
            var _dayStr = '<i class="triangle"></i>' +
                '<p class="date"></p>' +
                '<p class="week"></p>';

            for (var i = 0; i < 6; i++) {
                _dateStr += '<li class="item">26</li>' +
                    '<li class="item">26</li>' +
                    '<li class="item">26</li>' +
                    '<li class="item">26</li>' +
                    '<li class="item">26</li>' +
                    '<li class="item">26</li>' +
                    '<li class="item">26</li>';
            }

            this.$calendar_title.html(_titleStr);
            this.$calendar_week.html(_weekStr);
            this.$calendar_date.html(_dateStr);
            this.$calendar_today.html(_dayStr);

            this.$calendar.append(this.$calendar_title, this.$calendar_week, this.$calendar_date, this.$calendar_today);
            this.$calendar.show();
        },

        inital: function () { // 初始化
            var self = this;

            this.renderDOM();

            this.$calendarTitle_text = this.$calendar_title.find('.title');
            this.$backToday = $('#backToday');
            this.$arrow_prev = this.$calendar_title.find('.arrow-prev');
            this.$arrow_next = this.$calendar_title.find('.arrow-next');
            this.$calendarDate_item = this.$calendar_date.find('.item');
            this.$calendarToday_date = this.$calendar_today.find('.date');
            this.$calendarToday_week = this.$calendar_today.find('.week');

            this.selected_data = 0;

            this.showCalendar();

            if (this.opts.ifSwitch) {
                this.$arrow_prev.bind('click', function () {
                    var _date = dateObj.getDate();

                    dateObj.setDate(new Date(_date.getFullYear(), _date.getMonth() - 1, 1));

                    self.showCalendar();
                });

                this.$arrow_next.bind('click', function () {
                    var _date = dateObj.getDate();

                    dateObj.setDate(new Date(_date.getFullYear(), _date.getMonth() + 1, 1));

                    self.showCalendar();
                });
            }

            if (this.opts.backToday) {
                var cur_month = dateObj.getDate().getMonth() + 1;

                this.$backToday.bind('click', function () {
                    var item_month = $('.item-curMonth').eq(0).attr('data').substr(4, 2);
                    var if_lastDay = (item_month != cur_month) ? true : false;

                    if (!self.$calendarDate_item.hasClass('item-curDay') || if_lastDay) {
                        dateObj.setDate(new Date());

                        self.showCalendar();
                    }
                });
            }

            this.$calendarDate_item.hover(function () {
                self.showHoverInfo($(this));
            }, function () {
                self.$calendar_today.css({left: 0, top: 0}).hide();
            });

            this.$calendarDate_item.click(function () {
                var _dateStr = $(this).attr('data');
                var _date = changingStr(addMark(_dateStr));
                var $curClick = null;

                self.selected_data = $(this).attr('data');

                dateObj.setDate(new Date(_date.getFullYear(), _date.getMonth(), 1));

                if (!$(this).hasClass('item-curMonth')) {
                    self.showCalendar();
                }

                $curClick = self.$calendar_date.find('[data=' + _dateStr + ']');
                $curDay = self.$calendar_date.find('.item-curDay');
                if (!$curClick.hasClass('item-selected')) {
                    self.$calendarDate_item.removeClass('item-selected');

                    $curClick.addClass('item-selected');
                }
            });
        },

        constructor: Calendar
    };

    $.fn.calendar = function (options) {
        var calendar = new Calendar(this, options);

        return calendar.inital();
    };


    // ========== 使用到的方法 ==========

    var dateObj = (function () {
        var _date = new Date();

        return {
            getDate: function () {
                return _date;
            },

            setDate: function (date) {
                _date = date;
            }
        }
    })();

    function returnDateStr(date) { // 日期转字符串
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        month = month <= 9 ? ('0' + month) : ('' + month);
        day = day <= 9 ? ('0' + day) : ('' + day);

        return year + month + day;
    };

    function changingStr(fDate) { // 字符串转日期
        var fullDate = fDate.split("-");

        return new Date(fullDate[0], fullDate[1] - 1, fullDate[2]);
    };

    function addMark(dateStr) { // 给传进来的日期字符串加-
        return dateStr.substr(0, 4) + '-' + dateStr.substr(4, 2) + '-' + dateStr.substring(6);
    };

    // 条件1：年份必须要能被4整除
    // 条件2：年份不能是整百数
    // 条件3：年份是400的倍数
    function isLeapYear(year) { // 判断闰年
        return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
    }

})(jQuery, window, document);