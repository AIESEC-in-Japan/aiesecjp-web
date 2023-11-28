<template>
  <section class="global-youth-dialogue-container">
    <h1>過去参加者の声</h1>
    <div class="voice">
      <div class="detail">
        <div class="person">
          <img
            alt="topics"
            src="@/assets/images/global-youth-dialogue/voice1.png"
          >
          <div class="topic">
            <h2>
              深い部分まで話せる<br>
              トピックが魅力的
            </h2>
            <p>
              日本｜筑波大学2年 島大翔さん
            </p>
          </div>
        </div>
        <p class="voice-text">
          関係を構築できるトピックが魅力的でした。対話を積み重ねて、お互いの価値観を相手の人となりを知っているからこそ、話題の深い部分まで話せる関係値はかけがえのないものだと思います。
        </p>
      </div>
      <div class="detail">
        <div class="person">
          <img
            alt="conversation"
            src="@/assets/images/global-youth-dialogue/voice2.png"
          >
          <div class="topic">
            <h2>
              1人の人間として向き<br>
              合うことの大切さ
            </h2>
            <p>
              日本｜立命館大学3年 諸我菜摘さん
            </p>
          </div>
        </div>
        <p class="voice-text">
          人と何かを分かち合うのに、国籍も宗教も何もいらないんだと気づきました。大事なのは、目の前の相手と1人の人間として向き合うことで、相手のバックグラウンドに触れるたびに震えるような感動と喜びがありました。
        </p>
      </div>
      <div class="detail">
        <div class="person">
          <img
            alt="global"
            src="@/assets/images/global-youth-dialogue/voice3.png"
          >
          <div class="topic">
            <h2>
              私の知らない世界を<br>
              のぞけました
            </h2>
            <p>
              日本｜神戸大学2年 呉未歌さん
            </p>
          </div>
        </div>
        <p class="voice-text">
          違うけれど同じだ！これがGYDでの一番の衝撃でした。ミャンマーのその子と私の世界の見え方はちょっと違う、でも好きなものがあることとかは同じ！その子の見える世界から私の知らない世界をのぞけました。
        </p>
      </div>
    </div>
    <h1><span style="font-family: arial;">\</span> SNSでも情報発信中 <span style="font-family: arial;">/</span> </h1>
    <div class="sns">
              <a class="icon" href="https://instagram.com/aiesec_gyd_official?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target="_blank">
                <img src="@/assets/images/global-youth-dialogue/IG.png" alt="Instagram">
              </a>
              <a class="icon" href="https://lin.ee/4lkkd3B" target="_blank">
                <img src="@/assets/images/global-youth-dialogue/line.png" alt="LINE">
              </a>
              <a class="icon" href="https://note.com/aiesec_japan/n/n507bb45b442a" target="_blank">
                <img src="@/assets/images/global-youth-dialogue/note.png" alt="note">
              </a>
            </div>
    <!-- <BaseRoundButton
      v-bind="this.ButtonProps"
      :label="'参加者の声はこちら'"
    /> -->
  </section>
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
.global-youth-dialogue-container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 80%;
}
h1 {
  color: #0070bf;/*$deep-blue*/

}
section {
  min-height: min-content;
  padding: 3rem 1rem;
}
.voice {
  display: flex;
  justify-content: space-evenly;

  @include sp {
    flex-direction: column;
    align-items: center;
  }
}
.detail {
  width: 25rem;
  margin: 4rem 1rem;
  padding: 0.8rem;
  border-radius: 1em 1em 1em 0em;  
  box-shadow: 0.1rem  0.1rem 1rem rgba(164, 162, 162, 0.3), -0.02rem  -0.02rem 1rem rgba(164, 162, 162, 0.1);
  
  @include tab {
    width: 30%;
    margin: 1rem;
  }

  @include sp {
    width: 95%;
    margin: 1rem 0.2rem;
  }

  .person{
    display: flex;
    justify-content: space-between;
    width: 100%;

    @include tab {
        width: 14rem;
    }
    @include sp {
        width: 100%;
    }
    @media (max-width:320px) {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 36%;
      height: 100%;

      @include sp {
        width: 6rem;
      }
    }

    .topic{
      display: flex;
      flex-direction: column;
      width: 60%;
      @media (max-width:320px) {
          width: 80%;
      }
      h2{
        font-weight: bold;
        line-height: 1.5;
        color: $deep-blue;
        margin: 1rem 0;
        font-size: 1.2rem;
      }

      p {
        letter-spacing: 1px;
        line-height: 1.5;
        font-size: 0.815rem;
      }
    }
  }
  .voice-text{
    padding-top: 1rem;
    text-align: left;
  }
}

.sns{
  display: flex;
  justify-content: space-between;

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
