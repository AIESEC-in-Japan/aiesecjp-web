<template>
  <div class="outgoing-container">
    <div class="outgoing-contents">
      <div class="title-wrapper">
        <p class="outgoing-title">Our Services</p>
        <h2 class="outgoing-title-sub">海外インターンシップ</h2>
      </div>
      <div class="button-container">
        <p class="button-nextText">詳しくはこちら</p>
        <a class="button" href="/lp/outgoing" target="_blank"></a>
      </div>
      <div class="message-container">
        <h3 class="message-title">
          社会課題の現場に足を運び、<wbr>
          五感で世界の現実を感じ取る。
        </h3>
        <p class="message-text">
          アイセックは、日本の学生に、約６週間の間、海外に渡航しながら、現地のNPOや教育機関で社<wbr>
          会課題に触れるような活動を通して、リーダーシップを育む経験を届けています。社会課題の現場<wbr>
          に足を運び、五感で世界の現実を感じ取りながら、SDGsの達成に貢献するために手を動かす<wbr>
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
    display: grid;
    grid-template-columns: 35% 65%;
    justify-content: space-between;
    margin: 0 5%;
    width: 90%;
    align-items: center;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    @include tab{
      grid-template-columns: 100%;
    }


      .title-wrapper{
        grid-row: 1;
        grid-column: 1;
        
        @include tab{
          grid-row: 1;
          grid-column: 1;
        }

        .outgoing-title{
          color: $red;
          font-size: 2rem;
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
        grid-row: 1/ span 2;
        grid-column: 2/  3;
        margin-left: auto;
        width: fit-content;

        @include tab{
          grid-row: 2;  
          grid-column: 1;
          text-align: start;
          margin-top: 1rem;
        }

      }
      &-title{
        font-size: 2.6rem;
        line-height: 5rem;
        margin-bottom: 1.4rem;
        text-align: right;
        word-break: keep-all;
        width: fit-content;
        margin-left :auto; 


        @include tab{
          font-size: 2.4rem;
          text-align: left;
          max-width: auto;
          margin: 0 0 1.2rem 0;
        }

        @media(max-width: 600px){
          font-size: 2rem;
          line-height: 4rem;
        }

        @include sp{
          font-size: 1.5rem;
          line-height: 3rem;
          margin-bottom: 0.8rem;
        }

        @media (max-width:375px){
          font-size: 1.35rem;
        }
      }


      &-text{
        max-width: 98%;
        font-size: 1rem;
        line-height: 2rem;
        word-break: break-all;
        margin-left :auto; 
        width: fit-content;

        @include tab{
          max-width: auto;
          margin: 0 auto;
        }
      }
    }
  }
}


.button-container{
  display: flex;
  align-items: center;
  margin-top: 1.4rem;
  grid-row: 2;
  grid-column: 1 / 2;

  @include tab{
    grid-row: 3;
    grid-column: 1;
    margin-left: auto;
  }

  @include sp{
    margin: 0;
    justify-content: center;
  }


}
.button-nextText{
  display: block;
  font-size: 2rem;
  color: $red;
  padding: 6px;
  padding-left: 0;
  margin: 0;
  
  @include sp{
    font-size: 1.5rem;
  }
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
