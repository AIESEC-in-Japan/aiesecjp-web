<template>
  <section class="article-collection-container">
    <div class="article-headline">
      <h1>インターンシップ実例</h1>
      <p class="article-text">
        アイセックで実際に行なったインターンシップの体験記をご紹介します。
      </p>
    </div>
    <div class="article-content">
      <v-card
        elevation="2"
        href="/incoming/article/nec"
        :nuxt="true"
      >
        <div class="v-image v-responsive">
          <div class="v-responsive__content" />
          <div class="v-image__image v-image__image--cover image-nec" />
        </div>
        <v-card-title>
          <h2>
            テクノロジーの力で食を変える。母国の課題と向き合うインターンシップ
          </h2>
        </v-card-title>
        <v-card-subtitle>
          <span>作成日</span>
          <span>2017年8月</span>
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
      <v-card
        elevation="2"
        href="/incoming/article/inakanomado"
        :nuxt="true"
      >
        <div class="v-image v-responsive">
          <div class="v-responsive__content" />
          <div class="v-image__image v-image__image--cover image-inakanomado" />
        </div>
        <v-card-title>
          <h2>
            兵庫県丹波篠山地域における外国人観光客数の誘致
          </h2>
        </v-card-title>
        <v-card-subtitle>
          <span>作成日</span>
          <span>2017年8月</span>
        </v-card-subtitle>
        <div class="article-tag">
          <v-card-text>
            <span class="article-status-icon">受け入れ機関</span>
            <span>株式会社いなかの窓さま</span>
          </v-card-text>
        </div>
        <div class="article-tag">
          <v-card-text>
            <span class="article-status-icon">インターン生</span>
            <span>Julio Anthony Leonardさん(インドネシア)</span>
          </v-card-text>
        </div>
      </v-card>
      <v-card
        elevation="2"
        href="/incoming/article/wellnet"
        :nuxt="true"
      >
        <div class="v-image v-responsive">
          <div class="v-responsive__content" />
          <div class="v-image__image v-image__image--cover image-wellnet" />
        </div>
        <v-card-title>
          <h2>
            異なる価値観の中で「共に生きる」を実践する機会に
          </h2>
        </v-card-title>
        <v-card-subtitle>
          <span>作成日</span>
          <span>2019年3月</span>
        </v-card-subtitle>
        <div class="article-tag">
          <v-card-text>
            <span class="article-status-icon">受け入れ機関</span>
            <span>株式会社ウェル・ネット研究所さま</span>
          </v-card-text>
        </div>
        <div class="article-tag">
          <v-card-text>
            <span class="article-status-icon">インターン生</span>
            <span>Kanyalak Swangsakさん（タイ）</span>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.article {
  &-headline {
    margin: 2rem 1rem;
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
    margin: 2rem 1rem;

    .v-card {
      margin: 1.5rem 1rem;
      padding: 0 0 0.5rem;
      width: 25rem;

      .v-image {
        height: 15rem;
      }

      .v-responsive__content {
        width: 22rem;
      }

      .image-nec {
        background-image: url("~@/assets/images/icx/article/nec/top.png");
        background-position: center center;
      }

      .image-inakanomado {
        background-image: url("~@/assets/images/icx/article/inakanomado/top.jpg");
        background-position: center center;
      }

      .image-wellnet {
        background-image: url("~@/assets/images/icx/article/wellnet/top.png");
        background-position: center center;
      }

      h2 {
        color: $blue;
        margin-bottom: 0.5rem;
      }

      &__text {
        padding: 0.5rem 1rem;

        .article-status-icon {
          border: solid 1px #caccd1;
          padding: 0.2rem;
        }
      }
    }
  }
}
</style>