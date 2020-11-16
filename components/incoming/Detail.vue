<template>
  <div class="detail-container">
    <div class="detail-bg">
      <div class="detail">
        <Button href="#" class="button-examples" name="受け入れ実例をもっと見る" color="#00CCCC"></Button>
        <Button href="#" class="button-detail" name="インターンシップの詳細を見る" color="#00CCCC"></Button>
        <p>
          <span>アイセックの海外インターンシップ受け⼊れに</span><span>興味のある団体様は、</span><span>お気軽にお問い合わせください。</span><span>弊団体のメンバーが、疑問解消のお⼿伝いや詳しい⼿続きの</span><span>ご案内をさせていただきます。</span>
        </p>
        <Button href="#" class="button-contact" name="話を聞いてみる" color="#FFFFFF"></Button>
      </div>
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
.detail-container {
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
.button-examples {
  padding: 15px 90px;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
  margin-top: 80px;
}
.button-detail {
  margin-top: 35px;
  margin-bottom: 140px;
  padding: 15px 68px;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
}
.button-contact {
  padding: 15px 90px;
}
</style>
