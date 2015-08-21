$(function(){
    //VARIABLES
    var $btn = $( '#mobileBtn' );
    var $btnParent = $( '#mobile' );
    var $input = $( '#mobile-checkbox' );

    $btn.click( function (e) {
        if ( $btnParent.attr( 'class' ) === 'mobile' ) {
            setTimeout( function (){
                $btnParent.attr( 'class', 'mobile--active' );
            }, 600 );

        } else {
                $btnParent.attr( 'class', 'mobile' );
        }
    });

    $(document).click(function(e) {
        var target = e.target;

        if (!$(target).is($btn) && $('#mobile-checkbox').prop('checked') === true  && !$(target).parents().is('.mobile')) {
            $input.prop('checked', '');
            $btnParent.attr( 'class', 'mobile' );
        }
    });
}());
