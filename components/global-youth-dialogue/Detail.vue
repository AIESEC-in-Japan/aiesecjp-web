<template>
  <section class="global-youth-dialogue-container ">
    <h1>About global youth dialogue</h1>
    <p class="explain-text">
      海外の学生との様々な会話を通じて、<br>
      世界をより広く、自分をより深く知ることのできる、主に大学生を対象にした５日間のオンラインイベントです。<br>
      海外の学生とペアを組み、日替わりで設定される会話のトピックに基づいて自分や世界のことを話すことができます。
    </p>
    <div class="feature">
      <div class="detail">
        <img
          alt="topics"
          src="@/assets/images/global-youth-dialogue/notification.svg"
        >
        <h2>
          対話を通して、<br>
          社会に対する新たな気づきを得られます。
        </h2>
        <p>
          海外に行くことが難しい現在でも、global youth dialogueでは海外の大学生との対話を通して日常を飛び出した思いがけない気づきを得ることができます。
        </p>
      </div>
      <div class="detail">
        <img
          alt="conversation"
          src="@/assets/images/global-youth-dialogue/message.svg"
        >
        <h2>
          イベント後も続く、<br>
          世界の仲間との「深いつながり」が得られます。
        </h2>
        <p>
          1日1時間×5日間、ビデオ通話やチャット等で会話をすることができます。短い期間中でも濃密な会話が生まれ、過去の参加者にはバディとイベント後も連絡を取り続けている方も多くいらっしゃいます。
        </p>
      </div>
      <div class="detail">
        <img
          alt="global"
          src="@/assets/images/global-youth-dialogue/global.svg"
        >
        <h2>
          毎日設定されるトピックをもとに、<br>
          英語で様々な会話ができます。
        </h2>
        <p>
          運営が、よりお互いの文化や価値観が知れるような会話トピックを指示させていただきます。「海外の学生と何を話したらいいのかわからない…」という方もお気軽にご参加ください！
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
