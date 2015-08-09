$(function(){
    var parent, ink, d, x, y;

    $('.ripple').click(function(e){
        parent = $(this).parent();

        //SE CREA EL ELEMENTO INK SI NO EXISTE.
        if (parent.find('.ink').length === 0) {
            parent.prepend('<span class="ink"></span>');
        }

        ink = parent.find('.ink');

        //EN CASO DE DOBLES CLICS SE DETIENE LA ANIMACIÓN ANTERIOR.
        ink.removeClass("animate");

        //SE ESTABLECE EL TAMAÑO DE .INK
        if (!ink.height() && !ink.width()) {
            //SE USA EL ANCHO DEL PADRE O LA ALTURA QUE SEA MAYOR QUE EL
            //DIÁMETRO PARA CREAR UN CÍRCULO QUE CUBRA EL ELEMENTO COMPLETO.
            d = Math.max(parent.outerWidth(), parent.outerHeight());

            ink.css({height: d, width: d});
        }

        //Obteniendo las cordenadas del click del ratón
        x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;

        //se establece la posición y se agrega la clase .animate
        ink.css({top: y + 'px',left: x + 'px'}).addClass('animate');
    });
}());
