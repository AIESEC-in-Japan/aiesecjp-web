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
        {src: "2020corporation-logo/enjapan.png", alt: "エン・ジャパン株式会社のロゴ"},
        {src: "2020corporation-logo/endroll.jpg", alt: "株式会社エンドロールのロゴ"},
        {src: "2020corporation-logo/aus-be.png", alt: "株式会社オースビーのロゴ"},
        {src: "2020corporation-logo/gaiax.png", alt: "株式会社ガイアックスのロゴ"},
        {src: "2020corporation-logo/givery.jpg", alt: "株式会社ギブリーのロゴ"},
        {src: "2020corporation-logo/sairu.jpg", alt: "株式会社才流のロゴ"},
        {src: "2020corporation-logo/sansan.png", alt: "Sansan株式会社のロゴ"},
        {src: "2020corporation-logo/sunstar.jpg", alt: "サンスター株式会社のロゴ"},
        {src: "2020corporation-logo/cuc.png", alt: "株式会社シーユーシーのロゴ"},
        {src: "2020corporation-logo/schneiderelectric.png", alt: "シュナイダーエレクトリック株式会社のロゴ"},
        {src: "2020corporation-logo/johnsonandjohnson.png", alt: "ジョンソン・エンド・ジョンソン株式会社のロゴ"},
        {src: "2020corporation-logo/spartaenglishmethod.png", alt: "株式会社スパルタ英会話のロゴ"},
        {src: "2020corporation-logo/softbank.png", alt: "ソフトバンク株式会社のロゴ"},
        {src: "2020corporation-logo/dentsu.gif", alt: "株式会社電通のロゴ"},
        {src: "2020corporation-logo/toyobo.svg", alt: "東洋紡株式会社のロゴ"},
        {src: "2020corporation-logo/nissan.png", alt: "日産自動車株式会社のロゴ"},
        {src: "2020corporation-logo/nissha.png", alt: "NISSHA株式会社のロゴ"},
        {src: "2020corporation-logo/panasonic.png", alt: "パナソニック株式会社のロゴ"},
        {src: "2020corporation-logo/prtable.png", alt: "株式会社PR Table のロゴ"},
        {src: "2020corporation-logo/bizreach.png", alt: "株式会社ビズリーチのロゴ"},
        {src: "2020corporation-logo/florence.jpg", alt: "認定NPO法人フローレンスのロゴ"},
        {src: "2020corporation-logo/mizuho.jpg", alt: "ミズホ株式会社のロゴ"},
        {src: "2020corporation-logo/langoo.jpg", alt: "株式会社langooのロゴ"},
        {src: "2020corporation-logo/lifull.jpg", alt: "株式会社LIFULLのロゴ"},
        {src: "2020corporation-logo/RIZAP.png", alt: "RIZAPグループ株式会社のロゴ"},
        {src: "2020corporation-logo/recruit-ms.jpg", alt: "株式会社リクルートマネジメントソリューションズのロゴ"},
        {src: "2020corporation-logo/legaseed.jpg", alt: "株式会社Legaseedのロゴ"},
        {src: "2020corporation-logo/wacul.png", alt: "株式会社WACULのロゴ"},
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
