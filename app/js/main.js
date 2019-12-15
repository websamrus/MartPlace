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

      
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 350,
      from: 30,
      to: 300,
      prefix: "$"
  });

  $('.filter__select-list').on('click', function(){
    $('.products__item').addClass('list__item');
    $('.filter__select-list').addClass('active');
    $('.filter__select-grid').removeClass('active');
  });

  $('.filter__select-grid').on('click', function(){
    $('.products__item').removeClass('list__item');
    $('.filter__select-grid').addClass('active');
    $('.filter__select-list').removeClass('active');
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu-list').slideToggle();
  });

  $('.header__user-menu').on('click', function(){
    $('.header__user').toggleClass('active');
  });

  $('.drop-down').on('click',function(){
    $(this).children('.drop-down__list').toggleClass('active');
  });

      var mixer = mixitup('.products__box');



});