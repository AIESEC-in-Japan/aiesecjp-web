<template>
  <div class="gyd-container">
    <div class="bg-top"></div>
    <div class="gyd-bg">
      <div class="gyd-contents">
        <h3 class="gyd-title">global youth dialogue の特徴</h3>
        <div class="gyd-features">
          <div class="gyd-features-item">
            <div class="gyd-features-item-img gyd-features-item-img-1"></div>
            <div class="gyd-features-item-text">
              <p class="gyd-features-item-text-title">
                対話を通じて、自分や世界に対しての<br>
                新たな気づきを得られます。
              </p>
              <p class="gyd-features-item-text-description">
                留学のように「渡航」を伴う国際交流とは異なり、<br>
                オンラインで海外の大学生と「対話」することで、インターネットだけ<br>
                では得られない視点や価値観を知ることができます。
              </p>
            </div>
          </div>
          <div class="gyd-features-item">
            <div class="gyd-features-item-img gyd-features-item-img-2"></div>
            <div class="gyd-features-item-text li2">
              <p class="gyd-features-item-text-title">
                ご自身の興味や都合に合わせて、<br>
                海外の学生とグループが組まれます。
              </p>
              <p class="gyd-features-item-text-description">
                １週間の期間中の自由なタイミングで、ビデオ通話やチャット等で交流を<br>
                深めることができます。短い期間中でも濃密な対話が生まれ、<br>
                過去の参加者の中には、イベント後もグループのメンバーと連絡を<br>
                取り続けている方も多くいらっしゃいます。
              </p>
            </div>
          </div>
          <div class="gyd-features-item">
            <div class="gyd-features-item-img gyd-features-item-img-3"></div>
            <div class="gyd-features-item-text">
              <p class="gyd-features-item-text-title">
                毎日設定されるトピックをもとに、<br>
                英語で様々な会話ができます。
              </p>
              <p class="gyd-features-item-text-description">
                お互いの文化や価値観が知れるようなトピックが用意されています。<br>
                「海外の学生と何を話せばいいのかわからない...」<br>
                という方も気軽に参加できます！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-bottom"></div>
  </div>
</template>


<style lang="scss" scoped>
.gyd-container {
  position: relative;
  margin: 0 0 0 0;
  width: 100vw;

  .bg-top{
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogueDetailBgTop.svg);
    width: 100%;
    height: 10rem;
  }
  .bg-bottom{
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogueDetailBgBottom.svg);
    background-position: bottom;
    width: 100%;
    height: 15rem;
  }
  
  .gyd-bg{
    background-color: $deep-blue;
  }
  .gyd-contents{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
    align-items: center;

    .gyd-title{
      font-size: 1.35rem;
      color: white;
      margin-top: 5rem;
      margin-bottom: 4rem;
      line-height: 4rem;
      border-bottom: #FAEAA8 3px solid;
    }

    .gyd-features{
      width: 100%;
      &-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5rem;
        
        &:nth-child(2){
          flex-direction: row-reverse;
        }
        &-text{
          width: 60%;
          text-align: right;
          margin: auto 0 auto 2rem;


          &-title{
            font-size: 2rem;
            color: #FAEAA8 ;

            line-height: 4rem;
            
         
          }
          &-description{
            font-size:1rem;
            line-height: 2rem;
            color: white;

          }
        }
        .li2{
            text-align: left;
            margin: auto 2rem auto 0;
            
          }
        &-img{
          background-size: cover;
          background-position: center;
          background-repeat: none;
          border-radius: 2rem;
          width: 24rem;
          height: 24rem;
          background-color:white;

          &-1{
            background-image: url(assets/images/global-youth-dialogue/notification.svg);
            margin-left:4rem;

          }
          &-2{
            background-image: url(assets/images/global-youth-dialogue/typing.svg);
            margin-right:4rem;
          }
          &-3{
            background-image: url(assets/images/global-youth-dialogue/message.svg);
            margin-left:4rem;

          }

        }
      }
    }
  }
}
</style>
