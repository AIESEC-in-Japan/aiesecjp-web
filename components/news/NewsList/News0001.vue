<template>
  <div class="news-container">
    <div class="news-contents">
      <div class="news-header">
        <div class="news-date">
          <p>23.8.22</p>
        </div>
        <div class="news-category">
          <p>活動報告</p>
        </div>
      </div>
      <h2 class="news-title">
        夏の合宿開催について
      </h2>
      <p class="news-text">
        夏の合宿を開催いたしました。<br>
        テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしましたテキスト、テキスト、夏の合宿を開催いたしました。<br>
        テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。<br>
        テキスト、テキスト、夏の合宿を開催いたしました。<br>
        テキスト、テキスト、
      </p>
      <div class="img"></div>
      <p class="news-text">
        夏の合宿を開催いたしました。<br>
        テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしましたテキスト、テキスト、夏の合宿を開催いたしました。<br>
        テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。テキスト、テキスト、夏の合宿を開催いたしました。<br>
        テキスト、テキスト、夏の合宿を開催いたしました。<br>
        テキスト、テキスト、
      </p>
      <div class="button-container">
        <p class="button-nextText">お知らせ一覧に戻る</p>
        <a class="button" href="/news"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

.news-container {
  position: relative;
  margin: 8rem 0 10rem 0;
  width: 100%;
  height: max-content;
}

.news-contents{
  position: relative;
  margin: 0 auto;
  width: 866px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-header{
 display: flex;
 justify-content: space-between;
 width: 100%;
}

.news-date{
  padding: 12px 30px 12px 0;  
  text-align: center;
  & p{
  font-size: 1rem;
  margin: 0;
  text-align: center;

  }
}

.news-category{
  margin: 0 2rem;
  text-align: center;
}
.news-category p{
  padding: 12px 30px;  
  width: max-content;
  border: 0.8px $dark-gray  solid;
  border-radius: 3rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
}

.news-title{
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0;
}

.news-text{
  font-size: 1rem;
  margin: 0;
  //テキストの幅
}

.img{
  background-image: url(assets/images/top/top-kv.png);
  background-size: cover;
  background-position: center;
  width: 866px;
  height: 300px;
  margin: 3rem 0;
}

.button-container{
  display: flex;
  justify-content: center;
  margin-top: 5rem;
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
