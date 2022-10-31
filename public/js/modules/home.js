(function($) {

	$('.cart-bt').on('click', function(){
        $('.cart-total').toggleClass('d-none')
    });

    $('.home .home__slide').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: true,
		dots: true,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fas fa-angle-right"></i></i></button>',
	});

    $('.home .home__slidemedium-slide').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
        //prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fas fa-angle-left"></i></button>',
        //nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fas fa-angle-right"></i></i></button>',
	});

    $('.home__categories-slide').slick({
		arrows: true,
		dots: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fas fa-angle-right"></i></i></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
	});

    $('.home__showcases-slide').slick({
		arrows: true,
		dots: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fas fa-angle-right"></i></i></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    $('.home .home__brands-slide').slick({
		autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: true,
        arrows: true,
        dots: false,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fas fa-angle-right"></i></i></button>',
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                }
            }
        ]
	});
}) (jQuery);