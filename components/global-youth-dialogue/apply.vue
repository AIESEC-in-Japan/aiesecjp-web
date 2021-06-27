<template>
  <section class="global-youth-dialogue-container ">
    <h1>Join Global Youth Dialogue</h1>
    <img
      alt="topics"
      src="@/assets/images/global-youth-dialogue/typing.svg"
    >
    <p class="explain-text">
      global youth dialogueについての最新情報は公式LINEから配信されています。
    </p>
    <p class="explain-text">
      global youth dialogueへの参加には事前説明会への参加を必須としておりますが、そちらの申し込みも公式LINEからしていただけます。
    </p>
    <p class="explain-text">
      ご不明点などは、お気軽に公式LINEからお問い合わせください！
    </p>
    <BaseRoundButton
      v-bind="this.WhiteButtonProps"
      :label="'公式ラインはこちらから'"
      @click="window.open('https://lin.ee/GaZkjsN')"
    />
  </section>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      WhiteButtonProps: {
        textColor: basic_color.white,
        baseColor: basic_color.deepBlue,
        size: 'large'
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
