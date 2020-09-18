<template>
  <div class="container">
    <div v-for="item in items" v-bind:key="item.id">
      <nuxt-link :to="'press/' + item.slug">
        <h2>
          {{ item.title }}
        </h2>
        <p>
          {{ item.body }}
          {{item.slug}}
        </p>
      </nuxt-link>
    </div>
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

<style>
.container {
  margin-top: 150px;
}
</style>