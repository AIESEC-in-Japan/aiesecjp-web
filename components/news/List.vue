<template>
  <div class="news-container">
    <div class="news-contents">
      <p class="news-categorize-text">カテゴリ</p>
      <div class="news-categorize">
        <a class="news-categorize-item" href="#"><p>ALL</p></a>
        <a class="news-categorize-item" href="#"><p>活動報告</p></a>
        <a class="news-categorize-item" href="#"><p>協賛活動</p></a>
        <a class="news-categorize-item" href="#"><p>メンバーの活動</p></a>
        <a class="news-categorize-item" href="#"><p>その他</p></a>
      </div>
      <div class="news-item-wrapper">
        <BaseNewsList
            v-for="i in count"
            :key="news_data[i-1].url"
            :data="news_data[i-1]"
          />
      </div>
    </div>
  </div>
</template>

<script>
import news from '@/assets/json/news.json'

export default {
  data() {
    return {
      count: 6,
      news_data: news
    }
  }
};
</script>

<style lang="scss" scoped>

// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

.news-container {
  position: relative;
  margin: 10rem 0 10rem 0;
  width: 100%;
  height: max-content;
}

.news-contents{
  position: relative;
  margin: 0 5rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-title{
  color: $blue;
  font-size: 2rem;
  padding-top: 6rem;
  font-weight: bold;
  margin-bottom: 0;

  &-sub{
    font-size: 1.35rem;
    margin-top: 0.8rem;
  }
}

.news-categorize{
  display: flex;
  justify-content:center;
  margin: 1.6rem 0 0 0;

&-text{
  font-size: 1.6rem;
  text-align: center;
  margin: 0;
}
}
.news-categorize-item{
  margin: 0.8rem 2rem 0.8rem 0;
  padding: 12px 30px;  
  width: max-content;
  text-align: center;
  border: 1px $blue  solid;
  border-radius: 3rem;
  text-decoration: none;
  transition: all 0.3s ease 0s;

  &:hover{
    background-color: $blue;
    transition-duration: .3s;
    p{
      color: $white;

    }
  }
}
.news-categorize-item p{ 
  color: $blue;
  margin: 0;
  font-size: 1rem;
}

.news-item-wrapper{
  display: flex;
  flex-direction: column;
  margin: 6% 0 0 0;
  height: max-content;
}

</style>
