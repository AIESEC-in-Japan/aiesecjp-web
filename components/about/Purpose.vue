<template>
  <div class="purpose-container">    
    <div class="purpose-contents">
      <p class="purpose-title">
        Our Purpose
      </p>
      
      <div class="why-wrapper">
          <div class="image" alt="Why"></div>
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
      <div class="what-wrapper">
          <div class="image" alt="What"></div>
      </div>
      <div class="how-wrapper">
          <div class="image" alt="How"></div>
          <div class="text-wrapper">
            <p class="contents">
              AIESECは人々の可能性を引き出すことを目指すプラットフォームです。私たちはAIESECのリーダーシップ開発モデルに基づく価値観を若者が実践し体現できるようにすることで、それを実現しています。AIESECでの挑戦的な経験と価値観を重視したリーダーシップが、ポジティブな影響への道を切り開くと私たちは信じています。
            </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.purpose{
  &-container {
    position: relative;
    margin: 5rem 0 0 0;
    width: 100vw;

    .purpose-contents{
      display: flex;
      flex-direction: column;
      margin: 0 5%;

      @media (min-width:1600px){
        margin: 0 auto;
        max-width: 1440px;
      }

      .purpose-title{
        color: $blue;
        font-size: 2rem;
      
        &-sub{
          color: $dark-gray;
          font-size: 1.35rem;
        }
      }
    }


    .why-wrapper{
      display: flex;
      justify-content: space-between;
      margin-top: 3rem;

      @media (max-width:768px){
        flex-direction: column;
      }

      .image{
          width: 32vw;
          height: 32vw;
          max-width: 460px;
          max-height: 460px;
          background-image: url(./assets/images/about/why.png);
          background-position: center;
          background-repeat: none;
          background-size: cover;

          @include sp{
            width: 66vw;
            height: 66vw;
            margin-bottom: 2rem;
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

    .what-wrapper{
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      .image{
          width: 62vw;
          height: 31vw;
          max-width: 892px;
          max-height: 446px;
          background-image: url(./assets/images/about/what.png);
          background-position: center;
          background-repeat: none;
          background-size: cover;

          @include sp{
            width: 88vw;
            height: 36vw;
          }
        }
      }
    .how-wrapper{
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      .image{
          width: 62vw;
          height: 31vw;
          max-width: 892px;
          max-height: 446px;
          background-image: url(./assets/images/about/how.png);
          background-position: center;
          background-repeat: none;
          background-size: cover;

          @include sp{
            width: 88vw;
            height: 36vw;
          }
        }
      .text-wrapper{
        width: 100%;
        padding-top: 0.2rem;
        .contents{
          font-size: 1rem;
          margin-top: 1rem;
          line-height: 1.9;
        }
      }
    }
  }   
}


</style>
