<template>
  <section class="news-container">
    <div class="news-contents">
      <p class="news-title">
        Our News
      </p>
      <h2 class="news-title-sub">新着情報</h2>
      <div class="news-wrapper">
        <div class="news-categorize">
          <a class="news-categorize-item" href="#"><p>ALL</p></a>
          <a class="news-categorize-item" href="#"><p>活動報告</p></a>
          <a class="news-categorize-item" href="#"><p>協賛活動</p></a>
          <a class="news-categorize-item" href="#"><p>メンバーの活動</p></a>
          <a class="news-categorize-item" href="#"><p>その他</p></a>
          <div class="button-container">
            <p class="button-nextText">一覧を見る</p>
            <a class="button" href="#"></a>
          </div>
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
  </section>
</template>

<script>
import news from '@/assets/json/news.json'

export default {
  data() {
    return {
      count: 5,
      news_data: news
    }
  }
};
</script>

<style lang="scss" scoped>
.news-container {
  position: relative;
  margin: 0 0 5rem 0;
  width: 100%;
}

.news-contents{
  position: relative;
  margin: 0 5rem;
  z-index: 30;
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

.news-wrapper{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.news-categorize{
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0 0;
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
  margin: 1rem 0 0 0;
  width: 76%;
}


.button-container{
  margin-top: 1.6rem;
  display: flex;
}
.button-nextText{
  display: block;
  font-size: 1.35rem;
  font-weight: bold;
  padding: 6px;
  padding-left: 0;
  margin: 0;
}
.button{
  display: inline-block;
  position: relative;
  background-color: $blue;
  width: 50px;
  height: 50px;
  padding: auto;
  margin-left: 16px;
  border-radius: 5rem;
  border: 2px solid $blue;
  box-shadow:  0 0 24.5px rgba(3, 126, 243,0.22);
  transition: all 0.3s ease 0s;

  &:hover{
    transition-duration: .3s;
    transform: scale(1.1);
  }
}

.button::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 10px;
  height: 10px;
  border-top: 1.5px solid #fff;
  border-right: 1.5px solid #fff;
  transform: rotate(45deg);
}
</style>
