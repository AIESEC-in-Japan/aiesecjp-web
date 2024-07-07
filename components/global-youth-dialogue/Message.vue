<template>
  <div class="gyd-container">
    <div class="gyd-contents">
      <div class="gyd-logo"></div>
      <div class="message-container">
        <h3 class="message-title">
          Pursue the answer for peace.<br>
          探求しよう、自分と世界の境界を超えて。
        </h3>
        <p class="message-text">
          知らない国に、知っている人ができたら、どんな世界が見えるようになるんだろう。<br>
          知らない国に、友達ができたら、どんな会話をするんだろう。<br>
          ちょっと新しい自分と世界を見に行く１週間を、私たちと過ごしてみませんか？
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.gyd-container {
  position: relative;
  margin: 0;
  width: 100vw;

  .gyd-logo{
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogue-logo-blue.svg);
    width: 10rem;
    height: 10rem;
    margin-top: 2rem;
    margin-left: 5rem;
  }

  .message{
    &-container{
      text-align: right;
    }
    &-title{
      font-size: 2.6rem;
      line-height: 5rem;
      margin-bottom: 1.4rem;
    }
    &-text{
      font-size: 1rem;
      line-height: 2rem;
    }
  }
}

.gyd-contents{
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
  align-items: center;
}

</style>
