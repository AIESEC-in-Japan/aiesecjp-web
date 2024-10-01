<template>
  <div class="gyd-container">
    <div class="gyd-contents">
      <div class="gyd-logo"></div>
      <div class="message-container">
        <h3 class="message-title">
          Pursue the answer for peace.<br>
          探求しよう、<wbr>自分と世界の境界を超えて。
        </h3>
        <p class="message-text">
          知らない国に、知っている人ができたら、<wbr>どんな世界が見えるようになるんだろう。<br> 
          知らない国に、友達ができたら、<wbr>どんな会話をするんだろう。<br>
          ちょっと新しい自分と世界を見に行く１週間を、<wbr>私たちと過ごしてみませんか？
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.gyd-container {
  position: relative;
  margin: 0 0 4rem 0;
  width: 100vw;

  .gyd-contents{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 5%;
    align-items: center;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    @media(max-width: 1020px){
      flex-direction: column;
    }
  }

  .gyd-logo{
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogue-logo-blue.svg);
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
    margin-left: 5rem;

    @media(max-width: 1020px){
        margin:0 auto; 
      }
  }

  .message{
    &-container{
      text-align: right;
      width: fit-content;
    }
    &-title{
      font-size: 2.6rem;
      line-height: 5rem;
      margin-bottom: 1.4rem;
      word-break: keep-all;
      width: fit-content;
      margin-left :auto; 

      @media(max-width: 1020px){
        text-align: center;
        margin:0 auto; 
      }
      @media(max-width: 600px){
        font-size: 2rem;
        line-height: 4rem;
      }
      @include sp{
        font-size: 1.5rem;
        line-height: 3rem;
        margin-bottom: 0.8rem;
      }

      @media (max-width:375px){
        font-size: 1.35rem;
        word-break: keep-all;
      }


    }
    &-text{
      font-size: 1rem;
      line-height: 2rem;
      margin-left :auto; 
      width: fit-content;

      @media(max-width: 1020px){
        text-align: center;
        margin:2rem auto 0 auto; 
      }

      @include sp{
        line-height: 1.5rem;
      }

    }
  }
}



</style>
