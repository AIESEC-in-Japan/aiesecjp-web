<template>
  <div class="outgoing-container">
    <div class="outgoing-contents">
      <div class="outgoing-wrapper">
        <h2 class="outgoing-title-sub">その他の事業</h2>
      </div>
      <div class="others-wrapper">
        <div class="service-item">
          <div class="service-item-img service-item-img-1"></div>
            <p class="button-nextText">海外インターンシップ</p>
            <a class="button" href="/outgoing"></a>
        </div>
        <div class="service-item">
          <div class="service-item-img service-item-img-2"></div>
            <p class="button-nextText">海外インターンシップ受け入れ</p>
            <a class="button" href="/incoming"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outgoing{
  &-container{
    position: relative;
    margin: 8rem 0;
    width: 100vw;

    .outgoing-contents{
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 5rem;

      .outgoing-wrapper{
        margin: auto 0;
        width: 100%;
        
        .outgoing-title{
          display: none;
    
          &-sub{
            font-size: 1.35rem;
            margin-top: 0.8rem;
          }
        }

      }

      .others-wrapper{
        display: flex;
        margin-top: 4rem;
        justify-content: space-between;
        width: 100%;
      }


    }
  }
}

.service-item{
  position: relative;
  width: 580px;
  height: 340px;
  border-radius: 0.8rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease 0s;
  overflow: hidden;
  &:hover{
    .service-item-img{
      transition-duration: .3s;
      transform: scale(1.1);
      opacity: 0.8;
    }
    .button{
      border-color: $blue;
      background-color: $blue;
    }
  }

  &-img{
    background-size: cover;
    background-position: center;
    background-repeat: none;
    width: 100%;
    height: 100%;

    &-1{
      background-image: url(assets/images/outgoing/outgoingTop.png);
    }
    &-2{
      background-image: url(assets/images/incoming/incomingTop.png);
    }
    
  }

}


.button-nextText{
  position: absolute;
  color: $white;
  font-size: 1.35rem;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 36px;

}
.button{
  display: inline-block;
  position: absolute;
  margin: auto 0;
  right: 36px;
  bottom: 0;
  top: 0;
  width: 72px;
  height: 72px;
  padding: auto;
  margin-left: 16px;
  border-radius: 5rem;
  border: 1.8px solid $white;
  box-shadow:  0 0 44.1px rgba(3, 126, 243, 0.22);
  transition: all 0.3s ease 0s;  
}
.button::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 24px;
  width: 14px;
  height: 14px;
  border-top: 1.8px solid $white;
  border-right: 1.8px solid $white;
  transform: rotate(45deg);
}
</style>

