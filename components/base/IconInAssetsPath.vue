<template>
  <img
    :alt="this.data.alt"
    :class="[this.isWide ? 'wide-img':'default-img']"
    :src="require(`~/assets/${this.data.src}`)"
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
    },
    isWide: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.default-img {
  width: 7.5rem;
  height: 7.5rem;
}

.wide-img {
  width: 22rem;
}
</style>
