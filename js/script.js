$(document).ready(function(){
    $(".stages-slider").owlCarousel({
        items: 1,
        loop:false,
        nav:true,
        dots: false,
        margin:0,
        navText:false,
        animateIn: true,
        autoHeight:true,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }

    });
});
$(document).ready(function(){
    $(".programs-slider").owlCarousel({
        items: 3,
        loop:true,
        nav:true,
        dots:false,
        margin:10,
        navText:false,
        responsive: {
            0: {
                items:2,
                dots: false
            },
            600: {
                items:2
            },
            900: {
                items:3
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            }

        }

    });
});
$(document).ready(function(){
    $(".reviews-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        margin:10,
        navText:false,
        dots:false,
        responsive: {
            0: {
                items:1,
                dots: false
            },
            600: {
                items:1
            },
            900: {
                items:1
            },
            1200: {
                items:1
            },
            1400: {
                items:1

            }

        }

    });
});
$(document).ready(function(){
    $(".mobile-portfolio").owlCarousel({
        items: 1.7,
        loop:true,
        autoHeight: true,
        stagePadding: 5,
        nav:false,
        margin:40,
        navText:false,
        dots:false,
        responsive: {
            0: {
                items:1.5,
                dots: false
            },
            600: {
                items:0
            },
            900: {
                items:0
            },

        }

    });
});
let menu = document.getElementById("burger-menu");
$('.burger-menu_button').on(  'click',function () {
    $('.burger-menu').toggleClass('burger-menu_active')

});
$('.burger-menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active');

});
jQuery(document).ready(function($) {
    $('.iframe-youtube').magnificPopup({
        type: 'iframe',
        height: "100vh",

    });
});
$('.image-popup-zoom').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
});

jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: true

    });
});
window.onscroll = function showHeader() {
    let header =    document.querySelector(".header");
    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    }
    else  {
        header.classList.remove("header-fixed")
    }
}

jQuery(document).ready(function($) {
    $('.popup-block2').magnificPopup({
        type: 'inline',
        fixedContentPos: true,

    });
});




$(function(){
    $( "#accordion" ).accordion({
         collapsible: true,
        active: false
    });
});
