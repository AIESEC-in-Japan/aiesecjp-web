<template>
  <div class="incoming-container">
    <div class="incoming-contents">
      <div class="incoming-wrapper">
        <div class="title-wrapper">
          <p class="incoming-title">Contact</p>
          <h2 class="incoming-title-sub">お気軽にお問い合わせください。</h2>
        </div>
        <div class="button-container">
          <a class="button" href="#" target="_blank"></a>
        </div>
      </div>
      <div class="incoming-img"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.incoming{
  &-container{
    position: relative;
    margin: 8rem 0;
    width: 100vw;

    @include sp{
      margin: 4rem 0;
    }

    .incoming-contents{
      position: relative;
      display: flex;
      justify-content: space-between;
      margin: 0 0 0 5%;

      @media (min-width:1600px){
        margin: 0 auto;
        max-width: 1440px;
      }

      .incoming-wrapper{
        margin: auto 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media(max-width:425px){
          flex-direction: column;
        }

        .title-wrapper{
          .incoming-title{
            color: $mint;
            font-size: 2rem;
            margin-bottom: 0;
      
            &-sub{
              font-size: 1.35rem;
              margin-top: 0.8rem;
            }
          }
        }

      }

      .incoming-img{
        background-image: url(assets/images/incoming/incomingContact.png);
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 30vw;
        margin-left: 2rem;
        border-radius: 1rem 0 0 1rem;

        @media (max-width: 660px) {
          display: none;
        }
      }


    }
  }
}


.button-container{
  display: flex;
  margin-top: auto;
  margin-right: auto;
  @media(max-width:660px){
    margin-left: auto;
    margin-right: 10%;
  }
  @media(max-width:425px){
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: auto;
  }
}
.button{
  display: inline-block;
  position: relative;
  background-color: $mint;
  width: 80px;
  height: 80px;
  margin-left: 4.6rem;
  padding: auto;
  border-radius: 5rem;
  border: 2px solid $mint;
  box-shadow:  0 0 46px rgba(12, 185, 193, 0.22);
  transition: all 0.3s ease 0s;  

  &:hover{
    transition-duration: .3s;
    transform: scale(1.1);
  }

  @media(max-width:860px){
    width: 50px;
    height: 50px;
  }
  @media(max-width:660px){
    margin-left: 0;
  }
}

.button::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 25px;
  width: 18px;
  height: 18px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);

  @media(max-width:860px){
    left: 15px;
    width: 10px;
    height: 10px;
    border-top: 1.5px solid #fff;
    border-right: 1.5px solid #fff;

  }
}

</style>

