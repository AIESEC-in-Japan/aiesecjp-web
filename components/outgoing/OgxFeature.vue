<template>
  <div class="ogxFeature-container">
    <h1>アイセックの海外インターンシップの特徴</h1>
    <div class="feature">
      <div class="detail">
        <img
          src="https://placehold.jp/240x240.png"
          alt=""
          class="partners-content"
        >
        <h2>
          実践的な<br>
          世界への挑戦機会
        </h2>
        <p>
          <span>6週間の間、参加者は現地に存在する社会課題</span>
          <span>や企業課題に自らアプローチします。異国の</span>
          <span>地という挑戦的な環境において実戦的な経験</span>
          <span>を積むことによって、日本では得られない、</span>
          <span>密度の高い成長経験を提供します。</span>
        </p>
      </div>
      <div class="detail">
        <img
          src="https://placehold.jp/240x240.png"
          alt=""
          class="partners-content"
        >
        <h2>
          マネージャーによる<br>
          丁寧なサポート
        </h2>
        <p>
          <span>参加者には問おう先選定時から渡航中、渡航後</span>
          <span>まで、インターン生の皆様を専属マネー</span>
          <span>ジャーがサポートします。渡航前の準備や渡</span>
          <span>航中の壁打ち、渡航後の振り返りなど、参加</span>
          <span>者の成長を二人三脚で最大化します。</span>
        </p>
      </div>
      <div class="detail">
        <img
          src="https://placehold.jp/240x240.png"
          alt=""
          class="partners-content"
        >
        <h2>
          渡航しただけ、で終わらない<br>
          事前・事後プログラム
        </h2>
        <p>
          <span>渡航前には成長計画の明確化や行動設計を行い、</span>
          <span>渡航後は学びの言語化などを通じて、</span>
          <span>「渡航しただけ」で終わらない機会を提供し</span>
          <span>ます。パートナー企業様と共同開催の事前事</span>
          <span>後のプログラムもご用意しております。</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ogxFeature-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 1rem;
}

h1 {
  color: $blue;
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
    color: $blue;
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

