<template>
  <div class="news-container">
    <div class="news-contents">
      <p class="news-categorize-text">カテゴリ</p>
      <div class="news-categorize">
        <a class="news-categorize-item" v-on:click="filterNews('all')" :class="{ active: selected_category === 'all' }"><p>ALL</p></a>
        <a class="news-categorize-item" v-on:click="filterNews('report')" :class="{ active: selected_category === 'report' }"><p>活動報告</p></a>
        <a class="news-categorize-item" v-on:click="filterNews('partner')" :class="{ active: selected_category === 'partner' }"><p>協賛活動</p></a>
        <a class="news-categorize-item" v-on:click="filterNews('member')" :class="{ active: selected_category === 'member' }"><p>メンバーの活動</p></a>
        <a class="news-categorize-item" v-on:click="filterNews('others')" :class="{ active: selected_category === 'others' }"><p>その他</p></a>
      </div>
      <div class="news-item-wrapper">
        <BaseNewsList
            v-for="news in paginatedNews"
            :key="news.url"
            :data="news"
          />
      </div>
      <div class="pagination">
        <a @click="goToPage(current_page - 1)" :disabled="current_page === 1">&lt;</a>
        <a class="pagination_item"
          v-for="page in pageNumbers"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: current_page === page }"
        >
          {{ page }}
        </a>
        <a @click="goToPage(current_page + 1)" :disabled="current_page === totalPages">&gt;</a>
      </div>
    </div>
  </div>
</template>

<script>
import news from '@/assets/json/news.json'

export default {
  data() {
    return {
      selected_category: 'all',
      count: 6,
      news_data: news,
      current_page: 1,
      news_per_page: 8
    }
  },
  computed: {
    filteredNews() {
      if (this.selected_category === 'all') {
        return this.news_data;
      }
      return this.news_data.filter(news => {return news.categorized === this.selected_category});
    },
    totalPages() {
      return Math.ceil(this.filteredNews.length / this.news_per_page);
    },  
    paginatedNews() {
      const start = (this.current_page - 1) * this.news_per_page;
      const end = start + this.news_per_page;
      return this.filteredNews.slice(start, end);
    },
    //ページ下部のページ番号
    pageNumbers() {
      const maxPages = 5;
      const half = Math.floor(maxPages / 2);
      let start = Math.max(1, this.current_page - half);
      let end = Math.min(start + maxPages - 1, this.totalPages);

      if (end - start + 1 < maxPages) {
        start = Math.max(1, end - maxPages + 1);
      }

      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    }
  },
  methods: {
    filterNews: function(category) {
      this.selected_category = category;
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.current_page = page;
      }
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
.news-categorize-item.active{
  background-color: $blue;
  p{
    color: $white;

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

.pagination{
  display: block;
  margin: 2rem 0;
  text-align: center;

  .pagination_item.active{
    color: $blue;

  }  

}
</style>
