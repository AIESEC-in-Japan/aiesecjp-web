<template>
  <!--  少しずつ便利な仕組みを導入してデザインを整えていく -->
  <v-footer
    v-show="!isBottom"
    fixed
    height="80"
    padless
  >
    <v-row
      align="center"
      justify="center"
    >
      <BaseRoundButton
        href="https://lin.ee/nYHSxuf"
        v-bind="this.ButtonProps"
        :label="'参加登録はこちらの公式LINEから'"
      />
    </v-row>
  </v-footer>
</template>


<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      ButtonProps: {
        textColor: basic_color.deepBlue,
        baseColor: 'transparent',
        size: 'large'
      }
    }
  },
  computed: {
    isBottom() {
      // window.documentがSSRでは取れないのでブラウザのみで評価する
      // 本当は消えるアニメーション入れたいけどうまくいかなかったので後回し
      // 1000は、footerサイズを考慮して適当書いたので適宜変更してください
      if (process.client) {
        return this.$window.pageYOffset > global.window.document.body.scrollHeight - 1000;
      }
      return false;
    }
  }
}
</script>

