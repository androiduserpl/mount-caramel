console.log('Cześć');


/* load on document ready */
$(document).ready(function () {

    /* initialize slider */
    $('.header__slider').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: false, // true - będzie działać automatycznie
        speed: 300,
        arrows: false,
        //fade: true,
        //cssEase: 'linear'
    });

});
