$(function(){
  smoothScroll();
  headerSpMenu();
  headerFixed();
  worksSlider();
  memberSlider();
})
$(window).on('load', function(){
  windowLoaded();
  scrollAnimationActivate();
  indexDataNum();
});
$(window).on('scroll', function(){
  scrollAnimationActivate();
  indexDataNum();
});

function windowLoaded(){
  $('body').addClass('is-loaded');
}

function smoothScroll(){
  $('a[href^="#"]').click(function(){
    let speed = 500;// ミリ秒
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = 0;
    if(target.length > 0){
      position = target.offset().top - 100;
    }
    if(!($(this).hasClass("selected"))){
      $('body, html').animate({scrollTop:position}, speed, 'swing');
    }
    return false;
  });
}

function headerSpMenu(){
  $('#js-header__hamburger').on('click', function(){
    if($('#js-header__content').hasClass('is-show')){
      $('html, body').css({'overflow':''});
      $('#js-header__content').removeClass('is-show');
      $('#js-header__logo').removeClass('is-white');
    }else{
      $('html, body').css({'overflow':'hidden'});
      $('#js-header__content').addClass('is-show');
      $('#js-header__logo').addClass('is-white');
    }
  })
}

function headerFixed(){
  let header = $('.js-header');
  let indexMv = $('.js-index-mv');
  if(indexMv.length <= 0){
    console.log(indexMv)
    header.addClass('is-fixed');
    return false;
  }
  let indexMvBottomPosition = indexMv.height() + indexMv.offset().top;
  $(window).on('scroll', function(){
    let targetPosition = $(window).scrollTop() + header.height();
    if(targetPosition >= indexMvBottomPosition){
      header.addClass('is-fixed');
    }else{
      header.removeClass('is-fixed');
    }
  });
}

function scrollAnimationActivate(){
  let triggerPosition = $(this).scrollTop() + ($(this).height() * (8 / 10)); // ウィンドウの上から(80%)の位置をトリガーにする
  if($(window).innerWidth() <= 768){
    triggerPosition = $(this).scrollTop() + $(this).height();  // SP時はWindow最下部の位置をトリガーにする
  }
  $('.js-anim--activate').each(function(_, elem){
    if($(elem).offset().top < triggerPosition){
      $(elem).addClass('is-active');
    }
  })
}

function indexDataNum(){
  let target = $('.js-index-num.is-active');
  let countSecond = 0.5;

  target.each(function(_, elem){
    let countMax = $(elem).attr('data-num');
    let thisCount = $(elem).text();
    let countSpeed = parseInt((countSecond / countMax) * 1000) + 1;
    let countTimer;
    function timer(){
      countTimer = setInterval(function(){
        let countNext = thisCount++;
        $(elem).text(countNext);
        if(countNext == countMax) clearInterval(countTimer);
      },countSpeed);
    }
    timer();
  });
}

function worksSlider(){
  const worksSlider = new Swiper('.js-swiper--works',{
    speed: 400,
    // loop: true,
    // loopAdditionalSlides: 4,
    width: 244,
    spaceBetween: 10,
    direction: 'horizontal',
    effect: 'slide',
    navigation: {
      nextEl: '.c-slide__control--next',
      prevEl: '.c-slide__control--prev'
    },
    breakpoints: {
      769: {
        width: 384,
        spaceBetween: 16,
      },
    }
  });
}

function memberSlider(){
  const memberSlider = new Swiper('.js-swiper--member',{
    speed: 400,
    width: 244,
    spaceBetween: 10,
    direction: 'horizontal',
    effect: 'slide',
    breakpoints: {
      769: {
        width: 284,
        spaceBetween: 16,
      },
    }
  });
}