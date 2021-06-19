<template>
  <div class="ogxExperience-container">
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
    <RoundButton
      v-bind="this.ButtonProps"
      :label="'体験記をもっと見る'"
      class="button__margin"
    />
  </div>
</template>

<script>
import {basic_color} from "@/components/base/CommonColor";
export default {
  data() {
    return {
      ButtonProps: {
        textColor: basic_color.blue,
        size: 'large'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ogxExperience-container {
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

  /* stylelint-disable */
  // todo 実際のデータに置き換える時にちゃんと直す
  img {
    padding: 100px;
    width: 300px;
    height: 80px;
    background: $gray;
  }
  /* stylelint-enable */

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

.button__margin {
  margin: 3rem;
}
</style>

