/*eslint-env browser*/
/*globals $:false */


/* =====================================
            Preloader
========================================*/
$(window).on('load', function(){ //make the whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
    
});