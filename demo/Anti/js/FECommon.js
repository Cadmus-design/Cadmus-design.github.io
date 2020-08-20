var FECommon = FECommon || {};
(function(FECommon) {
	//anchor
	FECommon.hashRun = function(_href){
		hashRun(_href);
	}
	function hashRun(_href){
		var target = $(_href == '#' || _href == '#top' ? 'html' : _href);
		var position = target.offset().top;
		$('html, body').stop().animate({scrollTop:position}, 550, 'swing');
		return false;
	}

    //rwd
    FECommon.isRWD767 = function() {
        return (window.outerWidth <= 767) ? true : false;
    };

	//equalheight
	FECommon.equalheight = function(e) {
        _equalheight(e);
    };
    function _equalheight(e) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(e).each(function() {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.offset().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }


})(FECommon);
$(document).ready(function(){
	//anchor
	$('a[href^=#]').on('click',function(e){
		FECommon.hashRun($(this).attr('href'));
	});

	//equalheight
    function setHeight(){
        if(!FECommon.isRWD767()){
        	FECommon.equalheight('.box5Th .box5ThI');
        	FECommon.equalheight('.box5Td .box5TdI');
        }else{
            $('.box5Th .box5ThI').css('height','');
            $('.box5Td .box5TdI').css('height','');
        }
    }
    setHeight();
    $(window).resize(function(){
        setHeight();
    });
});