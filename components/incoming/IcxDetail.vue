<template>
  <section class="detail-container">
    <div class="detail-bg">
      <div class="detail">
        <h2>お問い合わせ</h2>
        <RoundButton
          v-bind="this.MintButtonProps"
          :label="'受け入れ実例をもっと見る'"
        />
        <RoundButton
          v-bind="this.MintButtonProps"
          :label="'インターンシップの詳細を見る'"
        />
        <p>
          <span>アイセックの海外インターンシップ受け⼊れに</span><span>興味のある団体様は、</span><span>お気軽にお問い合わせください。</span><span>弊団体のメンバーが、疑問解消のお⼿伝いや詳しい⼿続きの</span><span>ご案内をさせていただきます。</span>
        </p>
        <RoundButton
          v-bind="this.WhiteButtonProps"
          :label="'話を聞いて見る'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";
export default {
  data() {
    return {
      MintButtonProps: {
        textColor: basic_color.mint,
        size: 'large'
      },
      WhiteButtonProps: {
        textColor: basic_color.white,
        baseColor: 'transparent',
        size: 'large'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.detail-container {
  width: 100%;
  min-height: 60vh;
  background-image: url("~@/assets/images/icx/icx-detail.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 70%;
}
.detail-bg {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.detail {
  width: 100%;
  height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  text-align: center;

  h2 {
    color: $white;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    letter-spacing: 2px;
  }

  p {
    color: $white;
    font-size: 1rem;
    padding: 0 0 3rem;
    letter-spacing: 2px;
    max-width: 50rem;
    line-height: 1.5;

    span {
      display: inline-block;
    }
  }
}
button {
  margin: 1rem;
}
</style>

