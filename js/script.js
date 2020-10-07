$(document).ready(function () {
   if ($('.slider').length > 0) {
      $('.slider').slick({
         autoplay: true,
         dots: true,
         arrows: false,
         infinite: false,
         slidesToShow: 1,
         autoplaySpeed: 5000,
      });
      $.each($('.slick-dots li'), function (index, val) {
         var src = $('.slider__item').eq(index).find('img').attr('src');
         var num = $(this).find('button').html();
         $(this).html('<img src="' + src + '" alt="" /><span>' + num + '</span>');
      });
   }

   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 10,
      // init: false,
      slidesPerColumnFill: "row",
      pagination: {
         el: '.slider-content__counter',
         type: 'fraction',
         clickable: true,
      },
      navigation: {
         nextEl: '.slick-next',
         prevEl: '.slick-prev',
      },
      breakpoints: {

         229: {
            slidesPerView: 1,
            slidesPerColumn: 2,
         },
         699: {
            slidesPerView: 1,
            slidesPerColumn: 2,
         },
         700: {
            slidesPerView: 2,
            slidesPerColumn: 2,
         },
         769: {
            slidesPerView: 1,
            slidesPerColumn: 2,
         },
         971: {
            slidesPerView: 2,
            slidesPerColumn: 2,
         },
         1171: {
            slidesPerView: 3,
            slidesPerColumn: 2,
         }
      },
});

$('.slider-brand').slick({
   slidesToShow: 5,
   speed: 1000,
   easing: 'ease',
   rows: 1,
   slidesToScroll: 1,
   arrows: true,
   dots: false,
   infinite: true,
   responsive: [
      {
         breakpoint: 1170,
         settings: {
            slidesToShow: 4,
            rows: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      }, {
         breakpoint: 970,
         settings: {
            slidesToShow: 3,
            rows: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      }, {
         breakpoint: 769,
         settings: {
            slidesToShow: 3,
            rows: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      }, {
         breakpoint: 630,
         settings: {
            slidesToShow: 2,
            rows: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      }, {
         breakpoint: 510,
         settings: {
            slidesToShow: 1,
            rows: 1,
            slidesToScroll: 1,
            infinite: true,
         }
      },
   ]
})
$('.slick-prev').click(function (event) {
   $(this).parents('.slider-content-product').find('.slider-content').slick('slickPrev');
});
$('.slick-next').click(function (event) {
   $(this).parents('.slider-content-product').find('.slider-content').slick('slickNext');
});
$('.mobile-arrow').click(function (event) {
   $(this).parent().find('.mobile-sub-menu__list').toggleClass('active');
   $(this).parent().find('.mobile-arrow').toggleClass('active');
});
$('.header__burger').click(function (event) {
   $('.header__burger, .header').toggleClass('active');
   $('body').toggleClass('lock');
   $('.content').toggleClass('active');
   $('.wrapper').toggleClass('active');
   $('.mobile-window__catalog').css('display', 'none');
   $('.mobile-window__info').css('display', 'block');
   $('.filter__mobile').css('display', 'block');
}); 
$('.button-catalog').click( function (event) {
   $('.header__burger, .header').toggleClass('active');
   $('body').toggleClass('lock');
   $('.content').toggleClass('active');
   $('.mobile-window__catalog').css('display', 'block');
   $('.mobile-window__info').css('display', 'none');
   $('.filter__mobile').css('display', 'block');   
   $('.wrapper').toggleClass('active');
});
   $('.select').click(function(event) {
      if(!$(this).hasClass('disabled')){
         $('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
         $(this).toggleClass('active');
         $(this).find('.select-options').slideToggle(50);
      }
   });
   $('.select-options__value').click(function() {
      if($(this).parents('.select').hasClass('content-search__select')){
         $(this).parents('.select').find('.select-title__value').html('<span>'+$(this).html()+'</span>');
      }else{
         $(this).parents('.select').find('.select-title__value').html($(this).html());
      }
      if($.trim($(this).data('value'))!=''){
         $(this).parents('.select').find('input').val($(this).data('value'));
      }else{
         $(this).parents('.select').find('input').val($(this).html());
      }
   });
   $(document).click(function(e) {
      if (!$(e.target).is(".select *")) {
         $('.select').removeClass('active');
         $('.select-options').slideUp(50);
      };
   });
   $('.search__left').click(function(event) {
      if(!$('.search__left').hasClass('active')){
         $('.search__text').toggleClass('active');
         $('.search__arrow').toggleClass('active');
         $('.search__list').addClass('active');
         $('.search__list').slideToggle(500);
      }
   });
   $('.header__burger2').click(function (event) {
      $('.menu').toggleClass('close');
      $('.menu').slideToggle(500);
      $('.header__burger2').toggleClass('active');
      $('.main').toggleClass('active');
      // $('.main').css('min-height', '2200px');
   });
$('.slider-content-img').click(function (event) {
   $(this).parents('.slider-conten-item').find('.slider-content__text').addClass('active');
   $(this).parents('.slider-conten-item').find('.slider-content__price').addClass('active');
   $(this).parents('.slider-conten-item').find('.slider-info__hover').addClass('active');
});
$(".slider-info__hover").click(function (event) {
   $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__text').removeClass('active');
   $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__price').removeClass('active');
   $('.slider-info__hover').removeClass('active');
})




   /* 

   */



});

