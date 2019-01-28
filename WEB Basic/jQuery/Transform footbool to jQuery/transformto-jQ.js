$(function () {});

var $elem = $('body');
var $img = $('img');
/*
function movePosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    offsetX = img.width/2;
    offsetY = img.height/2;

    img.style.top = y - offsetY + "px";
    img.style.left = x - offsetX + "px";
}
elem.addEventListener('click', movePosition);
*/
var playerHeight = $img.height()/2;
var playerwidth = $img.width()/2;


$('body').on('click', function(event) {
    var x=event.offsetX;
    var y=event.offsetY;
    /* A MOZE I OVAKO PREKOP CSS-a:
    $img.css({
        'top': y - playerHeight + 'px',
        'left': x - playerwidth + 'px'
    })
        */

       $('img').offset({top:y - playerHeight, left: x - playerwidth});

})
