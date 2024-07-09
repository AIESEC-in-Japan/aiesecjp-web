<template>
  <div class="incoming-container">
    <div class="incoming-contents">
      <div class="incoming-wrapper">
        <p class="incoming-title">Our Services</p>
        <h2 class="incoming-title-sub">海外インターンシップ受け入れ</h2>
        <div class="button-container">
          <p class="button-nextText">詳しくはこちら</p>
          <a class="button" href="/lp/incoming" target="_blank"></a>
        </div>
      </div>
      <div class="message-container">
        <h3 class="message-title">
          海外学生のインターンシップで、<br>
          会社の可能性を広げる。
        </h3>
        <p class="message-text">
          若者に異なる文化/環境において挑戦する経験を提供することで、海外学生の日本におけるキャリア選択<br>
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
    display: flex;
    justify-content: space-between;
    margin: 0 5rem;
    align-items: center;

    .incoming-wrapper{
      margin: auto 0;
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
  color: $mint;
  padding: 6px;
  padding-left: 0;
  margin: 0;
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
