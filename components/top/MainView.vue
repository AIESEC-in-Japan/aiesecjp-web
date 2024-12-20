<template>
  <section>
    <div class="kv-container">
      <div class="kv-bg"></div>
      <div class="kv-wrapper">
        <p class="kv-text">
          きっと変わる。<br>
          自分も、世界も。
        </p>
        <a class="latest-news"
          :href="news_data[0].url"
        >
          <span>NEWS&nbsp;</span>
          &nbsp;&nbsp;{{ `${news_data[0].date.match(/(\d+)年(\d+)月(\d+)日/)[2]}.${news_data[0].date.match(/(\d+)年(\d+)月(\d+)日/)[3]}`}}
          &nbsp;&nbsp;<wbr>{{ news_data[0].title }}
        </a>
      </div>
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
  @include tab{
    display: flex;
    flex-direction: column;
  }
}
.kv-bg {
  width: 100%;
  height: 100vh;
  background-image: url(assets/images/top/top-kv.png);
  background-size: cover;
  background-position: center;
}

.kv-wrapper{
  max-width: 1440px;
  position: absolute;
  display: flex;
  bottom: 1.2rem;
  padding: 0 3rem;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);

  .kv-text{
    width: 72%;
    position: relative;
    color: #fff;
    font-size: 6rem;
    margin: 0;
    word-break: keep-all;
  }
  
  .latest-news{
    color: #fff;
    position: absolute;
    font-size: 1rem;
    padding: 1rem 2rem;
    bottom: 1.2rem;
    right: 3rem;
    text-decoration: none;
    border: 1px #fff solid;
    border-radius: 3rem;
    background-color: rgba(63, 63, 63, 0.3);
    height: fit-content;
    max-width: 32rem;
  
    span{
      color: #5CB0FF;
    }
  }
  @include tab{
    flex-direction: column;
    padding: 0 1rem;
    top: 50%;
    .kv-text{
      font-size: 4.8rem;
      width: auto;
      bottom: 50%;
      
    }
    .latest-news{
      position: relative;
      max-width: fit-content;
      left: 1rem;
      bottom: 6rem;
    }
  }
  

  @media(max-width:550px){
    .kv-text{
      font-size: 4rem;
    }    
  }

  @include sp{
    .kv-text{
      font-size: 3.2rem; 
    }
    .latest-news{
      left: 0;
      margin: 0 auto;
      word-break: keep-all;
      width: 90%;
      padding: 0.8rem 1.6rem;
    }

  }

  @media(max-width:375px){
    .kv-text{
      font-size: 2.6rem;
    }    
  }
}

</style>