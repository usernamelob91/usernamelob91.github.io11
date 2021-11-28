$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/next.png"></button>'
      });
  });