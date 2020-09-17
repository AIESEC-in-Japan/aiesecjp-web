<template>
  <div class="about-container">
    <h2 class="about-internship-experience">インターシップ体験記</h2>
    <div class="about-contents">
      <div class="about-content">
        <img src="https://via.placeholder.com/200x80">
        <p>
          <span>記事タイトル記事タイトル</span>
          <span>記事タイトル記事タイトル</span>
        </p>
      </div>
      <div class="about-content">
        <img src="https://via.placeholder.com/200x80">
        <p>
          <span>記事タイトル記事タイトル</span>
          <span>記事タイトル記事タイトル</span>
        </p>
      </div>
      <div class="about-content">
        <img src="https://via.placeholder.com/200x80">
        <p>
          <span>記事タイトル記事タイトル</span>
          <span>記事タイトル記事タイトル</span>
        </p>
      </div>
    </div>
     <button href="#" class="button-experience-detail">体験記をもっと見る</button>
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
.about-internship-experience {
  color: $blue;
  font-size: 24px;
  font-weight: bold;
  padding-top: 100px;
  letter-spacing: 2px;
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
  margin: 0 20px;
  img {
    padding: 100px;
    margin: 2em 0;
    background: $gray;
  }
  p {
    max-width: 250px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: bold;
    span {
      display: inline-block;
      padding: 5px;
    }
  }
}
.button-experience-detail{
  margin: 60px;
  padding: 15px 90px;
  color: $blue;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 2px;
}
</style>