<template>
  <div class="incoming-container">
    <div class="incoming-contents">
      <div class="title-wrapper">
        <p class="incoming-title">Our Services</p>
        <h2 class="incoming-title-sub">海外インターンシップ受け入れ</h2>
      </div>
      <div class="button-container">
        <p class="button-nextText">詳しくはこちら</p>
        <a class="button" href="/lp/incoming" target="_blank"></a>
      </div>
      <div class="message-container">
        <h3 class="message-title">
          海外学生のインターンシップで、<br>
          会社の可能性を広げる。
        </h3>
        <p class="message-text">
          若者に異なる文化/環境において挑戦する経験を提供することで、海外学生の日本におけるキャリア選択<wbr>
          の幅を広げ、将来の国際社会で活躍するリーダーを輩出することを目指しています。
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.incoming-container {
  position: relative;
  margin: 0;
  width: 100vw;

  .incoming-contents{
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
      .incoming-title{
          color: $mint;
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
        margin-left: auto;

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
          margin: 0 0 0.8rem 0;
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
  font-weight: bold;
  color: $mint;
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
  background-color: $mint;
  width: 50px;
  height: 50px;
  padding: auto;
  margin-left: 16px;
  border-radius: 5rem;
  border: 2px solid $mint;
  box-shadow:  0 0 24.5px rgba(12, 185, 193, 0.22);
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
