//popup1 video
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('popup1Vo', {
        width: '335',
        height: '190',
        videoId: '32-WT82ORyg',
        playerVars: {
            autohide: 0
            ,playsinline: 1 //ios 是否全屏0是 1內嵌
            ,rel: 0 //是否應顯示相關視頻播放時的初始視頻的結束。
            ,controls: 1
            ,wmode: "opaque"
            ,showinfo: 0
            // ,startSeconds:0.5
            // ,hd:1
            // ,vq:'hd1080'
        }
        // ,events: {
        //     'onReady': onPlayerReady
        // }
    });
};

var player3;
function onYouTubePlayerAPIReady() {
    player3 = new YT.Player('popup3Vo', {
        width: '335',
        height: '190',
        videoId: 'W9Pi_BvOiZ4',
        playerVars: {
            autohide: 0
            ,playsinline: 1 //ios 是否全屏0是 1內嵌
            ,rel: 0 //是否應顯示相關視頻播放時的初始視頻的結束。
            ,controls: 1
            ,wmode: "opaque"
            ,showinfo: 0
            // ,startSeconds:0.5
            // ,hd:1
            // ,vq:'hd1080'
        }
        // ,events: {
        //     'onReady': onPlayerReady
        // }
    });
};

var player4;
function onYouTubePlayerAPIReady() {
    player4 = new YT.Player('popup4Vo', {
        width: '335',
        height: '190',
        videoId: 'hHhe8WY_yaY',
        playerVars: {
            autohide: 0
            ,playsinline: 1 //ios 是否全屏0是 1內嵌
            ,rel: 0 //是否應顯示相關視頻播放時的初始視頻的結束。
            ,controls: 1
            ,wmode: "opaque"
            ,showinfo: 0
            // ,startSeconds:0.5
            // ,hd:1
            // ,vq:'hd1080'
        }
        // ,events: {
        //     'onReady': onPlayerReady
        // }
    });
};

var player5;
function onYouTubePlayerAPIReady() {
    player4 = new YT.Player('popup5Vo', {
        width: '335',
        height: '190',
        videoId: 'UJnMggD8ixg',
        playerVars: {
            autohide: 0
            ,playsinline: 1 //ios 是否全屏0是 1內嵌
            ,rel: 0 //是否應顯示相關視頻播放時的初始視頻的結束。
            ,controls: 1
            ,wmode: "opaque"
            ,showinfo: 0
            // ,startSeconds:0.5
            // ,hd:1
            // ,vq:'hd1080'
        }
        // ,events: {
        //     'onReady': onPlayerReady
        // }
    });
};

