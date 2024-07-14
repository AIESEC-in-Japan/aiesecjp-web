<template>
  <section>
    <div class="kv-container">
      <div class="kv-bg"></div>
      <p class="kv-text">
        きっと変わる。<br>
        自分も、世界も。
      </p>
      <a class="latest-news"
        :href="news_data[0].url"
      >
        <span>NEWS&nbsp;</span>
        &nbsp;&nbsp;{{ news_data[0].date }}
        &nbsp;&nbsp;{{ news_data[0].title }}
      </a>
    </div>
  </section>
</template>

<script>
import news from '@/assets/json/news.json'

export default {
  data() {
    return {
      count: 1,
      news_data: news
    }
  }
};
</script>

<style lang="scss" scoped>
.kv-container{
  position: relative;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: -5rem 0 10rem 0;
}
.kv-bg {
  width: 100%;
  height: 100vh;
  background-image: url(assets/images/top/top-kv.png);
  background-size: cover;
  background-position: center;
}
.kv-text{
  color: #fff;
  font-size: 6rem;
  position: absolute;
  bottom: 1rem;
  left: 2.6rem;
}

.latest-news{
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  position: absolute;
  bottom: 3rem;
  right: 2.6rem;
  text-decoration: none;
  border: 0.9px #fff solid;
  border-radius: 3rem;
  background-color: rgba(63, 63, 63, 0.3);

  span{
    color: #5CB0FF;
  }
}

</style>