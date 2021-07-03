<template>
  <div class="ogxFeature-container">
    <h1>アイセックの海外インターンシップの特徴</h1>
    <div class="feature">
      <div class="detail">
        <BaseIconInAssetsPath
          :data="planetEarthIcon"
        />
        <h2>
          実践的な<br>
          世界への挑戦機会
        </h2>
        <p>
          6週間の間、参加者は現地に存在する社会課題や企業課題に自らアプローチします。異国の地という挑戦的な環境において実戦的な経験を積むことによって、日本では得られない、密度の高い成長経験を提供します。
        </p>
      </div>
      <div class="detail">
        <BaseIconInAssetsPath
          :data="usersIcon"
        />
        <h2>
          マネージャーによる<br>
          丁寧なサポート
        </h2>
        <p>
          参加者には渡航先選定時から渡航中、渡航後まで、インターン生の皆様を専属マネージャーがサポートします。渡航前の準備や渡航中の壁打ち、渡航後の振り返りなど、参加者の成長を二人三脚で最大化します。
        </p>
      </div>
      <div class="detail">
        <BaseIconInAssetsPath
          :data="zoomInIcon"
        />
        <h2>
          渡航しただけ、で終わらない<br>
          事前・事後プログラム
        </h2>
        <p>
          渡航前には成長計画の明確化や行動設計を行い、渡航後は学びの言語化などを通じて、「渡航しただけ」で終わらない機会を提供します。パートナー企業様と共同開催の事前事後のプログラムもご用意しております。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planetEarthIcon:
        {src: "images/ogx/planet-earth.svg", alt: ""},
      usersIcon:
        {src: "images/ogx/users.svg", alt: ""},
      zoomInIcon:
        {src: "images/ogx/zoom-in.svg", alt: ""}
    }
  }
}
</script>

<style lang="scss" scoped>
.ogxFeature-container {
  min-height: 80vh;
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

  @include sp {
    width: 100%;
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
    width: 20rem;
    margin: 0 auto;
    text-align: left;
  }
}
</style>

