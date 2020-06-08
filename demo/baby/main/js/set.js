// JavaScript Document
$(function () {
	onscroll = function () {		
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop >= 1000) {
			$('.btn_goTop').addClass("show");
		} else {
			$('.btn_goTop').removeClass("show");
		}

	};
	

	$('.btn_detail a').click(function () {
		var str = "#pop" + $(this).attr("id").replace('btn_set','');
		$('.pop_overlay').addClass("show");
		$(".pop_overlay").find( str ).addClass("show");
	});
	
	$('.btn_close').click(function () {
		$('.pop_overlay').removeClass("show");
		$('.pop_box').removeClass("show");
	});

});
