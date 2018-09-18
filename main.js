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

    /************* smooth scroll **************/

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);


    });


});
