$(document).ready(function(){
    $(".stages-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        dots: false,
        margin:10,
        navText:false,
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
                items:1,
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

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("burger-menu_link");

    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click",()=> {
        menu._remove("burger-menu_active")
    });
    links.on("click", () => toogleMenu())
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu')

jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: true

    });
});
jQuery(document).ready(function($) {
    $('.popup-block2').magnificPopup({
        type: 'inline',
        fixedContentPos: true

    });
});


 $(function(){
    $( "#accordion" ).accordion({
         collapsible: true,
        active:1,
     animated: 'bounceslide',
    });
});
