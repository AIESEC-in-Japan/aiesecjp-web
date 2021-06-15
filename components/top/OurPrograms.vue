<template>
  <section class="programs-container">
    <h1>Our Programs</h1>
    <div class="programs-contents">
      <div class="programs-contents-card global-talent">
        <h2>Global Talent</h2>
        <p class="programs-contents-card-text">
          海外のビジネス界に飛び込む <br>インターンシッププログラム。 <br>海外の企業で力を伸ばし、<br> 世界を、自分を、前進させる経験を。
        </p>
        <p class="programs-contents-card-link">
          学生の方は <a href="/outgoing">こちらから</a>
        </p>
        <p class="programs-contents-card-link">
          企業の方は <a href="/incoming">こちらから</a>
        </p>
      </div>

      <div class="programs-contents-card global-volunteer">
        <h2>Global Volunteer</h2>
        <p class="programs-contents-card-text">
          海外の社会課題解決に挑戦する <br>ボランティアプログラム。 <br>世界を見て、考えて、行動する。<br> 世界に挑戦するための一歩目を。
        </p>
        <p class="programs-contents-card-link">
          参加については <a href="/outgoing">こちらから</a>
        </p>
      </div>

      <div class="programs-contents-card online-events">
        <h2>Online Events</h2>
        <p class="programs-contents-card-text">
          世界を身近に感じることのできる<br> オンラインイベント。 <br>国内外の様々な話を聞いて、 <br>知らなかった自分や世界を見つけよう。
        </p>
        <!--        FIXME : リンク先あとで入れる -->
        <p class="programs-contents-card-link">
          参加については <a href="">こちらから</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.programs {
  &-container {
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      color: $dark-gray;
      font-size: 1.5rem;
      padding-top: 9rem;
    }
  }

  &-contents {
    padding: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &-card {
      width: 23rem;
      font-family: $fonts;
      font-weight: bold;
      border-radius: 10px;
      margin: 0.5rem;
      padding-bottom: 2rem;

      h2 {
        font-style: italic;
        font-size: 2rem;
        margin: 1rem;
        border-bottom: $white solid 2px;
        color: white;
      }

      p {
        text-align: center;
        padding: 1rem;
        font-size: 1rem;
        color: white;
      }

      &-text {
        line-height: 2;
        margin-bottom: 1rem;
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
