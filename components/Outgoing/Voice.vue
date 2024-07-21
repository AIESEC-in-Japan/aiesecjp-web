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
          <a class="button" href="#" target="_blank"></a>
        </div>
      </div>
      <div class="note-container">
        <div class="note-item">
          <div class="note-img"></div>
          <div class="note-text">
            <p class="note-title">
              カンボジアで見つけた。自分を、世界を変える<br>
              原点 - 海外インターンシップ体験記 -
            </p>
            <p class="note-name">池田泰樹</p>
          </div>
        </div>
        <div class="note-item">
          <div class="note-img"></div>
          <div class="note-text">
            <p class="note-title">
              カンボジアで見つけた。自分を、世界を変える<br>
              原点 - 海外インターンシップ体験記 -
            </p>
            <p class="note-name">池田泰樹</p>
          </div>
        </div>
        <div class="note-item">
          <div class="note-img"></div>
          <div class="note-text">
            <p class="note-title">
              カンボジアで見つけた。自分を、世界を変える<br>
              原点 - 海外インターンシップ体験記 -
            </p>
            <p class="note-name">池田泰樹</p>
          </div>
        </div>
        <div class="note-item">
          <div class="note-img"></div>
          <div class="note-text">
            <p class="note-title">
              カンボジアで見つけた。自分を、世界を変える<br>
              原点 - 海外インターンシップ体験記 -
            </p>
            <p class="note-name">池田泰樹</p>
          </div>
        </div>
        <div class="note-item">
          <div class="note-img"></div>
          <div class="note-text">
            <p class="note-title">
              カンボジアで見つけた。自分を、世界を変える<br>
              原点 - 海外インターンシップ体験記 -
            </p>
            <p class="note-name">池田泰樹</p>
          </div>
        </div>
        <div class="note-item">
          <div class="note-img"></div>
          <div class="note-text">
            <p class="note-title">
              カンボジアで見つけた。自分を、世界を変える<br>
              原点 - 海外インターンシップ体験記 -
            </p>
            <p class="note-name">池田泰樹</p>
          </div>
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
          

          .note-img{
            background-image: url(assets/images/outgoing/outgoingVoice1.png);
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 15rem;
            border-radius: 0.6rem 0.6rem 0 0;
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

