$(function(){
    smoothScroll();
    headerSpMenu();
    modal();
    faq();
    GethashID();
    worksSlider();
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
//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$('.area').removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}
//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});
// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
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
  })
}

//スライダー
function worksSlider(){
  const worksSlider = new Swiper('.js-swiper--works',{
    speed: 400,
    autoplay:true,
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    centeredSlidesBounds: true,
  });
}