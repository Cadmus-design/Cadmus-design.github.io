//$(function () {
//    $('#typo')
//        .on('mouseover', function () {
//            $('#typo').animate.stop(true)({
//                backgroundColor: '#ae5e9b'
//            },
//            500
//          );
//        })
//        .on('mouseout', function () {
//            $('#typo').animate.stop(true)({
//                backgroundColor: '#3498db'
//            },
//            500
//        );
//   });
//});
/*
$(function () {
    $('#typo .inner').on('click', function () {
        $('#typo .inner').animate({
            color: '#ebc000'
            },
            1500
        );
    });
});
*/


$(function(){
	//$('#typo').css('color','#ff0000');
	//$('#typo .inner').css('transform','rotate(10deg)');
	$('.page-main > div:nth-child(1) .inner').css('opacity',0.1);
	$('h1').css('text-decoration','underline');
});
$(function(){
	$('p').css('color','#fff');
	$('p').css('font-size','2em');
	$('p').css('background','#ff9900');
});
$(function(){
	$('h2').css({
		'font-size':'5em',
		'transform':30deg,
		'text-align':'center'
		
	})
});
$(function(){
	$('h3').css({
		fontSize:'10em',
		transform:-25deg,
	})
};