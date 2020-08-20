; (function () {
  // all page
  $('.subMenuBtn').click(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $(this)
        .parents('.subMenu')
        .slideUp(200)
    }
  })
  $('#menuVipBtn').click(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $('#subMenuVip').slideToggle(200)
    }
  })
  $('#menuOfferBtn').click(function () {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $('#subMenuOffer').slideToggle(200)
    }
  })
  $('#RemindBtn').click(function () {
    $('#RemindBtn').hide()
    $('#RemindCloseBtn').show()
    $('.remind_content').slideDown(500)
  })
  $('#RemindCloseBtn').click(function () {
    $('#RemindCloseBtn').hide()
    $('#RemindBtn').show()
    $('.remind_content').slideUp(500)
  })
  var menuOffset = $('#menu_group').offset().top
  $(window).on('resize', function () {
    menuOffset = $('#menu_group').offset().top
  })
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop()
    var tapBar = $('#header').outerHeight()
    if (scrollTop >= menuOffset - 5) {
      $('#menu_group').addClass('menu_group-active')
    } else if (scrollTop < tapBar) {
      $('#menu_group').removeClass('menu_group-active')
    }
  })

  // main page
  // 剛進網頁測網址
  // var url = location.href
  // var utmVal = url.split('#')[1].split('?')[0]
  // // console.log(utmVal)
  // if (utmVal) {
  //   if($(window).width()<760){
  //     console.log('min')
  //     anchorActi(utmVal, -400)
  //   }else{
  //     anchorActi(utmVal, -180)
  //   }
  // } else return

  // $('#vipServiceBtn').click(function(){
  //   anchorActi('vipServiceTarget',-100)
  // })
  // function anchorActi(target, offset) {
  //   console.log(offset)
  //   var val = $('#' + target).offset().top + offset
  //   console.log(val)
  //   $('html, body').scrollTop(val) 

  // }


  //roaming page
  $('.jsRightNowBtn').on('click', function (event) {
    event.preventDefault()
    var value = $(this).data('num')
    var classVal = ''
    if (value == 0) {
      return
    }
    if (value == 3 || value == 4 || value == 8) {
      classVal = 'tooLong'
    }
    var innerValue =
      '<img class="' +
      classVal +
      '" src="./img/table/table' +
      value +
      '.png" alt="table' +
      value +
      '">'
    $('#floatBox').css('display', 'block')
    $('#floatBox').show(300)
    $('body').css({ height: '100vh', overflow: 'hidden' })
    $('#contentWrap').html(innerValue)
  })
  $('#closeTableBtn').on('click', function () {
    $('#floatBox').hide(300)
    $('body').css({ height: 'auto', overflow: 'auto' })
    $('#contentWrap').html()
  })
  $('.tableBackBtn').on('click', function () {

    var vm = $(this)
      .parent()
      .siblings('.fixed_R_wrap').children('.fixed_R_float_g')
    var vmNow = vm.scrollLeft()
    var newNum = parseInt(vmNow / 344)
    vm.animate(
      { scrollLeft: (newNum - 1) * 344 }, 500
    )
    // vm.scrollLeft((newNum-1)*344)
  })
  $('.tableNextBtn').on('click', function () {
    var vm = $(this)
      .parent()
      .siblings('.fixed_R_wrap').children('.fixed_R_float_g')
    var vmNow = vm.scrollLeft()
    var newNum = parseInt(vmNow / 345)
    vm.animate(
      { scrollLeft: (newNum + 1) * 345 }, 500
    )
    // vm.scrollLeft((newNum +1)* 345)
  })

  // main page
  $('#questionOpen').click(function () {
    $('#questionOpen').hide()
    $('#questionClose').show()
    $('#questionWrap').slideDown(500)
  })
  $('#questionClose').click(function () {
    $('#questionClose').hide()
    $('#questionOpen').show()
    $('#questionWrap').slideUp(500)
  })
  $()
})($)
