<template>
  <div class="container">
    <div>
      <h2>
        タイトル：{{ item.title }}
      </h2>
      <p>
        作成日時：{{ item.createdAt }}
        更新日時：{{ item.updatedAt }}
        公開日時：{{ item.publishedAt }}
      </p>
      <p>
        本文：{{ item.body }}
      </p>
      <p>
        タグ：{{ item.tag }}
        執筆者：{{ item.writer }}
        LC：{{ item.lc }}
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
