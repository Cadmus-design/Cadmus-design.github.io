(function ($) {
    var mobileWidth = 768,
        scrollTopPair = {
            '.nav-global-header': 'scrolling-down',
            '.btn-scroll-top': 'scrolling-down',
            '.nav-global-banner': 'scrolling-down',
            '.with-banner': 'scrolling-down'
        },
        navHeightMobile = 60;

    // Actions after document loaded
    $(document).ready(function () {
        window.lastWindowHeight = $(document).scrollTop();

        $(window).scroll(function () {
            // Toggle nav hidden/shown while scrolling
            if ($(this).scrollTop() > window.lastWindowHeight && window.lastWindowHeight > navHeightMobile) {
                for (var target in scrollTopPair) {
                    $(target).addClass(scrollTopPair[target]);
                }
            } else {
                for (var target in scrollTopPair) {
                    $(target).removeClass(scrollTopPair[target]);
                }
            }

            window.lastWindowHeight = $(document).scrollTop();
        });

        // aos init
        AOS.init();

        var test = 0
        $(function ($) {
            $lazyLoadImgs = $('.lazyload')
            if ($lazyLoadImgs.length) {
                $lazyLoadImgs.Lazy()
                //   afterLoad: function(e) {
                //     console.log('innn', e)
                //     test += 1
                //     if (test === 4) {
                //       var $tabSticky = $('.tab-sticky')
                //       if ($tabSticky.length) {
                //         $('.tab-sticky').simpleMenu({
                //             stickyMenu: true,
                //             slidingLine: true,
                //             slidingLineHeight: '0px',
                //             stickyMenuClassName: 'is_stuck'
                //           });
                //       }
                //     }
                //   },
                //   onFinishedAll: function() {
                //     console.log('innn onFinishedAll')
                //   }
                // });
            }
        });

        // card clicked visual effect, only works in the same group of neko
        $('.neko').on('click', function () {
            $(this).children('.card-wrapper').children('.with-click-toggle').toggleClass('card-focus');
            $(this).siblings().children('.card-wrapper').children('.with-click-toggle').removeClass('card-focus');
            $(this).closest('.owl-item').siblings().children('.neko').children('.card-wrapper').children('.with-click-toggle').removeClass('card-focus');
        });

        // back to top

        $('.btn-scroll-top').on('click', function () {
            var body = $("html, body");
            body.stop().animate({ scrollTop: 0 }, 500, 'swing');
        });

        $('.nav-global').each(function () {
            var navGlobal = this;

            // Search field
            $('.search', navGlobal).each(function () {
                var self = this;

                // click search button
                $('.search-button', this).on('click', function () {
                    $('.search-field', self).addClass('active'); //desktop
                    $(navGlobal).addClass('show-mobile-search'); //mobile
                    $('.input-search', self).focus();
                    $('#header-overlay').show();
                });

                // click search close button
                $('.close-button, .close-button-desktop-only', this).on('click', function () {
                    $('.search-field', self).removeClass('active'); //desktop
                    $(navGlobal).removeClass('show-mobile-search'); //mobile
                    $('.drop-down-menu', navGlobal).removeClass('active');
                    $('.menu', navGlobal).removeClass('active');
                    $('#header-overlay').hide();
                });
                //$('body').click(function (evt) {
                //    if ($(evt.target).parents(".show-mobile-search").length == 0 ||
                //        evt.target.className == "close-button-desktop-only") {
                //        $('.search-field', self).removeClass('active'); //desktop
                //        $(navGlobal).removeClass('show-mobile-search'); //mobile
                //        $('.drop-down-menu', navGlobal).removeClass('active');
                //        $('.menu', navGlobal).removeClass('active');
                //        $('#header-overlay').hide();
                //    }
                //});


                $('.input-search', self).each(function () {
                    $(this)
                        .on('focus', function () {
                            $('.search-field .input-search').focus();
                            $('.search-field', self).addClass('active'); //desktop
                            $(navGlobal).addClass('show-mobile-search'); //mobile
                        })
                        .on('blur', function () {
                            setTimeout(function () {
                                $('.search-field .input-search').val('');
                            }, 200);
                            // $('.search-field', self).removeClass('active'); //desktop
                            // $(navGlobal).removeClass('show-mobile-search'); //mobile
                        });
                })
            });


            // Create start date
            var start = new Date();
            // 09:00 AM
            start.setMinutes(0);
            $('.datepicker-hour').datepicker({
                minMinutes: 0,
                maxMinutes: 0,
                startDate: start
            });


            // general tab switcher

            $('.tab-wrap').each(function () {
                var tab = this;

                $('a', tab).on('click', function () {
                    $('a', tab).removeClass('current');
                    $(this).addClass('current');
                });
            });

            // $('.tab-wrap a').on('click', function() {
            //   $('.tab-wrap a').removeClass('current');
            //   $(this).addClass('current');
            // });

            // language switcher

            $('.language-switcher a').on('click', function () {
                $('.language-switcher a').removeClass('current');
                $(this).addClass('current');
            });

            // tab slider

            $('.owl-tab-slider').owlCarousel({
                margin: 5,
                loop: false,
                autoWidth: true,
                nav: true,
                items: 30,
                navText: ['<img src="/home/eshop/img/ic/arrow-left.svg" />', '<img src="/home/eshop/img/ic/arrow-right.svg" />'],
                slideBy: 20,
                stagePadding: 20,
                rewind: false,
                navSpeed: 100
            })

            // 清除訂閱 email 的 input

            $('.clear-trigger').on('click', function () {
                $('#clear-target').val('');
            });
            
            // use select value to toggle named div
            $(function () {
                var $select = $('.select-toggle'),
                    $form = $('.select-form');
                $form.not('.active').hide();
                $select.on('change', function () {
                    var value = '.' + $(this).val();
                    $form.removeClass('active');
                    $form.show().not(value).hide();
                });
            });
            // use select radio to toggle named div
            $(function () {
                var $radio = $('.radio-toggle'),
                    $form = $('.radio-form');
                $radio.on('click', function () {
                    var value = '.' + $(this).val();
                    $form.removeClass('active');
                    $form.show().not(value).hide();
                });
            });


            // rate/rate-list.html demo comparison


            $('[date-toggle-set="a"]').each(function () {
                var $selectA = $('[date-toggle-set="a"] .a-select'),
                    $formA = $('[date-toggle-set="a"] .a-form');
                $formA.not('.active').hide();
                $selectA.on('change', function () {
                    var value = '.' + $(this).val();
                    $formA.removeClass('active');
                    $formA.show().not(value).hide();
                });
                var $selectB = $('[date-toggle-set="a"] .b-select'),
                    $formB = $('[date-toggle-set="a"] .b-form');
                $formB.not('.active').hide();
                $selectB.on('change', function () {
                    var value = '.' + $(this).val();
                    $formB.removeClass('active');
                    $formB.show().not(value).hide();
                });
            });



            $('[date-toggle-set="b"]').each(function () {
                var $selectA = $('[date-toggle-set="b"] .a-select'),
                    $formA = $('[date-toggle-set="b"] .a-form');
                $formA.not('.active').hide();
                $selectA.on('change', function () {
                    var value = '.' + $(this).val();
                    $formA.removeClass('active');
                    $formA.show().not(value).hide();
                });
                var $selectB = $('[date-toggle-set="b"] .b-select'),
                    $formB = $('[date-toggle-set="b"] .b-form');
                $formB.not('.active').hide();
                $selectB.on('change', function () {
                    var value = '.' + $(this).val();
                    $formB.removeClass('active');
                    $formB.show().not(value).hide();
                });
            });



            $('[date-toggle-set="c"]').each(function () {
                var $selectA = $('[date-toggle-set="c"] .a-select'),
                    $formA = $('[date-toggle-set="c"] .a-form');
                $formA.not('.active').hide();
                $selectA.on('change', function () {
                    var value = '.' + $(this).val();
                    $formA.removeClass('active');
                    $formA.show().not(value).hide();
                });
                var $selectB = $('[date-toggle-set="c"] .b-select'),
                    $formB = $('[date-toggle-set="c"] .b-form');
                $formB.not('.active').hide();
                $selectB.on('change', function () {
                    var value = '.' + $(this).val();
                    $formB.removeClass('active');
                    $formB.show().not(value).hide();
                });
            });


            $('.delete-show-item').click(function () {
                $(this).closest('.show-item').remove();
            });
            // toggle product description
            $('.product-description-container').click(function () {
                $(this).toggleClass('active');
            });
            // toggle mod show list
            // $('.show-item').click(function(){
            //   $(this).toggleClass('active');
            // });

            // Menu toggle button @mobile
            $('.menu-button').on('click', function () {
                $('.drop-down-menu', navGlobal).toggleClass('active');
                $('.menu', navGlobal).toggleClass('active');
                $('#header-overlay').toggle();
            });

            // click outside header also close menu or search field
            $('#header-overlay').on('click', function () {
                $('.drop-down-menu', navGlobal).removeClass('active');
                $('.menu', navGlobal).removeClass('active');
                $('#header-overlay').hide();
                $('.search-field', self).removeClass('active'); //desktop
                $(navGlobal).removeClass('show-mobile-search'); //mobile
            });

            // Menu list toggle sub-menu @mobile
            $('.drop-down-menu', navGlobal).each(function () {
                $('.menu-list-title', this).on('click', function () {
                    var self = $(this).closest('.menu-list-mobile');
                    self.toggleClass('current');
                    $('.menu-list-mobile', '.drop-down-menu').not(self).delay(200).removeClass('current');
                });
            });

        });

        // handmade stupid tab switcher; need Finn to rewrite a smarter way. Currently used in product-detail.html
        $('.in-page-tab-switcher a.tab-1').on('click', function () {
            $('.in-page-tab-content .in-page-tab, .in-page-tab-switcher a').removeClass('current');
            $('.tab-1').addClass('current');
        });

        $('.in-page-tab-switcher a.tab-2').on('click', function () {
            $('.in-page-tab-content .in-page-tab, .in-page-tab-switcher a').removeClass('current');
            $('.tab-2').addClass('current');
        });

        $('.in-page-tab-switcher a.tab-3').on('click', function () {
            $('.in-page-tab-content .in-page-tab, .in-page-tab-switcher a').removeClass('current');
            $('.tab-3').addClass('current');
        });

        $('.in-page-tab-switcher a.tab-4').on('click', function () {
            $('.in-page-tab-content .in-page-tab, .in-page-tab-switcher a').removeClass('current');
            $('.tab-4').addClass('current');
        });

        $('.in-page-tab-switcher a.tab-5').on('click', function () {
            $('.in-page-tab-content .in-page-tab, .in-page-tab-switcher a').removeClass('current');
            $('.tab-5').addClass('current');
        });


        // reveal box

        $('.reveal-action-more').click(function () {
            $('.reveal-box').css({ 'height': "auto" });
            $('.reveal-action-more').css({ 'left': "1000px" });
            $('.reveal-action-less').show();
        });
        $('.reveal-action-less').click(function () {
            $('.reveal-box').css({ 'height': "400px" });
            $('.reveal-action-more').css({ 'left': "auto" });
            $('.reveal-action-less').hide();
        });

        // always scroll steps tab to the right

        var $aSelected = $('.tab-steps-container').find('.current');

        if ($aSelected.hasClass('current')) { // .hasClass() returns BOOLEAN true/false
            var pos = $('.tab-steps-container a.current').position().left;
            $('.tab-steps-container').scrollLeft(pos);
        }

        // channel cart


        $('[data-add-to-cart]').each(function () {
            var self = this;
            $(self).on('click', function () {

                $(this).toggleClass('button-white').toggleClass('on');
                if ($('[data-add-to-cart]').hasClass("on")) {
                    $('[data-cart-checkout]').removeClass("button-disable");
                } else {
                    $('[data-cart-checkout]').addClass("button-disable");
                }


            });
        });

        // mod-returning/fill-2.html


        $('[data-check]').each(function () {
            var self = this;
            $(self).on('click', function () {
                $(this).toggleClass('on');
            });
        });


        //// product card like button toggle
        //$('.like-button').each(function () {
        //    var self = this;
        //    $(self).on('click', function () {
        //        $(this).toggleClass('on');

        //        if ($('.like-button').hasClass("on")) {
        //            $("#fav-notification").show().animate({
        //                bottom: "30px",
        //            }, 800);
        //        } else {
        //            $("#fav-notification").show().animate({
        //                bottom: "-100px",
        //            }, 800);

        //        }

        //    });
        //    // show notification after like

        //});

        // 光世代圖表動畫 demo
        /*  setTimeout(function () {
              $('.cht-bar-max').css("opacity", "1");
          }, 1000);
          setTimeout(function () {
              $(".cht-bar-max").animate({
                  width: "70%",
              }, 2500);
          }, 3000);
  
          setTimeout(function () {
              $('.cht-bar-current').css("opacity", "1");
          }, 4000);
          setTimeout(function () {
              $(".cht-bar-current").animate({
                  width: "40%",
              }, 2500);
          }, 6000);
          */



        // clear search "x"

        $('.clearable, .clearable-m, .header-clearable').addClear({
            closeSymbol: "&times;"
        });

        $('.add-clear-span .clearable, .add-clear-span .header-clearable, .add-clear-span').css({
            width: '100%'
        });

        // store-picker
        $('#time-picker').hide();
        $('.form-check.show-time-picker').click(function () {
            $('#time-picker').slideDown();
        });
        $('.form-check.hide-time-picker').click(function () {
            $('#time-picker').slideUp();
        });

        // roaming-picker-block
        $('#time-picke-block').show();
        $('.show-time-picker').click(function () {
            $('#time-picke-block,.hide-block').slideDown();
        });
        $('.hide-time-picker').click(function () {
            $('#time-picke-block,.hide-block').slideUp();
        });


        // badge-selection effects
        $('.color-selector .badge').click(function () {
            $('.badge').removeClass('current');
            $(this).addClass('current');
        });
        // phone-pill-selection effects
        $('.phone-pill-selector .phone-pill').click(function () {
            $('.phone-pill').removeClass('current');
            $(this).addClass('current');
        });

        // tags-container effects
        $('.tags-container .tag-outline').click(function () {
            $('.tag-outline').removeClass('current');
            $(this).addClass('current');
        });

        // Accordian groups with only one open
        $('.accordian-group-only-one').each(function () {
            var self = this;
            $('.accordian-title', self).on('click', function () {
                $('.accordian-group-only-one').addClass('active');
                $(this).closest('.accordian-group-only-one').toggleClass('active');
            });
        });

        // Accordian groups
        $('.accordian-group').each(function () {
            var self = this;
            $('.accordian-title', self).on('click', function () {
                if ($(self).hasClass('accordian-group-footer')) {
                    if (window.innerWidth <= mobileWidth) {
                        $(this).closest('.accordian-group')
                            .toggleClass('active');
                        $('.accordian-group').not(self).addClass('active');
                    }
                } else {
                    $(this).closest('.accordian-group')
                        .toggleClass('active');
                }
            });
        });

        // show all channels

        $('.show-all-channel-results').on('click', function () {
            $(this).hide();
            $('.all-channel-results').slideDown();
        });

        // close banner
        $('.close-banner').on('click', function () {
            $(this).closest('.banner').hide();
            $('#header').removeClass('with-banner');
            $('.header-spacer').removeClass('with-banner');
        });

        // 看header 裡面有沒有 banner

        if ($('#header .banner').length) {
            $('#header').addClass('with-banner');
            $('.header-spacer').addClass('with-banner');
        }


        // 契約捲動檢查
        // 先隱藏按鈕
        $('.scroll-check .lightbox-bottom').hide();
        $('.scroll-check .lightbox-content').on('scroll', function () {
            if ($(this).scrollTop() >= 40) {
                $('.lightbox-bottom').fadeIn();
            }
        });

        // 契約 checkbox 檢查
        // $('.checkbox-check').each(function() {
        //   var self = this;
        //   $('.pass-checkbox-check', self).on('click', function() {
        //     if ($('input', this).is(':checked')) {
        //       $('.button', self).removeClass('button-disable');
        //     } else {
        //       $('.button', self).addClass('button-disable');
        //     }
        //   });
        // });




        // 手機收藏頁面顯示比較表格
        // $('.show-compare-lightbox').on('click', function() {
        //     $('.compare-lightbox').fadeIn();
        //   });




        // MOD 輕鬆購

        // button toggle effects for includes/channel-detail-lightbox.pug
        var totalItems = 0;
        var totalSet = 0;
        var totalMoney = 0;
        var $channelTotalItems = $('.channel-total-items');
        var $channelTotalSet = $('.channel-total-set');
        var $channelTotalMoney = $('.channel-total-money');

        // 為 lightbox 裡的按鈕加上選購、已選購狀態
        $('.m-add-button').each(function () {
            var self = this;
            $('span', self).hide();
            $('.m-status-add', self).show();
            $(this).on('click', function () {
                // console.log('innn')
                $(this).toggleClass('button-green');
                $('.m-status-added', self).toggle();
                $('.m-status-add', self).toggle();
                $(this).toggleClass('m-channel-is-on');
            });
        });


        // $('.m-add-button').each(function() {
        //   var self = this;
        //   $('span', self).hide();
        //   $('.m-status-add', self).show();
        //   // 切換選購、已選購狀態
        //   $(this).on('click', function() {
        //     // console.log('innn')
        //     $(this).toggleClass('button-green');
        //     $('.m-status-added', self).toggle();
        //     $('.m-status-add', self).toggle();
        //     $(this).toggleClass('m-channel-is-on');
        //     // 呼叫購物車
        //     if( $('.m-add-button').hasClass('m-channel-is-on') ){ // .hasClass() returns BOOLEAN true/false
        //       $('#m-channel-cart').addClass('m-pop');
        //       $('.fixed-cart-placeholder').removeClass('hidden');
        //       if ($(this).closest('.m-item').hasClass('m-channel-item')) {
        //         totalItems += 1;
        //       } else if ($(this).closest('.m-item').hasClass('m-channelset-item')) {
        //         totalSet += 1;
        //       }
        //     } else {
        //       if ($(this).closest('.m-item').hasClass('m-channel-item')) {
        //         totalItems -= 1;
        //       } else if ($(this).closest('.m-item').hasClass('m-channelset-item')) {
        //         totalSet -= 1;
        //       }
        //       $('#m-channel-cart').removeClass('m-pop');
        //       $('.fixed-cart-placeholder').addClass('hidden');
        //     }
        //     console.log('totalItems: ', totalItems)
        //     console.log('totalSet: ', totalSet)
        //     $channelTotalItems.text(totalItems);
        //     $channelTotalSet.text(totalSet);
        //   });
        //
        // });

        // 頻道 icon 上的按鈕

        // $('.m-channel-toggle').each(function() {
        // var self = this;
        // 輕鬆購-套餐詳細頁：按了選購按鈕要跳出購物車按了選購按鈕，並顯示已選擇，並顯示已選擇 1 個套餐
        $('.m-channelset-toggle').on('click', function () {
            var $this = $(this)
            console.log('in', $this)
            var $item = $this.closest('.m-item');
            var $itemMoney = +$item.find('.m-item-price').text();
            $this.toggleClass('m-channelset-is-on');
            if ($this.hasClass('m-channelset-is-on')) { // .hasClass() returns BOOLEAN true/false
                if ($this.closest('.m-item').hasClass('m-channel-item')) {
                    totalItems += 1;
                } else if ($item.hasClass('m-channelset-item')) {
                    totalSet += 1;
                }
                totalMoney += $itemMoney;
            } else {
                if ($this.closest('.m-item').hasClass('m-channel-item')) {
                    totalItems -= 1;
                } else if ($item.hasClass('m-channelset-item')) {
                    totalSet -= 1;
                }
                totalMoney -= $itemMoney;
            }
            console.log('totalItems: ', totalItems)
            console.log('totalSet: ', totalSet)
            console.log('totalMoney: ', totalMoney)
            $channelTotalItems.text(totalItems);
            $channelTotalSet.text(totalSet);
            $channelTotalMoney.text(totalMoney);
            if (totalItems || totalSet) {
                $('#m-channel-cart').addClass('m-pop');
            } else {
                $('#m-channel-cart').removeClass('m-pop');
            }
        });

        // 呼叫購物車
        $('.m-channel-toggle').on('click', function () {
            var $this = $(this)
            console.log('in', $this)
            var $item = $this.closest('.m-item');
            var $itemMoney = +$item.find('.m-item-price').text();
            $this.toggleClass('m-channel-is-on');
            if ($this.hasClass('m-channel-is-on')) { // .hasClass() returns BOOLEAN true/false
                $('.fixed-cart-placeholder').removeClass('hidden');
                if ($this.closest('.m-item').hasClass('m-channel-item')) {
                    totalItems += 1;
                } else if ($item.hasClass('m-channelset-item')) {
                    totalSet += 1;
                }
                totalMoney += $itemMoney;
            } else {
                $('.fixed-cart-placeholder').addClass('hidden');
                if ($this.closest('.m-item').hasClass('m-channel-item')) {
                    totalItems -= 1;
                } else if ($item.hasClass('m-channelset-item')) {
                    totalSet -= 1;
                }
                totalMoney -= $itemMoney;
            }
            console.log('totalItems: ', totalItems)
            console.log('totalSet: ', totalSet)
            console.log('totalMoney: ', totalMoney)
            $channelTotalItems.text(totalItems);
            $channelTotalSet.text(totalSet);
            $channelTotalMoney.text(totalMoney);
            if (totalItems || totalSet) {
                $('#m-channel-cart').addClass('m-pop');
            } else {
                $('#m-channel-cart').removeClass('m-pop');
            }
        });
        // });

        //

        $('.m-channel-toggle-single').on('click', function () {
            $('.m-channel-toggle-single').removeClass('m-channel-is-on');
            $(this).toggleClass('m-channel-is-on');
        });


        // 偵測到有選購的時候顯示購物車



        // Initiate tooltips
        $('.tooltip').each(function () {
            var data = $(this).data();
            $(this).tooltipster({
                theme: 'tooltipster-shadow',
                delay: 100,
                delayTouch: [0, 3500],
                trackOrigin: true,
                side: data.side || 'top',
            });
        })
        // $('.tooltip').each(function(ind, el) {
        //   // let tooltipOption = $(this).data();
        //   let option = {};
        //   //
        //   // if ('trigger' in tooltipOption) {
        //   //   otpion.trigger = tooltipOption.trigger;
        //   // }
        //
        //   $(this).tooltipster();
        // });

        // Product gallery
        var $reelContainer = $('.reel-container');
        var $zoomContainer = $('.zoom-container');
        $zoomContainer.addClass('hide')
        $('.product-gallery').each(function () {
            var self = this;

            // Once product thumbs image click
            $('.product-thumbs-link', this).each(function () {
                $(this).on('click', function () {

                    // add current status
                    $('.product-thumbs-link').removeClass('current');
                    $(this).addClass('current');

                    if ($(this).hasClass('show-reel')) {
                        console.log($reelContainer)
                        $reelContainer.removeClass('hide')
                        $zoomContainer.addClass('hide')
                        var $zoomContainerSection = $('.zoomContainer');
                        $zoomContainerSection.remove()
                    } else {
                        $reelContainer.addClass('hide')
                        $zoomContainer.removeClass('hide')
                        // $zoomContainerSection.removeClass('hide')
                    }

                    // Clone the image information clicked
                    let newImageAttr = {
                        src: $('img', this).attr('src'),
                        title: $('img', this).attr('title'),
                        alt: $('img', this).attr('src'),
                        // For more attributes to clone, you can set here
                    };

                    // Replace the current image information displayed
                    $('.product-photo img', self).attr(newImageAttr);
                });
            });
        });

        var owlNavIcons = [
            '<img class="size-s iconic icon-arrow-left" src="/home/eshop/img/ic/arrow-left.svg">',
            '<img class="size-s iconic icon-arrow-right" src="/home/eshop/img/ic/arrow-right.svg">'
        ]

        // Slider using OwlCarousel2
        $('.owl-carousel').each(function () {
            var owlData = $(this).data();
            var config = {
                responsive: {
                    0: {
                        items: owlData.itemsMobile || 1,
                        stagePadding: owlData.stage || 0,
                        slideBy: owlData.scrollItemsMobile || 1
                    },
                    600: {
                        items: owlData.itemsDesktop || 3,
                        slideBy: owlData.scrollItemsDesktop || 4
                    },
                },
                dots: owlData.dots !== undefined ? owlData.dots : true,
                nav: owlData.nav !== undefined ? owlData.nav : true,
                navText: owlNavIcons,
                navClass: owlData.navClass || ['nav-circle-left', 'nav-circle-right'],
                loop: owlData.loop !== undefined ? owlData.loop : false,
                margin: owlData.margin,
                autoplay: owlData.autoplay,
                autoplayTimeout: owlData.autoplayTimeout,
                video: owlData.video !== undefined ? owlData.video : true,
                autoplayHoverPause: true
            };

            $(this).owlCarousel(config);
        });

        // Usage lightbox count data-add-amount
        $('.lightbox#usage').each(function () {
            var self = this;

            $('.form-check', self).on('click', function () {
                var count = 0;

                // Calculate amount
                $('.form-check', self).each(function () {
                    // Accumulation only occurs if input checked
                    if ($('input', this).is(':checked')) {
                        count += $('label', this).data('addAmount');
                    }
                });


                // Reset counted amount
                $('.number-count', self).text(count + ' ');
                // Add attribute to lighbox confirm button
                // $('.set-data-attr').data('cht-filter-value', count + "GB");
                $('.lightbox .button[data-cht-filter-value]').data('cht-filter-value', count + "GB")
            });
        });


        // 高度等高
        $('.mh-container .card-wrapper').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.mh1').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.mh2').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.mh3').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.mh4').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.mh5').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });
        $('.mh6').matchHeight({
            byRow: false,
            property: 'height',
            target: null,
            remove: false
        });

        // Hot number setting
        $('#hot-number-setting').each(function () {
            var self = this,
                numberInput = $('.enter-number', self),
                numberLink = $('.add-number', self),
                numberAddedSetion = $('.phone-pill-col', self);

            var registerNumberRemove = function () {
                $('.icon-close', numberAddedSetion).on('click', function () {
                    $(this).closest('.phone-pill').remove();
                });
            };

            // Control adding number, cleaning input, setting removement events
            var addRemoveCallback = function () {
                var num = numberInput.val();
                if (num.trim() === '') return;

                // Declare a new number binded block
                var numberToAdd = '<div class="phone-pill"><span class="phone-number">' + num + '</span><a><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" fill="#000000" class="injected-svg iconic is-gray in-link icon-close"><g id="surface1" fill="#000000"><path style=" " d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z " fill="#000000"></path></g></svg></a></div>';

                // Inject it into added section
                numberAddedSetion.append(numberToAdd);

                // reset input
                numberInput.val('');

                registerNumberRemove();
            };

            // Add number if user keys enter
            numberInput.keyup(function (e) {
                if (e.keyCode === 13) {
                    addRemoveCallback();
                }
            });

            // Add nunmber if user clicks add-link
            numberLink.on('click', addRemoveCallback);

            // Initial register
            registerNumberRemove();

        });

        // Filter select actions
        $('[data-cht-filter]').each(function () {
            var self = this;

            // click 不限 and reset all checkbox
            $('.cht-filter-reset', self).on('click', function () {
                $('.form-check input').prop('checked', false);
            });

            // Set event on those selecting options
            $('[data-cht-filter-value]', self).on('click', function () {
                var newText = $(this).data('chtFilterValue');
                $('[data-cht-filter-title]', self).text(newText);
            });
        });

        // show .show-demo-error-text


        $('.show-demo-error-text').click(function () {
            $('.demo-error-text').toggle();
        });
        // address form
        $('#address.lightbox.address-box').each(function () {
            var self = this,
                errorClass = 'error';

            $('input[type=tel]', self).on('change', function (e) {
                // Add erro style if not number type
                if (isNaN(e.target.value)) {
                    $(this).closest('.form-textual').addClass(errorClass);

                    // Reomve style if correct
                } else {
                    $(this).closest('.form-textual').removeClass(errorClass);
                }
            });
        });

        //收藏頁面加上效果
        $('#compare-choices').each(function () {
            var compareCell = function (productId) {
                return '\
          <div class="compare-item neko neko-center is-narrow is-2" data-product-id="${productId}">\
            <div class="compare-cell">\
              <div class="card">\
                <a class="remove-compare-cell">\
                  <img class="size-s iconic icon-close" src="/home/eshop/img/ic/close-white.svg">\
                </a>\
                <img src="/home/eshop/img/iphone.jpg" alt="" itemprop="image" width="140" height="140">\
              </div>\
              <div class="h6 invert content-center" itemprop="name">\
                Product Name\
              </div>\
              <p class="content-center" itemprop="price"></p>\
            </div>\
          </div>\
        ';
            },
                removeItemEvent = function () {
                    $('#compare-tray').each(function () {
                        var compareTray = this;

                        $('.compare-item', compareTray).each(function (index, compareItem) {
                            $('.remove-compare-cell', compareItem).on('click', function (e) {
                                var productId = $(compareItem).data('productId');

                                $(compareItem).remove();

                                if ($('#compare-tray .compare-item').length === 0) {
                                    $('#compare-tray').slideUp();
                                }
                                // doesn't work in ie11
                                // $('.product[data-product-id=${productId}] .compare-button').removeClass('on');
                            });
                        });
                    });
                };

            // Select all product cards
            $('.product', this).each(function (index, self) {
                $('.compare-button', self).on('click', function () {
                    var buttonClicked = this;

                    if ($('#compare-tray .compare-item').length < 5) {
                        let productId = $(self).data('productId');

                        if ($(buttonClicked).hasClass("on")) {
                            return;
                        } else {
                            if ($('#compare-tray .compare-item').length === 0) {
                                $('#compare-tray').slideDown('300');
                            }
                            setTimeout(removeItemEvent, 1000);

                            // Add a product cell
                            $('#compare-tray .nekos').prepend(compareCell(productId));
                        }
                    } else {
                        $('.max-trigger').click()
                    }
                });
            });
        });


        // Batch processing mobile/desktop setups
        if (window.innerWidth <= mobileWidth) {
            $('.footer .accordian-group').addClass('active');
        }
    });

    // 添加 hidden-section 預設隱藏
    // 添加 show-hidden-section-trigger click 後顯示 hidden-section
    // 添加 hide-after-hidden-section-trigger 在 show-hidden-section-trigger click 後隱藏
    // 添加 revert-hidden-status 恢復原先狀態
    $('.hidden-section').hide()
    $('.show-hidden-section-trigger').click(function () {
        $('.hidden-section').show()
        $('.hide-after-hidden-section-trigger').hide()
    });
    $('.revert-hidden-status').click(function () {
        $('.hidden-section').hide()
        $('.hide-after-hidden-section-trigger').show()
    });

})(jQuery);

