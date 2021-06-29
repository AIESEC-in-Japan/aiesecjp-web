<template>
  <div class="ogxDetail-container">
    <div class="detail">
      <div class="detail-item">
        <p>
          アイセックの海外インターンシップへの参加に興味のある方は、お気軽にお問い合わせください。<br>
          弊団体のメンバーが、詳しい手続きのご案内をさせていただきます。
        </p>
        <BaseRoundButton
          v-bind="this.ButtonProps"
          :label="'話を聞いてみる。'"
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
      ButtonProps: {
        textColor: basic_color.white,
        size: 'large'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ogxDetail-container {
  min-height: 40vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/images/ogx-detail.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 30%;
  display: flex;
  justify-content: center;

  @include sp() {
    min-height: min-content;
    height: 20rem;
  }
}

.detail {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  font-weight: bold;
  margin: 0 1rem;

  .detail-item {
    margin-bottom: 3rem;

    p {
      color: $white;
      line-height: 2;
      letter-spacing: 2px;
      @include sp() {
        letter-spacing: 0;
      }
    }
  }
}
</style>

