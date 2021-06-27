<template>
  <div class="global-youth-dialogue-container">
    <h1>About Global Youth Dialogue</h1>
    <p class="explain-text">
      海外の学生との様々ない会話を通じて。世界を広く、自分をより深く知ることのできる、主に大学生を対象にした５日間のオンラインイベントです。
      海外の学生とペアを組み、日替わりで設定される会話のトピックに基づいて自分や世界のことを話すことができます。
    </p>
    <div class="feature">
      <div class="detail">
        <img
          src="@/assets/images/global-youth-dialogue/notification.svg"
          alt=""
          class="partners-content"
        >
        <h2>
          毎日トピックが設定されるので、話題には困りません。
        </h2>
        <p>
          滝に渡るトピックが毎日用意されているので、「海外の学生と話してみたいけど、何を話したらいいのかわからない！」という方もご心配なく。
        </p>
      </div>
      <div class="detail">
        <img
          src="@/assets/images/global-youth-dialogue/message.svg"
          alt=""
          class="partners-content"
        >
        <h2>
          自分のことから社会のことまで、英語で様々な会話ができます。
        </h2>
        <p>
          会話をする上でのちょっとしたアドバイスやお役立ち会話表現なども提供しているので、普段は英語であまり話さない方も、ぜひ参加をご検討ください！
        </p>
      </div>
      <div class="detail">
        <img
          src="@/assets/images/global-youth-dialogue/global.svg"
          alt=""
          class="partners-content"
        >
        <h2>
          オンラインでも、外国の「今」に触れられます。
        </h2>
        <p>
          海外にはなかなか行きずらい時代ですが、global youth dialogueでは海外の大学生の生の声を聞くことができます！海外の「今」を聞いてみませんか？
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.global-youth-dialogue-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1rem;
}

h1 {
  color: $deep-blue;
}

.explain-text{
  font-weight: bold;
}

.feature {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.detail {
  width: 25rem;
  margin-bottom: 4rem;

  img {
    border-radius: 30px;
  }

  h2 {
    font-weight: bold;
    line-height: 1.5;
    color: $deep-blue;
    letter-spacing: 2px;
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
