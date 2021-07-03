<template>
  <section class="detail-container">
    <div class="detail-bg">
      <div class="detail">
        <h2>お問い合わせ</h2>
        <p>
          アイセックの海外インターンシップ受け⼊れに<br>興味のある団体様は、<br>お気軽にお問い合わせください。
        </p>
        <p>
          弊団体のメンバーが、疑問解消のお⼿伝いや詳しい⼿続きの<br>ご案内をさせていただきます。
        </p>
        <BaseRoundButton
          v-bind="this.WhiteButtonProps"
          :label="'話を聞いてみる'"
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
      WhiteButtonProps: {
        textColor: basic_color.white,
        baseColor: 'transparent',
        size: 'large',
        url: '/contact-us'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
    font-weight: bold;
    letter-spacing: 2px;
    max-width: 50rem;
    line-height: 1.5;

    @include sp {
      width: 90%;
    }
  }
}

button {
  margin: 1rem;
}

@include sp {
  br {
    display: none;
  }
}
</style>

