<template>
  <section>
    <div class="about-container">
      <div class="about-bg"></div>
      <h2 class="about-text">
        AIESECについて
      </h2>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about{

  &-container{
    position: relative;
    top: 0;
    height: 90vh;
    width: 100vw;
    margin: -5rem 0 10rem 0;  

    @include sp{
      margin-bottom: 5rem;
      height: 65vh;
    }

    &::before{
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.14);
      top:0;
      bottom: 0;
      left: 0;
      right:0;
      height: 90vh;
      width: 100vw;
      border-radius: 0 0 0 14rem;
      @include sp{
        margin-bottom: 5rem;
        height: 65vh;
        border-radius: 0 0 0 6rem;

      }
    }
  }
  &-bg {
    width: 100%;
    height: 100%;
    background-image: url(assets/images/privacy-policy/privacy-policyTop.jpg);
    background-size: cover;
    background-position: center;
    border-radius: 0 0 0 14rem;
    @include sp{
      border-radius: 0 0 0 6rem;
    }
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

    @include tab{
      font-size: 3rem;
      margin-left: 3rem;
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
