<template>
  <section class="partners-container">
    <div class="partners-contents">
      <p class="partners-title">
        Our Partners
      </p>
      <h2 class="partners-title-sub">私たちのパートナー</h2>
      <div class="partners-wrapper">
        <BaseIconInAssetsPath
          v-for="logo in logos"
          :key="logo.src"
          :data="logo"
          class="partners-content"
        />
      </div>
      <div class="button-container">
        <p class="button-nextText">協賛についてはこちら</p>
        <a class="button" href="#"></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {src: "2020corporation-logo/accenture.png", alt: "アクセンチュア株式会社のロゴ"},
        {src: "2020corporation-logo/aus-be.png", alt: "株式会社オースビーのロゴ"},
        {src: "2020corporation-logo/visional.png", alt: "ビジョナル株式会社のロゴ"},
        {src: "2020corporation-logo/beyondcafe.png", alt: "株式会社Beyond Cafeのロゴ"},
        {src: "2020corporation-logo/freewill.png", alt: "株式会社Freewillのロゴ"},
        {src: "2020corporation-logo/moneyforward.png", alt: "株式会社マネーフォワードのロゴ"},
        {src: "2020corporation-logo/rechroma.jpg", alt: "リクロマ株式会社のロゴ"},
        {src: "2020corporation-logo/litalico.jpg", alt: "株式会社LITALICOのロゴ"},
        {src: "2020corporation-logo/leverages.png", alt: "レバレジーズ株式会社のロゴ"}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.partners-container {
  position: relative;
  margin: 0 0 10rem 0;
  width: 100%;
}

.partners-contents{
  position: relative;
  margin: 0 5rem;
  z-index: 30;
}

.partners-title{
  color: $blue;
  font-size: 2rem;
  padding-top: 6rem;
  font-weight: bold;
  margin-bottom: 0;

  &-sub{
    font-size: 1.35rem;
    margin-top: 0.8rem;
  }
}
.partners-wrapper{
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
}
.partners-content {
  margin: 3.5rem;
  object-fit: contain;

  @include sp {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }
}


.button-container{
  display: flex;
  justify-content: center;
}
.button-nextText{
  display: block;
  font-size: 1.35rem;
  font-weight: bold;
  padding: 6px;
  padding-left: 0;
  margin: 0;
}
.button{
  display: inline-block;
  position: relative;
  background-color: $blue;
  width: 50px;
  height: 50px;
  padding: auto;
  margin-left: 16px;
  border-radius: 5rem;
  border: 2px solid $blue;
  box-shadow:  0 0 24.5px rgba(3, 126, 243,0.22);
  transition: all 0.3s ease 0s;

  &:hover{
    transition-duration: .3s;
    transform: scale(1.1);
  }
}

.button::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 10px;
  height: 10px;
  border-top: 1.5px solid #fff;
  border-right: 1.5px solid #fff;
  transform: rotate(45deg);
}
</style>
