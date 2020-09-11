<template>
  <div class="icxcorporationvoice-container">
    <div class="icxcorporationvoice-title">
      <h2>インターン⽣受け⼊れ企業様の声</h2>
    </div>
    <div class="icxcorporationvoice-content">
      <div class="icxcorporationvoice-content-detail">
        <img
          src="https://4.bp.blogspot.com/-aJjlevJyK9U/XGjx40QThrI/AAAAAAABRco/j9aRPnYHpX4PU6RZjhTWRh6_8xnPfbNEQCLcBGAs/s400/animal_chara_computer_azarashi.png"
          alt
        />
        <p class="icxcorporationvoice-content-detail-name">企業名</p>
        <p>インターンの概要</p>
        <p>インターンの概要</p>
        <p>インターンの概要</p>
        <br />
      </div>
      <div class="icxcorporationvoice-content-detail">
        <img
          src="https://4.bp.blogspot.com/-aJjlevJyK9U/XGjx40QThrI/AAAAAAABRco/j9aRPnYHpX4PU6RZjhTWRh6_8xnPfbNEQCLcBGAs/s400/animal_chara_computer_azarashi.png"
          alt
        />
        <p class="icxcorporationvoice-content-detail-name">企業名</p>
        <p>インターンの概要</p>
        <p>インターンの概要</p>
        <p>インターンの概要</p>
        <br />
      </div>
      <div class="icxcorporationvoice-content-detail">
        <img
          src="https://4.bp.blogspot.com/-aJjlevJyK9U/XGjx40QThrI/AAAAAAABRco/j9aRPnYHpX4PU6RZjhTWRh6_8xnPfbNEQCLcBGAs/s400/animal_chara_computer_azarashi.png"
          alt
        />
        <p class="icxcorporationvoice-content-detail-name">企業名</p>
        <p>インターンの概要</p>
        <p>インターンの概要</p>
        <p>インターンの概要</p>
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icxcorporationvoice-container {
  width: 100%;
  height: 100vh;
  .icxcorporationvoice-title {
    display: flex;
    justify-content: center;
    h2 {
      color: $mint;
      font-size: 24px;
      letter-spacing: 2px;
      font-family: "游ゴシック", "Yu Gothic"; //for win
      font-family: "游ゴシック体", YuGothic; //for mac
      padding-top: 150px;
    }
  }
}
.icxcorporationvoice-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
  .icxcorporationvoice-content-detail {
    p {
      text-align: center;
      font-size: 15px;
      letter-spacing: 2px;
      font-family: "游ゴシック", "Yu Gothic"; //for win
      font-family: "游ゴシック体", YuGothic; //for mac
    }
    img {
      width: 350px;
      height: 300px;
      padding: 30px;
    }
    .icxcorporationvoice-content-detail-name {
      font-weight: bold;
    }
  }
}
</style>