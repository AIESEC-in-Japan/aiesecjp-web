<template>
  <div class="incoming-container">
    <div class="incoming-contents">
      <div class="incoming-wrapper">
        <div class="title-wrapper">
          <p class="incoming-title">Interview</p>
          <h2 class="incoming-title-sub">海外インターンシップ受け入れ企業の声</h2>
        </div>
      </div>
      <div class="voice-container">
        <div class="voice-item">
          <div class="voice-img voice-img-1"></div>
          <div class="voice-text">
            <p class="voice-title">
              &nbsp;&nbsp;グローバル人材を育てたいという思いがある企業にとっては、社員の方たちが学ぶ機会になります。インターン生が来るまで、チュニジアという国に特に注目していませんでしたが、受け入れによって視点が広がり、気付きがありました。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
            </p>
            <p class="voice-name">株式会社<wbr>システムズナカシマ様</p>
          </div>
        </div>
        <div class="voice-item">
          <div class="voice-img voice-img-2"></div>
          <div class="voice-text">
            <p class="voice-title">
              &nbsp;&nbsp;インターン生が「海外に出て行く時に大事なのはcultural differenceをmanageすること」だと言っていました。海外事業を進めて行くうえで、また、日本で外国人労働者が増えている中で、海外人材と働くいい機会になり、新たな気付きを得ることができました。
            </p>
            <p class="voice-name">ライフネット生命様</p>
          </div>
        </div>
        <div class="voice-item">
          <div class="voice-img voice-img-3"></div>
          <div class="voice-text">
            <p class="voice-title">
              &nbsp;&nbsp;日常の業務では自分のタスクに集中するので、他者のことを考える余裕がなくなりがちです。しかし、インターン生を受け入れることで、社員以外の人にもケアをしないといけないということで、ホスピタリティを身につける良い機会になりました。 &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            </p>
            <p class="voice-name">ボサード株式会社様</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.incoming{
  &-container{
    position: relative;
    margin: 0;
    width: 100vw;

    .incoming-contents{
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 0 5%;

      @media (min-width:1600px){
        margin: 0 auto;
        max-width: 1440px;
      }

      .incoming-wrapper{
        margin: auto 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .title-wrapper{
          .incoming-title{
            color: $mint;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 0;
      
            &-sub{
              font-size: 1.35rem;
              margin-top: 0.8rem;
            }
          }
        }

      }
      .voice-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 4rem;

        @include tab{
          flex-direction: column;
        }

        .voice-item{
          display: flex;
          flex-direction: column;
          width: 28vw;
          max-width: 400px;
          height: max-content;
          box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
          margin-bottom: 3.5rem;
          border-radius: 0.6rem;

          @include tab{ 
            width: 88%;
            margin:  0 auto 3.5rem auto;
          }

          .voice-img{
            background-position: center;
            background-size: cover;
            background-repeat: none;
            width: 100%;
            height: 16vw;
            max-height: 240px;
            border-radius: 0.6rem 0.6rem 0 0;

            @include tab{
              max-height: none;
              height: 235px;
            }

            @include sp{
              height: 186px;
            }

            @media (max-width:390px){
              height: 160px;
            }
            @media (max-width:360px){
              height: 150px;
            }


            &-1{
              background-image: url(assets/images/incoming/incomingVoice1.png);   
            }
            &-2{
              background-image: url(assets/images/incoming/incomingVoice2.png);   
            }
            &-3{
              background-image: url(assets/images/incoming/incomingVoice3.png);   
            }
          }

          .voice-text{
            padding: 1.4rem;
            width: 100%;
            min-height: 250px;
            height: calc(400px - 10vw);

            .voice-title{
              font-size: 1rem;
              margin: 0;
            }
            .voice-name{
              font-size: 1.2rem;
              margin: 0;
              text-align: end;
              color: $blue;
              word-break: keep-all;
              
            }

            @include tab{
              height: fit-content;         
            }
          }

        }
      }

    }

  }
}

</style>

