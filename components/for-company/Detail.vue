<template>
  <div class="fcompany-container">
    <div class="fcompany-contents">
      <h3 class="fcompany-title">
        協賛についてのご案内
      </h3>
      <p class="fcompany-title-description">
        以下のような機会をご用意しています。企業様に合わせて柔軟に機会をご提案させていただきますので、お気軽にお問い合わせください
      </p>
      <div class="fcompany-features">
        <div class="fcompany-features-item">
          <div class="fcompany-features-item-img" />
          <div class="fcompany-features-item-text">
            <p class="fcompany-features-item-text-title">
              <span>01</span><br>
              キャリアイベントの<wbr>ご登壇
            </p>
            <p class="fcompany-features-item-text-description">
              当法人メンバーのうち、就活に取り組んでいる学年を集めたキャリアイベントを開催しております。貴社の魅力や選考・インターンシップ情報などを告知でき、当法人メンバーと密接に交流する機会にご参加いただけます。
            </p>
          </div>
        </div>
        <div class="fcompany-features-item">
          <div class="fcompany-features-item-img" />
          <div class="fcompany-features-item-text li2">
            <p class="fcompany-features-item-text-title">
              <span>02</span><br>
              合宿へのご登壇
            </p>
            <p class="fcompany-features-item-text-description">
              アイセック・ジャパンでは全国のメンバーが一同に介する対面合宿を年に数回実施しております。対面合宿で当法人メンバー向けにご講演いただく中で、メンバーが貴社を認知し、興味関心を持つことのご支援をさせていただきます。
            </p>
          </div>
        </div>
        <div class="fcompany-features-item">
          <div class="fcompany-features-item-img" />
          <div class="fcompany-features-item-text">
            <p class="fcompany-features-item-text-title">
              <span>03</span><br>
              メンバーへの<wbr>機会告知
            </p>
            <p class="fcompany-features-item-text-description">
              現在（2024年8月時点）アイセック・ジャパンは1,100人のメンバーとともに活動しています。すべてのメンバーが使用するSlackやメーリングリストで、貴社の選考・インターンシップ情報を告知することが可能です。
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
    margin: 0 5%;
    align-items: center;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

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

        @media(max-width: 959px){
          flex-direction: column-reverse;
          text-align: center;
          margin-bottom: 5rem;
        }

        
        &:nth-child(2){
          flex-direction: row-reverse;

          @media(max-width: 959px){
            flex-direction: column-reverse;
          }
        }

        &:nth-child(3){
            margin-bottom: 2rem;
        }

        &-text{
          width: fit-content;
          text-align: right;
          margin: auto 0 auto 0.6rem;

          @media(max-width: 959px){
            text-align: center;
            margin: auto;
            width: 90%;
          }


          &-title{
            font-size: 2.6rem;
            line-height: 5rem;
            width: fit-content;
            margin-left: auto;
            word-break: keep-all;

            @media(max-width: 959px){
              flex-direction: column-reverse;
              margin: auto;
            }

            @include sp{
              font-size: 2rem;
              line-height: 4rem;
            }

            @media(max-width: 370px){
              font-size: 1.6rem;
              line-height: 3rem;

            }

            
            span{
              font-size: 4rem;
              font-style: italic;
              @include sp{
                font-size: 3rem;
              }
            }

         
          }
          &-description{
            font-size:1rem;
            line-height: 2rem;
            max-width: 42vw;
            width: fit-content;
            margin-left :auto; 

            @media(max-width: 1024px){
              line-height: 1.6rem;
            }
            @media(max-width: 959px){
              text-align: center;
              margin: auto;
              padding: 1rem 0;
              width: 100%;
              max-width: none;
            }

          }
        }
        .li2{
            text-align: left;
            margin: auto 0 auto 0;

            @media(max-width: 959px){
              text-align: center;
              margin: auto;
            }

            .fcompany-features-item-text-title{
              margin-right: auto;
              margin-left: 0;

              @media(max-width: 959px){
                margin: 0 auto 0 auto;
              }
            }

            .fcompany-features-item-text-description{
              margin-right: auto;
              margin-left: 0;
              @media(max-width: 959px){
                margin: 0 auto 0 auto;
              }

            }
            
          }
        &-img{
          background-image: url(assets/images/for-company/for-companyDetail1.png);
          background-size: cover;
          background-position: center;
          width: 42vw;
          height: 30vw;
          max-width: 604px;
          max-height: 432px;
          margin: auto 0 auto 0;

          @media(max-width: 959px){
              text-align: center;
              margin: 1rem auto 0 auto;
              max-width: 550px;
              max-height: 350px;
              width: 70vw;
              height: 42vw;
            }

        }
      }
    }
  }
}

</style>
