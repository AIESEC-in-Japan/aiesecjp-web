<template>
  <div class="detail-container">
    <div class="detail-bg">
      <div class="detail">
        <button href="#" class="button1">受け入れ実例をもっと見る</button>
        <button href="#" class="button2">インターンシップの詳細を見る</button>
        <p>
          アイセックの海外インターンシップ受け⼊れに興味のある団体様は、お気軽にお問い合わせください。<br>
          弊団体のメンバーが、疑問解消のお⼿伝いや詳しい⼿続きのご案内をさせていただきます。
        </p>
        <button href="#" class="button3">話を聞いて見る</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('../assets/icx-detail.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 70%;
}
.detail-bg {
  width: 100%;
  height: 50vh;
  background-color: white;
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
    color: white;
    font-size: 14px;
    padding-top: 50px;
    padding-bottom: 50px;
    letter-spacing: 2px;
    font-family: "游ゴシック";
  }
}
.button1 {
  padding: 15px 90px;
  color: $mint;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  font-family: "游ゴシック";
  letter-spacing: 2px;
  margin-top: 80px;
}
.button2 {
  margin-top: 35px;
  margin-bottom: 140px;
  padding: 15px 68px;
  color: $mint;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 18px;
  font-family: "游ゴシック";
  letter-spacing: 2px;
}
.button3 {
  padding: 15px 90px;
  color: white;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 16px;
  font-family: "游ゴシック";
  letter-spacing: 2px;
}

</style>