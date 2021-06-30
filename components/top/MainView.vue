<template>
  <v-carousel
    :show-arrows="false"
    class="main-view-container"
    cycle
    hide-delimiters
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="require('~/assets/images/top/' + item.src)"
    >
      <div class="pattern" />
      <!-- koma2 汚いけどいいやり方が思いつかなかった…Objectの中で渡せないのか… -->
      <TopCarouselContent1st v-show="i === 0" />
      <TopCarouselContent2nd v-show="i === 1" />
      <TopCarouselContent3rd v-show="i === 2" />
    </v-carousel-item>
  </v-carousel>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'top-1.jpg',
        },
        {
          src: 'top-2.jpg',
        },
        {
          src: 'top-3.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-view-container {
  height: 80vh;
}

.pattern {
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
}

</style>

