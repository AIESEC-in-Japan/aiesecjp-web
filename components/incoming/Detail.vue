<template>
  <div class="detail-container">
    <div class="detail-bg">
      <div class="detail">
        <button href="#" class="button-examples">受け入れ実例をもっと見る</button>
        <button href="#" class="button-detail">インターンシップの詳細を見る</button>
        <p>
          <span>アイセックの海外インターンシップ受け⼊れに</span><span>興味のある団体様は、</span><span>お気軽にお問い合わせください。</span><span>弊団体のメンバーが、疑問解消のお⼿伝いや詳しい⼿続きの</span><span>ご案内をさせていただきます。</span>
        </p>
        <button href="#" class="button-contact">話を聞いて見る</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('@/assets/icx-detail.jpg');
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
  color: $mint;
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
  color: $mint;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
}
.button-contact {
  padding: 15px 90px;
  color: $white;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
}
</style>
