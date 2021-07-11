<template>
  <!--  少しずつ便利な仕組みを導入してデザインを整えていく -->
  <client-only>
    <transition name="fade">
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
            v-bind="this.ButtonProps"
            :label="'公式LINEから最新情報をチェック!'"
          />
        </v-row>
      </v-footer>
    </transition>
  </client-only>
</template>


<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      ButtonProps: {
        textColor: basic_color.deepBlue,
        baseColor: 'transparent',
        size: 'large',
        url: 'https://lin.ee/GaZkjsN'
      }
    }
  },
  computed: {
    isBottom() {
      console.log("process", process.browser)
      console.log("$Y",this.$window.pageYOffset)
      console.log("gY",global.pageYOffset)
      console.log("ev",this.$window.pageYOffset > 1000);
      if (process.browser) {
        console.log("global", global);
        console.log("if height",global.window.document.body.scrollHeight);
        console.log("if ev",this.$window.pageYOffset > global.window.document.body.scrollHeight - 1000);
        return this.$window.pageYOffset > global.window.document.body.scrollHeight - 1000;
      }
      return false;
    }
  }
}
</script>

