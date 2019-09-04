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

    let body = $('body');

    if (!isMobile) {
        body.scroll(function() {

            let pos = body.scrollTop();

            if (pos > body.height()) {
                nav.addClass('fixed');
            } else {
                nav.removeClass('fixed');
            }
        })
    }
});

