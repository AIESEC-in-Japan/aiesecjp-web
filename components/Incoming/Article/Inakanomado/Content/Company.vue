<template>
  <div class="example">
    <div class="example-container">
      <div class="example-company">
        <div class="example-company-title">
          <h1>Company's Voice</h1>
          <p>受け入れ企業さまの声</p>
        </div>
        <div class="example-company-info">
          <BaseIconInAssetsPath
            :data="company_logo"
            :is-wide="true"
            class="example-company-info-logo"
          />
          <table class="example-company-info-table">
            <tbody>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  社名
                </td>
                <td class="example-company-info-table-row-content">
                  株式会社いなかの窓
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  業種
                </td>
                <td class="example-company-info-table-row-content">
                  インターネット付随サービス業
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  設立
                </td>
                <td class="example-company-info-table-row-content">
                  2015年
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  規模
                </td>
                <td class="example-company-info-table-row-content">
                  5名
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  受入部署
                </td>
                <td class="example-company-info-table-row-content">
                  本部
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="example-company-voice">
          <div class="example-company-voice-paragraph">
            <h2 class="example-company-voice-paragraph-question">
              ー そもそも、海外インターン生の受け入れを決めた理由はなんですか？
            </h2>
            <p>アイセック関⻄学院⼤学委員会の⽅が営業にきたことがきっかけです。<br>
            海外⽬線で篠⼭地域の良さを⾒つけてもらうため、海外の⼈とのコミュニケーションを取って情報発信をしたいと考えたため受け⼊れを決めました。</p>
          </div>
          <div class="example-company-voice-paragraph">
            <h2 class="example-company-voice-paragraph-question">
              ー 実際にインターン生を受け入れてみて、社内外に何か変化はありましたか？
            </h2>
            <p>海外インターンシップを通して、インターン⽣にウェブサイトの構想、開発、コンテンツ設計までやっていただきました。
            ウェブサイトを作りきったことが1番⼤きく⽬に⾒える変化です。ウェブサイトを通じて、海外の⽬線から篠⼭地域の魅⼒を発信できたと思います。</p>
          </div>
          <div class="example-company-voice-paragraph">
            <h2 class="example-company-voice-paragraph-question">
              ー アイセックのサポートはいかがでしたか？
            </h2>
            <p>海外インターンシップ受け⼊れ期間中、インターン⽣のサポートを丁寧に⾏っていただきました。また、インターン終了後も企業とのコミュニケーションを継続して⾏っていることが良かったです。</p>
          </div>
          <div class="example-company-voice-paragraph">
            <h2 class="example-company-voice-paragraph-question">
              ー 受け⼊れをご検討いただいている企業様へメッセージをお願いします。
            </h2>
            <p>「インターン⽣と何をするか」だけではなく、「AIESECと何をしていくか」も視野に⼊れながらインターン⽣の受け⼊れを検討されるのが双⽅にとって良い結果をもたらすかと思います。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company_logo:
        {src: "2020corporation-logo/inakanomado.png", alt: "株式会社いなかの窓のロゴ"}
    }
  }
}
</script>

<style lang="scss" scoped>
.example {
  &-container {
    max-width: 50rem;
    margin: 4rem auto;
    @include sp {
        width: 100%;
      }
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
      border-bottom: solid $green;
    }

    p {
      margin: auto;
      display: block;
      font-size: 0.875rem;
    }

    &-info {
      padding: 2rem;
      margin: 1.5rem 0;
      background: linear-gradient(25deg, rgba(48,195,158,0.2), rgba(255, 200, 69, 0.2));
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      align-items: center;

      &-logo {
        margin-bottom: 1.5rem;
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
          color: #0A8EA0;
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