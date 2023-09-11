//Youtubeの動画ポップアップを表示する。
function playVideo(videoId) {
    var popup = document.querySelector('.popup');
    popup.innerHTML = '<iframe src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    popup.style.display = 'block';
  }
  //動画ポップアップを閉じる
  function closePopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
    popup.innerHTML = '';
  }