$(function() {

    let timeline = $(".timeline");
    let startingHeight = timeline.height();
    timeline.css("min-height", startingHeight);

    let timelineContent = $(".timeline-content");
    timelineContent.each(function() {
        let height = $(this).height();
        console.log(height);
        $(this).css("min-height", height);
        $(this).css("max-height", height);
        console.log($(this).css("min-height"));
    });

    let slideButtons = $(".slideButton");
    slideButtons.each(function() {
        let width = $(this).next(".slide-panel").width();
        $(this).css("width", width);
    });

    let isMobile;
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

    slideButtons.click(function() {
        let parent = $(this).parent();
        parent = parent.parent();
        console.log(parent);
        let slide = $(this).next();
        slide.slideToggle();
    });
});

