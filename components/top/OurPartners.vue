<template>
  <div class="partners-container">
    <h2>Our Partners</h2>
    <div class="partners-contents" >
      <span v-for="logo in logos" :key="logo.src" >
        <IconWithSrc 
          v-bind:src="logo.src"
          :alt="logo.alt"
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
                { src: "_nuxt/assets/2020corporation-logo/accenture.png", alt: "アクセンチュア株式会社のロゴ"},
                { src: "_nuxt//assets/2020corporation-logo/enjapan.png", alt: "エン・ジャパン株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/endroll.jpg", alt: "株式会社エンドロールのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/オースビー.png", alt: "株式会社オースビーのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/gaiax.png", alt: "株式会社ガイアックスのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/givery.jpg", alt: "株式会社ギブリーのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/sairu.jpg", alt: "株式会社才流のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/sansan.png", alt: "Sansan株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/sunstar.jpg", alt: "サンスター株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/cuc.png", alt: "株式会社シーユーシーのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/schneiderelectric.png", alt: "シュナイダーエレクトリック株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/johnsonandjohnson.png", alt: "ジョンソン・エンド・ジョンソン株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/spartaenglishmethod.png", alt: "株式会社スパルタ英会話のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/softbank.png", alt: "ソフトバンク株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/dentsu.gif", alt: "株式会社電通のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/toyobo.svg", alt: "東洋紡株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/nissan.png", alt: "日産自動車株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/nissha.png", alt: "NISSHA株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/panasonic.png", alt: "パナソニック株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/prtable.png", alt: "株式会社PR Table のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/bizreach.png", alt: "株式会社ビズリーチのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/florence.jpg", alt: "認定NPO法人フローレンスのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/mizuho.jpg", alt: "ミズホ株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/langoo.jpg", alt: "株式会社langooのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/lifull.jpg", alt: "株式会社LIFULLのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/RIZAP.png", alt: "RIZAPグループ株式会社のロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/リクルートマネジメントソリューションズ.jpg", alt: "株式会社リクルートマネジメントソリューションズのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/legaseed.jpg", alt: "株式会社Legaseedのロゴ"},
                { src: "_nuxt/assets/2020corporation-logo/wacul.png", alt: "株式会社WACULのロゴ"},
            ]
        }
    }
};
</script>

<style scoped lang="scss">
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
