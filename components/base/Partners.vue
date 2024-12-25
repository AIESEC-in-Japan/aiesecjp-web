<template>
  <div class="partners-wrapper">
    <BaseIconInAssetsPath
      v-for="logo in logos"
      :key="logo.src"
      :data="logo"
      class="partners-content"
    />
  </div>
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

  .partners-wrapper{
    display: flex;
    flex-wrap: wrap; 
    justify-content: center;
  }
  .partners-content {
    margin: 1.4rem;
    object-fit: contain;
  
    @include sp {
      width: 20vw;
      height: 20vw;
      margin: 0.8rem;
    }
  }

  </style>
  