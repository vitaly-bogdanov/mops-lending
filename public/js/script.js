'use strict'



$(document).ready(function() {
  $('#MOps').hide().fadeIn(2000)
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 0, 
    centerMode:true,
    speed:1000,  
    mobileFirst: true,
    swipeToSlide: true,
    responsive: [{
      
      breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5,
          autoplay:true,
          autoplaySpeed:1,
          speed:4000,
          swipeToSlide: true
    },
    
  }]
  });

