<template>
  <div class="ogxDetail-container">
    <div class="detail">
      <h1>参加までの手続き</h1>
      <div class="detail-item">
        <p>
          海外インターンシップへの参加の流れや費用などの詳細は<br>
          以下のページからご覧ください。
        </p>
        <RoundButton
          v-bind="this.ButtonProps"
          :label="'参加の流れや費用'"
        />
      </div>
      <div class="detail-item">
        <p>
          海外インターンシップへの参加に興味のある方は、お気軽にお問い合わせください。<br>
          弊団体のメンバーが、詳しい手続きのご案内をさせていただきます。
        </p>
        <RoundButton
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

<style scoped lang="scss">
.ogxDetail-container {
  min-height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url("~@/assets/images/ogx-detail.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 30%;
  display: flex;
  justify-content: center;
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
    }
  }
}
</style>

