<template>
  <section class="service-container">
    <div class="flow-text">
      <p> &nbsp; Y O U T H &nbsp; L E A D E R S H I P&nbsp;</p>
      <p> &nbsp; Y O U T H &nbsp; L E A D E R S H I P&nbsp;</p>
    </div>
    <div class="service-bg"></div>
    <div class="service-contents">
      <p class="service-title">
        Our Services
      </p>
      <h2 class="service-title-sub">私たちの事業</h2>
      <div class="service-target-container">
        <h3 class="service-target-title">学生の方へ</h3>
        <div class="service-item-container">
          <div class="service-item">
            <div class="service-item-img"></div>
              <div class="button-next-wrapper">
                <p class="button-nextText">海外インターンシップ</p>
                <p class="button-nextText-sub">
                  社会課題を起点に作られたプロジェクトで今まで見<br>
                  たことのない世界へ
                </p>
              </div>
              <a class="button" href="#"></a>
          </div>
          <div class="service-item">
            <div class="service-item-img"></div>
              <div class="button-next-wrapper">
                <p class="button-nextText">global youth dialogue</p>
                <p class="button-nextText-sub">
                  あああああああああああああああああああああああ<br>
                  あああああああああ
                </p>
              </div>
              <a class="button" href="/global-youth-dialogue"></a>
          </div>
        </div>
      </div>
      <div class="service-target-container">
        <h3 class="service-target-title">企業の方へ</h3>
        <div class="service-item-container">
          <div class="service-item">
            <div class="service-item-img"></div>
              <div class="button-next-wrapper">
                <p class="button-nextText">海外インターンシップ受け入れ</p>
                <p class="button-nextText-sub">
                  あああああああああああああああああああああああ<br>
                  あああああああああ
                </p>
              </div>
              <a class="button" href="#"></a>
          </div>
          <div class="service-item">
            <div class="service-item-img"></div>
              <div class="button-next-wrapper">
                <p class="button-nextText">協賛</p>
                <p class="button-nextText-sub">
                  あああああああああああああああああああああああ<br>
                  あああああああああ
                </p>
              </div>
              <a class="button" href="#"></a>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>


<style lang="scss" scoped>
.service-container {
  position: relative;
  margin: 0 0 20rem 0;
  max-height: max-content;
  
}

.flow-text{
  position: absolute;
  top: -5.2rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
}

.flow-text p{
  color:#e9e9e9;
  font-family: $lato;
  font-size: 7rem;
  animation: flowing 18s linear infinite;
  transform: translateX(100%);
  display: inline-block;
}
@keyframes flowing {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.service-bg{
  display: inline;
  position: absolute;
  top: 3%;  
  background-color: #F2F8FE;
  width: 100%;
  height: 110%;
  left: 0;
  z-index: 0;
  border-radius: 10rem 0 10rem 0;
  box-shadow: 0 0px 16.3px rgba(0, 0, 0, 0.1);
}


.service-contents{
  position: relative;
  margin: 0 5rem;
  z-index: 30;
}
.service-title{
  color: $blue;
  font-size: 2rem;
  padding-top: 6rem;
  font-weight: bold;
  margin-bottom: 0;

  &-sub{
    font-size: 1.35rem;
    margin-top: 0.8rem;
  }
}


.service-target-container{
  width: 100%; 
}

.service-target-title{
  font-weight: bold;
  font-size: 3rem;
  padding: 2rem 0;
}
.service-item-container{
  display: flex; 
  justify-content: space-between;
  margin-bottom: 2rem;
 
}
.service-item{
  position: relative;
  width: 590px;
  height: 580px;
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
}

.service-item-img{
  background-image: url(https://placehold.jp/580x500.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  
}

.button-next-wrapper{
  position: absolute;
  bottom: 24px;
  left: 24px;
}
.button-nextText{
  color: $white;
  font-weight: bold;
  font-size: 2rem;

}
.button-nextText-sub{
  color: $white;
  margin: 0;
}
.button{
  display: inline-block;
  position: absolute;
  bottom: 24px;
  right: 24px;
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
