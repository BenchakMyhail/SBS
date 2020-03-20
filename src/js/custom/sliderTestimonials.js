$(document).ready(function () {
  $(".testimonials-clients_list-reviews").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 500,
    inifnite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    slickCurrentSlide: () => { console.log(1); }
  });
  $(".testimonials-clients_list-reviews").on('init reInit afterChange', (event, slick, currentSlide, nextSlide) => {
    $(".clients-img").removeClass("active");
    $(".clients-img").eq(currentSlide).addClass("active");
  });
});

