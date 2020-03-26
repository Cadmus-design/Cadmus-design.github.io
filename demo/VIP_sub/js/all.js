$(function () {
    $('.carousel').carousel({
        interval: false
    });

    var controller = setInterval(function () {
        if ($('img[src^="//bat.bing"]').length) {
            $('img[src^="//bat.bing"]').remove();
            clearInterval(controller);
        }
    }, 1000);

    $(function () {
        var obj = new goTopHandler;
        obj.registerEvent(280, 200);
        obj.update();
    });

    function goTopHandler() {
        return {
            registerEvent: function (startPoint, offset) {
                $(window).on('scroll', function () {
                    var top = $(window).scrollTop();
                    var hT = $('footer').offset().top,
                        hH = $('footer').outerHeight(),
                        wH = $(window).height(),
                        wS = $(this).scrollTop();
                    // console.log(top);

                    if (top > startPoint) {
                        $('#toTop').show();

                        if ($(this).scrollTop() > (hT + hH - wH - offset)) {
                            $('#toTop').addClass('bottom');
                        } else {
                            $('#toTop').removeClass('bottom');
                        }
                    } else {
                        $('#toTop').hide();
                    }
                });

            },
            update: function () {
                $(window).trigger('scroll');
            }
        }
    }
    $(function () {
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    console.log(target);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    });

});
