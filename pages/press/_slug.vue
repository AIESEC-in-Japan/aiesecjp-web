<template>
  <div class="container">
    <div>
      <h2>
        {{ item.title }}
      </h2>
      <p>
        {{ item.body }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      item: {}
    };
  },

  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://aiesecjp.microcms.io/api/v1/press?filters=slug[equals]${params.slug}`,
      {
        headers: { "X-API-KEY": process.env.API_KEY }
      }
    );

    return {
      item: data.contents[0]
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 150px;
}
</style>