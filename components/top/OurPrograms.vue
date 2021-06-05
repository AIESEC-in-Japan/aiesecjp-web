<template>
  <div class="programs-container">
    <h2>Our Programs</h2>
    <div class="programs-contents">

      <div class="programs-contents-card global-talent">
        <h3>Global Talent</h3>
        <p class="programs-contents-card-text">海外のビジネス界に飛び込む <br>インターンシッププログラム。 <br>海外の企業で力を伸ばし、<br> 世界を、自分を、前進させる経験を。
        </p>
        <p class="programs-contents-card-link">学生の方は <a href="/outgoing">こちらから</a></p>
        <p class="programs-contents-card-link">企業の方は <a href="/incoming">こちらから</a></p>
      </div>

      <div class="programs-contents-card global-volunteer">
        <h3>Global Volunteer</h3>
        <p class="programs-contents-card-text">海外の社会課題解決に挑戦する <br>ボランティアプログラム。 <br>世界を見て、考えて、行動する。<br> 世界に挑戦するための一歩目を。
        </p>
        <p class="programs-contents-card-link">参加については <a href="/outgoing">こちらから</a></p>
      </div>

      <div class="programs-contents-card online-events">
        <h3>Online Events</h3>
        <p class="programs-contents-card-text">世界を身近に感じることのできる<br> オンラインイベント。 <br>国内外の様々な話を聞いて、 <br>知らなかった自分や世界を見つけよう。
        </p>
<!--        FIXME : リンク先あとで入れる -->
        <p class="programs-contents-card-link">参加については <a href="">こちらから</a></p>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.programs {
  &-container {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
      color: $dark-gray;
      font-size: 24px;
      letter-spacing: 2px;
      padding-top: 150px;
    }
  }

  &-contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 100px;

    &-card {
      width: 380px;
      height: 450px;
      font-family: $fonts;
      font-weight: bold;
      border-radius: 10px;
      margin: 8px;

      h3 {
        font-style: italic;
        font-size: 30px;
        line-height: 60px;
        margin: 20px;
        border-bottom: $white solid 2px;
        color: white;
      }

      p {
        text-align: center;
        padding: 20px;
        font-size: 16px;
        color: white;
      }

      &-text {
        line-height: 32px;
        margin-bottom: 20px;
        color: white;
      }

      &-link {
        a {
          color: white;
          text-underline-offset: 2px;
        }
      }
    }
  }
}

.online-events {
  background-color: $green;
}

.global-volunteer {
  background-color: $red;
}

.global-talent {
  background-color: $mint;
}

</style>
