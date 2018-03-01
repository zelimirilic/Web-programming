// function changeColor() {
//     document.querySelector("body").classList.toggle("active");
// }

var input = document.querySelector("input");
var btn = document.querySelector("#btn");
var chat = document.querySelector(".chat");

function createChat() {
    if(input.value !== "") {
        btn.addEventListener("click", function (event) {
            var messageToAppend = document.createElement("p");
            messageToAppend.textContent = input.value;
            chat.appendChild(messageToAppend);
        })  
    input.value = "";
    } 
}


