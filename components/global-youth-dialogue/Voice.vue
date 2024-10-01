<template>
  <div class="gyd-container">
    <div class="gyd-contents">

      <h3 class="gyd-title">過去参加者の声</h3>
      
      <div class="voice">
        <div class="detail">
          <div class="topic">
            <h2>
              深い部分まで話せる<wbr>
              トピックが魅力的
            </h2>
            <div class="person">
              <img
                alt="topics"
                src="@/assets/images/global-youth-dialogue/voice1.png"
              >
              <p>
                日本｜筑波大学<wbr>2年<br>島大翔さん
              </p>
            </div>
          </div>
          <p class="voice-text">
            関係を構築できるトピックが魅力的でした。対話を積み重ねて、お互いの価値観を相手の人となりを知っているからこそ、話題の深い部分まで話せる関係値はかけがえのないものだと思います。
          </p>
        </div>
        <div class="detail">
          <div class="topic">
            <h2>
              1人の人間として向き<wbr>
              合うことの大切さ
            </h2>
            <div class="person">
              <img
                alt="conversation"
                src="@/assets/images/global-youth-dialogue/voice2.png"
              >
              <p>
                日本｜立命館大学<wbr>3年<br>諸我菜摘さん
              </p>
            </div>
          </div>
          <p class="voice-text">
            人と何かを分かち合うのに、国籍も宗教も何もいらないんだと気づきました。大事なのは、目の前の相手と1人の人間として向き合うことで、相手のバックグラウンドに触れるたびに震えるような感動と喜びがありました。
          </p>
        </div>
        <div class="detail">
          <div class="topic">
            <h2>
              私の知らない世界を<wbr>
              のぞけました
            </h2>
            <div class="person">
              <img
                alt="global"
                src="@/assets/images/global-youth-dialogue/voice3.png"
              >
              <p>
                日本｜神戸大学<wbr>2年<br>呉未歌さん
              </p>
            </div>
          </div>
          <p class="voice-text">
            違うけれど同じだ！これがGYDでの一番の衝撃でした。ミャンマーのその子と私の世界の見え方はちょっと違う、でも好きなものがあることとかは同じ！その子の見える世界から私の知らない世界をのぞけました。
          </p>
        </div>
      </div>
      <!-- <h3><span style="font-family: arial;">\</span> SNSでも情報発信中 <span style="font-family: arial;">/</span> </h3>
      <div class="sns">
        <a class="icon" href="https://instagram.com/aiesec_gyd_official?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target="_blank">
          <img src="@/assets/images/global-youth-dialogue/IG.png" alt="Instagram">
        </a>
        <a class="icon" href="https://lin.ee/nYHSxuf" target="_blank">
          <img src="@/assets/images/global-youth-dialogue/line.png" alt="LINE">
        </a>
        <a class="icon" href="https://note.com/aiesec_japan/n/n507bb45b442a" target="_blank">
          <img src="@/assets/images/global-youth-dialogue/note.png" alt="note">
        </a>
      </div> -->
      <!-- <BaseRoundButton
        v-bind="this.ButtonProps"
        :label="'参加者の声はこちら'"
      /> -->
    </div>
  </div>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";

export default {
  data() {
    return {
      ButtonProps: {
        textColor: basic_color.white,
        baseColor: basic_color.deepBlue,
        size: 'large',
        url:'https://note.com/aiesec_japan/n/n507bb45b442a'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gyd-container {
  position: relative;
  margin: 0 0 3rem 0;
  width: 100vw;

  .gyd-contents{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5%;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    h3{
      @include sp{
        font-size: 1.35rem;
      }
    }
  }
}


.gyd-title {
  font-size: 1.35rem;
  margin-top: 5rem;
  margin-bottom: 4rem;
  line-height: 4rem;
  border-bottom: $deep-blue 3px solid;
}
.voice {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  

  @include tab {
    flex-direction: column;
    width: 100%;

  }
}
.detail {
  width: 28vw;
  max-width: 403px;
  padding: 1.7rem;
  border-radius: 1.2em 1.2em 1.2em 0em;  
  box-shadow: 0.1rem  0.1rem 1rem rgba(164, 162, 162, 0.4), -0.02rem  -0.02rem 1rem rgba(164, 162, 162, 0.1);
  

  @include tab {
    width: 430px;
    max-width: none;
    margin: 0 auto 2rem auto;

  }

  @include sp {
    width: 90%;
    margin-bottom: 1.4rem;
  }

  .topic{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;

    @include tab {
      flex-direction: row;
    }
    @include sp {
      flex-direction: column;
    }
    @media (max-width:320px) {
      flex-direction: column;
      align-items: center;
    }

    
    h2{
      font-weight: bold;
      line-height: 1.5;
      color: $deep-blue;
      margin: 1rem 0;
      font-size: 1.2rem;
      word-break: break-all;

      @media (max-width:1350px){
        word-break: keep-all;
      }
      @include sp {
        word-break: break-all;
      }
      @media (max-width:320px) {
          text-align: center;
        }
    }

    .person{
      display: flex;
      justify-content: space-between;
      width: 100%;
      text-align: right;

      @include tab{
        flex-direction: column;
      }
      @include sp {
        flex-direction: row;
      }

      @media (max-width:320px) {
        flex-direction: column;
      }

      img {
        width: 6rem;
        height: 6rem;
        margin-left: 0.6vw;

        @include tab {
          margin-left: auto;
        }
        @include sp {
          margin-left: 0.4rem;
        }
        @media (max-width:320px) {
          margin:0 auto;
        }
      }

      p {
        letter-spacing: 0.5px;
        line-height: 1.5;
        font-size: 0.85rem;
        margin-right: 1vw;
        align-self: center;
        text-align: right;

        @include tab{
          word-break: keep-all;
          margin-right: 0;
          margin-top: 0.6rem;

        }

        @include sp {
          margin-right: 0.8rem;
        }

        @media (max-width:320px) {
          margin:0 auto;
          text-align: center;
        }

      }
    }
  }
  .voice-text{
    padding-top: 1rem;
    text-align: left;
    @include tab{
      padding-top: 0;
    }
    @include sp {
      padding-top: 0.6rem;
    }
  }
}

.sns{
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  @include sp{
    margin: 1rem;
  }
  a{
    padding: 0.5rem 1rem;
      img{
      width: 6rem;
      @include sp{
        width: 3rem;
      }
    }
  }
}
</style>
