<template>
  <section class="policy-container">
    <div class="policy-wrapper">
      <h1 class="policy-title">
        アイセック・ジャパン<br v-show="this.$isMobile()">の<br v-show="this.$isMobile()">プライバシーポリシー
      </h1>
      <p class="policy-text">
        特定非営利活動法人アイセック・ジャパンは、<br>
        海外インターンシップに参加される<br v-show="this.$isMobile()">皆様をはじめとする 関係者の皆様の<br v-show="this.$isMobile()">プライバシーを尊重し、<br>
        個人情報の取り扱いに関して<br v-show="this.$isMobile()">以下のような指針を定め、<br>
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

    @include sp {
      width: 90%;
    }
  }

  &-title {
    margin: 1.5rem auto;
    font-size: 2rem;
    color: white;

    @include sp {
      letter-spacing: 0;
      text-align: center;
    }

  }

  &-text {
    text-align: center;
    margin: 0.5rem auto;
    font-size: 1rem;
    line-height: 2;
    color: white;
  }
}
</style>
