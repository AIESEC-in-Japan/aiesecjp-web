<template>
  <section>
    <div class="policy-container">
      <div class="policy-bg"></div>
      <div class="policy-text">
        Privacy Policy
      </div>
      <h2 class="policy-text-sub">個人情報管理について</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.policy{
  &-container{
    position: relative;
    top: 0;
    height: 90vh;
    width: 100vw;
    margin: -5rem 0 10rem 0;  
    &::before{
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.3);
      top:0;
      bottom: 0;
      left: 0;
      right:0;
      height: 90vh;
      width: 100vw;
      border-radius: 0 0 14rem 0;
    }
  }
  &-bg {
    width: 100%;
    height: 100%;
    background-image: url(assets/images/privacy-policy/privacy-policyTop.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 0 0 14rem 0;
  }
    

  &-text{
    color: #fff;
    font-size: 6rem;
    font-weight: bold;
    position: absolute;
    bottom: 40%;
    left: 6rem;

    &-sub{
      color: #fff;
      font-size: 1.6rem;
      position: absolute;
      bottom: 35%;
      left: 6rem;
    }
  }
}
</style>
