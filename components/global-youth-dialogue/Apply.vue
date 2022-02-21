<template>
  <section class="global-youth-dialogue-container ">
    <h1>Join global youth dialogue</h1>
    <img
      alt="topics"
      src="@/assets/images/global-youth-dialogue/typing.svg"
    >
    <p class="explain-text">
      global youth dialogueは公式LINEから参加の申し込みが可能です。
    </p>
    <p class="explain-text">
      疑問、懸念のある方や、より詳しい話を聞きたいという方向けの事前説明会への申し込みも公式LINEにて受け付けています。
    </p>
    <p class="explain-text">
      よくいただく質問や参加にあたっての注意事項をまとめたコンテンツもご用意しているので、少しでも興味をお持ちになった方はぜひ公式LINEのご登録をお願いします！
    </p>
    <BaseRoundButton
      v-bind="this.ButtonProps"
      :label="'公式ラインはこちらから'"
    />
  </section>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      ButtonProps: {
        textColor: basic_color.white,
        baseColor: basic_color.deepBlue,
        size: 'large',
        url: 'https://lin.ee/GaZkjsN'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.global-youth-dialogue-container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
}

section {
  min-height: min-content;
  padding: 3rem 1rem;
}

h1 {
  color: $deep-blue;
}

img {
  width: 12rem;

  @include sp {
    width: 6rem;
  }
}

.explain-text {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
}

</style>
