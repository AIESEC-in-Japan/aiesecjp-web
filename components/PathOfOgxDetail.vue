<template>
  <div class="container">
    <div class="bg"></div>
    <div class="detail">
      <p>
      海外インターンシップへの参加の流れや費用などの詳細は<br>
      以下のページからご覧ください。</p>
      <button>参加の流れや費用</button>
      <p>
      また、アイセックの海外インターンシップへの参加に興味のある方は、お気軽にお問い合わせください。<br>
      閉団体のメンバーが、詳しい手続きのご案内をさせていただきます。
      </p>
      <button>話を聞いてみる。</button><br>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url('../assets/49684036457_9a4b210c9d_k.jpg');
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: 0% -40%;
}
.bg {
  background-color: white;
  height: 35vh;
  width: 100%;
}
.detail {
  height: 65vh;
  flex-direction: column;
  text-align: center;
  color: white;
  font-weight: bold;
    
  button {
  padding: 15px 70px;
  border-radius:20px;
  border: solid 1.5px;
  background-color: transparent;
  font-size: 14px;
  font-weight: bolder;
  font-family: "游ゴシック";
  letter-spacing: 2px;
  color:white;
  }

  p {
    padding-top: 40px;
    padding-bottom: 25px;
    line-height: 30px;
    font-size: 14px;
    letter-spacing: 2px;
  }
}
</style>