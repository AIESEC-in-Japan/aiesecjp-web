<template>
  <div class="main-view-container">
    <div class="pattern"></div>
    <video autoplay loop muted src="~@/assets/videos/withAiesecVideo.mp4">
      <!-- FIXME: 動画が再生されなかった場合の画像置いておく,スマホの場合の対応など -->
    </video>
  </div>
</template>

<style lang="scss" scoped>
.main-view-container {
  height: 100vh;
}

.pattern {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
}

video {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1; //todo z-indexのブランチがマージされたら移動
  height: 100vh;
}

</style>
