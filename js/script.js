$(document).ready(function () {
    $('.carusel').slick({
        autoplay: false,
        autoplaySpeed: 4500,
        arrows: false,
        dots: false,
        speed: 1000

    });
    $('.list-works').slick({
        autoplay: false,
        arrows: true,
        dots: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4


    });
    $('.toogle').click(function (){
        $('#toogleMenu').toggleClass('menu-opened');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

});