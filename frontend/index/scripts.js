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
		let pos = $(window).scrollTop();

        // Sticky Nav on Mobile
        if (isMobile) {
            $("#home").addClass("no-bottom-margin");
            nav.addClass('fixed');
            $("#about").css("padding-top", "4rem");
		}

        $(document).on('click touch', ".page-link", function() {
			let scrollTarget = $(this).attr("data-dest");
			setActiveLink(scrollTarget);
            $("html, body").stop().animate({
                scrollTop: $('#' + scrollTarget).offset().top - 50
            }, 400);
		});
		
		$(window).on('scroll', function () {
			pos = $(window).scrollTop();
			if (pos + 125 > $("#home").offset().top) {
				setActiveLink('home');
			}
			if (pos + 125 > $("#about").offset().top) {
				setActiveLink('about');
			}
			if (pos + 125 > $("#skills").offset().top) {
				setActiveLink('skills');
			}
			if (pos + 125 > $("#timeline").offset().top) {
				setActiveLink('timeline');
			}
			if (pos + 220 > $("#projects").offset().top) {
				setActiveLink('projects');
			}
			if (pos + 220 > $("#contact").offset().top) {
				setActiveLink('contact');
			}
		});

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

        let navElements = $(".link-wrap");
        let change = true;
        navElements.children().each(function () {
            $(this).hover(
                function() {
                    if ($(this).hasClass("active")) {
                        change = false;
                    } else {
                        $(this).addClass("active");
                    }
                }, function() {
                    if (change) {
                        $(this).removeClass("active");
                    }
                    else {
                        change = true;
                    }
                }
            );
        });
    });

    function setActiveLink(anchor) {
        $("nav .active").removeClass("active");
        $("nav").find('[data-dest=' + anchor + ']').addClass("active");
    }

    // form submission without leaving page
    let form = $('form');
    form.submit(function(event) {
        event.preventDefault();
        let post_url = $(this).attr('action');
        let request_method = $(this).attr('method');
        let form_data = $(this).serialize();

        let response = $.ajax({
            url : post_url,
            type: request_method,
            data: form_data,
            success: function(data, textStatus, xhr) {
                console.log("success");
                console.log(xhr);
                let submit = $('#submit');
                submit.addClass('success');
                setTimeout(function() {
                    submit.removeClass('success')
                }, 3500);
            },
            error: function(data, textStatus, xhr) {
                console.log("error");
                console.log(xhr);
                let submit = $('#submit');
                submit.addClass('failure');
                setTimeout(function() {
                    submit.removeClass('failure')
                }, 3500);
            }
        })
    });

    let burgerIcon = $('#menu-icon-wrapper');
    console.log(burgerIcon);
    burgerIcon.click(function() {
        $('.link-wrap').toggleClass('visible');
    });
});





