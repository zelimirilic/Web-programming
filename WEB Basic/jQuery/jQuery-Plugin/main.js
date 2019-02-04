$(function () {

    $("button").on("click", function () {
        $("div").animate({
            height: "+=100px",
            width: "+=100px"
        }, 1000);
    })
})