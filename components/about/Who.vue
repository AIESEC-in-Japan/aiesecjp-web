<template>
  <div class="who-container">    
    <div class="who-contents">
      <p class="who-title">
        Who we are ?
      </p>
      <div class="image-wrapper">
          <div class="image1 img" alt="100+nations"></div>
          <div class="image2 img" alt="70000+partners"></div>
          <div class="image3 img" alt="30000+experiences"></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.who{
  &-container {
    position: relative;
    margin: 5rem 0 0 0;
    width: 100vw;

    .who-contents{
      display: flex;
      flex-direction: column;
      margin: 0 5%;

      @media (min-width:1600px){
        margin: 0 auto;
        max-width: 1440px;
      }

      .who-title{
        color: $blue;
        font-size: 2rem;
      
        &-sub{
          color: $dark-gray;
          font-size: 1.35rem;
        }
      }
    }


    .image-wrapper{
      display: flex;
      justify-content: space-between;
      margin: 3rem 2rem 0 2rem;

      @include sp{
        flex-direction: column;
        margin: 3rem auto 0 auto;
      }

      .img{
          width: 20vw;
          height: 28vw;
          max-width: 288px;
          max-height: 403px;
          background-position: center;
          background-repeat: none;
          background-size: cover;

          @include sp{
            width: 60vw;
            height:64vw;
            margin-bottom: 2rem;
          }

        }
        .image1{
          background-image: url(./assets/images/about/nation.png);
        }
        .image2{
          background-image: url(./assets/images/about/partner.png);
        }
        .image3{
          background-image: url(./assets/images/about/experience.png);
        }
    }
  }   
}


</style>
