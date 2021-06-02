<template>
  <div class="container">
    <h1>インターシップ体験記</h1>
    <div class="articles">
      <article class="article-item">
        <img src="https://via.placeholder.com/200x80">
        <p>
          <span>記事タイトル記事タイトル</span>
          <span>記事タイトル記事タイトル</span>
        </p>
      </article>
      <article class="article-item">
        <img src="https://via.placeholder.com/200x80">
        <p>
          <span>記事タイトル記事タイトル</span>
          <span>記事タイトル記事タイトル</span>
        </p>
      </article>
      <article class="article-item">
        <img src="https://via.placeholder.com/200x80">
        <p>
          <span>記事タイトル記事タイトル</span>
          <span>記事タイトル記事タイトル</span>
        </p>
      </article>
    </div>
     <button href="#">体験記をもっと見る</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
}
h1 {
  color: $blue;
}
.articles {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.article-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 2rem;
  img {
    padding: 100px;
    width: 300px;
    height: 80px;
    background: $gray;
  }
  p {
    margin-top: 1rem;
    max-width: 15rem;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 2px;
    span {
      display: inline-block;
      padding: 0.25rem;
    }
  }
}
button{
  margin: 3rem;
  padding: 1rem 4rem;
  color: $blue;
  background-color: transparent;
  border-radius: 40px;
  border: solid 2px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>

