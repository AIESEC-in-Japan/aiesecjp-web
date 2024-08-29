<template>
  <div class="outgoing-container">
    <div class="outgoing-contents">
      <div class="outgoing-wrapper">
        <div class="title-wrapper">
          <p class="outgoing-title">Interview</p>
          <h2 class="outgoing-title-sub">海外インターンシップ経験者の声</h2>
        </div>
        <div class="button-container">
          <p class="button-nextText">noteを見る</p>
          <a class="button" href="https://note.com/aiesec_japan/m/mf02965e1ff1e" target="_blank"></a>
        </div>
      </div>
      <div class="note-container">
        <a class="note-item" target="_blank">
          <div class="note-img note-img-1"></div>
          <div class="note-text">
            <p class="note-title">
              毎日が刺激！カオスを原体験に。<br>
              &nbsp;
            </p>
            <p class="note-name">檜垣るか</p>
          </div>
        </a>
        <a class="note-item" href="https://note.com/aiesec_japan/n/na582b6214096?sub_rt=share_pw"  target="_blank">
          <div class="note-img note-img-2"></div>
          <div class="note-text">
            <p class="note-title">
              常識が通用しない環境で身に着いた<br>
              柔軟性と、やり切る力。
            </p>
            <p class="note-name">風間世那</p>
          </div>
        </a>
        <a class="note-item" href="https://note.com/aiesec_japan/n/n8ad6436f2eb0?sub_rt=share_pw" target="_blank">
          <div class="note-img note-img-3"></div>
          <div class="note-text">
            <p class="note-title">
              人生最大の挑戦を。<br>
              現地の孤児院で学んだこと。
            </p>
            <p class="note-name">浅野晴人</p>
          </div>
        </a>
        <a class="note-item" href="https://note.com/aiesec_japan/n/n27814166d26f?sub_rt=share_pw" target="_blank">
          <div class="note-img note-img-4"></div>
          <div class="note-text">
            <p class="note-title">
              自分の価値を測りにいく。<br>
              飛び込んだカオスな世界。
            </p>
            <p class="note-name">海老原桂介</p>
          </div>
        </a>
        <a class="note-item" href="https://note.com/aiesec_japan/n/n54621f4f62f2?sub_rt=share_pw" target="_blank">
          <div class="note-img note-img-5"></div>
          <div class="note-text">
            <p class="note-title">
              初めて向き合う。社会課題と現実。<br>
              &nbsp;
            </p>
            <p class="note-name">嶋津怜奈</p>
          </div>
        </a>
        <a class="note-item" target="_blank">
          <div class="note-img note-img-6"></div>
          <div class="note-text">
            <p class="note-title">
              自分で実際に体験したことだけが<br>
              自分を形作っていく。
            </p>
            <p class="note-name">西嶋駿</p>
          </div>
        </a>
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
      justify-content: space-between;
      flex-direction: column;
      margin: 0 5rem;

      .outgoing-wrapper{
        margin: auto 0;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .title-wrapper{
          .outgoing-title{
            color: $red;
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
      .note-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 4rem;

        .note-item{
          display: flex;
          flex-direction: column;
          width: 31%;
          height: max-content;
          box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
          margin-bottom: 3.5rem;
          border-radius: 0.6rem;
          text-decoration: none;
          

          .note-img{
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 15rem;
            border-radius: 0.6rem 0.6rem 0 0;

            &-1{
              background-image: url(assets/images/outgoing/outgoingVoice1.png);
            }
            &-2{
              background-image: url(assets/images/outgoing/outgoingVoice2.png);
            }
            &-3{
              background-image: url(assets/images/outgoing/outgoingVoice3.png);
            }
            &-4{
              background-image: url(assets/images/outgoing/outgoingVoice4.png);
            }
            &-5{
              background-image: url(assets/images/outgoing/outgoingVoice5.png);
            }
            &-6{
              background-image: url(assets/images/outgoing/outgoingVoice6.png);
            }
          }
          .note-text{
            padding: 0.9rem 0.9rem 0.6rem 0.9rem;
            .note-title{
              font-size: 1rem;
              margin: 0;
            }
            .note-name{
              font-size: 0.875rem;
              margin: 0;
              text-align: end;

            }
          }

        }
      }

    }

  }
}


.button-container{
  display: flex;
  margin-top: auto;

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
  background-color: $red;
  width: 50px;
  height: 50px;
  padding: auto;
  margin-left: 16px;
  border-radius: 5rem;
  border: 2px solid $red;
  box-shadow:  0 0 24.5px rgba(244, 137, 36, 0.22);
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

