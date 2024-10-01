<template>
  <div>
    <div class="news-container">
      <div class="news-bg"></div>
      <div class="news-text-wrapper">
        <div class="news-text">
          NEWS
        </div>
        <h2 class="news-text-sub">お知らせ</h2>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped> 
// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

.news-container{
  position: relative;
  top: 0;
  height: 90vh;
  width: 100vw;
  margin: -5rem 0 10rem 0; 
  
  @include sp{
      margin-bottom: 5rem;
      height: 65vh;
      border-radius: 0 0 0 6rem;

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
      border-radius: 0 0 0 14rem;

      @include sp{
        margin-bottom: 5rem;
        height: 65vh;
        border-radius: 0 0 0 6rem;
      }
    }
}
.news-bg {
  width: 100%;
  height: 100%;
  background-image: url(./assets/images/privacy-policy/privacy-policyTop.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 0 0 0 14rem;
  @include sp{
    border-radius: 0 0 0 6rem;
  }
}

.news-text-wrapper{
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

.news-text{
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

</style>
