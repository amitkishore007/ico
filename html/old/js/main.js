jQuery(document).ready(function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* ----------------------------
    Mobile menu click then remove
    -------------------------------*/
    $("#mainmenu ul.nav.navbar-nav li a").on("click", function () {
        $("#mainmenu").removeClass("in");
    });

    /*--------------------
    Scroll to top
    ----------------------*/
    $.scrollUp({
        scrollText: '<span class="ti-arrow-up"></span>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------
    Home Slider Active
    ----------------------*/
    $('.header-bg-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
    });

    /*--------------------
    MAGNIFIC POPUP JS
    ----------------------*/
    var magnifPopup = function () {
        $('.work-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions 
    magnifPopup();

    $('.single-price').on('mouseenter', function () {
        $('.single-price').removeClass('active');
        $(this).addClass('active');
    });
    $('.single-price').on('mouseleave', function () {
        $('.single-price').removeClass('active');
        $('.main-price').addClass('active');
    });
}(jQuery));


jQuery(window).on("load", function () {
    /*-----------------
    Preloader Js
    ------------------*/
    $('.preloader').fadeOut(500);

    /*------------------
    WoW js Active
    -------------------*/
    new WOW().init({
        mobile: true,
    });
});