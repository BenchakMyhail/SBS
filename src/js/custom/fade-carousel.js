$(".slideshow > picture:gt(0)").hide();

setInterval(function() {
  $('.slideshow > picture:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow');
}, 3000);
