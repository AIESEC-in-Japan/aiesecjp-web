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
            src="#"
            class="example-trainee-info-logo"
            alt="写真"
          >
          <table class="example-trainee-info-table">
            <tbody>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  名前
                </td>
                <td class="example-trainee-info-table-row-content">
                  Tam Thi Ha さん
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  出身国
                </td>
                <td class="example-trainee-info-table-row-content">
                  ベトナム
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  出身大学
                </td>
                <td class="example-trainee-info-table-row-content">
                  HỒ CHÍ MINH CITY OPEN UNIVERSITY
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  専攻
                </td>
                <td class="example-trainee-info-table-row-content">
                  ビジネス英語
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  語学スキル
                </td>
                <td class="example-trainee-info-table-row-content">
                  英語、韓国語、ベトナム語
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="example-trainee-voice">
          <div class="example-trainee-voice-paragraph">
            <h2 class="example-trainee-voice-paragraph-question">
              ー 実際にインターンを終えて、タムさんにはどんな変化がありましたか？
            </h2>
            <p>この経験は、私に忘れがたい思い出と⽇常を出て全く新しい世界への架け橋を与えてくれました。評判通り、素晴らしいメンバーとプログラムが私のような⼈間にも海外インターンシップに参加し、様々な経験をする機会を提供してくれました。<br>
                ⽇本を代表するテクノロジーカンパニーである NEC の研修に参加することができて、私はとても幸せでした。</p>
            <p>インターン内容は、どのようにテクノロジーを使って社会問題を解決するかを学ぶものでした。私にとって⼤変興味深いテーマでした。8週間というインターン期間は充分に⻑いとは⾔えませんが、とても濃い時間でした。<br>
                ビジネスとはどういうことか、とりわけグローバルカンパニーがどう⽴ち動いていくのかを学ぶことができました。</p>
            <p>⽇本の歴史ある⼤企業で働く事は私の夢でした。職場環境はとても洗練されていて、私が慣れ親しんだ⽂化とは異なりました。⽇本⼈は時間調整をして、チームで働くことに⻑けています。みんな上⼿く協働でき、その結果成果が⽣まれます。</p>
            <p>私には NEC の専⾨知識を兼ね揃え優秀なリーダー職の⽅々と働く機会がありました。その機会は私の視野を広げ、コミュニケーション能⼒とマネジメント能⼒を伸ばしてくれました。彼らから問題をどう読み解き、適切な問いをたてるかを学びました。解が求められるのは適切な問いあってこそだからです。</p>
            <p>また、⽇本流の同僚や友達との付き合い⽅も学びました。⽇本⼈は、ビジネスにおいて時間を守るなど、本当に礼儀正しく親切です。その習慣はベトナム⼈も真似るべきだと感じました。</p>
          </div>
          <div class="example-trainee-voice-paragraph">
            <h2 class="example-trainee-voice-paragraph-question">
              ー タムさんにとって、このインターンシップはどのような経験でしたか？
            </h2>
            <p>この3ヶ⽉間はこれまで私が過ごして来た中で最も素晴らしい時間でした。たくさんのことを学びハイレベルな職場環境で働くことができたことに加えて、先進国において私にとって新鮮な⽂化で⽣活するという挑戦もできたし、それぞれ異なった⽂化をもつ海外の友⼈達との出会いもありました。<br>
                彼らとの関わりで私はとてもわくわくして過ごすことができ、それぞれ違った肌をもっているように私の⼈⽣を彩ってくれました。</p>
            <p>すべて素敵な思い出として刻まれています。それらは今もなお私を強く奮い⽴たせてくれる原点です。</p>
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
        width: 240px;
        height: 160px;
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
