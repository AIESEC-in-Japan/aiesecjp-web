<template>
  <section class="about-container">
    <h2>アイセックのインターンシップの受け入れ</h2>
    <div class="about-main">
      <div class="about-content">
        <IconInAssetsPath
          :data="icons[0]"
          :key="icons.src"
        />
        <h3 class="about-sub-title">
          海外からのインターン生受け入れに際しての<br>アイセックメンバーによるサポート
        </h3>
        <p>
          アイセックのメンバーがそれぞれのインターンシップのサポートをマネージャーとして担当させていただきます。インターン生の選定の支援、空港への送迎などインターンシップ前後のサポート、そして企業様とインターン生と三者での定期的なミーティングの実施などインターンシップ中のサポートも行っております。
        </p>
      </div>
      <div class="about-content">
        <IconInAssetsPath
          :data="icons[1]"
          :key="icons.src"
        />
        <h3 class="about-sub-title">
          世界中の学生がインターン候補生となる<br>独自のプラットフォーム
        </h3>
        <p>
          アイセック独自のプラットフォームにて、世界110以上の国と地域のインターン候補生に貴社のインターンシップの情報を掲示していただくことが可能です。近年は特にアジア圏の学生とのマッチング件数が多くなっ
          ておりますが、他の地域であっても応募者の中から最適な
          人材を選定するマッチングをサポートさせていただきます。
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        icons: [
          {src: "images/icx/tech-support.svg", alt: ""},
          {src: "images/icx/globe.svg", alt: ""}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.about {
  &-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: $mint;
      font-size: 1.5rem;
      letter-spacing: 2px;
      margin-bottom: 2rem;
    }
  }

  &-main {
    display: flex;
    justify-content: space-evenly;
  }

  &-sub-title {
    color: $mint;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 1rem auto;
    line-height: 1.5;
  }

  &-content {
    width: 450px;

    p {
      font-size: 1rem;
      line-height: 1.75;
    }
  }
}

img {
  margin: 2rem 0;
}

</style>
