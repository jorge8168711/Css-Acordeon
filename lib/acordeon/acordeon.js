$(function(){
    $('.acordeon-item__label').click(function(e) {
        var scrollY     = $(window).scrollTop();
        var offset      = e.offsetY;

        if (scrollY > 400) {
            setTimeout(function(){
                $('body, html').animate({
                    scrollTop: offset + 180
                }, 250);
            },100);
        }

    });
}());
