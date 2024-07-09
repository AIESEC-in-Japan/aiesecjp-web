<template>
  <div class="outgoing-container">
    <div class="outgoing-contents">
      <div class="outgoing-wrapper">
        <p class="outgoing-title">Our Services</p>
        <h2 class="outgoing-title-sub">海外インターンシップ</h2>
        <div class="button-container">
          <p class="button-nextText">詳しくはこちら</p>
          <a class="button" href="/lp/outgoing" target="_blank"></a>
        </div>
      </div>
      <div class="message-container">
        <h3 class="message-title">
          社会課題の現場に足を運び、<br>
          五感で世界の現実を感じ取る。
        </h3>
        <p class="message-text">
          アイセックは、日本の学生に、約６週間の間、海外に渡航しながら、現地のNPOや教育機関で社<br>
          会課題に触れるような活動を通して、リーダーシップを育む経験を届けています。社会課題の現場<br>
          に足を運び、五感で世界の現実を感じ取りながら、SDGsの達成に貢献するために手を動かす<br>
          海外インターンシッププログラムです。
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.outgoing-container {
  position: relative;
  margin: 0;
  width: 100vw;

  .outgoing-contents{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 5rem;
    align-items: center;

    .outgoing-wrapper{
      margin: auto 0;
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
  
    .message{
      &-container{
        text-align: right;
      }
      &-title{
        font-size: 2.6rem;
        line-height: 5rem;
        margin-bottom: 1.4rem;
      }
      &-text{
        font-size: 1rem;
        line-height: 2rem;
      }
    }
  }
}


.button-container{
  display: flex;
  align-items: center;
  margin-top: 1.4rem;

}
.button-nextText{
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: $red;
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
