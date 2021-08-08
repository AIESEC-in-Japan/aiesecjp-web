<template>
  <div class="example">
    <div class="example-container">
      <div class="example-trainee">
        <div class="example-trainee-title">
          <h1>Trainee's Voice</h1>
          <p>インターン生の声</p>
        </div>
        <div class="example-trainee-info">
          <img
            src="@/assets/images/icx/article/nec_trainee.png"
            class="example-trainee-info-logo"
            alt="インターン生の写真"
          >
          <table class="example-trainee-info-table">
            <tbody>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  名前
                </td>
                <td class="example-trainee-info-table-row-content">
                  Kanyalak Swangsak さん
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  出身国
                </td>
                <td class="example-trainee-info-table-row-content">
                  タイ
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  出身大学
                </td>
                <td class="example-trainee-info-table-row-content">
                  Chulalongkorn University
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  専攻
                </td>
                <td class="example-trainee-info-table-row-content">
                  国際政治
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  語学スキル
                </td>
                <td class="example-trainee-info-table-row-content">
                  日本語検定1級
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="example-trainee-voice">
          <div class="example-trainee-voice-paragraph">
            <h2 class="example-trainee-voice-paragraph-question">
              ー インターンシップに参加しようと思った理由はなんでしたか？
            </h2>
            <p>私自身が高齢化社会に興味があるので応募しました。高齢化が進んだら、まず考えられることは社会の労働力が不足になることとお年寄りの介護のことです。数の少ない若者(働く世代の人々)に負担がかかり、国全体の経済力や生産力が落ちてしまう可能性があります。また、もう１つの大きな問題はお年寄りの介護をする若者が減ってしまうことです。</p>
          </div>
          <div class="example-trainee-voice-paragraph">
            <h2 class="example-trainee-voice-paragraph-question">
              ー インターンシップの中で印象的だった出来事があれば教えてください。
            </h2>
            <p>受け入れ企業の代表の方から高齢化問題や介護に関する知識をインプットしてもらい、その上で現場に足を運んだことです。高齢化問題について深く知るきっかけとなりました。<br>
            実際に高齢者がたくさん施設にいる様子や、介護製品をつかっているのをみる経験は、自分にとってとても新鮮でした。自分の国で同じようなことが今後起こるとは想像もつきませんでした。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example {
  &-container {
    max-width: 50rem;
    margin: 4rem auto;
    @include sp {
        width: 100%;
      }
  }
  &-trainee {
    &-title {
      text-align: center;
    }
    h1 {
      margin: 4rem 0 0.5rem;
      font-style: italic;
      font-weight: normal;
      display: inline-block;
      padding: 0 1rem 0.5rem;
      border-bottom: solid $red;
    }
    p {
      margin: auto;
      display: block;
      font-size: 0.875rem;
    }
    &-info {
      padding: 2rem;
      margin: 1.5rem 0;
      background: linear-gradient(25deg, rgba(244,137,36,0.2), rgba(239, 69, 115, 0.2));
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      align-items: center;
      &-logo {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 50%;
        object-position: -10px 0px;
        margin-bottom: 1.5rem;
        border: solid 4px #EF4573;
      }
      &-table {
        font-family: $fonts;
        color: $dark-gray;
        &-row {
          &-title {
            font-weight: bold;
            text-align: right;
            padding: 0.25rem 2rem 0.25rem 0;
            min-width: 6rem;
          }
        }
      }
    }
    &-voice {
      padding: 0 1.5rem 1.5rem;
      &-paragraph {
        margin-top: 1.5rem;
        &-question {
          font-size: 1.25rem;
          color: #EF4573;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1rem;
          line-height: 2;
          padding: 0.5rem 0;
        }
      }
    }
  }
}
</style>
