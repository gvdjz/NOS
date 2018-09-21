
$(document).ready(function () {

    var moveLeft = 90;
    var moveDown = 10;

    $('button#submit').hover(function (e) {
        $('div#pop-up').show()
        .css('top', e.pageY + moveDown)
        .css('left', e.pageX - moveLeft)
        .appendTo('body');
    }, function () {
        $('div#pop-up').hide();
    });

    $('button#submit').mousemove(function (e) {
        $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX - moveLeft);
    });

    $("#submit").click(function () {
        alert("Do you want to submit?") 
    });
});