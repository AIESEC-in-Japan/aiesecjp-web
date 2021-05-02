<template>
  <div class="main-view-container">
    <div class="pattern"></div>
<!--    FIXME: 動画差し替え -->
      <video autoplay loop muted src="http://webcreatorbox.com/sample/images/jewellery.mov">
        <img alt="Placeholder" src="http://webcreatorbox.com/sample/images/jewellery.jpg">
      </video>
  </div>
</template>

<script>
export default {
  name: "mainView"
}
</script>

<style lang="scss" scoped>
.main-view-container{
  height: 100vh;
}


.pattern {
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
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
