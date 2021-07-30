<template>
  <section class="article-collection-container">
    <div class="article-headline">
      <h1>インターンシップ実例</h1>
      <p class="article-text">アイセックで実際に行なったインターンシップの体験記をご紹介します。</p>
    </div>
    <div class="article-content">
        <v-card elevation="2" href="/article/example-1">
          <div class="v-image v-responsive theme--light" style="height: 250px;"><div class="v-responsive__sizer" style="padding-bottom: 73.9612%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://cdn.vuetifyjs.com/images/cards/cooking.png&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 361px;"></div></div>
          <v-card-title>
            <h2>
              テクノロジーの力で食を変える。母国の課題と向き合うインターンシップ
            </h2>
          </v-card-title>
          <v-card-subtitle>
            <span>作成日</span>
            <span>2019年10月1日</span>
          </v-card-subtitle>
          <div class="article-tag">
            <v-card-text>
              <span class="article-status-icon">受け入れ機関</span>
              <span>日本電気株式会社さま</span>
            </v-card-text>
          </div>
          <div class="article-tag">
            <v-card-text>
              <span class="article-status-icon">インターン生</span>
              <span>Tam ThiHa さん（ベトナム）</span>
            </v-card-text>
          </div>
        </v-card>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.article{

  &-headline {
    margin: 2rem;
    text-align: center;

    h1 {
      margin-top: 6rem;
      margin-bottom: 1rem;
      color: $blue;
    }
    p {
      color: $dark-gray;
      font-size: 1rem;
    }
  }

  &-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem;

    .v-card {
      margin: 1rem;
      padding: .5rem 0;
      width: 25rem;

      h2 {
        color: $blue;
        margin-bottom: .5rem;
      }

      &__text {
        padding: .5rem 1rem;
        .article-status-icon {
          border: solid 1px #CACCD1;
          padding: .2rem
        }
      }
    }

  }
}
</style>