$(document).ready(function () {

    $('#page-nav-1').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

    $('#page-nav-2').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });




    // image zoom
    var $elevateZoom = $('.elevate-zoom')
    var $showZoom = $('.show-zoom')
    var $zoomContainerSection = $('.zoomContainer')

    if ($elevateZoom.length && $showZoom.length) {
        $showZoom.on('click', function () {
            $this = $(this);
            var zoomSrc = $this.find('img').data('zoom-src');
            $elevateZoom.data('zoom-image', zoomSrc);
            var $zoomContainerSection = $('.zoomContainer')
            if ($zoomContainerSection.length) {
                $zoomContainerSection.remove()
            }
            $elevateZoom.elevateZoom({ scrollZoom: false, zoomWindowHeight: 300, zoomWindowWidth: 300, borderSize: 0 });
        });
    }
    // cable tab filter - calculate function
    var $cableTotalAmount = $('calculate-total-amount');
    var $cableTotalDownload = $('.cable-total-download');
    var $cableTotalUpload = $('.cable-total-upload');
    var $calculateNumber = $('.calculate-number');
    var $calculateItem = $('.calculate-item');
    var $calculateDownload = $('.calculate-download');
    var $calculateUpload = $('.calculate-upload');
    function calculateAmount() {
        var totalDownload = 0
        var totalUpload = 0
        // 假設多一台 download多20, upload多10
        var eachDolwnloadComputer = 20;
        var eachUploadComputer = 10;
        totalDownload += $calculateNumber.val() * eachDolwnloadComputer
        totalUpload += $calculateNumber.val() * eachUploadComputer
        // 有設定download的加總total download
        $calculateDownload.each(function (idx) {
            var $this = $(this)
            if ($this.is(':checked')) {
                totalDownload += $this.data('add-download')
            }
        })
        // 有設定upload的加總total upload
        $calculateUpload.each(function (idx) {
            var $this = $(this)
            if ($this.is(':checked')) {
                totalUpload += $this.data('add-upload')
            }
        })
        $cableTotalDownload.data('cable-total-download', totalDownload)
        $cableTotalDownload.text(totalDownload)
        $cableTotalUpload.data('cable-total-download', totalUpload)
        $cableTotalUpload.text(totalUpload)
        var $filterBackValue = $('.filter-back-value')
        var $setFilterValue = $('.set-filter-value')
        var setBackValue = totalDownload + 'M/' + totalUpload + 'M'
        $setFilterValue.data('cht-filter-value', setBackValue)
        $filterBackValue.text(setBackValue);

    }
    calculateAmount()
    $calculateNumber.on('change', calculateAmount)
    $calculateItem.on('change', calculateAmount)


    // #region Overwrite this funciotn from countdownCounter() of custom.js.
    //// countdown
    //var days = 0; // 不用計算到天, 就等於0就好
    //var hours = 12;
    //var minutes = 40;
    //var seconds = 28;

    //function countdown() {
    //    $counterHour = $('.counter-hour');
    //    $counterMinute = $('.counter-minute');
    //    $counterSecond = $('.counter-second');
    //    if (!days && !hours && !minutes && !seconds) {
    //        // 到期要?
    //        console.log('timeout!')
    //        return
    //    }
    //    setTimeout(countdown, 1000);
    //    // $counterHour.text(days)
    //    $counterHour.text(hours)
    //    $counterMinute.text(minutes)
    //    $counterSecond.text(seconds)
    //    seconds--;
    //    if (seconds < 0) {
    //        seconds = 59;
    //        minutes--;
    //        if (minutes < 0) {
    //            hours--;
    //            minutes = 59;
    //            if (hours < 0) {
    //                days--;
    //                hours = 23;
    //                if (days < 0) {
    //                    days = 0;
    //                    hours = 0;
    //                    minutes = 0;
    //                    seconds = 0;
    //                }
    //            }
    //        }
    //    }
    //}
    //// init
    //var $counterBox = $('#counter-box');
    //if ($counterBox.length) {
    //    countdown();
    //}
    // #endregion 


    // plus & minus
    $minusPlusSection = $('.minus-plus-section');
    $minusPlusTotal = $('.minus-plus-total');
    if ($minusPlusSection.length && $minusPlusTotal.length) {
        $minusPlusSection.on('click', '.minus', function (e) {
            var $this = $(this)
            var $total = $this.siblings('.minus-plus-total')
            if (parseInt($total.val(), 10) > 0) {
                $total.val(+$total.val() - 1);
            }
        })
        $minusPlusSection.on('click', '.plus', function (e) {
            var $this = $(this)
            var $total = $this.siblings('.minus-plus-total')
            $total.val(+$total.val() + 1);
        })
    }

    // 進階篩選 - 已選狀態
    var $advancedSelectSection = $('.advanced-select-section');
    var $advancedSelect = $('.advanced-select');
    var $advancedSelectClear = $('.advanced-select-clear');
    var $advancedSelectCheckbox = $('.advanced-select-checkbox');
    var defaultText = '進階篩選'
    if ($advancedSelectSection.length) {
        $advancedSelectCheckbox.on('click', function () {
            var $this = $(this);
            if ($advancedSelectSection.find('.advanced-select-checkbox:checked').length) {
                $advancedSelect.text(defaultText + '（已選）');
            } else {
                $advancedSelect.text(defaultText);
            }
        })
        $advancedSelectClear.on('click', function () {
            $advancedSelectCheckbox.prop('checked', false);
            $advancedSelect.text(defaultText);
        })
    }

    // filter-trigger & filter-section
    var $filterContainer = $('.filter-container');
    var $filterSection = $('.filter-section');
    var $filterBrandTrigger = $('.filter-brand-trigger');
    var $filterBrand = $('.filter-brand');
    var $filterPriceTrigger = $('.filter-price-trigger');
    var $filterDeviceTrigger = $('.filter-device-trigger');
    var $filterDevice = $('.filter-device');
    if ($filterContainer.length) {
        $filterBrandTrigger.on('click', 'a', function () {
            var $this = $(this);
            var cardType = $this.data('filter-card-type');
            var cardBrandTitle = $this.data('cht-filter-value');
            var $filterBrandTitle = $this.closest('.form-textual').find('span[data-cht-filter-value]');
            $filterBrand.text(cardBrandTitle);
            $filterBrandTitle.text(cardBrandTitle);
            $filterSection.find('.card-wrapper').addClass('hide');
            if (cardType) {
                $filterSection.find('.card-wrapper[data-card-type=' + cardType + ']').removeClass('hide');
            } else {
                $filterSection.find('.card-wrapper').removeClass('hide');
            }
        })
        $filterPriceTrigger.on('click', 'a', function () {
            var $this = $(this);
            var cardPriceTitle = $this.data('cht-filter-value');
            var $filterPrice = $this.closest('.form-textual').find('span[data-cht-filter-value]');
            $filterPrice.text(cardPriceTitle);
        })
        $filterDeviceTrigger.on('click', 'a', function () {
            var $this = $(this);
            var $filterDeviceTitle = $this.find('span').text();
            $filterDevice.text($filterDeviceTitle);
        })
    }

    // clear-all-button
    var $clearAllButton = $('.clear-all-button');
    var $chtFilterTitles = $('.form-textual [data-cht-filter-title]');
    var $filterBrandTitle = $('.form-textual [data-filter-brand-title]');
    var $filterBrand = $('.filter-brand');
    // var $filterDevice = $('.filter-device');
    var defaultTitles = [];
    $chtFilterTitles.each(function () {
        defaultTitles.push($(this).text());
    })
    if ($clearAllButton.length) {
        $clearAllButton.on('click', function () {
            $advancedSelectCheckbox.prop('checked', false);
            $advancedSelect.text(defaultText);
            $filterBrand.text(defaultTitles[0])
            // $filterDevice.text(defaultTitles[1])
            $chtFilterTitles.each(function (idx, value) {
                var $this = $(this)
                $this.text(defaultTitles[idx]);
                // if (typeof $this.data('filter-brand-title') !=='undefined') {
                //   $filterBrand.text(defaultTitles[idx])
                //   $filterDevice.text(defaultTitles[idx])
                // }
            })
        })
    }
})
