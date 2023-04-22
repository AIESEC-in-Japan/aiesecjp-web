<template>
  <section class="global-youth-dialogue-container ">
    <h1>Join global youth dialogue</h1>
    <img
      alt="topics"
      src="@/assets/images/global-youth-dialogue/typing.svg"
    >
    <p class="explain-text">
      global youth dialogueは無料で参加可能です。参加希望の方は公式LINEのご登録お願いします。
    </p>
    <p class="explain-text">
      疑問、懸念のある方や、より詳しい話を聞きたいという方向けの事前説明会への申し込みも公式LINEにて受け付けています。
    </p>
    <p class="explain-text">
      ちょっと新しい自分と世界を見に行く１週間を、私たちと過ごしてみませんか？
    </p>
    <BaseRoundButton
      v-bind="this.ButtonProps"
      :label="'公式LINEはこちらから'"
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
        url: 'https://lin.ee/LFvJeCM'
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
