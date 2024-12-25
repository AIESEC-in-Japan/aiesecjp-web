<template>
  <section class="safety-container">
    <div class="safety-container">
      <div class="safety-bg" />
      <div class="safety-text-wrapper">
        <div class="safety-text">
          Safety
        </div>
        <h2 class="safety-text-sub">
          安全への取り組み
        </h2>
      </div>
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
        border-radius: 0 0 6rem 0;

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
    @include sp{
      border-radius: 0 0 6rem 0;
    }
  }

  &-text-wrapper{
    position: absolute;
    bottom: 40%;
    left: 6rem;

    @include sp{
      position: relative;
      margin: 0 auto;
      left: 0;
      text-align: center;
      bottom: 50%;
    }

  }

  &-text{
    color: #fff;
    font-size: 6rem;
    font-weight: bold;

    &-sub{
      color: #fff;
      font-size: 1.6rem;
    }

    @include tab{
      font-size: 3rem;
    }

    @media(max-width:600px){
      word-break: keep-all;
    }
    @include sp{
      font-size: 2.6rem;
    }

    @media(max-width:375px){
      font-size: 2.4rem;
    }
  }
}
</style>
