<template>
  <section class="article-collection-container">
    <div class="article-headline">
      <h1>Branded Event</h1>
      <p class="article-text">
        Branded Eventの開催実績をご紹介します。
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
          【Re:Global第一弾/第二弾開催報告】<br>
          -グローバルを捉え直す-
          </h2>
        </v-card-title>
        <v-card-subtitle>
          <span>作成日</span>
          <span>2021年12月</span>
        </v-card-subtitle>
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
        text-align: center;
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