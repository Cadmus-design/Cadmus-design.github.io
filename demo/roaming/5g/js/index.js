$(document).ready(function () {



    $(".five_open_note_btn").click(function (event) {
        event.preventDefault();
        $(this).parents('.five_open_note').toggleClass('five_open_note_active')
        $('.note').toggleClass('note_op')


    });

});

$(document).ready(function () {

    $("[data-fancybox]").fancybox({
        buttons: [

            'close'
        ],
        animationEffect: "fade",

    });
});