<template>
  <section class="global-youth-dialogue-container ">
    <h1>About global youth dialogue</h1>
    <p class="explain-text">
      海外の学生との様々ない会話を通じて。<br>
      世界を広く、自分をより深く知ることのできる、主に大学生を対象にした５日間のオンラインイベントです。<br>
      海外の学生とペアを組み、日替わりで設定される会話のトピックに基づいて自分や世界のことを話すことができます。
    </p>
    <div class="feature">
      <div class="detail">
        <img
          alt="topics"
          src="@/assets/images/global-youth-dialogue/notification.svg"
        >
        <h2>
          毎日トピックが設定されるので、<br>
          話題には困りません。
        </h2>
        <p>
          多岐に渡るトピックが毎日用意されているので、「海外の学生と話してみたいけど、何を話したらいいのかわからない！」という方もご心配なく。
        </p>
      </div>
      <div class="detail">
        <img
          alt="conversation"
          src="@/assets/images/global-youth-dialogue/message.svg"
        >
        <h2>
          自分のことから社会のことまで、<br>
          英語で様々な会話ができます。
        </h2>
        <p>
          会話をする上でのちょっとしたアドバイスやお役立ち会話表現なども提供しているので、普段は英語であまり話さない方も、ぜひ参加をご検討ください！
        </p>
      </div>
      <div class="detail">
        <img
          alt="global"
          src="@/assets/images/global-youth-dialogue/global.svg"
        >
        <h2>
          オンラインでも、<br>
          外国の「今」に触れられます。
        </h2>
        <p>
          海外にはなかなか行きづらい時代ですが、global youth dialogueでは海外の大学生の生の声を聞くことができます！海外の「今」を聞いてみませんか？
        </p>
      </div>
    </div>
  </section>
</template>


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
  color: $deep-blue;
}

section {
  min-height: min-content;
  padding: 3rem 1rem;
}

.explain-text {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
}

.feature {
  display: flex;
  justify-content: space-evenly;

  @include sp {
    flex-direction: column;
  }
}

.detail {
  width: 25rem;
  margin: 4rem 1rem;

  @include tab {
    width: 30%;
    margin: 1rem;
  }

  @include sp {
    width: 90%;
    margin: 1rem;
  }

  img {
    width: 12rem;

    @include sp {
      width: 6rem;
    }
  }

  h2 {
    font-weight: bold;
    line-height: 1.5;
    color: $deep-blue;
    margin: 1rem 0;
  }

  p {
    letter-spacing: 2px;
    line-height: 1.5;

    span {
      display: inline-block;
    }
  }
}
</style>
