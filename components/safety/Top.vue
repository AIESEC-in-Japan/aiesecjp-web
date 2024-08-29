<template>
  <section class="safety-container">
    <div class="safety-container">
      <div class="safety-bg"></div>
      <div class="safety-text">
        Safety
      </div>
      <h2 class="safety-text-sub">安全への取り組み</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.safety{
  &-container{
    position: relative;
    top: 0;
    height: 90vh;
    width: 100vw;
    margin: -5rem 0 2rem 0;  
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
    background-image: url(assets/images/safety/saferyTop.jpg);
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
