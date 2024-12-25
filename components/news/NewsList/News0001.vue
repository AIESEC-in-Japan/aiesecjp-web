<template>
  <div class="news-container">
    <div class="news-contents">
      <div class="news-header">
        <div class="news-date">
          <p>24.10.01</p>
        </div>
        <div class="news-category">
          <p>その他</p>
        </div>
      </div>
      <h2 class="news-title">
        <span>HPをリニューアルいたしました。</span>
      </h2>
      <p class="news-text">
        この度、ホームページを全面リニューアルいたしました。新しいデザインや操作性の向上を図り、コンテンツもさらに充実させております。ぜひご覧ください。<br>
        今後も皆さまに弊団体の情報をお届けできるよう内容の充実に努めてまいりますので、よろしくお願いいたします。
      </p>
      <div class="button-container">
        <p class="button-nextText">
          お知らせ一覧に戻る
        </p>
        <a
          class="button"
          href="/news"
        />
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
  margin: 0 5%;
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }
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
  margin: 0 0 0 auto;
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
  @media(max-width: 580px){
    padding: 4px 12px;  
    width: fit-content;
    margin-top: 1rem;
    margin-left: auto;
  }
}

.news-title{
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
  line-height: 4rem;
  border-bottom: solid 3px $blue;
  width: fit-content;
}

.news-text{
  font-size: 1rem;
  margin: 1rem;
  width: fit-content;
}

.button-container{
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
.button-nextText{
  display: block;
  font-size: 1.35rem;
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
