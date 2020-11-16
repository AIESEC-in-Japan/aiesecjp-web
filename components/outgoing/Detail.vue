<template>
  <div class="container">
    <div class="detail">
      <p>
      海外インターンシップへの参加の流れや費用などの詳細は<br>
      以下のページからご覧ください。
      </p>
      <Button class="button" name="参加の流れや費用" color="#FFFFFF"></Button>
      <p>
      また、アイセックの海外インターンシップへの参加に興味のある方は、お気軽にお問い合わせください。<br>
      閉団体のメンバーが、詳しい手続きのご案内をさせていただきます。
      </p>
      <Button class="button" name="話を聞いてみる。" color="#FFFFFF"></Button><br>
    </div>
  </div>
</template>

<script>
import Button from '@/components/base/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    name: String,
    color: String,
    width: String
  }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url("~@/assets/images/ogx-detail.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 30%;
  display: flex;
  justify-content: center;
}
.detail {
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  font-weight: bold;
  button {
    padding: 15px 70px;
  }
  p {
    padding: 24px 0;
    line-height: 40px;
    font-size: 14px;
    letter-spacing: 2px;
  }
}
</style>
