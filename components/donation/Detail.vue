<template>
  <div class="donation-container">
    <div class="donation-contents">
      <h3 class="donation-title">
        寄付についてのご案内
      </h3>
      <p class="donation-title-description">
        アイセック・ジャパンの活動は多くの皆さまのご支援によって支えられています。<br>
        皆さまからいただいたご寄付については、海外インターンシップへ運営をはじめとする私たちの活動のために大切に使わせていただきます。
      </p>
      <div class="donation-type">
        <div class="donation-type-item">
          <div class="donation-type-item-header">
            <p class="donation-type-item-header-tag">個人のご寄付</p>
          </div>
          <div class="donation-type-item-text">
            <p class="donation-type-item-text-title">
              海外インターンシップ奨励基金
            </p>
            <p class="donation-type-item-text-amount">
              <span class="donation-type-item-text-amount-sm">最小金額</span><br>
              1000&nbsp;<span class="donation-type-item-text-amount-sm">円/月</span>
            </p>
          </div>
          <a class="donation-type-item-button" href="https://congrant.com/project/aiesec-jp/9613" target="_blank">
            <p>ご寄付はこちら</p>
          </a>
        </div>
        <div class="donation-type-item">
          <div class="donation-type-item-header">
            <p class="donation-type-item-header-tag">個人のご寄付</p>
          </div>
          <div class="donation-type-item-text">
            <p class="donation-type-item-text-title">
              法人・委員会宛てご寄付
            </p>
            <p class="donation-type-item-text-amount">
              <span class="donation-type-item-text-amount-sm">最小金額</span><br>
              1000&nbsp;<span class="donation-type-item-text-amount-sm">円/月</span>
            </p>
          </div>
          <a class="donation-type-item-button" href="https://congrant.com/project/aiesec-jp/7564" target="_blank">
            <p>ご寄付はこちら</p>
          </a>
        </div>
       
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.donation-container {
  position: relative;
  margin: 5rem 0 5rem 0;
  width: 100vw;

  .donation-contents{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 5%;
    align-items: center;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    .donation-title{
      font-size: 1.35rem;
      margin-bottom: 1.8rem;
      line-height: 4rem;
      border-bottom: $blue 3px solid;

      &-description{
        font-size: 1rem;
        text-align: center;
      }
    }

    .donation-type{
      width: 100%;
      margin: 6rem 0 3rem 0;
      display: flex;
      flex-direction: row;
      justify-content:center;
      gap: 12rem;

      @include tab{
        gap: 4rem;
      }

      @media(max-width:768px) {
        flex-direction: column;
      }


      &-item{
        width: 22rem;
        // max-width: 03px;
        padding-bottom: 1.7rem;
        border-radius: 1.2em 1.2em 1.2em 1.2em;  
        box-shadow: 0.1rem  0.1rem 1rem rgba(164, 162, 162, 0.4), -0.02rem  -0.02rem 1rem rgba(164, 162, 162, 0.1);
        flex-direction: column;
        
        @include tab{
          width: 20rem;
        }
        
        @media(max-width:768px) {
          margin: 0 auto;
        }
        
        @include sp{
          width: 20rem;
        }

        @media(max-width:375px) {
          width: 80vw;

        }

        &-header{
          position: relative;
          border-radius: 1.2em 1.2em 0em 0em;  
          background-image: linear-gradient(160deg,  $blue 28%, $green 100%);
          height: 5rem;

          @media(max-width:375px) {
            height: 4rem;

          }
          
          &-tag{
            background-color: $white;
            border-radius: 0.3em;
            width: 36%;
            padding: 0.4rem 0.5rem;
            text-align: center;
            position: absolute;
            left: 0.8rem;
            bottom:0.6rem;
            margin: 0;
            font-size: 0.85rem;
            @media(max-width:375px) {
              min-width: max-content;
            }
          }
        }

        &-text{
          padding: 1rem;
          &-title{
            font-size: 1.25rem;
            @media(max-width:375px) {
              font-size: 1rem;
            }
            
          }
          &-amount{
            text-align: center;
            font-size: 1.25rem;
            &-sm{
              font-size: 0.85rem;
            }
          }
        }

        &-button{
          display: block;
          padding: 12px 30px;  
          width: 60%;
          margin: 0 auto;
          text-align: center;
          border: 1px $blue  solid;
          border-radius: 3rem;
          text-decoration: none;
          transition: all 0.3s ease 0s;
          background-color: $white;

          @media(max-width:375px) {
              min-width: max-content;
              width: 64%;
            }
          p{
            color: $blue;
            margin: 0;
            font-size: 0.85rem;
          }

          &:hover{
            background-color: $blue;
            transition-duration: .3s;
            p{
              color: $white;
            }
          }
        }

      }
    }
  }
}

</style>
