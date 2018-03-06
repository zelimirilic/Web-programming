$(function () {});

var links = [
    'http://via.placeholder.com/350x350',
    'http://via.placeholder.com/350x350',
    'http://via.placeholder.com/350x350',
    'http://via.placeholder.com/350x350',
    'http://via.placeholder.com/350x350',
    'http://via.placeholder.com/350x350'
];

var $galery = $('.galery');
$body = $('body');
$body.prepend('<h1> Neka galerija </h1>');

links.forEach(function (link) {
    var img = $("<img>");
    img.attr("src", link);
    $('.galery').append(img);
});

$('img').each(function (index, element) {
    var random = Math.random() * (500 - 50) + 50;
    $(element).css('width', random);

    var random = Math.random() * (100 - 10) + 10;
    $(element).css('margin', random);
    $(element).css('padding', random);
})






/*
var rand = Math.floor(Math.random() * 100);
var width = Math.round(($(window).width() / 1000) * rand);
var height = Math.round(($(window).width() / 1000) * rand);
$('img').width(width);
$('img').width(height);
*/