<template>
  <div class="ogxProgram-container">
    <h1>アイセックが提供するインターンシッププログラム</h1>
    <div class="program">
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
      </div>
      <!-- <div class="detail"> 現在はGVのみの運営のため、GTaに関する情報を不記載2023/12/24
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
      </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.ogxProgram-container {
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/images/icx/icx-corporation-internship.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h1 {
  color: $white;
}

.program {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.detail {
  text-align: center;
  padding: 3rem;

  /* stylelint-disable unit-disallowed-list */
  img {
    height: 65px;
    width: 230px;
  }
  /* stylelint-enable unit-disallowed-list */

  p {
    margin-top: 2rem;
    font-weight: bold;
    color: $white;
    line-height: 2;
  }
}
</style>

