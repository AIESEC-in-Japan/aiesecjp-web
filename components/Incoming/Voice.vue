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
              &nbsp;&nbsp;グローバル人材を育てたいという思いがある企業にとっては、社員の方たちが学ぶ機会になります。インターン生が来るまで、チュニジアという国に特に注目していませんでしたが、受け入れによって視点が広がり、気付きがありました。
            </p>
            <p class="voice-name">株式会社システムズナカシマ様</p>
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
              &nbsp;&nbsp;日常の業務では自分のタスクに集中するので、他者のことを考える余裕がなくなりがちです。しかし、インターン生を受け入れることで、社員以外の人にもケアをしないといけないということで、ホスピタリティを身につける良い機会になりました。
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
    margin: 8rem 0;
    width: 100vw;

    .incoming-contents{
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 0 5rem;

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

        .voice-item{
          display: flex;
          flex-direction: column;
          width: 31%;
          height: max-content;
          box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
          margin-bottom: 3.5rem;
          border-radius: 0.6rem;
          

          .voice-img{
            background-position: center;
            background-size: cover;
            background-repeat: none;
            width: 100%;
            height: 15rem;
            border-radius: 0.6rem 0.6rem 0 0;

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
            .voice-title{
              font-size: 1rem;
              margin: 0;
            }
            .voice-name{
              font-size: 1.2rem;
              margin: 0;
              text-align: end;
              color: $blue;

            }
          }

        }
      }

    }

  }
}

</style>

