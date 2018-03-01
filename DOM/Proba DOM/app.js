"use strict";

function getElementOne() {
    document.querySelector(".section-1 ul:nth-child(2)").className = "red";
}
getElementOne();

function getAllLi() {
    var listHolder = document.querySelectorAll(".section-1 li");
    for (let i = 0; i < listHolder.length; i++) {
        listHolder[i].className = "green";
    }
}

getAllLi();

function getThirdUl() {
    var listHolder = document.querySelectorAll(".section-1 ul:last-child li");
    for (let i = 0; i < listHolder.length; i++) {
        listHolder[i].className = "transform";
    }
}

getThirdUl();

function nodeRelations() {
    var a = document.querySelector(".active");
     a.parentNode.parentNode.previousElementSibling.children[0].children[0].className = "active";
     a.className = "";
}

nodeRelations();

var basicImg = document.querySelector(".section-3 div img:first-child");
    basicImg.className = "selected";

function selectedClass(node) {
    
    node.className = "";
    node.parentNode.nextElementSibling.children[1].className = "selected";
}
// selectedClass();


























// function addClass() {
//     document.querySelector(".section-1 ul:nth-child(2)").classList.add("second-ul");
// }
// addClass();

// function addClass2() {
//     var listItems = document.querySelectorAll(".section-1 li");

//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].classList.add("list");
//     }
// }
// addClass2();

// function addClass3() {
//     var listItems = document.querySelectorAll(".section-1 ul:last-of-type li");

//     for (var i = 0; i < listItems.length; i++) {
//         listItems[i].classList.add("lists-3");
//     }
// }
// addClass3();

// function removeClass() {
//     var activeElement = document.querySelector(".active");

//     activeElement.classList.remove("active");

//     activeElement.parentNode.parentNode.previousElementSibling.querySelector("ul li").classList.add("active");
// }
// removeClass();