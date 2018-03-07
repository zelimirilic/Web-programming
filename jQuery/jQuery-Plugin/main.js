/*$(function () {
    
    $("button").on("click",function(){
        $("div").animate({
            height:"+=500px",
            width:"+=500px"
        },1000);
    })
})
*/

$('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
        600: {
            items: 4
        }
    }
});

$('.nonloop').owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    responsive: {
        600: {
            items: 4
        }
    }
});