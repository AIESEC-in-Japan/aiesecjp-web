<template>
 <div class="fcompany-container">
    <div class="fcompany-contents">
      <h3 class="fcompany-title">協賛についてのご案内</h3>
      <p class="fcompany-title-description">以下のような機会をご用意しています。企業様に合わせて柔軟に機会をご提案させていただきますので、お気軽にお問い合わせください</p>
      <div class="fcompany-features">
        <div class="fcompany-features-item">
          <div class="fcompany-features-item-img"></div>
          <div class="fcompany-features-item-text">
            <p class="fcompany-features-item-text-title">
              <span>01</span><br>
              キャリアイベントのご登壇
            </p>
            <p class="fcompany-features-item-text-description">
              以下のような機会をご用意しています。企業様に合わせて柔軟に機会を<br>
              ご提案させていただきますので、お気軽にお問い合わせくださいご提案<br>
              させていただきますので、お気軽にお問い合わせくださいご提案させて<br>
              いただきますので、お気軽にお問い合わせくださいご提案させていただ<br>
              きますので、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
        <div class="fcompany-features-item">
          <div class="fcompany-features-item-img"></div>
          <div class="fcompany-features-item-text li2">
            <p class="fcompany-features-item-text-title">
              <span>02</span><br>
              合宿へのご登壇
            </p>
            <p class="fcompany-features-item-text-description">
              以下のような機会をご用意しています。企業様に合わせて柔軟に機会を<br>
              ご提案させていただきますので、お気軽にお問い合わせくださいご提案<br>
              させていただきますので、お気軽にお問い合わせくださいご提案させて<br>
              いただきますので、お気軽にお問い合わせくださいご提案させていただ<br>
              きますので、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
        <div class="fcompany-features-item">
          <div class="fcompany-features-item-img"></div>
          <div class="fcompany-features-item-text">
            <p class="fcompany-features-item-text-title">
              <span>03</span><br>
              メンバーへの機会告知
            </p>
            <p class="fcompany-features-item-text-description">
              以下のような機会をご用意しています。企業様に合わせて柔軟に機会を<br>
              ご提案させていただきますので、お気軽にお問い合わせくださいご提案<br>
              させていただきますので、お気軽にお問い合わせくださいご提案させて<br>
              いただきますので、お気軽にお問い合わせくださいご提案させていただ<br>
              きますので、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.fcompany-container {
  position: relative;
  margin: 5rem 0 0 0;
  width: 100vw;

  .fcompany-contents{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
    align-items: center;

    .fcompany-title{
      font-size: 1.35rem;
      margin-bottom: 1.8rem;
      line-height: 4rem;
      border-bottom: $blue 3px solid;

      &-description{
        font-size: 1rem;
      }
    }

    .fcompany-features{
      width: 100%;
      margin-top: 3rem;
      &-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 7.4rem;
        
        &:nth-child(2){
          flex-direction: row-reverse;
        }
        &-text{
          width: 60%;
          text-align: right;
          margin: auto 0 auto 2rem;


          &-title{
            font-size: 2.6rem;
            line-height: 5rem;
            
            span{
              font-size: 4rem;
              font-style: italic;
            }
         
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
          background-image: url(assets/images/for-company/for-companyDetail1.png);
          background-size: cover;
          background-position: center;
          width: 58rem;
          height: 28rem;
        }
      }
    }
  }
}

</style>
