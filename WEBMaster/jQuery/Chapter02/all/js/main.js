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

//ch2-2
/*
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
		'transform':'rotate(30deg)',
		'text-align':'center'
		
	})
});
$(function(){
	$('h3').css({
		fontSize:'10em',
		transform:'rotate(-25deg)'
	})
});
*/
//ch2-3
/*
$(function(){
	$('#typo')
			.on('mouseover',function(){
				$('#typo').css({
					color:'#000',
					background:'#ffff00'
		});
			})
			.on('mouseout',function(){
				$('#typo').css({
					color:'',
					background:''
				});
			});
})
/*
$(function(){
	$('#typo')
			.on('mouseover',function(){
				$('#typo').css({
					color: '$ebc000',
					background: '#ae5b9b'
				});
			})
			.on('mouseout',function(){
				$('#typo').css({
					color: '',
					background: '',
				});
			});
})
*/
//CH2-4
/*
$(function(){
	$('#typo .inner').on('click', function(){
		$('#typo .inner').animate({
			opacity:0,
			fontSize:'0px'
		},
		1500
		);
	});
});
*/
//ch2-2
/*
$(function(){
	$('#typo').css('color','#dddddd');
});
$(function(){
	$('#typo .inner').css('transform','rotate(10deg)');
});
$(function(){
	$('.page-main > div:nth-child(1) .inner').css('opacity',0.5);
});
*/
/*
$(function(){
	$('#typo').css({
		'color':'blue',
		'font-size':'12px',
		'text-decoration':'right'
	})
});
*/
/*
$(function(){
	$('#typo').css({
		backgroundColor:'black',
		fontSize:'20px',
		color:'#fff'
	});
});
*/
//ch2-3
/*
$(function(){
	$('#typo').on('click',function(){
		$('#typo').css('color','#ddd');
		$('header').css('background','#000');
	});
});
*/
/*
$(function(){
	$('#typo').on('mouseover',function(){
		$('#typo').css({
			color:'#bbb',
			background:'aaa'
		});
	});
});
$(function(){
	$('#typo').on('mouseout',function(){
		$('#typo').css({
			color:'',
			background:'',
		});
	});
});
*/
/*
$(function(){
	$('#typo')
	.on('mouseover',function(){
		$('#typo').css({
			color:'#000',
			background:'#ddd'
		});
	})
	.on('mouseout',function(){
		$('#typo').css({
			color:'',
			background:''
		});
	});
});
*/
//ch2-4
/*
$(function(){
	$('#typo .inner').on('click', function(){
		$('#typo .inner').animate({
			opacity:'0',
			fontSize:'0px'
		},
		1500
		);
	});
});
*/
/*
$(function(){
	$('#typo .inner').on('click' ,function(){
		$('#typo .inner').animate({
			color:'#000'
		},
		1500
		);
	});
});
*/
/*
$(function(){
	$('#typo .inner')
	.css('top','-100px')
	.on('click', function(){
		$('#typo .inner').animate({
			top: '100px'
		},
		1500,
		'easeInOutBounce',
		function(){
			$('#typo .inner').animate({top:'0px'},500);
		}
		);
	});
});
*/
/*
$(function(){
	$('#typo')
	.on('mouseover',function(){
		$('#typo').stop(true).animate({
			backgroundColor:'#ffff00'
		},
		500
		);
	})
	.on('mouseout', function(){
		$('#typo').stop(true).animate({
			backgroundColor:'#ddd'
		},
		500
		);
	});
});
*/

/*20200302*/
//   CH1
/*
$(function(){
	$('#typo').css('color','#ebc000');
});
*/

/*
$(function(){
	$('#typo .inner').css('transform','rotate(10deg)');
});
*/
//    CH2
/*
$(function(){
	$('.page-main > div:nth-child(1) .inner').css('opacity','0.5');
});

$(function(){
	$('#typo').css(
	{
		'fontSize':'50px',
		'backgroundColor':'#300aaa',
		'color':'#ddd'
	})
});
*/
//    CH3
/*
$(function(){
	$('#typo').on('mouseover', function(){
		$('#typo').css('color','#ebc000');
	});
});
*/
/*
$(function(){
	$('#typo').on('click', function(){
		$('#typo').css('backgroundColor','#ae5e9b');
		$('header').css('color','#ae5e9b');
	});
});
*/
/*
$(function(){
	$('#typo').on('mouseover', function(){
		$('#typo').css({
			color: '#ebc000',
			backgroundColor: '#ae5e9b'
		});
	});
	$('#typo').on('mouseout',function(){
		$('#typo').css({
			color:'',
			backgroundColor:''
		});
	});
});
*/
/*
$(function(){
	$('#typo')
	.on('mouseover',function(){
		$('#typo').css({
			color: '#ebc000',
			backgroundColor: '#ae5e9b'
		});

	})
	.on('mouseout', function(){
		$('#typo').css({
			color:'',
			backgroundColor: ''
		});
	})
})
*/
//   CH2 step3
/*
$(function(){
	$('#typo .inner').on('click', function(){
		$('#typo .inner').animate({
			//opacity: 0,
			//fontSize: '0px'
			//color:'#ebc000'
		},
		1500
		);
	});
});
*/
/*
$(function(){
	$('#typo .inner')
	.css('top', '-100px')
	.on('click', function(){
		$('#typo .inner').animate({
			top: '100px'
		},
		1500,
		'swing',
		//加入動畫結束的處理程序
		function(){
			$('#typo .inner').animate({top: '0px'},500,'linear');
		}
		);
	});
});
*/
/*
$(function(){
	$('#typo')
	.on('mouseover',function(){
		$('#typo').stop(true).animate({
			backgroundColor: '#ae5e9b'
		},
		500
		);
	})
	.on('mouseout', function(){
		$('#typo').stop(true).animate({
			backgroundColor: '#3498db'
		},
		500
		);
	});
});
*/
//變數資料再利用
/* CH3
var arg = {
    'font-size' : '50px',
    'background-color' : '#ae5e9b',
    'color' : 'ebc000'
};
//傳遞資料

$(function(){
	$('#typo .inner').on('mouseover',function(){
		$('#typo .inner').css(arg);
	});
});

*/
//CH3 this
/*
$(function(){
    $('header, #typo, footer').on('mouseover', function(){
        $(this).css(
            'background-color', '#ae5e9b'
            );
     });
    //下方增加移開後恢復原始狀態
     $('header, #typo, footer').on('mouseout', function(){  
        $(this).css(
            'background-color', ''
            );
     });
}); 
var num = 10-5*345/97;
*/

var chan = function(){
	$(this).css('color','#ffff00');
}
$(function(){
	$('#typo').on('mouseover', chan)});


/*
$(function(){
    $('#typo').on('mouseover' ,function(){
        $(this).css('color', '#ebc000');
    });

    $('#header').on('mouseover' ,function(){        
        $(this).css('color', '#ebc000');
     });
 });
 */
 var a=1;
 if(a<10){
 	a+=a;
 }else{
 	return;;
 }
