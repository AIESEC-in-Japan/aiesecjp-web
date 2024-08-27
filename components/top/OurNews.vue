<template>
  <section class="news-container">
    <div class="news-contents">
      <p class="news-title">
        Our News
      </p>
      <h2 class="news-title-sub">新着情報</h2>
      <div class="news-wrapper">
        <div class="news-categorize">
          <a class="news-categorize-item" v-on:click="filterNews('all')" :class="{ active: selected_category === 'all' }"><p>ALL</p></a>
          <a class="news-categorize-item" v-on:click="filterNews('report')" :class="{ active: selected_category === 'report' }"><p>活動報告</p></a>
          <a class="news-categorize-item" v-on:click="filterNews('partner')" :class="{ active: selected_category === 'partner' }"><p>協賛活動</p></a>
          <a class="news-categorize-item" v-on:click="filterNews('member')" :class="{ active: selected_category === 'member' }"><p>メンバーの活動</p></a>
          <a class="news-categorize-item" v-on:click="filterNews('others')" :class="{ active: selected_category === 'others' }"><p>その他</p></a>
          <div class="button-container">
            <p class="button-nextText">一覧を見る</p>
            <a class="button" href="/news"></a>
          </div>
        </div>
        <div class="news-item-wrapper">
          <BaseNewsList
            v-for="i in Math.min(count, filteredNews.length)"
            :key="filteredNews[i-1].url"
            :data="filteredNews[i-1]"
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
      selected_category: 'all',
      count: 5,
      news_data: news
    }
  },
  computed: {
    filteredNews() {
      if (this.selected_category === 'all') {
        return this.news_data;
      }
      return this.news_data.filter(news => {return news.categorized === this.selected_category});
    }
  },
  methods: {
    filterNews: function(category) {
      this.selected_category = category;
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

  @include sp{
    margin: 0 2rem;
  }
  @media (min-width:1600px){
    margin: 0 auto;
    max-width: 1440px;
  }
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

  @include tab{
    flex-direction: column;
    justify-content: center;
  }
}
.news-categorize{
  display: flex;
  flex-direction: column;
  margin: 4rem 0 0 0;
  @include tab{
    display: grid;
    grid-template-columns: repeat(5 ,auto);
    justify-content: center;
    gap: 1rem;
  }
  @media (max-width:854px){
    grid-template-columns: repeat(3 ,auto);
    gap: 0.6rem;
  }
  @media (max-width:630px){
    grid-template-columns: repeat(2 ,auto);
    gap: 1rem;
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
  @include tab{
    margin: 0.8rem 0;
    width: fit-content;
  }
  @media (max-width:854px){
    margin: 0.8rem auto;
  }
  @include sp{
    padding: 10px 26px;
  }
}
.news-categorize-item p{ 
  color: $blue;
  margin: 0;
  font-size: 1rem;

}

.news-categorize-item.active{
  background-color: $blue;
  p{
    color: $white;

  }
}

.news-item-wrapper{
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;
  width: 76%;
  
  @include tab{
    width: 100%;
  }
}


.button-container{
  margin-top: 1.6rem;
  display: flex;
  @include tab{
    grid-row: 2;
    grid-column: 1/ span 5;
    justify-content: center;
  }
  @media (max-width:854px){
    grid-row: 3;
    grid-column: 1/ span 3;
  }
  @media (max-width:630px){
    grid-row: 4;
    grid-column: 1/ span 2;
  }
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
