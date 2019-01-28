'use strict';
var ground = document.querySelector(".ground");
var mario = document.querySelector(".mario");
var marioRunning = document.querySelector(".mario-run");

ground.addEventListener("mousedown", function (event) {
    if (event.buttons == 2) {
        mario.classList.toggle("hidden");
        marioRunning.classList.toggle("active");
        ground.classList.toggle("move");
    }
})

