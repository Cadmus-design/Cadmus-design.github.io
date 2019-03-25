$(document).ready(function () {
	if(location.href.indexOf("news.html")>-1){ 
		$("main").css("min-height", (document.documentElement.clientHeight-10 - parseInt($("#footer").height()) - parseInt($("#menu").height())) + "px");
	}
	
	function isRWD750() {
		return ($(window).width() <= 750) ? true : false;
	}

	$(window).resize(function (e) {
		if (isRWD750()) {
			$("#menu .menuctrlopen").show();
			$("#menu .menuctrlclose").hide();
			$("#menu .itemArea").hide();
			$("#menu .itemArea .item").css("margin-left", "1237px");
			$(".subItem").show();
		} else {

			$("#menu .menuctrlopen").hide();
			$("#menu .menuctrlclose").hide();
			$("#menu .itemArea").show();
			$(".subItem").hide();
			$("#menu .itemArea .item").css("margin-left", "0px");
			$("#menu .menubg").css("width", "0px");
		}
	});
	
	$(".toTopRun ").click(function(){ 
            $("body,html").animate({
                    scrollTop: 0
                },
                100
            );
	});

	$(".clicknode").click(function (e) {

		// tracking code embed start

		//tracking code emnbed end

		var url = $(this).attr("data-url");
		var method = $(this).attr("data-method");

		if (method == 'blank') {
			window.open(url);
		} else {
			location.href = url;
		}


	})
	$("#news1").click(function (e) {
		$("#popup").removeClass("hide");
	})

	$(".close").click(function (e) {
		$("#popup").addClass("hide");
	})
	// store-locator area
	$('#btn1').click(function () {
		$('html,body').animate({ scrollTop: $('#tag1').offset().top + -120 + "px" }, 800);
	});
	$('#btn2').click(function () {
		$('html,body').animate({ scrollTop: $('#tag2').offset().top + -120 + "px" }, 800);
	});
	$('#btn3').click(function () {
		$('html,body').animate({ scrollTop: $('#tag3').offset().top + -120 + "px" }, 800);
	});
	$('#btn4').click(function () {
		$('html,body').animate({ scrollTop: $('#tag4').offset().top + -120 + "px" }, 800);
	});
	$('#btn5').click(function () {
		$('html,body').animate({ scrollTop: $('#tag5').offset().top + -120 + "px" }, 800);
	});
	$('#btn6').click(function () {
		$('html,body').animate({ scrollTop: $('#tag6').offset().top + -120 + "px" }, 800);
	});
 


	$("#menu .item").mouseover(function (e) {
		if (!isRWD750()) {
			$(this).css("color", "#3297cb");
			$(".subItem").hide();
			$(this).find(".subItem").show();
		}
	})

	$("#menu .item").mouseout(function (e) {
		if (!isRWD750()) {
			$(this).css("color", "#195d99");
			$(".subItem").hide();
		}
	})


	$("#menu .menuctrlopen").click(function (e) {
		$("#menu .menuctrlopen").hide();
		$("#menu .itemArea").show();
		setTimeout(function () {
			$("#menu .itemArea .menubg").animate({ "width": "83%" }, 500, function () { });
			$("#menu .itemArea .item").animate({ "margin-left": "236px" }, 500, function () {
				$("#menu .menuctrlclose").fadeIn(200);
			});
		}, 110);

	})

	$("#menu .menuctrlclose").click(function (e) {

		$("#menu .menuctrlclose").hide();
		setTimeout(function () {
			$("#menu .itemArea .item").animate({ "margin-left": "1236px" }, 500, function () {
				$("#menu .menuctrlopen").fadeIn(200);
			});
			$("#menu .itemArea .menubg").animate({ "width": "0%" }, 500, function () {
				$("#menu .itemArea").fadeOut(300);
			});

		}, 100);
	})

	$(".popupOpen").click(function (e) {
		$("#popup .title").html($(this).attr("data-title"));
		$("#popup .txt").html($(this).attr("data-txt"));

		$("#popup").show();

		$("main").css("min-height", $("#popup").height());

	});


	$("#popup_maintain").css("min-height", (parseInt($("main").height())) + "px");

	$("#popup_maintain .close").click(function (e) { $("#popup_maintain").hide(); });
	$(".popupbox .close").click(function (e) {
	
		$("main").css("min-height", (document.documentElement.clientHeight-10 - parseInt($("#footer").height()) - parseInt($("#menu").height())) + "px");
		$("#popup").hide();
		$("#popup .title").html("");
		$("#popup .txt").html("");

	});



})

