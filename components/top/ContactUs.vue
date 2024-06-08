<template>
  <section class="contact-container">
    <div class="contact-bg"></div>
    <div class="contact-contents">
      <p class="contact-title">
        Contact Us
      </p>
      <h2 class="contact-title-sub">お問合わせ</h2>
      <p class="contact-explain">
        お気軽にお問い合わせください。
      </p>
      <div class="contact-wrapper">
        <div class="contact-form">
          <div class="contact-form-img"></div>
          <div class="button-container">
            <p class="button-nextText">学生の方</p>
            <a class="button" href="#"></a>
          </div>
        </div>
        <div class="contact-form">
          <div class="contact-form-img"></div>
          <div class="button-container">
            <p class="button-nextText">企業の方</p>
            <a class="button" href="#"></a>
          </div>
        </div>
        <div class="contact-form">
          <div class="contact-form-img"></div>
          <div class="button-container">
            <p class="button-nextText">卒業生の方</p>
            <a class="button" href="#"></a>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>


<style lang="scss" scoped>

.contact-container {
  position: relative;
  margin: 5rem 0 10rem 0;
  width: 100%;
}



.contact-bg{
  display: inline;
  position: absolute;
  top: 3%;  
  background-color: #F2F8FE;
  width: 76%;
  height: 50%;
  right: 0;
  z-index: 0;
  border-radius: 1.2rem 0 0 1.2rem ;
  box-shadow: 0 0px 16.3px rgba(0, 0, 0, 0.1);
}


.contact-contents{
  position: relative;
  margin: 0 5rem;
  z-index: 30;
}
.contact-title{
  color: $blue;
  font-size: 6rem;
  padding-top: 6rem;
  font-weight: bold;
  margin-bottom: 0;

  &-sub{
    font-size: 1.35rem;
    margin: 0.8rem 0;
  }
}
  

.contact-explain {
  font-size: 1rem;
}

.contact-wrapper{
  width:100%;
  margin-top: 2.4rem;
  display: flex;
  justify-content: space-between;
}

.contact-form{
  position: relative;
  width: 32%;
  height: 60vh;
  transition: all 0.3s ease 0s;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  &:hover{
    .contact-form-img{
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

.contact-form-img{
  background-image: url(https://placehold.jp/500x600.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

.button-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.button-nextText{
  color: $white;
  font-weight: bold;
  font-size: 2rem;
  margin: 0 auto 2rem auto;

}
.button{
  display: inline-block;
  position: relative;
  margin: 0 auto;
  width: 72px;
  height: 72px;
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
