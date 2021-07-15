(function ($) {
    "use strict";

    //data bg image sec
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

    //top scroll
    var rd_top_scroll = $('.rd_top_scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            rd_top_scroll.addClass('show');
        } else {
            rd_top_scroll.removeClass('show');
        }
    });
    
    rd_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // easying js code 
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 500,);
        event.preventDefault();
    });

}(jQuery));