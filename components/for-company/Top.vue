<template>
  <section>
    <div class="fcompany-container">
      <div class="fcompany-bg"></div>
      <h2 class="fcompany-text">
        協賛について
      </h2>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.fcompany{
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
      background-color: rgba(0, 0, 0, 0.02);
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
    background-image: url(assets/images/for-company/for-companyTop.png);
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
    position: absolute;
    bottom: 15%;
    right: 5rem;

    &-sub{
      color: #fff;
      font-size: 1rem;
    }

    @include tab{
      font-size: 3rem;
    }

    @media(max-width:600px){
      word-break: keep-all;
      position: relative;
      bottom: 50%;
      right: 0;
      text-align: center;
      width: 90vw;
      margin: 0 auto;

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
