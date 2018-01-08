$( document ).ready(function() {
    $('.carusel').slick({
        autoplay:false,
        autoplaySpeed: 4500,
        arrows:false,
        dots:false,
        speed:1000

    });
    $('.list-works').slick({
        autoplay:false,
        arrows:true,
        dots:true,
        speed:1000,
        slidesToShow: 4,
        slidesToScroll: 4


    });

});