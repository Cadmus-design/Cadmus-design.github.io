$(document).ready(function () {



    $(".top a").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });


    $(".open_note_btn").click(function (event) {
        event.preventDefault();
        $(this).parents('.open_note').toggleClass('open_note_active')
        $('.note').toggleClass('note_op')


    });

    $(".five_open_note_btn").click(function (event) {
        event.preventDefault();
        $(this).parents('.five_open_note').toggleClass('five_open_note_active')
        $('.note').toggleClass('note_op')


    });
    var $menu = $('.menu');
    $('.hamburger-btn').on('click', function () {
        $('.hamburger-menu').toggleClass('animate');
        $menu.toggleClass('visible');

    });



    $(".z_close").click(function (event) {
        event.preventDefault();
        $(this).parents('.apply_op').slideUp()
    });

    $(".apply_btn01").click(function (event) {
        event.preventDefault();
        $('.apply_op02 , .apply_op03 , .apply_op04 , .apply_op05 ').slideUp()
        $('.apply_op01').slideToggle()
    });

    $(".apply_btn02").click(function (event) {
        event.preventDefault();
        $('.apply_op01 , .apply_op03 , .apply_op04 , .apply_op05 ').slideUp()
        $('.apply_op02').slideToggle()
    });
    $(".apply_btn03").click(function (event) {
        event.preventDefault();
        $('.apply_op01 , .apply_op02 , .apply_op04 , .apply_op05 ').slideUp()
        $('.apply_op03').slideToggle()
    });
    $(".apply_btn04").click(function (event) {
        event.preventDefault();
        $('.apply_op01 , .apply_op02 , .apply_op03 , .apply_op05 ').slideUp()
        $('.apply_op04').slideToggle()
    });
    $(".apply_btn05").click(function (event) {
        event.preventDefault();
        $('.apply_op01 , .apply_op02 , .apply_op03 , .apply_op04  ').slideUp()
        $('.apply_op05').slideToggle()
    });












    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();

    });

    $(window).width();
    if ($(window).width() < 1000) {




    } else {

        $(document).on("scroll", function () {
            if ($(document).scrollTop() > 80) {

                $(".header").addClass('header-fixed');

            } else {
                $(".header").removeClass('header-fixed');

            }
        });



    }
});
$(document).ready(function () {

    $("[data-fancybox]").fancybox({
        buttons: [

            'close'
        ],
        animationEffect: "fade",

    });
});