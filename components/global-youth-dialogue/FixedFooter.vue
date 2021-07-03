<template>
  <!--  少しずつ便利な仕組みを導入してデザインを整えていく -->
  <v-footer
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
  }
}
</script>

