$(function(){
    var btn = $('#mobile');
    var btnParent = btn.parent();

    btn.click(function(e) {
        if (btnParent.attr('class') == 'mobile') {
            btnParent.attr('class', 'mobile--active');

        } else {
            btnParent.attr('class', 'mobile');
        }
    });
}());
