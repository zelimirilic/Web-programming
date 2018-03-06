var $img = $("img");
var $selectImg = $selectImg[0];
$(selectImg).addClass("selected");


$("img.selected").removeClass("selected");
var firstGallery = $("img.selected").parent();

var secondGallery = firstGallery.next()

var selectImgSecGal =$("div.galery2").children().eq(1).addClass("selected");