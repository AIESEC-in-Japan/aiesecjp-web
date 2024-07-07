<template>
  <div class="gyd-container">
    <div class="bg-top"></div>
    <div class="gyd-bg">
      <div class="gyd-contents">
        <h3 class="gyd-title">global youth dialogue の特徴</h3>
        <div class="gyd-features">
          <div class="gyd-features-item">
            <div class="gyd-features-item-img"></div>
            <div class="gyd-features-item-text">
              <p class="gyd-features-item-text-title">
                対話を通して、自分や世界に対しての<br>
                新たな気づきを得られます。
              </p>
              <p class="gyd-features-item-text-description">
                留学のような「渡航」を手段とする国際交流ではなく、<br>
                global youth dialogueでは海外の大学生との「対話」を通して<br>
                日常を飛び出した思いがけない気づきを得ることができます。 
              </p>
            </div>
          </div>
          <div class="gyd-features-item">
            <div class="gyd-features-item-img"></div>
            <div class="gyd-features-item-text li2">
              <p class="gyd-features-item-text-title">
                ご自身の興味関心や都合のいい時間に<br>
                基づいて、海外の学生とグループが組まれます。
              </p>
              <p class="gyd-features-item-text-description">
                １週間の期間中の好きな時間に、ビデオ通話やチャット等で<br>
                会話をすることができます。短い期間中でも濃密な会話が生まれ、<br>
                過去の参加者にはグループのメンバーとイベント後も連絡を取り<br>
                続けている方も多くいらっしゃいます。
              </p>
            </div>
          </div>
          <div class="gyd-features-item">
            <div class="gyd-features-item-img"></div>
            <div class="gyd-features-item-text">
              <p class="gyd-features-item-text-title">
                毎日設定されるトピックをもとに、<br>
                英語で様々な会話ができます。
              </p>
              <p class="gyd-features-item-text-description">
                お互いの文化や価値観が知れるようなトピックが<br>
                用意されています。「海外の学生と何を話したらいいのか<br>
                わからない...」という方も気軽に参加ください！
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
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogueDescriptionBgTop.svg);
    width: 100%;
    height: 10rem;
  }
  .bg-bottom{
    background-image: url(assets/images/global-youth-dialogue/global-youth-dialogueDescriptionBgBottom.svg);
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
            color: white;
            line-height: 4rem;
            
         
          }
          &-description{
            font-size:1rem;
            line-height: 2rem;

          }
        }
        .li2{
            text-align: left;
            margin: auto 2rem auto 0;
            
          }
        &-img{
          background-image: url(assets/images/global-youth-dialogue/global-youth-dialogueDescriptionFeature1.png);
          background-size: cover;
          background-position: center;
          border-radius: 1.4rem;
          width: 44rem;
          height: 28rem;
        }
      }
    }
  }
}
</style>
