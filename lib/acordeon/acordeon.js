$(function(){
    $('.acordeon-item__label').click(function(e) {
        var scrollY     = $(window).scrollTop();
        var offset      = e.offsetY;

        if (scrollY > 450) {
            setTimeout(function(){
                $('body, html').animate({
                    scrollTop: offset + 150
                }, 250);
            },200);
        }

    });
}());