var FECommon = FECommon || {};
var np_GTAC="";
(function(FECommon) {
    FECommon.GAPage = function(p) { 
        _GAPage(p);
    }        
    function _GAPage(p) { 
        window.dataLayer = window.dataLayer || []; 
        function gtag() { dataLayer.push(arguments); }  
        gtag('config', np_GTAC, {'page_path': p});
    }
    
    FECommon.GAEvent = function(t,c,e,v) {  
        _GAEvent(t,c,e,v);
    }      
    function _GAEvent(t,c, e,v) {  
        // console.log(t,c, e,v);
        window.dataLayer = window.dataLayer || []; 
        function gtag() { dataLayer.push(arguments); } 
        gtag('event',t, {
            'event_category' : c,
            'event_label' : e,
            'value' : v
        }); 
    }
    FECommon.sysClick=function(e,f){
        $(e).unbind();
        $(e).bind("click",function(){ 
            f(this); 
            FECommon.GAEvent('click','button',e,''); 
            $(this).blur();
        });
    }

    //rwd
    FECommon.isRWD750 = function() {
        return (window.outerWidth <= 750) ? true : false;
    };

    //anchor
    FECommon.hashRun = function(_href) {
        hashRun(_href);
    }
    function hashRun(_href) {
        var target = $(_href == '#' || _href == '#top' ? 'html' : _href);
        var mtop=(FECommon.isRWD750())?60:100;
        var position = target.offset().top-mtop;
        
        $('html, body').stop().animate({ scrollTop: position }, 550, 'swing');
        return false;
    }


})(FECommon);
$(document).ready(function() {

    $('body').waitForImages({
        waitForAll: true,
        each: function(loaded, count, success) {
           // f1({ loaded: loaded, count: count, success: success });
        },
        finished: function() {  
                      $(".loadpage").fadeOut(100);
                   
                               
                     
                     $(".voKvBG").addClass('on'); 
                   
                    setTimeout(function() { 
                        $(".part1").addClass('on');
                    }, 200);   
                    setTimeout(function() {
                        setWidth()
                    }, 600);  
                    
                /*    
                var voKv = document.getElementById("voKv");
                voKv.load(); 
				voKv.addEventListener('loadeddata', function() {
				  
				    // $(".wrapper").show();
                    voKv.play();
        
				}, false); 
		  */
        }
    });
            

    //tracking start----------------------------
    $('.navLList li').each(function(e){
        $(this).find('a').click(function(){
            switch(e) {
                case 0:
                    FECommon.GAEvent('click','menu','menu_5G是什麼','');
                break;
                case 1:
                    FECommon.GAEvent('click','menu','menu_認識5G','');
                break;
                case 2:
                    FECommon.GAEvent('click','menu','menu_5G新體驗','');
                break;
                case 3:
                    FECommon.GAEvent('click','menu','menu_產業創新升級','');
                break;
                case 4:
                    FECommon.GAEvent('click','menu','menu_新聞大事記','');
                break;
            }
        });
    });
    $('.navRVideo a').click(function(){
        FECommon.GAEvent('click','menu','menu_形象影片','');
    });
    $('.btnPart4Go').click(function(){
        FECommon.GAEvent('click','認識5G_中華優勢','認識5G_中華優勢_5GPASS','');
    });
    $('.part5PicList a').each(function(e){
        $(this).click(function(){
            switch(e) {
                case 0:
                    FECommon.GAEvent('click','5G新體驗','5G新體驗_KKBOX','');
                break;
                case 1:
                    FECommon.GAEvent('click','5G新體驗','5G新體驗_VR虛擬實境','');
                break;
                case 2:
                    FECommon.GAEvent('click','5G新體驗','5G新體驗_4K影視服務','');
                break;
            }
        });
    });
    $('.part7Timeline .timelineI').each(function(e){
        $(this).find('a').click(function(){
            FECommon.GAEvent('click','大事記','大事記_圖'+(e+1),'');
        });
    });
    //tracking end------------------------------
 
    //anchor
    $('a[href*=\\#]').on('click', function(e) { 
     
        FECommon.hashRun($(this).attr('href'));
    });

    //nav
    $('#navSwitch').click(function() {
        $('#nav').addClass('on');
    });
    $('#nav .xBtn').click(function() {
        $('#nav').removeClass('on');
    });
    $('.navLList a').click(function(){
        $('#nav').removeClass('on');
    });

    //Q&A
    $('.part8Q').each(function() {
        $(this).find('a').click(function() { 
            if ($(this).parent().parent().hasClass('on')) {
                $(this).parent().parent().removeClass('on')
                $(this).parent().parent().find('.part8A').slideUp(200);
                $(this).find('span').removeClass("boxclose");
            } else {
                $(this).parent().parent().addClass('on')
                $(this).parent().parent().find('.part8A').slideDown(200);
                $(this).find('span').addClass("boxclose");
            }
        });
    });

    //part5、part7
    $(window).resize(function(){
        setWidth();
    });
    function setWidth(){
        // console.log($(".part5Img").width());
    /*    $(".part5PicList").width($(".part5Img").width() * 3);
        if(FECommon.isRWD750()){
            $('.timelineWrap').css('width',1100);
        }else{
            $('.timelineWrap').css('width',1620);
        }
        */
    }


    $(".part3ArwR").click(function(e) {
        fnPartCtrlSet(2);
        fnPart3Move(parseInt($(".part3Con").attr("data-key")) + 1);
    });
    $(".part3ArwL").click(function(e) {
        fnPartCtrlSet(2);
        fnPart3Move(parseInt($(".part3Con").attr("data-key")) - 1);
    });
    $(".navList a, .part3Dot a").click(function(e) {
        fnPartCtrlSet(2);
        fnPart3Move($(this).attr("data-key"));
    });

    $(".part4ConNode").click(function(e) {
        $("#popup1").addClass("on").css('z-index',200);
        $("#popup1 .popup1Vo").html(' <iframe id="popup1Vo" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="335" height="190" src="https://www.youtube.com/embed/'+$(this).attr("data-vo")+'?autohide=0&amp;playsinline=1&amp;rel=0&amp;controls=1&amp;wmode=opaque&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1"></iframe>');
        fnPart4Move($(this).attr("data-key"));
        //tracking----
        FECommon.GAEvent('click','精彩看5G',$(this).attr("data-val"),'');
        
    });

    
      $(".part5Video3").click(function(e) {
        $("#popup3").addClass("on").css('z-index',200);
        $("#popup3 .popup3Vo").html(' <iframe id="popup3Vo" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="335" height="190" src="https://www.youtube.com/embed/W9Pi_BvOiZ4?autohide=0&amp;playsinline=1&amp;rel=0&amp;controls=1&amp;wmode=opaque&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1"></iframe>');
        //tracking----
        FECommon.GAEvent('click','認識5G_中華優勢','認識5G_形象影片','');
    });
      $(".part5Video4").click(function(e) {
        $("#popup4").addClass("on").css('z-index',200);
        $("#popup4 .popup4Vo").html(' <iframe id="popup4Vo" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="335" height="190" src="https://www.youtube.com/embed/hHhe8WY_yaY?autohide=0&amp;playsinline=1&amp;rel=0&amp;controls=1&amp;wmode=opaque&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1"></iframe>');
        //tracking----
        FECommon.GAEvent('click','認識5G_中華優勢','認識5G_形象影片','');
    });
      $(".part5Video5").click(function(e) {
        $("#popup5").addClass("on").css('z-index',200);
        $("#popup5 .popup5Vo").html(' <iframe id="popup5Vo" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="335" height="190" src="https://www.youtube.com/embed/UJnMggD8ixg?autohide=0&amp;playsinline=1&amp;rel=0&amp;controls=1&amp;wmode=opaque&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1"></iframe>');
        //tracking----
        FECommon.GAEvent('click','認識5G_中華優勢','認識5G_形象影片','');
    });

      $("#popup1 .xBtn").click(function(e) {
        $("#popup1 .popup1Vo").html('');
        $("#popup1").removeClass("on");
        setTimeout(function(){
            $("#popup1").css('z-index',-1)
        },300);
    });
      $("#popup3 .xBtn").click(function(e) {
        $("#popup3 .popup3Vo").html('');
        $("#popup3").removeClass("on");
        setTimeout(function(){
            $("#popup3").css('z-index',-1)
        },300);
    });
      $("#popup4 .xBtn").click(function(e) {
        $("#popup4 .popup4Vo").html('');
        $("#popup4").removeClass("on");
        setTimeout(function(){
            $("#popup4").css('z-index',-1)
        },300);
    });
      $("#popup5 .xBtn").click(function(e) {
        $("#popup5 .popup5Vo").html('');
        $("#popup5").removeClass("on");
        setTimeout(function(){
            $("#popup5").css('z-index',-1)
        },300);
    });

    $(".part4PicI,.part5Dot a").click(function(e) {
        fnPart4Move($(this).attr("data-key"));
    });
  

    $(".part4ArwR").click(function(e) {
       
        fnPart4Side(+1);
    });


    $(".part4ArwL").click(function(e) {  
        fnPart4Side(-1);
    });
    
    
    $(".part5PicI,.part5Dot a").click(function(e) {
        fnPart5Move($(this).attr("data-key"));
    });
    $(".part5PicI").mouseover(function(e) {
    //    fnPart5Move($(this).attr("data-key"));
    });

    $(".part5ArwR").click(function(e) {
       
        fnPart5Side(1);
    });


    $(".part5ArwL").click(function(e) {  
        fnPart5Side(-1);
    });
    
    

    $(".part6Btn1").click(function(e) {
        fnPart6Pop(1);
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_車聯網','');
        fbq('track', '車聯網/無人自駕車');
    });
    $(".part6Btn2").click(function(e) {
        fnPart6Pop(2);
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_企業專網','');
        fbq('track', '企業專網');
    });
    $(".part6Btn3").click(function(e) {
        fnPart6Pop(3);
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_智慧醫療','');
        fbq('track', '智慧醫療');
    });
    $(".part6Btn4").click(function(e) {
        fnPart6Pop(4);
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_無人機應用','');
        fbq('track', '無人機應用');
    });
    $(".part6Btn5").click(function(e) {
        fnPart6Pop(5);
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_智慧三表','');
        fbq('track', '智慧三表');
    });
    $(".part6Btn6").click(function(e) {
        //fnPart6Pop(6);//等內容放好再取消註解
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_核心研發','');
    });
    $(".part6Btn7").click(function(e) {
        //fnPart6Pop(7);//等內容放好再取消註解
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_品牌','');
    });
    $(".part6Btn8").click(function(e) {
        //fnPart6Pop(8);//等內容放好再取消註解
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_網路優勢','');
    });
    $(".part6Btn9").click(function(e) {
        //fnPart6Pop(9);//等內容放好再取消註解
        //tracking----
        FECommon.GAEvent('click','產業創新升級','產業創新升級_合作夥伴','');
    });

    $("#popup2 .xBtn").click(function(e) {
        $("#popup2").removeClass("on");
        $("#popup2 .popup2ConI").removeClass("on");
        setTimeout(function() {
            $("#popup2").css('z-index',-1)
        },300);
    });
    /*
    $(".part7 .picHint .arwL").click(function(e) {
        if(  $(".part7").attr("data-p")=="1"){
        
            $(".part7").attr("data-p","0");
            $(".part7").attr("data-x",parseInt($(".timelineWrap").css("width"))/2);
            fnPart7Move(parseInt($(".timelineWrap").css("width"))*5/8);
            setTimeout(function(){   $(".part7").attr("data-p","1");},500);
        }
    });
    
    $(".part7 .picHint .arwR").click(function(e) {
        if(  $(".part7").attr("data-p")=="1"){
        
            $(".part7").attr("data-p","0");
            $(".part7").attr("data-x",parseInt($(".timelineWrap").css("width"))/2);
            fnPart7Move(parseInt($(".timelineWrap").css("width"))*3/8);
            setTimeout(function(){   $(".part7").attr("data-p","1");},500);
        }
    });
    */
    $(".part7  .part7ArwL").click(function(e) {
        if(  $(".part7").attr("data-p")=="1"){
        
            $(".part7").attr("data-p","0");
            $(".part7").attr("data-x",parseInt($(".timelineWrap").css("width"))/2);
            fnPart7Move(parseInt($(".timelineWrap").css("width"))*5/9);
            setTimeout(function(){   $(".part7").attr("data-p","1");},500);
        }
    });
    
    $(".part7 .part7ArwR").click(function(e) {
        if(  $(".part7").attr("data-p")=="1"){
        
            $(".part7").attr("data-p","0");
            $(".part7").attr("data-x",parseInt($(".timelineWrap").css("width"))/2);
            fnPart7Move(parseInt($(".timelineWrap").css("width"))*4/9);
            setTimeout(function(){   $(".part7").attr("data-p","1");},500);
        }
    });
    $(window).scroll(function(event) {
        var wScrollY = window.scrollY;
        var wInnerH = window.innerHeight;
        var p1 = $(".header").height() ;
        
        var p2 = $(".part1").height() / 2;
        var p4 = $(".part1").height() + $(".part2").height() + $(".part3").height() + $(".part4").height() / 5;
        if ($(window).width() <= 750) {
            p2 = 1;
            p4 = $(".part1").height() + $(".part2").height() + $(".part3").height() / 2;
        }
        
        
        if (getScrollTop() < p1+p2/3) {
            $(".voKvBG").addClass("on");
        } else  if (getScrollTop() >p1+ p2) {
            $(".voKvBG").removeClass("on");
        }
        
        
        if (getScrollTop() > p2) { 
            $(".part2").addClass("on");
        } else {
            $(".part2").removeClass("on");
        }
        if (getScrollTop() > p4) {
            $(".part4Pic1").addClass("on");
            $(".part4Pic2").addClass("on");
        } else {
            $(".part4Pic2").removeClass("on");
            $(".part4Pic1").removeClass("on");
        }
    });

    function getScrollTop() {
        var bodyTop = 0;
        if (typeof window.pageYOffset != "undefined") {
            bodyTop = window.pageYOffset;

        } else if (typeof document.compatMode != "undefined" &&
            document.compatMode != "BackCompat") {
            bodyTop = document.documentElement.scrollTop;

        } else if (typeof document.body != "undefined") {
            bodyTop = document.body.scrollTop;
        }
        return bodyTop;
    }

    function fnPart6Pop(e) {
        $("#popup2").addClass("on").css('z-index',200);
        $("#popup2 .popup2ConI").removeClass("on");
        $("#popup2 .pc" + e).addClass("on");
    }
    
    fnPart3Auto(); 
    
    function fnPart3Auto() {
        setTimeout(function(){
            if($(".part3Con").attr("data-prs")=="1"){ 
                fnPart3Move(parseInt($(".part3Con").attr("data-key")) + 1);
            }
            fnPartCtrlSet(1);
            fnPart3Auto();
        },10000);
    }
    
    function fnPartCtrlSet(e){
        $(".part3Con").attr("data-prs",e);
    }
    function fnPart3Move(e) {
        var k = $(".part3Con").attr("data-key");
        var n = e;
        if (n > 3) {
            n = 1;
        }
        if (n < 1) {
            n = 3;
        }
       
       
        $(".part3PicI").removeClass("on");
        $(".part3" + k).removeClass("on");
        $(".part3" + n).addClass("on");
        
        $(".part3P" + k).removeClass("on"); 
        $(".part3P" + n).addClass("on");
        $(".part3D" + k).removeClass("on");
        $(".part3D" + n).addClass("on");
        $(".part3N" + k).removeClass("on");
        $(".part3N" + n).addClass("on");
        $(".part3Con").attr("data-key", n);
        
    }

    
    function fnPart4Move(e) {
        var k = $(".part4Con").attr("data-key");
        var n = e;
        if (n > 3) {
            n = 1;
        }
        if (n < 1) {
            n = 3;
        } 
        $(".part4"+k).removeClass("on");
        $(".part4"+n).addClass("on");
        $(".part4D"+k).removeClass("on");
        $(".part4D"+n).addClass("on");
        $(".part4VodieGroup .title1").html($(".part4"+n).attr("data-val"));
        $(".part4Con").attr("data-key", n);
    }
    

    function fnPart4Side(e) {
     
        var k = $(".part4Con").attr("data-key");
        var n = parseInt(k) + e;
        
        if (n > 3) {
            n = 1;
        }
        if (n < 1) {
            n = 3;
        }
        
       // $(".part5PicList").animate({ 'margin-left': ($(".part5Img").width() * (1 - n)) + "px" }, 100);
        fnPart4Move(n);
    }
    
    function fnPart5Side(e) {
        var k = $(".part5Pic").attr("data-key");
        var n = parseInt(k) + e;
        if (n > 3) {
            n = 1;
        }
        if (n < 1) {
            n = 3;
        }
       // $(".part5PicList").animate({ 'margin-left': ($(".part5Img").width() * (1 - n)) + "px" }, 100);
        fnPart5Move(n);
    }
    
    function fnPart5Move(e) {
        var k = $(".part5Pic").attr("data-key");
        var n = e;
        if (n > 3) {
            n = 1;
        }
        if (n < 1) {
            n = 3;
        }
        $(".part5C" + k).removeClass("on");
        $(".part5C" + n).addClass("on"); 
        $(".part5PicI"+k).removeClass("on");
        $(".part5PicI"+n).addClass("on");
        $(".part5D"+k).removeClass("on");
        $(".part5D"+n).addClass("on");
        
        $(".part5Pic").attr("data-key", n);
    }
    
    function fnPart7Move(e) {  
    
        var w=window.innerWidth;
        var k=(e-parseInt($(".part7").attr("data-x")))*2;   
        var s = parseInt($(".timelineWrap").css("left"));
        var r=(parseInt($(".timelineWrap").css("width"))-w)
        var tmp="+="+k;
        var roset=50;
        if(FECommon.isRWD750()){
            roset=-130;
        } 
        if( (k+s) <-r) tmp="-"+(r+roset)+"px";  
     
        if( (k+s) > 20)  tmp="20px";  
      
   
        $(".timelineWrap").animate({"left":tmp},100,function(){ 
     
        });
        
        $(".part7").attr("data-x",e.clientX); 
        
    
    }



    var part7 = document.getElementById("history"); 
    part7.addEventListener('touchstart',function(e){  $(".part7").attr("data-x",e.changedTouches[0].pageX); } , false);
    part7.addEventListener('touchend', function(e){fnPart7Move(e.changedTouches[0].pageX)}, false); 

    part7.addEventListener('mousedown',function(e){  $(".part7").attr("data-x",e.clientX); } , false);
    part7.addEventListener('mouseup', function(e){fnPart7Move(e.clientX)}, false); 
 
     var part41 = document.getElementById("part41"); 
    
    part41.addEventListener('touchstart',function(e){  $(".part41").attr("data-x",e.changedTouches[0].pageX); } , false);
    part41.addEventListener('touchend', function(e){
    
        var tmpn= parseInt(e.changedTouches[0].pageX);
        var tmpo=parseInt($(".part41").attr("data-x")); 
        var tmpx=tmpn-tmpo;
        tmpx=tmpx/Math.abs(tmpx); 
        fnPart4Side(tmpx); 
    }, false); 
    
      var part42 = document.getElementById("part42"); 
    
    part42.addEventListener('touchstart',function(e){  $(".part42").attr("data-x",e.changedTouches[0].pageX); } , false);
    part42.addEventListener('touchend', function(e){
    
        var tmpn= parseInt(e.changedTouches[0].pageX);
        var tmpo=parseInt($(".part42").attr("data-x")); 
        var tmpx=tmpn-tmpo;
        tmpx=tmpx/Math.abs(tmpx); 
        fnPart4Side(tmpx); 
    }, false); 

        var part43 = document.getElementById("part43"); 
    
    part43.addEventListener('touchstart',function(e){  $(".part43").attr("data-x",e.changedTouches[0].pageX); } , false);
    part43.addEventListener('touchend', function(e){
    
        var tmpn= parseInt(e.changedTouches[0].pageX);
        var tmpo=parseInt($(".part43").attr("data-x")); 
        var tmpx=tmpn-tmpo;
        tmpx=tmpx/Math.abs(tmpx); 
        fnPart4Side(tmpx); 
    }, false); 
    
 
    var part51 = document.getElementById("part5PicList"); 
    
    part51.addEventListener('touchstart',function(e){  $(".part5PicList").attr("data-x",e.changedTouches[0].pageX); } , false);
    part51.addEventListener('touchend', function(e){
    
        var tmpn= parseInt(e.changedTouches[0].pageX);
        var tmpo=parseInt($(".part5PicList").attr("data-x")); 
        var tmpx=tmpn-tmpo;
        tmpx=tmpx/Math.abs(tmpx);
        
        console.log(tmpn,tmpo,tmpx);
    
        fnPart5Side(tmpx); 
    }, false); 
    
 

});