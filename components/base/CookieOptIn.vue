<template>
    <div class="cookie-banner">
      <div class="cookie-description">
        <p>当ウェブサイトでは、お客様により適したサービスの提供や、サイト改善のために、クッキーを使用しています。
        詳細については <a href="#" target="_blank">Cookieポリシー</a>をご覧ください。</p>
      </div>
      <div class="cookie-button">
        <button onclick="acceptCookies()" class="button-accept">同意する</button>    
        <button onclick="rejectCookies()" class="button-reject">拒否する</button>    
      </div>
    </div>
</template>


<style lang="scss" scoped>
.cookie-banner{
  z-index: $cookieBanner;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vm;
  background-color: $light-gray;
  padding: 1.6em 8em;
  // display: none;
  box-shadow: 0 2px 5px #52565E; /* バナーに影を追加 */
  border-top: 0.6px solid $dark-gray; /* バナーの上部にボーダーを追加 */
  display: flex;
  
  @include tab{
    padding: 1.5em 2.4em;
  }
  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    padding: 0.5em 2.5em;
    box-shadow: none;
  }

  @include sp{
    padding: 0.5em 1em;
  }

  .cookie-description{
    margin-top: 1rem;
    width: 60%;
    p{
      margin-bottom: 0;
      font-size:1em;
      @include tab{
        font-size: 0.875rem;
      }
    }

    @media screen and (max-width: 768px){
      width: 100%;
    }
  }

  .cookie-button{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    float: none;
    padding-top: 1em;
    
    @include tab{
      padding: 0.4em;
    }
    @media screen and (max-width: 768px){
      width: 100%;
      padding: 0.8em;
    }
    @include sp{
    }
    

    button{
      width: 160px;
      padding: 20px;
      transition: 0.3s all;
      border-radius: 0.26em;

      
      &:hover{
        opacity: 0.7;
      }
      @include tab{
        width: 140px;
        padding: 15px;
      }
      @include sp{
        width: 120px;
        padding: 10px;
        margin: 0 0.2em;
      }
    }
    .button-accept{
      color: #fff;
      background-color: $blue;
      margin-left: 0;
    }
    .button-reject{
      color: #000;
      background-color: $gray;
    
    }
  }

}

</style>