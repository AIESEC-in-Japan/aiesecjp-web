<template>
  <div class="partners-container">
    <h2>Our Partners</h2>
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
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: $blue;
    font-size: 24px;
    letter-spacing: 2px;
    padding-top: 150px;
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
