<template>
  <div class="container">
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
  font-weight: bold;

  button {
    padding: 15px 70px;
    border-radius:20px;
    border: solid 1.5px;
    background-color: transparent;
    font-size: 14px;
    font-weight: bolder;
    letter-spacing: 2px;
    color:white;
  }
  p {
    padding: 24px 0;
    line-height: 40px;
    font-size: 14px;
    letter-spacing: 2px;
    color: white;
  }
}
</style>

