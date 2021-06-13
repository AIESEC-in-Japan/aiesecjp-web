<template>
  <section class="about-container">
    <h2 class="about-aiesec">
      About AIESEC
    </h2>
    <p class="about-aiesec-explain">
      AIESEC(アイセック)は、海外ボランティアや
      海外ボランティアプログラムなどの 主観事業を通して、<br>
      世界中の若者のリーダーシップを 育むことを目指している グローバルプラットフォームです。<br>

      1948年にヨーロッパで創設されて以来、<br>
      「平和で、人々の可能性が最大限発揮された社会」の 実現を目指して活動しています。
    </p>
    <div class="about-wrapper">
      <div class="about-content">
        <img
          alt=""
          src=""
        >
        <p>
          <span>100以上の国と地域</span>
          <span>の支部</span>
        </p>
      </div>
      <div class="about-content">
        <img
          alt=""
          src=""
        >
        <p>
          <span>7000以上の</span>
          <span>パートナー団体</span>
        </p>
      </div>
      <div class="about-content">
        <img
          alt=""
          src=""
        >
        <p>
          <span>年間30000件以上の</span>
          <span>経験を提供</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.about {
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: $fonts;
  }

  &-aiesec {
    color: $blue;
    font-size: 1.5rem;
    padding-top: 6rem;
    font-weight: bold;
    font-style: italic;

    &-explain {
      color: $dark-gray;
      font-size: 1rem;
      line-height: 2;
      padding-top: 3rem;
      max-width: 50rem;
    }
  }

  &-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 3rem;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem;
    color: $dark-gray;

    img {
      padding: 6rem;
      margin: 2rem 0;
      background: $gray;
      border-radius: 10px;
    }

    p {
      max-width: 90%;
      line-height: 2;
      font-weight: bold;
    }
  }
}
</style>
