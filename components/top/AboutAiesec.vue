<template>
  <section class="about-container">
    <div class="about-img"></div>
    <div class="about-bg"></div>
    <div class="about-contents">
      <p class="about-title">
        About AIESEC
      </p>
      <h2 class="about-title-sub">AIESECについて</h2>
      <p class="about-heading">Activating Youth<br> Leadership</p>
      <p class="about-explain">
        アイセックは、世界100以上の国と地域に支部を持ち、約30,000人の若者が<br>
        所属する非営利組織です。若者の異文化理解を促進することで、「平和で人々の<br>
        可能性が最大限発揮された社会」の実現を目指しています。
      </p>
      <div class="button-container">
        <p class="button-nextText">私たちの想い</p>
        <a class="button" href="#"></a>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

.about-container {
  position: relative;
  margin: 8rem 0 10rem 0;
  width: 100%;
}



.about-bg{
  display: inline;
  position: absolute;
  background-color: $light-gray;
  width: 94vw;
  height: 52vh;
  left: 0;
  z-index: 0;
  border-radius: 0 1.2rem 1.2rem 0;
}

.about-img{
  display: block;
  position: absolute;
  width: 80vh;
  height: 80vh;
  top: 8vh;
  right: 0;
  z-index: 20;
  background-image: url(@/assets/images/top/top-about.png);
  background-size: cover;
  border-radius: 0.8rem 0 0 0.8rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
}

.about-contents{
  position: relative;
  margin: 0 5rem;
  z-index: 30;
}
.about-title{
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
  
.about-heading{
  color: $blue;
  font-size: 4rem;
  font-weight: bold;
  padding-top: 2rem;
  margin-bottom: 0;
}

.about-explain {
  font-size: 1rem;
  line-height: 2;
  padding-top: 1rem;
  max-width: 50rem;
  margin-bottom: 10%;
  
  @include sp {
    max-width: 90%;
    text-align: left;
  }
}

.button-container{
  display: flex;
}
.button-nextText{
  display: block;
  font-size: 1.35rem;
  font-weight: bold;
  padding: 6px;
  padding-left: 0;
  margin: 0;
}
.button{
  display: inline-block;
  position: relative;
  background-color: $blue;
  width: 50px;
  height: 50px;
  padding: auto;
  margin-left: 16px;
  border-radius: 5rem;
  border: 2px solid $blue;
  box-shadow:  0 0 24.5px rgba(3, 126, 243,0.22);
  transition: all 0.3s ease 0s;

  &:hover{
    transition-duration: .3s;
    transform: scale(1.1);
  }
}

.button::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 10px;
  height: 10px;
  border-top: 1.5px solid #fff;
  border-right: 1.5px solid #fff;
  transform: rotate(45deg);
}
</style>
