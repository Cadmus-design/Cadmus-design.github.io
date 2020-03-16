$(function(){

    //設定時間變數
    var duration = 300;

    //buttons2
    $('#buttons2 button').each(function(index){
        var pos = index *40 -40;
        $(this).css('top', pos);
    })
    .on('mouseover', function(){
        $(this).stop(true).animate({
            backgroundColor: '#faee00',
            color: '#000'
        }, duration);
        $(this).find('img:first-child').stop(true).animate({
            opacity:0
        }, duration);
        $(this).find('img:nth-child(2)').stop(true).animate({
            opacity:1
        }, duration);
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            backgroundColor: '#fff',
            color: '#01b169'
        }, duration);
        $(this).find('img:first-child').stop(true).animate({
            opacity: 1
        }, duration);
        $(this).find('img:nth-child(2)').stop(true).animate({
            opacity: 0
        }, duration);
    });
});