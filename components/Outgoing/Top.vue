<template>
  <section>
    <div class="outgoing-container">
      <div class="outgoing-bg"></div>
      <h2 class="outgoing-text">
        海外インターンシップ
      </h2>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.outgoing{
  &-container{
    position: relative;
    top: 0;
    height: 90vh;
    width: 100vw;
    margin: -5rem 0 10rem 0;  
    &::before{
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.02);
      top:0;
      bottom: 0;
      left: 0;
      right:0;
      height: 90vh;
      width: 100vw;
      border-radius: 0 0 0 14rem;
    }
  }
  &-bg {
    width: 100%;
    height: 100%;
    background-image: url(assets/images/outgoing/outgoingTop.png);
    background-size: cover;
    background-position: center;
    border-radius: 0 0 0 14rem;
  }
    

  &-text{
    color: #fff;
    font-size: 4rem;
    font-weight: bold;
    position: absolute;
    bottom: 15%;
    right: 5rem;

    &-sub{
      color: #fff;
      font-size: 1rem;
      position: absolute;
      bottom: 6%;
      right: 5rem;
    }
  }
}
</style>
