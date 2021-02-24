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
        items: 2,
        autoplay:true,
        smartSpeed: 250,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
});










