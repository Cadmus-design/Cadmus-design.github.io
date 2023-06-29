/*
$( window ).resize(function() {
  $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );

});
*/
/*
 window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-6789868-5');
*/

/* Google Tag Manager */
/*
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KTR3PGW');
*/
/* End Google Tag Manager */

/*Google Tag Manager 2021-07-30*/

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZGCSJH');

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

/* helpscout start */
!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});
window.Beacon('init', '8a690515-147b-4312-a68f-fda45f2b245b')
/* helpscout end */
/* helpscout parameter */
Beacon('show-message', '31dbf5ec-2a14-4b84-a00f-2d1252d85f82', { force: true })
Beacon('show-message', 'Y8a690515-147b-4312-a68f-fda45f2b245bE', { delay: 1000 })
messagingEnabled{false};
  
/* helpscout parameter */