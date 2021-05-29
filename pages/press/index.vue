<template>
  <div class="container">
    <!-- <div v-for="item in items" v-bind:key="item.id">
      <nuxt-link :to="item.slug">
        <h2>
          {{ item.title }}
        </h2>
        <p>
          {{ item.body }}
          {{item.slug}}
        </p>
      </nuxt-link>
    </div> -->
    <h2 class="comingsoon">Coming Soon...</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: []
    };
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://aiesecjp.microcms.io/api/v1/press",
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    );
    return {
      items: data.contents
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 150px;
  display: flex;
  justify-content: center;
}
.comingsoon {
  font-size: 24px;
  color: $gray;
  padding-top: 50px;
  padding-bottom: 200px;
}
</style>
