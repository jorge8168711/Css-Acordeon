$(function(){
    var btn = $('#mobileBtn');
    var btnParent = $('#mobile');

    btn.click(function(e) {

        if (btnParent.attr('class') === 'mobile') {
            setTimeout(function(){
                btnParent.attr('class', 'mobile--active');
            },600);

        } else {
                btnParent.attr('class', 'mobile');
        }
    });
}());
