<template>
  <div class="about-container">
    <h2 class="about-aiesec">About AIESEC</h2>
    <p class="about-explain">
      <span>AIESEC(アイセック)は、海外ボランティアや</span><span>海外ボランティアプログラムなどの</span><span>主観事業を通して、世界中の若者のリーダーシップを</span><span>育むことを目指している</span><span>グローバルプラットフォームです。</span><span>1948年にヨーロッパで創設されて以来、</span><span>「平和で、人々の可能性が最大限発揮された社会」の</span><span>実現を目指して活動しています。</span>
    </p>
    <div class="about-contents">
      <div class="about-content">
        <img src="" alt="">
        <p>
          <span>114の国と地域</span>
          <span>の支部</span>
        </p>
      </div>
      <div class="about-content">
        <img src="" alt="">
        <p>
          <span>7000以上の</span>
          <span>パートナー団体</span>
        </p>
      </div>
      <div class="about-content">
        <img src="" alt="">
        <p>
          <span>年間30000件以上の</span>
          <span>経験を提供</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.about-aiesec {
  color: $blue;
  font-size: 24px;
  padding-top: 100px;
  letter-spacing: 2px;
}
.about-explain {
  font-size: 16px;
  letter-spacing: 2px;
  padding-top: 50px;
  max-width: 800px;
  span {
    display: inline-block;
  }
}
.about-contents {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;
}
.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;
  img {
    padding: 100px;
    margin: 2em 0;
    background: $gray;
    border-radius: 10px;
  }
  p {
    max-width: 140px;
    span {
      display: inline-block;
    }
  }
}
</style>
