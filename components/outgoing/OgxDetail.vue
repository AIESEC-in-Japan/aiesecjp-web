<template>
  <div class="container">
    <div class="detail">
      <h1>参加までの手続き</h1>
      <div class="detail-item">
        <p>
        海外インターンシップへの参加の流れや費用などの詳細は<br>
        以下のページからご覧ください。</p>
        <button>参加の流れや費用</button>
      </div>
      <div class="detail-item">
        <p>
        海外インターンシップへの参加に興味のある方は、お気軽にお問い合わせください。<br>
        弊団体のメンバーが、詳しい手続きのご案内をさせていただきます。
        </p>
        <button>話を聞いてみる</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
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
    button {
      margin-top: 1rem;
      padding: 1rem 4rem;
      border-radius: 40px;
      border: solid 1.5px;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: bolder;
      letter-spacing: 2px;
      color: $white;
    }
    p {
      color: $white;
      line-height: 2;
      letter-spacing: 2px;
    }
  }
}
</style>

