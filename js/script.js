/*eslint-env browser*/
/*globals $:false */


/* =====================================
            Preloader
========================================*/
$(window).on('load', function(){ //make the whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
    
});


/* =====================================
          About - Certificates
========================================*/
$(function() {
    $(".certification-list").owlCarousel({
        items: 3,
        autoplay:true,
        smartSpeed: 250,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint  from 0 up
            0: {
                items: 2
            },
            //breakpoint from 480 up
            480: {
                items: 3
            }
        }
    });
});










