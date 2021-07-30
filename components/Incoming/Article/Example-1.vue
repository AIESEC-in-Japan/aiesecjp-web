<template>
  <section class="example-container">
    <div class="example-top">
      <h1 class="example-top-headline">テクノロジーの力で食を変える。母国の課題と向き合うインターンシップ</h1>
      <p class="example-top-text">作成日 2019年10月1日</p>
    </div>
    <img src="#" class="example-thumbnail" alt="後で画像つける">
    <div class="example-company">
        <div class="example-company-title">
          <h1>Company's Voice</h1>
          <p>受け入れ企業さまの声</p>
        </div>
        <div class="example-company-info">
            <img src="#" class="example-company-info-logo" alt="ロゴ">
            <table class="example-company-info-table">
              <tbody>
                <tr class="example-company-info-table-row">
                  <td class="example-company-info-table-row-title">社名</td>
                  <td class="example-company-info-table-row-content">日本電気株式会社 / NEC Corporation</td>
                </tr>
                <tr class="example-company-info-table-row">
                  <td class="example-company-info-table-row-title">業種</td>
                  <td class="example-company-info-table-row-content">パブリック/エンタープライズ/テレコムキャリア/システムプラットフォーム</td>
                </tr>
                <tr class="example-company-info-table-row">
                  <td class="example-company-info-table-row-title">設立</td>
                  <td class="example-company-info-table-row-content">1899年</td>
                </tr>
                <tr class="example-company-info-table-row">
                  <td class="example-company-info-table-row-title">規模</td>
                  <td class="example-company-info-table-row-content">単独 21,444 名、連結 107,729 名</td>
                </tr>
                <tr class="example-company-info-table-row">
                  <td class="example-company-info-table-row-title">受入部署</td>
                  <td class="example-company-info-table-row-content">事業イノベーション戦略本部</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div class="example-company-voice">
            <div class="example-company-voice-paragraph">
                <h2 class="example-company-voice-paragraph-question">ー そもそも、海外インターン生の受け入れを決めた理由はなんですか？</h2>
                <p>NECでは、安全・安心・効率・公平な社会の実現に貢献するため、社会ソリューション事業に注力しています。真の社会ソリューション事業を創りだすためには、解くべき社会問題を深く理解し、洞察することが不可欠です。</p>
                <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            </div>
            <div class="example-company-voice-paragraph">
                <h2 class="example-company-voice-paragraph-question">ー そもそも、海外インターン生の受け入れを決めた理由はなんですか？</h2>
                <p>NECでは、安全・安心・効率・公平な社会の実現に貢献するため、社会ソリューション事業に注力しています。真の社会ソリューション事業を創りだすためには、解くべき社会問題を深く理解し、洞察することが不可欠です。</p>
                <p>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
            </div>
        </div>
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
.example{

  &-top {
    margin: 2rem;

    &-headline {
      color: $blue;
      margin: 1rem 0;
    }
  }

  &-thumbnail {
    width: 100vw;
    height: 240px;
    background-color: $gray;
  }

  &-company {
    &-title {
      text-align: center;
    }

    h1 {
      margin: 4rem 0 0.5rem;
      font-style: italic;
      font-weight: normal;
      display: inline-block;
      padding: 0 1rem 0.5rem;
      border-bottom: solid #000;
    }
    p {
      margin: auto;
      display: block;
      font-size: 0.875rem;
    }

    &-info {
      padding: 2rem;
      margin: 1.5rem 0;
      background-color: $gray;
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      align-items: center;

      &-logo {
        width: 360px;
        height: 240px;
        background-color: $white;
        margin-bottom: 1.5rem;
      }
      &-table {
        font-family: $fonts;
        color: $dark-gray;

        &-row {  
          &-title {
            font-weight: bold;
            text-align: right;
            padding: 0.25rem 1.5rem;
          }
          &-content {

          }
        }
      }
    }

    &-voice {
      padding: 0 1.5rem 1.5rem;

      &-paragraph {
        margin-top: 1.5rem;

        &-question {
          color: $dark-gray;
          margin-bottom: 0.5rem;
        }
        &-answer {
          line-height: 2;
        }
      }
    }
  }
}

.article-content {
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

</style>