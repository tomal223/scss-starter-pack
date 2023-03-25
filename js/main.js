(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {




        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay, .menu-open').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay, .menu-open').removeClass('active');

        });



        $(".hero-slider").owlCarousel({
            items: 1,
            nav: false,
            dot: true,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,  
        });


        $(".browse-slider").owlCarousel({
            items: 3,
            nav: false,
            dot: false,
            loop: false,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true, 
            responsive: {
                0: {
                    items: 1,
                },
                575: {
                    items: 2, 
                }, 
                768: {
                    items: 2,
                },
                991: {
                    items: 3,
                    margin: 15,
                },
                1200: {
                    items: 3,
                    margin: 17,
                },
                1360: {
                    items: 3,
                    margin: 20,
                }
            }


        });

      



        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });


    });
 
 

}(jQuery));