<template>
  <section class="policy-container">
    <div class="policy-wrapper">
      <h1 class="policy-title">アイセック・ジャパンのプライバシーポリシー</h1>
      <p class="policy-text">
        特定非営利活動法人アイセック・ジャパンは、<br>
        海外インターンシップに参加される皆様をはじめとする関係者の皆様のプライバシーを尊重し、<br>
        個人情報の取り扱いに関して以下のような指針を定め、<br>
        それに従ってその保護に努めております。
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.policy {
  &-container {
    position: relative;
    background-image: url("~@/assets/images/privacy-policy-top-bg.jpg");
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
