$(function() {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

      $(".items__slider").slick({
        
      })

      $(".followers__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
      })

      var mixer = mixitup('.products__box');



});