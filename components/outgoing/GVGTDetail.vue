<template>
  <div class="bg">
    <div class="container">
      <div class="detail">
        <img src="@/assets/images/product_GV-horizontal-white.png">
        <p>
        期間：6～8週間<br>
        インターン先：NPO/NGOなど<br>
        給与・滞在補助費：無し<br>
        </p>
        <p>
        貧困、飢餓、健康、養育、格差、戦争。<br>
        世界は様々な社会課題で溢れています。<br>
        社会課題の最前線で、課題を五感で<br>
        捉え、考え、行動し、試行錯誤する。<br>
        世界に挑戦するための、第一歩。
        </p>
        <a>詳しく見る</a>
      </div>
      <div class="detail">
        <img src="@/assets/images/product_GT-horizontal-white.png">
        <p>
        期間：6～7.8週間<br>
        インターン先：海外企業・ベンチャーなど<br>
        給与・滞在補助費：9週間以上の場合はあり<br>
        </p>
        <p>
        世界を前進させるための<br>
        ビジネススキルや専門知識を身につけ、<br>
        セクターを超えた課題解決を。<br>
        世界で通用する専門性を武器に、<br>
        社会を変えるリーダーへ。
        </p>
        <a>詳しく見る</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  min-height: 100vh;
  width: 100%;
  background-image: url("~@/assets/images/icx-corporation-internship.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 55%;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.5);
}

img {
  height: 65px;
  width: 230px;
}


.detail {
  padding-right: 40px;
  padding-left: 40px;
  min-height: 100vh;
  text-align: center;
  padding-top: 220px;

  p {
    margin-top: 40px;
    font-size: 14px;
    font-weight: bold;
    color: $white;
    font-family: "游ゴシック";
    line-height: 25px;
  }

  a {
    margin-top: 40px;
    display: inline-block;
    font-weight: normal;
    font-size: 16px;
    color: $white;
    border-bottom: solid 1.5px;
  }
}
</style>

