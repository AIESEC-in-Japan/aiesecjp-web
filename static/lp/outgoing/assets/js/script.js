$(function(){
    smoothScroll();
    headerSpMenu();
    modal();
    faq();
    GethashID();
  })
//ジャンプ
function smoothScroll(){
    $('a[href^="#"]').click(function(){
      let speed = 500;// ミリ秒
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = 0;
      let w = screen.width;
      if(target.length > 0){
        position = target.offset().top - 100;
        if(href =="#about"){
          if(w > 480){
            position += 130
          }
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

//faq
function faq(){
  $('.js-faq').on('click', function(){
    $(this).toggleClass('is-active');
    if($(this).hasClass('is-active')){
      $(this).next('.js-faq-anser').slideDown(300);
    }else{
      $(this).next('.js-faq-anser').slideUp(300);
    }
  })
}

//タブメニュー
function GethashID (hashIDName){
	if(hashIDName){
		$('.tab li').find('a').each(function() {
			var idName = $(this).attr('href'); 
			if(idName == hashIDName){ 
				var parentElm = $(this).parent();
				$('.tab li').removeClass("active");
				$(parentElm).addClass("active");
				//表示させるエリア設定
				$('.area').removeClass("is-active");
				$(hashIDName).addClass("is-active");
			}
		});
	}
}
//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href');	
	GethashID (idName);
	return false;
});
// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active");
    $('.area:first-of-type').addClass("is-active"); 
	var hashName = location.hash; 
	GethashID (hashName);
});

//ハンバーガーメニュー
function headerSpMenu(){
  $('#js-header_hamburger').on('click', function(){
    if($('#js-header_content').hasClass('is-show')){
      $('html, body').css({'overflow':''});
      $('#js-header_content').removeClass('is-show');
      $('#js-header_logo').removeClass('is-white');
    }else{
      $('html, body').css({'overflow':'hidden'});
      $('#js-header_content').addClass('is-show');
      $('#js-header_logo').addClass('is-white');
    }
  });

  $('#menu a[href]').on('click', function(event) {
    let w = screen.width;
    if(w <= 480){
      $('.header-hamburger').trigger('click');
    }
  });
}