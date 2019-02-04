// Events propagation, stopping and preventing default

// Create page containing gallery
// Gallery contains six pictures
// At least one of the pictures should have width of 300px

// Add event listeners to all images on page
// User can click on image and in that moment image will get 1px red border

// If Image width is not 300px event propagation should be stopped!

// Register event listener on document object, which listen for clicks
// When click occurs it should print in console on which element user clicked
"use strict";

var img = document.querySelectorAll("img");


img.forEach(function (element) {
    element.addEventListener("click", select);
})

function select(event) {
    var userClick = event.target;

    userClick.style.border = "2px solid blue";
    if(userClick.width !== 300) {
        event.stopPropagation();
    }
}

//document.addEventListener("click", function () {
//    console.log(event.target)
//})
