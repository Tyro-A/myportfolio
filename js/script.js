/*eslint-env browser*/
/*globals $:false */
/*eslint-env es6*/


/* =====================================
            Preloader
========================================*/
$(window).on('load', function () { //make the whole site is loaded

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();

});



/* =====================================
          About - Certificates
========================================*/
$(function () {
    $(".certification-list").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 250,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint  from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });
});

/* =====================================
          Progress Bars 
========================================*/
$(function () {

    $("#progress-elements").waypoint(function () {

        //alert("You reach to progress elements area!");
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });

        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });

});


/* =====================================
          Contact Form
========================================*/
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    //    var button = document.getElementById("my-form-button");
    var status = document.getElementById("message-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add('success');
        status.innerHTML = "Messge sent";
    }

    function error() {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

/* =====================================
          Navigation
========================================*/

/* Show and Hide on scroll navigation menu */
$(function () {

    //Show/Hide nav on page load
    showHideNav();
    
    $(window).scroll(function () {
        
        //Show/Hide on window's onscroll
        showHideNav();

    });
    
    function showHideNav() {
    
         if ($(window).scrollTop() > 50) {

            //Show on scroll nav menu
            //alert("you just scrolled");
            $("nav").addClass("nav-top-on-scroll");


        } else {

            //Hide on scroll nav menu
            $("nav").removeClass("nav-top-on-scroll");
        }
        
    }
});

//Smooth scrolling
$(function() {
    
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        
        //get section id like #about, #portfolio, #contact
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});