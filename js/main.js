jQuery(document).ready(function(){
    $('.slider-section').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        pagination:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


        
});