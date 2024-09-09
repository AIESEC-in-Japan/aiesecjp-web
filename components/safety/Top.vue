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
    @include sp{
      margin-bottom: 5rem;
      height: 65vh;
    }
    
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

      @include sp{
        margin-bottom: 5rem;
        height: 65vh;
      }
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
      width:80%;

      @media(max-width:600px){
        left: 50%;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        font-size: 1.35rem;
        text-align: center;

      }
    }

    @include tab{
      font-size: 3rem;
      margin-left: 0rem;
      right: 3rem;
      width: fit-content;
    }

    @media(max-width:600px){
      right:auto;
      top: 50%;
      margin: 0 auto;
      padding: 0 auto;
      word-break: keep-all;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);

    }
    @include sp{
      font-size: 2.6rem;
      top: 40%;
    }

    @media(max-width:375px){
      font-size: 2.4rem;
    }
  }
}
</style>
