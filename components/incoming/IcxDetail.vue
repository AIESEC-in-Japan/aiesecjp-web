<template>
  <div class="detail-container">
    <div class="detail-bg">
      <div class="detail">
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
  </div>
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
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("~@/assets/images/icx-detail.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 70%;
}
.detail-bg {
  width: 100%;
  height: 50vh;
  background-color: $white;
}
.detail {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  text-align: center;
  p {
    color: $white;
    font-size: 14px;
    padding-top: 50px;
    padding-bottom: 50px;
    letter-spacing: 2px;
    max-width: 800px;
    span {
      display: inline-block;
    }
  }
}
button {
  margin: 1rem;
}
</style>

