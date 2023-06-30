/*
$( window ).resize(function() {
  $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );

});
*/

/*Google Tag Manager 2021-07-30*/

/* End Google Tag Manager 2021-07-30*/

$(function(){
        var _header=$('.navbar').offset().top;
        var onScroll = function(e){
            var _wrapTop=$('.fbox').offset().top;
            if(_wrapTop > _header) $('.navbar').addClass('on');
            else $('.navbar').removeClass('on');
        }
        var onHashChange = function(e){
            if(e){e.preventDefault();}
            var $this = $(this);
            var target = window.location.hash.slice(1);
            var $target = $('[scroll-id="' + target + '"]');
            var differ = $('.navbar')[0].clientHeight;
            var offsetTop = $target.offset().top;
            var kvTop = $('#KV').clientHeight;
            var scrollTop = $(window).scrollTop();
            var fixed = $('.navbar').hasClass('on');
            var top =  fixed ? offsetTop - differ : offsetTop - differ *2;
            $('html, body').stop().animate({scrollTop: top}, 600);
        }
        $(window).bind('hashchange', onHashChange);
        $(window).bind('scroll', onScroll);

        setTimeout(function(e){
            onHashChange();
        },1000)
    });
   $(function () {
            $('[slide-target]').click(function () {
                var target = $(this).attr('slide-target');
                var $target = $(target);
                $target.stop().slideToggle(600)
            })

            function hashchange(f) {
                var hash = window.location.hash.substring(window.location.hash.indexOf('#') + 1);
                var $target = $('.' + hash);
                var top = $target.offset().top;
                $("html, body").stop().animate({
                    scrollTop: top
                }, 600);
            }
            
        });
   
    // function checkOffset() {
    // if($('#social-float').offset().top + $('#social-float').height() 
    //                                        >= $('#footer').offset().top - 10)
    //     $('#social-float').css('position', 'absolute');
    // if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
    //     $('#social-float').css('position', 'fixed'); // restore when you scroll up
    // /*$('#social-float').text($(document).scrollTop() + window.innerHeight);*/
    // }
    // $(document).scroll(function() {
    //     checkOffset();
    // });