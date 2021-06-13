<template>
  <div class="partners-container">
    <h2>Our Partners</h2>
    <div class="partners-contents">
      <span
        v-for="logo in logos"
        :key="logo.src"
      >
        <LazyIconInAssetsPath
          :data="logo"
          class="partners-content"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {src: "accenture.png", alt: "アクセンチュア株式会社のロゴ"},
        {src: "enjapan.png", alt: "エン・ジャパン株式会社のロゴ"},
        {src: "endroll.jpg", alt: "株式会社エンドロールのロゴ"},
        {src: "aus-be.png", alt: "株式会社オースビーのロゴ"},
        {src: "gaiax.png", alt: "株式会社ガイアックスのロゴ"},
        {src: "givery.jpg", alt: "株式会社ギブリーのロゴ"},
        {src: "sairu.jpg", alt: "株式会社才流のロゴ"},
        {src: "sansan.png", alt: "Sansan株式会社のロゴ"},
        {src: "sunstar.jpg", alt: "サンスター株式会社のロゴ"},
        {src: "cuc.png", alt: "株式会社シーユーシーのロゴ"},
        {src: "schneiderelectric.png", alt: "シュナイダーエレクトリック株式会社のロゴ"},
        {src: "johnsonandjohnson.png", alt: "ジョンソン・エンド・ジョンソン株式会社のロゴ"},
        {src: "spartaenglishmethod.png", alt: "株式会社スパルタ英会話のロゴ"},
        {src: "softbank.png", alt: "ソフトバンク株式会社のロゴ"},
        {src: "dentsu.gif", alt: "株式会社電通のロゴ"},
        {src: "toyobo.svg", alt: "東洋紡株式会社のロゴ"},
        {src: "nissan.png", alt: "日産自動車株式会社のロゴ"},
        {src: "nissha.png", alt: "NISSHA株式会社のロゴ"},
        {src: "panasonic.png", alt: "パナソニック株式会社のロゴ"},
        {src: "prtable.png", alt: "株式会社PR Table のロゴ"},
        {src: "bizreach.png", alt: "株式会社ビズリーチのロゴ"},
        {src: "florence.jpg", alt: "認定NPO法人フローレンスのロゴ"},
        {src: "mizuho.jpg", alt: "ミズホ株式会社のロゴ"},
        {src: "langoo.jpg", alt: "株式会社langooのロゴ"},
        {src: "lifull.jpg", alt: "株式会社LIFULLのロゴ"},
        {src: "RIZAP.png", alt: "RIZAPグループ株式会社のロゴ"},
        {src: "recruit-ms.jpg", alt: "株式会社リクルートマネジメントソリューションズのロゴ"},
        {src: "legaseed.jpg", alt: "株式会社Legaseedのロゴ"},
        {src: "wacul.png", alt: "株式会社WACULのロゴ"},
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

  h2 {
    color: $blue;
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding-top: 10rem;
  }
}

.partners-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
}

.partners-content {
  width: 7.5rem;
  height: 7.5rem;
  margin: 2rem;
  object-fit: contain;
}
</style>
