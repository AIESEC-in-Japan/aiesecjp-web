<template>
  <div class="partners-container">
    <h2>Our Partners</h2>
    <p>
      AIESEC(アイセック)は、海外インターンシップや海外ボランティアプログラムなどの<br>
      主幹事業を通して、世界中の若者のリーダーシップを育むことを目指している<br>
      グローバルプラットフォームです。1948年にヨーロッパで創設されて以来、<br>
      「平和で、人々の可能性が最大限発揮された社会」の実現を目指して活動しています。
    </p>
    <div class="partners-contents">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <img src="https://placehold.jp/240x240.png" alt="" class="partners-content">
      <div class="partners-content-empty"></div>
      <div class="partners-content-empty"></div>
      <div class="partners-content-empty"></div>
      <div class="partners-content-empty"></div>
      <div class="partners-content-empty"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partners-container {
  width: 100%;
  h2 {
    color: $blue;
    font-size: 24px;
    letter-spacing: 2px;
    font-family: "Lato";
    padding-top: 150px;
  }
  p {
    font-size: 16px;
    letter-spacing: 2px;
    font-family: "Lato","YuGothic","游ゴシック";
    padding-top: 75px;
  }
}
.partners-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 75px;
}
.partners-content {
  width: 240px;
  height: 240px;
  margin: 20px;
}
.partners-content-empty {
  width: 240px;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0 20px 0;
}

</style>