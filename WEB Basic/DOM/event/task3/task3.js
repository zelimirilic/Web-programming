var elem = document.querySelector('body');
var img = document.querySelector('img');

function movePosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    offsetX = img.width/2;
    offsetY = img.height/2;

    img.style.top = y - offsetY + "px";
    img.style.left = x - offsetX + "px";
}

elem.addEventListener('click', movePosition);