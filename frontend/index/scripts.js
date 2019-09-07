$(function() {

    // ensure collapsed module sections don't affect the total height of the timeline
    $(function handleTimeline() {
        let timeline = $(".timeline");
        let startingHeight = timeline.height();
        timeline.css("min-height", startingHeight);

        let timelineContent = $(".timeline-content");
        timelineContent.each(function() {
            let height = $(this).outerHeight();
            $(this).css("min-height", height);
        });

        let slideButtons = $(".slideButton");
        slideButtons.each(function() {
            let width = $(this).next(".slide-panel").outerWidth();
            $(this).next(".slide-panel").hide();
            console.log(width);
            $(this).css("width", width);

        });

        slideButtons.click(function() {
            let parent = $(this).parent();
            parent = parent.parent();
            let slide = $(this).next();
            slide.slideToggle();
        });
    });

    $(function handleNavBar() {
        let isMobile;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            isMobile = true;
        }

        let nav = $('nav');

        // Sticky Nav on Mobile
        if (isMobile) {
            $("#hero-page").addClass("no-bottom-margin");
            nav.addClass('fixed');
            $("#about").css("padding-top", "4rem");
        }

        if (!isMobile) {

            // handle loading into page at non top position
            let pos = $(window).scrollTop();
            if (pos > $(window).height()) {
                nav.addClass('fixed');
            } else {
                nav.removeClass('fixed');
            }

            // add scroll callback to detach nav bar into fixed position
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

});

