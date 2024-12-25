<template>
  <div class="who-container">    
    <div class="who-contents">
      <p class="who-title">
        Who we are ?
      </p>
      <div class="image-wrapper">
        <div class="item">
          <div
            class="image1 img"
            alt="100+nations"
          />
          <p class="text">
            100+
          </p>
          <p class="sub-text">
            国と地域
          </p>
        </div>
        <div class="item">
          <div
            class="image2 img"
            alt="70000+partners"
          />
          <p class="text">
            70000+
          </p>
          <p class="sub-text">
            パートナー団体
          </p>
        </div>
        <div class="item">
          <div
            class="image3 img"
            alt="30000+experiences"
          />
          <p class="text">
            30000+
          </p>
          <p class="sub-text">
            1年間で提供した経験
          </p>
        </div>
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
      margin: 3rem 5% 0 5%;

      @include sp{
        flex-direction: column;
        align-items: center;
        margin: 3rem 0 0 0;
      }
      .item{
        display: flex;
        flex-direction: column;
        align-items: center ;
        width: 30vw;

        @include sp{
          width: 80vw;
        }
        .img{
          width: 26vw;
          height: 20vw;
          max-width: 288px;
          max-height: 288px;
          background-position: center;
          background-repeat: none;
          background-size: cover;

          @include sp{
            width: 64vw;
            height:64vw;
          }
        }

        .text{
          font-size: 2.6rem;
          text-align: center;
          margin: 0;
          color: $blue;
          @media (max-width:768px){
            font-size: 2rem;
          }
          @include sp{
            margin-top: -2rem;

          }
        }
        .sub-text{
          font-size: 1.35rem;
          text-align: center;
          @media (max-width:768px){
            font-size: 1rem;
          }
        }

        .image1{
          background-image: url(./assets/images/about/map.svg);
        }
        .image2{
          background-image: url(./assets/images/about/handshake.svg);
          scale: 0.8;
        }
        .image3{
          background-image: url(./assets/images/about/visa.svg);
        }
      }
        
    }
  }   
}


</style>
