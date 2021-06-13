<template>
  <img
    :alt="data.alt"
    :src="require(`~/assets/2020corporation-logo/${data.src}`)"
  >
</template>

<script>
// 画像パス指定の方法はこちらを参照してください
// https://nuxtjs.org/docs/2.x/directory-structure/assets#webpack-assets
export default {
  props: {
    data: {
      // type: {alt: String, src: String}, 本当は型で縛りたいけどTSじゃないので
      type: Object,
      required: true
    }
  }
}
</script>
