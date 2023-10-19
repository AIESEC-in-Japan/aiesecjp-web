$(function(){
    smoothScroll();
    modal();
  })
//ジャンプ
function smoothScroll(){
    $('a[href^="#"]').click(function(){
      let speed = 500;// ミリ秒
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = 0;
      if(target.length > 0){
        position = target.offset().top - 100;
        if(href == "#about"){
            position += 350
        }
      }
      if(!($(this).hasClass("selected"))){
        $('body, html').animate({scrollTop:position}, speed, 'swing');
      }
      return false;
    });
  }


//モーダル
function modal(){
    $('.js-modal-trigger').on('click', function(){
        $(this).next('.js-modal-content').addClass('is-active');
    })
    $('.js-modal-close, .js-modal-content').on('click', function(e){
        if($(e.target).hasClass('js-modal-close') || $(e.target).hasClass('js-modal-content')){
        $('.js-modal-content').removeClass('is-active');
        }
    })
}
