<template>
  <div class="partners-container">
    <h2>Our Partners</h2>
    <div class="partners-contents">
      <BaseIconInAssetsPath
        v-for="logo in logos"
        :key="logo.src"
        :data="logo"
        class="partners-content"
      />
    </div>
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
.partners-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  h2 {
    color: $blue;
    font-size: 2rem;
    letter-spacing: 2px;
  }
}

.partners-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
}

.partners-content {
  margin: 2rem;
  object-fit: contain;

  @include sp {
    width: 3rem;
    height: 3rem;
    margin: 1rem;
  }
}
</style>
