<template>
  <section class="safety-container">
    <div class="safety-wrapper">
      <h1 class="safety-title">海外インターンシップ参加に際しての安全管理サポートについて</h1>
      <p class="safety-text">
        アイセックでは、災害やテロなどの海外での予測できない事態に備え、<br>
        国内でも有数の海外危機管理に関する実績と経験を持つ安全サポート株式会社と提携し、<br>
        24時間365日体制で海外インターンシップに参加される方々の危機管理サポートを行っております
      </p>
      <p class="safety-text">
        また、渡航中は参加者一人一人に委員会メンバーが一人ついてサポートを行う「マネージャー制度」を<br>
        導入しており、どんな悩みもいつでも気軽に相談できるような体制を整えております。</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.safety {
  &-container {
    position: relative;
    background-image: url("~@/assets/images/safety/safery-top-background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    letter-spacing: 2px;
  }

  &-title {
    margin: 20px auto;
    font-size: 28px;
    color: white;
  }

  &-text {
    text-align: center;
    margin: 10px auto;
    font-size: 16px;
    line-height: 32px;
    color: white;
  }
}

</style>
