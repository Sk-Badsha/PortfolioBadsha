// two item per slide
$(document).ready(function() {
    $('.demo-1').owlCarousel({
      loop:true,
      dots: true,
      nav:false,
      margin:40,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
               }
          }
      });
  })


