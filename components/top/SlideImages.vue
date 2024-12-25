<template>
  <section class="slide-container">
    <div class="slide-images">
      <div class="slide-group">
        <div class="slide-wrapper">
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide2.jpg);"
          />
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide3.jpg);"
          />
        </div>
        <div class="slide-wrapper">
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide1.jpg);"
          />
        </div>
        <div class="slide-wrapper">
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide5.jpg);"
          />
        </div>
      </div>
      <div class="slide-group">
        <div class="slide-wrapper">
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide2.jpg);"
          />
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide3.jpg);"
          />
        </div>
        <div class="slide-wrapper">
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide1.jpg);"
          />
        </div>
        <div class="slide-wrapper">
          <div
            class="slide-content"
            style="background-image: url(.assets/images/top/slide5.jpg);"
          />
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
  margin: 0;
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
  width: 120vw;
  height: 60vw;
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
  width: calc(120vw / 4);
  padding: 10px;
  @include sp{
    width: calc(120vw / 3);
    padding: 5px;

  }
}

.slide-content{
  display: block;
  width: 30vw;
  height: 54vw;
  background-position: center;
  background-size: cover;
  margin: 1rem 1rem;
  @include sp{
    margin: 1rem 0.5rem;
  }
}
</style>