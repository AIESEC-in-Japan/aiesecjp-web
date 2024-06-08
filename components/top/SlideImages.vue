<template>
  <section class="slide-container">
    <div class="slide-images">
      <div class="slide-group">
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x450.png);"></div>
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x250.png);"></div>
          </div>
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/600x500.png);"></div>
          </div>
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x450.png);"></div>
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x250.png);"></div>
          </div>
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/500x740.png);"></div>
          </div>
      </div>
      <div class="slide-group">
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x450.png);"></div>
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x250.png);"></div>
          </div>
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/600x500.png);"></div>
          </div>
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x450.png);"></div>
            <div class="slide-content" style="background-image: url(https://placehold.jp/400x250.png);"></div>
          </div>
          <div class="slide-wrapper">
            <div class="slide-content" style="background-image: url(https://placehold.jp/500x740.png);"></div>
          </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.slide-container {
  position: relative;
  justify-content: center;
  font-family: $fonts;
  margin: 10rem 0 10rem 0;
  max-height: max-content;
  width: 100%;
}

.slide-images{
  width: 100%;
  display: flex;
  overflow: hidden;
  height: auto;

}

.slide-group{
  animation: flowing 10s linear infinite;
  display: flex;
  width: 100%;
  height: 550px;
}
@keyframes flowing {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.slide-wrapper{
  display: flex;
  flex-direction: column;
  width: calc(100vw / 4);
  padding: 10px;
}

.slide-content{
  display: block;
  width: 100%;
  height: 600px;
  background-position: center;
  background-size: cover;
  margin: 1rem 1rem;
}
</style>