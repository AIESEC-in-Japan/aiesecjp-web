<template>
  <div>
    <div v-for="item in items" v-bind:key="item.id">
      <nuxt-link :to="'careers/' + item.id">
        <h2>
          {{ item.title }}
        </h2>
        <p>
          {{ item.body }}
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
