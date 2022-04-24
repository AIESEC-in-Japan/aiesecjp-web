<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q12106X7XB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q12106X7XB');
</script>

<template>
  <section class="global-youth-dialogue-container">
    <div class="global-youth-dialogue-wrapper">
      <img
        alt="global-youth-dialogue-logo"
        class="global-youth-dialogue-logo"
        src="@/assets/images/global-youth-dialogue/global-youth-dialogue-logo-white-none.png"
      >
      <p class="global-youth-dialogue-text">
        申し込み締め切り：5/18 開催日時：5/27~5/31
      </p>
      <p class="global-youth-dialogue-text">
        Pursue the answer for peace. <br>
        探求しよう、自分と世界の境界を超えて。
      </p>
      <p class="global-youth-dialogue-text">
        知らない国に、知っている人ができたら、<br>
        どんな世界が見えるようになるんだろう。
      </p>
      <p class="global-youth-dialogue-text">
        知らない国に、友達ができたら、<br>
        どんな会話をするんだろう。
      </p>
      <p class="global-youth-dialogue-text">
        ちょっと新しい自分と世界を見に行く５日間を、<br>
        私たちと過ごしてみませんか？
      </p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.global-youth-dialogue {
  &-container {
    position: relative;
    background-image: url("~@/assets/images/global-youth-dialogue/GlobalYouthDialogueTop.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 38rem;
  }

  /* 半透明のフィルターをかける */
  &-container::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &-wrapper {
    width: 80%;
    padding-top: 4rem;
    // 中央よせ
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);

    // 内部を縦方向配置
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-weight: bold;

    @include sp {
      width: 90%;
    }
  }

  &-logo {
    width: 20%;
    margin: 0 auto 2rem;

    @include sp {
      width: 40%;
    }
  }

  &-text {
    text-align: center;
    margin: 1rem auto;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    letter-spacing: 0.1rem;

    @include sp {
      letter-spacing: 0;
      font-size: 0.8rem;
    }
  }
}

</style>
