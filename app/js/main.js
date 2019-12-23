$(function() {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });
      $(".rate__star").rateYo({
        rating: 4.8,
        starWidth: "17px",
        readOnly: true
      });

      $(".items__slider").slick({
        responsive: [{
          breakpoint: 600,
          settings: {
              arrows: false,
              autoplay: true,
              autoplaySpeed: 3000,
          }
      }]
      })

      $(".followers__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true, 
        responsive: [{
          breakpoint: 1190,
          settings: {
            slidesToShow: 2,
            variableWidth: false, 
          }
      },
      {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            variableWidth: false, 
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          }
    },
    ]

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

  $('.details__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.details__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.details__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

      var mixer = mixitup('.products__box');



});