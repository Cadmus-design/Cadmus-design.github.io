// JavaScript Document
$(function(){
//SCROLL至一定高度，鎖住head

	
//開合	
$(".octit").click(function(){
	if($(this).next().is(":hidden")){
		$(this).next().slideDown();
		$(this).children().removeClass("open");
		$(this).children().addClass("close");
	}else{
		$(this).next().slideUp();
		$(this).children().removeClass("close");
		$(this).children().addClass("open");
	}
});


$(".ocmen").click(function(){
	if($(this).next().is(":hidden")){
		$(this).next().slideDown();
		$(this).children().removeClass("open");
		$(this).children().addClass("close");
	}else{
		$(this).next().slideUp();
		$(this).children().removeClass("close");
		$(this).children().addClass("open");
	}
});

});







