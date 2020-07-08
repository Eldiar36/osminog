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
        duration: 300 //
    }
});

jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: true

    });
});

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

jQuery(window).scroll(function(){
    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});

$("nav").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();

    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок
        top = $(id).offset().top;

    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top}, 0);
});
