<template>
  <div class="container">
    <div class="ogx-top">
      <h1 class="title">
        Experience the world with AIESEC
      </h1>
      <p class="catchcopy">
        <span>アイセックの海外インターンシップで、</span>
        <span>きっと、変わる。自分も、世界も。</span>
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  background-image: url("~@/assets/images/ogx_top_background.jpg");
  background-position: center;
  background-repeat: none;
  background-size: cover;
}
.ogx-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.4);
  .title {
    text-align: center;
    font-style: oblique;
    font-weight: bold;
    letter-spacing: 0px;
    font-family:"Lato";
    font-size: 24px;
    margin-bottom: 24px;
  }
  .catchcopy {
    text-align: center;
    font-family: "游ゴシック";
    font-size: 16px;
    letter-spacing: 4px;
    line-height: 32px;
    span {
      display: block;
    }
  }
}
</style>
