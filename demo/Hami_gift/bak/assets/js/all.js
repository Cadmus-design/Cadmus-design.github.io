$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

$(document).ready(function() {
  $('.btn-demo').click(function(_evt){
  _evt.preventDefault();
  $(this).toggleClass('current');
  });

/*
$("div").animate({  
        width: '300px',  
        padding: '20px'  
      }, 'slow'); 
      */

/*
    $("div").hide(500, function(){  
      // $(this) 是每一個各別的 <div>  
      $(this).show(500);  
    }); 
    
        $("div").hide();  
    $("div").css("color", "blue");  
    $("div").slideDown();  

});
$(function() {
$("div").animate({  
        width: '300px',  
        padding: '20px'  
      }, 'slow'); 
       });
*/
  