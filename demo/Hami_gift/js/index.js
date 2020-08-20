$(document).ready(function () {
    $(".top a").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });



    $(".tablink ").click(function (event) {
        $(".tablink").removeClass("active");
        $(this).addClass("active");

    });

    document.getElementById("tab03").style.display = "block";


    $(".tablinkaa ").click(function (event) {
        $(".tablinkaa").removeClass("active");
        $(this).addClass("active");

    });



    $(".precautions_btn ").click(function (event) {
        $(this).toggleClass("active");
        $(".precautions").slideToggle();

    });



});