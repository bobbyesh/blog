/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {


    /* ==============================================
        Full height home-section
    =============================================== */

    var windowHeight = window.innerHeight,
        navHeight = $('.navbar').height(),
        topSection = $('#hero-section'),
        fullImageBg = $('#hero-fullscreen-bg');
        topSection.css('height', windowHeight);
        fullImageBg.css('height', windowHeight - navHeight);

    $(window).resize(function(){
        var windowHeight = window.innerHeight,
            navHeight = $('.navbar').height();
            topSection.css('height', windowHeight);
            fullImageBg.css('height', windowHeight - navHeight);
    });

    /* ==============================================
        Search animation
    =============================================== */

    var searchToggle = $('.open-search'),
        inputAnime = $(".form-search"),
        body = $('body');

    searchToggle.on('click', function(event){
        event.preventDefault();

        if ( !inputAnime.hasClass('active') ) {
            inputAnime.addClass('active');
        } else {
            inputAnime.removeClass('active');
        }
    });

    body.on('click', function(){
        inputAnime.removeClass('active');
    });

    var elemBinds = $('.open-search, .form-search');
    elemBinds.bind('click', function(e) {
        e.stopPropagation();
    });

    /* ==============================================
        Parallax
    =============================================== */

    $.stellar({
        responsive: true,
        horizontalScrolling: false,
        verticalOffset: 0
    });

    /* ==============================================
     BX-Project Slider
    =============================================== */

        $(".blog-slider, .project-slider").bxSlider({
            pager: false,
            controls: true,
            mode: 'fade',
            auto: true,        // Boolean:  (true/false)
            speed: 500,        // Animation speed.
            pause: 5000,      // Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
            useCSS: false     // Boolean:  (true/false)
        });

    /* ==============================================
        OWL Carousel
    =============================================== */

        $("#popular-post-carousel").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            navigation: true,
            pagination: false,
            navigationText: [
            "<i class='icon-chevron-left icon-white'><</i>",
            "<i class='icon-chevron-right icon-white'>></i>"
            ],
            items : 4,
            itemsDesktop : [1199,3], //number of items displayed on resolution less then 1199px
            itemsDesktopSmall : [979,3] //number of items displayed on resolution less then 979px
        });

    /* ==============================================
        OWL Carousel
    =============================================== */

        $(".relate-posts-carousel").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds
            navigation: false,
            pagination: true,
            items : 3,
            itemsDesktop : [1199,3], //number of items displayed on resolution less then 1199px
            itemsDesktopSmall : [979,3] //number of items displayed on resolution less then 979px
        });

    /* ==============================================
        Responsive video
    =============================================== */

        $(".post-video, .video-project").fitVids();

    /* ==============================================
     BX-Slider Tweet&Process
    =============================================== */


        $('.tweet-slider').bxSlider({
          adaptiveHeight: true,
          controls: false,
          auto: true
        });

    /* ==============================================
        MagnificPopup - lightbox effect
    =============================================== */

        // Example with multiple objects
        $('.zoom').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.video-pop-up').magnificPopup({
            type: 'iframe',
        });

    /* ==============================================
        Masonry lightbox
    =============================================== */

        var $mason = $('.masonry-blog');
        // initialize Masonry after all images have loaded
        $mason.imagesLoaded( function() {
            $mason.masonry({
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
                transitionDuration: "1s",
                percentPosition: true
            });
        });

    /* ==============================================
    Fade In .back-to-top
    =============================================== */

    $(window).scroll(function () {

        if (

            $(this).scrollTop() > 500)

        {
            $('.back-to-top').fadeIn();
        }

        else {
            $('.back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });

});

 $(window).load(function(){
    "use strict";
    /* ==============================================
    Preloader
    =============================================== */


    // will first fade out the loading animation
    $("#loading-animation").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#preloader").delay(600).fadeOut("slow");

    /* ==============================================
    Flexslider
    =============================================== */
      $('.flexslider').flexslider({
         animation: "fade"
        });

    /* ==============================================
    Isotope
    =============================================== */

        // FIlter
        if( $("#filter").length>0 ) {
            var container = $('#filter');
            container.isotope({
                itemSelector: '.gallery-item',
                transitionDuration: '0.8s'
            });
            $(".filter").click(function(){
                $(".filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                container.isotope({
                    filter: selector
                });
                return false;
            });

            $(window).resize(function(){
                setTimeout(function(){
                    container.isotope();
                },1000);
            }).trigger('resize');
        }


            if ( $('#masory-posts, #gallery-items').length ) {

            var $container = $('#masory-posts, #gallery-items');

            $container.imagesLoaded( function(){
              $container.fadeIn(1000).isotope({
                itemSelector : '.masonry-item'
              });
            });
        }

});
