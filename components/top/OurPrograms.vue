<template>
  <section class="programs-container">
    <h1>Our Programs</h1>
    <div class="contents-wrapper">
      <div class="programs">
        <div class="logo-wrapper">
          <BaseIconInAssetsPath
            :data="productGV"
            :is-wide="true"
          />
        </div>
        <div class="logo-wrapper">
          <BaseIconInAssetsPath
            :data="productGT"
            :is-wide="true"
          />
        </div>
        <h2>海外インターンシップ</h2>
        <p>
          日本人大学生を海外の企業、教育機関やNPO法人などへ送り出す海外インターンシップと、
          海外の大学生を日本の企業様などに受け入れていただく海外インターンシップを運営しています。
        </p>
        <div class="link-wrapper">
          <nuxt-link
            class="link-text"
            to="/outgoing"
          >
            学生の方はこちらから
          </nuxt-link>
          <nuxt-link
            class="link-text"
            to="/incoming"
          >
            企業の方はこちらから
          </nuxt-link>
        </div>
      </div>

      <div class="programs">
        <div class="logo-wrapper">
          <BaseIconInAssetsPath
            :data="globalYouthDialogue"
            :is-wide="true"
          />
        </div>
        <h2>global youth dialogue</h2>
        <p>
          海外の学生との様々な会話を通じて、世界をより広く、
          自分をより深く知ることのできるオンラインイベントです。
          海外の学生とペアを組み、
          日替わりで設定される会話のトピックに基づいて自分や世界のことを話すことができます。
        </p>
        <nuxt-link
          class="link-text"
          to="/global-youth-dialogue"
        >
          詳細はこちら
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      globalYouthDialogue:
        {src: "images/top/global-youth-dialogue.png", alt: ""},
      productGT:
        {src: "images/top/product-GT.png", alt: ""},
      productGV:
        {src: "images/top/product-GV.png", alt: ""}
    }
  }
}
</script>

<style lang="scss" scoped>
/* todo スピードを優先してだいぶ汚いCSS書いてます…そのうち直す。 */

.programs-container {
  max-height: max-content;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 4rem;
}

h1 {
  color: $blue;
  font-size: 2rem;
}

h2 {
  color: $blue;
  font-size: 1.5rem;
  margin: 1rem auto;
}

.contents-wrapper {
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.programs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
}

.logo-wrapper {
  margin: 1rem auto;
}

p {
  width: 60%;

  @include sp {
    width: 90%;
    text-align: left;
  }
}

.link-text {
  font-weight: bold;
  text-decoration: none;
  color: $blue;
  border-bottom: 1px solid $blue;
  padding-bottom: 0.5rem;
  margin: auto 3rem;

  @include sp {
    display: block;
    margin: 1rem auto;
  }
}
</style>
