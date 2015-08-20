$(function(){
    var parent, ink, inkColor, d, x, y;
    var rippleBtn = $('.ripple');

    $(rippleBtn).click(function(e){
        parent = $(this).parent();
        inkColor = $(this).attr('data-inkColor');

        //SE CREA EL ELEMENTO .ink SI NO EXISTE.
        if (parent.find('.ripple-ink').length === 0) {
            addInk();
        }

        //RENDERA EL EFECTO RIPPLE
        renderRipple();

        //EJECUTA LA FUNCIÓN renderRipple SI SE DA CLIC EN EL ELEMENTO .ink
        //PARA QUE EN CASO DE DOBLES CLICS SE DETENGA LA ANIMACIÓN ANTERIOR
        $(ink).click(function(){
                renderRipple();
            }
        );

        //FUNCIÓN QUE AGREGA EL SPAN CON LA CLASE .ink
        function addInk(){
            parent.prepend('<span class="ripple-ink"></span>');
        }

        //FUNCIÓN QUE SE ENCARGA DE RENDERAR EL EFECTO RIPPLE UNA VEZ QUE EL
        //ELEMENTO .ink YA ESXISTE
        function renderRipple(){
            ink = parent.find('.ripple-ink');
            ink.removeClass('ripple-ink-animate'); //EN CASO DE DOBLES CLICS SE DETIENE LA ANIMACIÓN ANTERIOR

            //SE ESTABLECE EL TAMAÑO DE .ink
            if (!ink.height() && !ink.width()) {
                //SE USA EL ANCHO DEL PADRE O LA ALTURA QUE SEA MAYOR QUE EL
                //DIÁMETRO PARA CREAR UN CÍRCULO QUE CUBRA EL ELEMENTO COMPLETO.
                d = Math.max(parent.outerWidth(), parent.outerHeight());
                ink.css({height: d, width: d});
            }

            //Obteniendo las cordenadas del click del ratón
            //en el e=eventData se guardan los datos del evento click
            //Lógica
            //    cordenadas del click relativas a la página
            //    menos posición del padre relativa a la página
            //    menos la mitad del alto y ancho de .ink/2
            x = e.pageX - parent.offset().left - ink.width()/2;
            y = e.pageY - parent.offset().top - ink.height()/2;

            //se establece la posición y se agrega la clase .animate
            ink.css({'top': y + 'px','left': x + 'px', 'background-color': inkColor}).addClass('ripple-ink-animate');
        }

    });
}());
