(function($) {

    var lastScrollTop = 105;
    var $headerDesk = $('.header__main-desktop');
    var $headerMob = $('.header__main-moblie');

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        console.log(st);

        if (st > lastScrollTop) {
            $headerDesk.addClass('active');
            $headerMob.addClass('active');
        } else {
            $headerDesk.removeClass('active');
            $headerMob.removeClass('active');
        }
    })

    $('button.header__main-moblie-input-close').on('click', function () {
        $('.header__main-moblie-input').addClass('d-none');
    });

    $('.header__main-moblie-search').on('click', function () {
        $('.header__main-moblie-input').removeClass('d-none');
    });

    
    // Menu Moblie
    $('.header__main-moblie-bar').on('click', function () {
        $('.header__nav-moblie').toggleClass('d-block');
        $('.blurry').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    });

    // Fechar o Menu Moblie pela borda borrada
    $('.blurry').on('click', function () {
        if ($('.header__nav-moblie').hasClass('d-block')) {
            $('.header__nav-moblie').toggleClass('d-block');
            $('.blurry').toggleClass('active');
            $('body').toggleClass('overflow-hidden');
        }
    });

    // Fechar o Menu Moblie pela borda borrada
    $('.header__nav-moblie-top-close').on('click', function () {
        if ($('.header__nav-moblie').hasClass('d-block')) {
            $('.header__nav-moblie').toggleClass('d-block');
            $('.blurry').toggleClass('active');
            $('body').toggleClass('overflow-hidden');
        }
    });

    /* $('.header__nav-desk > ul > li').on('mouseenter', function() {
        $(this).css({'z-index':'100'})
        $('.blurry').addClass('active');
        $('body').addClass('overflow-hidden');
    }).on('mouseleave', function() {
        $(this).css({'z-index':'0'})
        $('.blurry').removeClass('active');
        $('body').removeClass('overflow-hidden');
    }); 

    $('.header__nav-desk > ul > li').first().each(function(){
        $(this).css({'z-index':'100'})
        $('.blurry').addClass('active');
        $('body').addClass('overflow-hidden');
    });*/

    
    $('.header__nav-moblie a').on('click', function(event) {
        var href = $(this).attr('href');
        console.log(true);
        if (href == "" || href == "#") {
            $(this).parents('ul').scrollTop(0);
            $(this).siblings('ul').show();
            $(this).parents('ul').css('overflow-y', 'hidden');
            return false;
        }
    });

    $('.header__nav span.back').on('click', function(event) {
        //event.preventDefault();
        $(this).closest('ul').hide();
        $(this).parents('ul').css('overflow-y', 'auto');
    });

}) (jQuery);
