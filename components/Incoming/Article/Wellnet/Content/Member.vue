<template>
  <div class="example">
    <div class="example-container">
      <div class="example-member">
        <div class="example-member-title">
          <h1>Member's Voice</h1>
          <p>アイセック担当者の声</p>
        </div>
        <div class="example-member-info">
          <img
            src="@/assets/images/icx/article/nec_tnm.jpg"
            class="example-member-info-logo"
            alt="アイセック担当者の写真"
          >
          <table class="example-member-info-table">
            <tbody>
              <tr class="example-member-info-table-row">
                <td class="example-member-info-table-row-title">
                  名前
                </td>
                <td class="example-member-info-table-row-content">
                  杉田 彩子
                </td>
              </tr>
              <tr class="example-member-info-table-row">
                <td class="example-member-info-table-row-title">
                  所属委員会
                </td>
                <td class="example-member-info-table-row-content">
                  アイセック神戸大学委員会
                </td>
              </tr>
              <tr class="example-member-info-table-row">
                <td class="example-member-info-table-row-title">
                  学年(当時)
                </td>
                <td class="example-member-info-table-row-content">
                  3年
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="example-member-voice">
          <div class="example-member-voice-paragraph">
            <h2 class="example-member-voice-paragraph-question">
              ー インターン生のサポートで意識していたことはなんですか？
            </h2>
            <p>インターン生が日本にきた理由をとにかく引き出し、より多くの学びが与えられるように考えていました。<br>
              また、「高齢者問題に関する知識をもった共創的リーダーになってほしい」という、私自身の思いもあったので、それも同時に達成できるように考えていました。</p>
          </div>
          <div class="example-member-voice-paragraph">
            <h2 class="example-member-voice-paragraph-question">
              ー インターンシップ運営をしてみていかがでしたか？
            </h2>
            <p>人の成長を設計することの難しさを痛感しました。特に、カヌンは生まれた国や価値観が異なり「どういったことが彼女にとって新しいことなのか」「どんな伝え方をすれば私の思いは彼女に届くのか」などはいつも考えていました。</p>
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
  &-member {
    &-title {
      text-align: center;
    }
    h1 {
      margin: 4rem 0 0.5rem;
      font-style: italic;
      font-weight: normal;
      display: inline-block;
      padding: 0 1rem 0.5rem;
      border-bottom: solid $blue;
    }
    p {
      margin: auto;
      display: block;
      font-size: 0.875rem;
    }
    &-info {
      padding: 2rem;
      margin: 1.5rem 0;
      background: linear-gradient(25deg, rgba(48,195,158,0.2), rgba(3,126,243,0.2));
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      align-items: center;
      &-logo {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 50%;
        object-position: 20px 0px;
        margin-bottom: 1.5rem;
        background-color: $gray;
        border: solid 4px $blue;
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
          color: $blue;
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
