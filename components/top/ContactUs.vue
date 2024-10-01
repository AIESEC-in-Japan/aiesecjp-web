<template>
  <section class="contact-container">
    <div class="contact-bg"></div>
    <div class="contact-contents">
      <p class="contact-title" id="contact">
        Contact Us
      </p>
      <h2 class="contact-title-sub">お問い合わせ</h2>
      <p class="contact-explain">
        お気軽にお問い合わせください。
      </p>
      <div class="contact-wrapper">
        <div class="contact-form">
          <div class="contact-form-img img1"></div>
          <div class="button-container">
            <p class="button-nextText">学生の方</p>
            <a class="button" href="/contact/student"></a>
          </div>
        </div>
        <div class="contact-form">
          <div class="contact-form-img img2"></div>
          <div class="button-container">
            <p class="button-nextText">企業の方</p>
            <a class="button" href="/contact/company"></a>
          </div>
        </div>
        <div class="contact-form">
          <div class="contact-form-img img3"></div>
          <div class="button-container">
            <p class="button-nextText">卒業生の方</p>
            <a class="button" href="/contact/alumni"></a>
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

  @include sp{
    margin-bottom: 5rem;
  }
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
  margin: 0 5%;
  z-index: 30;
  @include sp{
    margin: 0 2rem;
  }
  @media (min-width:1600px){
    margin: 0 auto;
    max-width: 1440px;
  }
}
.contact-title{
  color: $blue;
  font-size: 6rem;
  padding-top: 6rem;
  margin-bottom: 0;
  margin-top: -1rem;


  @media (max-width: 690px) {
    padding-top: 3rem;
    font-size: 2rem;
  }

  @include sp{
    font-size: 3.2rem;
  }

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
  
  @include sp{
    flex-direction: column;
  }
}

.contact-form{
  position: relative;
  width: 32%;
  height: 42vw;
  max-height: 650px;
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

  @media (max-width: 690px) {
    height: 30vw;
  }

  @include sp{
    width: 100%;
    height: 24vw;
    margin: 0 auto 1rem auto;
  }
}

.contact-form-img{
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
.img1{
  background-image: url(./assets/images/top/slide1.jpg);
}
.img2{
  background-image: url(./assets/images/top/slide6.jpg);
}
.img3{
  background-image: url(./assets/images/top/slide3.jpg);
}

.button-container{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include sp{
    flex-direction: row;
    justify-content: space-between;
    bottom:0;
    text-align: center;
    align-items: center;
  }
}
.button-nextText{
  color: $white;
  font-size: 2rem;
  margin: 0 auto 2rem auto;

  @media (max-width: 690px) {
    font-size: 1.25rem;
  }
  @include sp{
    margin: 0 0 0 8vw;
  }

}
.button{
  display: inline-block;
  position: relative;
  margin: 0 auto;
  width: 6.4vw;
  height: 6.4vw;
  max-width: 100px;
  max-height: 100px;
  border-radius: 5rem;
  border: 1.8px solid $white;
  box-shadow:  0 0 44.1px rgba(3, 126, 243, 0.22);
  transition: all 0.3s ease 0s;  
  @include sp{
    width: 2.4rem;
    height: 2.4rem;
    background-color: $blue;
    border: none;
    box-shadow:  0 0 24.5px rgba(3, 126, 243,0.22);
    margin: 0 8vw 0 0;
  }
}
.button::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 30%;
  width: 25%;
  height: 25%;
  border-top: 1.8px solid $white;
  border-right: 1.8px solid $white;
  transform: rotate(45deg);
}
</style>
