<template>
  <div class="vision-container">    
    <div class="vision-contents">
      <p class="vision-title">
        Vision
      </p>
      <h2 class="vision-title-sub">私たちのビジョン</h2>
      
      <div class="vision-wrapper">
          <div class="image" alt="ビジョン"></div>
          <div class="text-wrapper">
            <p class="text-title">
              私たちは、<br>
              平和で人々の可能性が最大限発揮された社会の実現を目指しています。
            </p>
            <p class="contents">
              現代において、「平和」は単に戦争を避けることだけを意味しません。平和とは、人類の文化的、宗教的、あるいはその他の違いから生じる対立のない世界を指すこともあります。また、自分自身と調和している状態を指すこともあります。AIESECの願いは、すべての若者が平和についての理解を深め、より良い世界を育むために協力して行動することです。<br>
              AIESECは「人々の可能性の最大化」を通じて、人々が絶えず自己を向上させ、その過程で他者にも力を与えていく世界を思い描いています。
            </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.vision{
  &-container {
    position: relative;
    margin: 5rem 0 0 0;
    width: 100vw;
  }

  &-contents{
    display: flex;
    flex-direction: column;
    margin: 0 5%;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }
  }

  &-title{
    color: $blue;
    font-size: 2rem;
  
    &-sub{
      color: $dark-gray;
      font-size: 1.35rem;
    }
  }
      
  &-wrapper{
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    @media (max-width:768px){
      flex-direction: column;
    }

    .image{
        width: 30vw;
        height: 30vw;
        background-image: url(./assets/images/about/vision.png);
        background-position: center;
        background-repeat: none;
        background-size: cover;

        @include sp{
          width: 60vw;
          height: 60vw;
        }

      }
    .text-wrapper{
      width: 64%;
      padding-top: 0.2rem;
      padding-left: 2.6rem;

      @media (max-width:768px){
        width: 100%;
        padding-left: 0rem;
      }

      .text-title{
          font-size: 2rem;

          @include sp{
            font-size: 1.35rem;
          }

      }
      .contents{
        font-size: 1rem;
        margin-top: 1rem;
        line-height: 1.9;
      }
    }
  }
}


</style>
