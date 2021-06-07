new WOW().init();
$(document).ready(function () {

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

    });

})
$('.venobox_custom').venobox({
    bgcolor: '#fc779f',
    titleattr: 'data-title',
    numeratio: true,
    infinigall: true,
    arrowsColor: '#fc779f',
    framewidth: '80%',
    spinner: 'cube-grid'
});