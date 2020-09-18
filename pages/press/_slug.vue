<template>
  <div>
    <h2>キャリア</h2>
    <div>
        <h2>
          {{ item.title }}
          {{ item.body }}
        </h2>
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
      `https://aiesecjp.microcms.io/api/v1/posts?filters=slug[equals]${params.slug}`,
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