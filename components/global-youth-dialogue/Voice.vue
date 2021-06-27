<template>
  <div class="global-youth-dialogue-voice">
    <BaseRoundButton
      v-bind="this.ButtonProps"
      :label="'参加者の声はこちら'"
    />
  </div>
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
        url:'https://note.com/aiesec_japan/n/n507bb45b442a'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.global-youth-dialogue-voice {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
</style>
