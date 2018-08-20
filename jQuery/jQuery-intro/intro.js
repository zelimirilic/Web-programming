$(function() {
    $("li:first").addClass("border");
    $("li").addClass("upper");
    $("li.active").addClass("fontColor");
    var liIndex = Math.floor($("li").length / 2);
    console.log('li'.length);
    $("li").eq(liIndex).addClass("bgColor");
})

