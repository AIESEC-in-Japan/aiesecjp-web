<template>
  <div class="mission-container">    
    <div class="mission-contents">
      <p class="mission-title">
        Mission
      </p>
      <h2 class="mission-title-sub">私たちのミッション</h2>
      
      <div class="mission-wrapper">
          <div class="image" alt="ビジョン"></div>
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
.mission{
  &-container {
    position: relative;
    margin: 5rem 0 5rem 0;
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
    flex-direction: column;
    margin-top: 3rem;
    .image{
        width: 62vw;
        height: 25vw;
        max-width: 892px;
        max-height: 360px;
        background-image: url(./assets/images/about/mission.png);
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


</style>
