<template>
  <div class="gyd-container">
    <div class="bg-top" />
    <div class="gyd-bg">
      <div class="gyd-contents">
        <h3 class="gyd-title">
          global youth dialogue<wbr>の特徴
        </h3>
        <div class="gyd-features">
          <div class="gyd-features-item">
            <div class="gyd-features-item-img gyd-features-item-img-1" />
            <div class="gyd-features-item-text">
              <p class="gyd-features-item-text-title">
                対話を通じて、<span class="show"><br></span>自分や世界に対しての<br>
                新たな気づきを得られます。
              </p>
              <p class="gyd-features-item-text-description">
                留学のように「渡航」を伴う<span class="show"><br></span>国際交流とは異なり、<br>
                オンラインで海外の大学生と<span class="show"><br></span>「対話」することで、インターネットだけ<br>
                では得られない視点や価値観を<span class="show"><br></span>知ることができます。
              </p>
            </div>
          </div>
          <div class="gyd-features-item">
            <div class="gyd-features-item-img gyd-features-item-img-2" />
            <div class="gyd-features-item-text li2">
              <p class="gyd-features-item-text-title">
                ご自身の<span class="show"><br></span>興味や都合に合わせて、<br>
                海外の学生とグループが組まれます。
              </p>
              <p class="gyd-features-item-text-description">
                １週間の期間中の自由なタイミングで、<wbr>ビデオ通話やチャット等で交流を<br>
                深めることができます。<wbr>短い期間中でも濃密な対話が生まれ、<br>
                過去の参加者の中には、イベント後も<wbr>グループのメンバーと連絡を<br>
                取り続けている方も<wbr>多くいらっしゃいます。
              </p>
            </div>
          </div>
          <div class="gyd-features-item">
            <div class="gyd-features-item-img gyd-features-item-img-3" />
            <div class="gyd-features-item-text">
              <p class="gyd-features-item-text-title">
                毎日設定されるトピックをもとに、<br>
                英語で様々な会話ができます。
              </p>
              <p class="gyd-features-item-text-description">
                お互いの文化や価値観が<wbr>知ることができるような<wbr>トピックが用意されています。<br>
                「海外の学生と何を話せばいいのか<wbr>わからない...」<br>
                という方も気軽に参加できます！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-bottom" />
  </div>
</template>


<style lang="scss" scoped>
.gyd-container {
  position: relative;
  margin: 0 0 0 0;
  width: 100vw;

  .bg-top{
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogueDetailBgTop.svg);
    background-position: top;
    background-size: cover;
    background-repeat: none;
    width: 100vw;
    height: 10rem;
    @media (min-width:1600px){
      height: 15rem;
    }
  }
  .bg-bottom{
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogueDetailBgBottom.svg);
    background-position: bottom;
    background-size: cover;
    background-repeat: none;
    width: 100vw;
    height: 15rem;
    @media (min-width:1600px){
      height: 20rem;
    }
  }
  
  .gyd-bg{
    background-color: $deep-blue;
  }
  .gyd-contents{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 5%;
    align-items: center;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    .gyd-title{
      font-size: 1.35rem;
      color: white;
      margin-top: 5rem;
      margin-bottom: 4rem;
      line-height: 4rem;
      border-bottom: #FAEAA8 3px solid;

      @media(max-width:320px){
        word-break: keep-all;
        line-height: 2rem;
      }
    
    }

    .gyd-features{
      width: 100%;
      &-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;

        @media(max-width:940px){
          flex-direction: column;
        }
        
        &:nth-child(2){
          flex-direction: row-reverse;
          
          @media(max-width:940px){
            flex-direction: column;
          }
        }
        &-text{
          width: fit-content;
          text-align: right;
          margin: auto 0 auto 2rem;
          
          @media(max-width:940px){
            text-align: center;
            margin: 0 auto 0 auto;
          }


          &-title{
            font-size: 2rem;
            color: #FAEAA8 ;
            line-height: 4rem;
            .show{
              display: none;
            }
            
            @media(max-width:620px){
              font-size: 1.6rem;
              line-height: 3rem;
            }
            @include sp{
              word-break: keep-all;
              font-size: 1.3rem;
              line-height: 2rem;

              .show{
                display: inline;
              }
            }
            @media(max-width:365px){
              word-break: break-all;
            }
         
          }
          &-description{
            font-size:1rem;
            line-height: 2rem;
            color: white;

            .show{
              display: none;
            }
            
            @media(max-width:600px){
              word-break: keep-all;
            }
            @media(max-width:400px){
              .show{
                display: inline;
              }
            }
            @media(max-width:365px){
              white-space: nowrap;
            }
            @include sp{
              line-height: 1.6rem;

            }

          }
        }
        .li2{
            text-align: left;
            margin: auto 2rem auto 0;

            @media(max-width:940px){
              text-align: center;
              margin: 0 auto 0 auto;
            }
            
          }
        &-img{
          background-size: cover;
          background-position: center;
          background-repeat: none;
          border-radius: 5rem;
          width: 26vw;
          height: 26vw;

          

          &-1{
            background-image: url(assets/images/global-youth-dialogue/notification.svg);
            margin-left:3vw;
            @media(max-width:940px){
              margin: 0 auto 1rem auto;
            }

          }
          &-2{
            background-image: url(assets/images/global-youth-dialogue/typing.svg);
            margin-right:3vw;
            @media(max-width:940px){
              margin: 0 auto 1rem auto;
            }
          }
          &-3{
            background-image: url(assets/images/global-youth-dialogue/message.svg);
            margin-left:3vw;
            @media(max-width:940px){
              margin: 0 auto 1rem auto;
            }

          }

        }
      }
    }
  }
}
</style>
