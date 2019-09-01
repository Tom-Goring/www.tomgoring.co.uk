$(function() {

    let nav = $('nav');
    let body = $('body');

    body.scroll(function() {

        let pos = body.scrollTop();

        if (pos > body.height()) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    })
});

