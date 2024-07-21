<template>
  <div class="fcompany-container">
    <div class="fcompany-contents">
      <div class="fcompany-wrapper">
        <div class="title-wrapper">
          <p class="fcompany-title">Contact</p>
          <h2 class="fcompany-title-sub">お気軽にお問い合わせください。</h2>
        </div>
        <div class="button-container">
          <a class="button" href="#" target="_blank"></a>
        </div>
      </div>
      <div class="fcompany-img"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fcompany{
  &-container{
    position: relative;
    margin: 8rem 0;
    width: 100vw;

    .fcompany-contents{
      position: relative;
      display: flex;
      justify-content: space-between;
      margin: 0 0 0 5rem;
      .fcompany-wrapper{
        margin: auto 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .title-wrapper{
          .fcompany-title{
            color: $blue;
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 0;
      
            &-sub{
              font-size: 1.35rem;
              margin-top: 0.8rem;
            }
          }
        }

      }

      .fcompany-img{
        background-image: url(assets/images/for-company/for-companyContact.png);
        background-position: center;
        background-size: cover;
        width: 120%;
        height: 30rem;
        margin-left: 2rem;
        border-radius: 1rem;
      }


    }
  }
}


.button-container{
  display: flex;
  margin-top: auto;
  margin-right: auto;
}
.button{
  display: inline-block;
  position: relative;
  background-color: $blue;
  width: 80px;
  height: 80px;
  margin-left: 4.6rem;
  padding: auto;
  border-radius: 5rem;
  border: 2px solid $blue;
  box-shadow:  0 0 46px rgba(3, 126, 243, 0.22);
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
  left: 25px;
  width: 18px;
  height: 18px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
}

</style>

