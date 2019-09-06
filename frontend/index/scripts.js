$(function() {

    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    let nav = $('nav');

    // Sticky Nav on Mobile
    if (isMobile) {
        nav.addClass('fixed');
    } else {
        nav.addClass('desk');
    }

    if (!isMobile) {
        $(window).on('scroll', function () {
            let pos = $(window).scrollTop();

            if (pos > $(window).height()) {
                nav.addClass('fixed');
            } else {
                nav.removeClass('fixed');
            }
        });
    }
});

