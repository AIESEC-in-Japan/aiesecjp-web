<template>
  <section class="about-container">
    <h2>アイセックのインターンシップの受け入れ</h2>
    <div class="about-main">
      <div class="about-content">
        <img alt="" src="">
        <h3 class="about-sub-title">海外からのインターン生受け入れに際しての<br>アイセックメンバーによるサポート</h3>
        <p>アイセックのメンバーがそれぞれのインターンシップの サポートをマネージャーとして担当させていただきます。 インターン生の選定の支援、空港への送迎などインターン シップ前後のサポート、そして企業様とインターン生と三
          者での定期的なミーティングの実施などインターンシップ 中のサポートも行っております。</p>
      </div>
      <div class="about-content">
        <img alt="" src="">
        <h3 class="about-sub-title">世界中の学生がインターン候補生となる<br>独自のプラットフォーム</h3>
        <p>アイセック独自のプラットフォームにて、 世界110以上の国と地域のインターン候補生に貴社のイン ターンシップの情報を掲示していただくことが可能です。 近年は特にアジア圏の学生とのマッチング件数が多くなっ
          ておりますが、他の地域であっても応募者の中から最適な
          人材を選定するマッチングをサポートさせていただきます。</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &-container {
    text-align: center;
    margin-top: 40px;

    h2 {
      color: $mint;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: 2px;
      margin: 40px auto;
    }
  }

  &-main {
    display: flex;
    justify-content: space-evenly;
  }

  &-sub-title {
    color: $mint;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 20px auto;
    line-height: 32px;
  }

  &-content {
    width: 450px;

    p {
      font-size: 14px;
      line-height: 28px;
    }
  }
}

img {
  padding: 140px;
  margin: 2em 0;
  background: $gray;
  border-radius: 10px;
}

</style>
