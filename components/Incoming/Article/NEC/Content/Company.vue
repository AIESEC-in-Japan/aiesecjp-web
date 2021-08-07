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
                  日本電気株式会社 / NEC Corporation
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  業種
                </td>
                <td class="example-company-info-table-row-content">
                  パブリック/エンタープライズ/テレコムキャリア/システムプラットフォーム
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  設立
                </td>
                <td class="example-company-info-table-row-content">
                  1899年
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  規模
                </td>
                <td class="example-company-info-table-row-content">
                  単独 21,444 名、連結 107,729 名
                </td>
              </tr>
              <tr class="example-company-info-table-row">
                <td class="example-company-info-table-row-title">
                  受入部署
                </td>
                <td class="example-company-info-table-row-content">
                  事業イノベーション戦略本部
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
            <p>NECでは、安全・安心・効率・公平な社会の実現に貢献するため、社会ソリューション事業に注力しています。真の社会ソリューション事業を創りだすためには、解くべき社会問題を深く理解し、洞察することが不可欠です。</p>
            <p>しかしながら、海外、特に発展途上国にはオフィスにいる⽇本⼈には想像もできない問題が多く存在します。そこで、NECは外国⼈学⽣を対象とした、⾃国の社会問題分析と新事業提案のインターンシップを実施することにしました。</p>
            <p>優秀かつ情熱を持つ学⽣を探すため選考に⼒を⼊れ、ショートエッセイによる書類選考やビデオ会議⾯接などを⾏いました。全世界200名ほどの応募者の中から、ベトナム⼈のタムさんを本インターンの第1号として受け⼊れることに決定しました。</p>
          </div>
          <div class="example-company-voice-paragraph">
            <h2 class="example-company-voice-paragraph-question">
              ー 実際にインターン生を受け入れてみて、社内外に何か変化はありましたか？
            </h2>
            <p>タムさんは、ベトナムの⾷の安全に対して⾼い問題意識を持っていました。彼⼥は、ベトナム⼈ならではの着眼点も⼤切にしながら、⽂献調査や専⾨家ヒアリングなど専⾨的な市場調査⼿法を⽤いた分析を進めていきました。<br>
                さらに、社内外でのディスカッションを通じ、最新テクノロジーやベトナム以外の市場トレンドについても知⾒を広めました。最終発表では、豚⾁のサプライチェーンやステークホルダーの問題点を述べた上で、それぞれに対するソリューションを提案しました。<br>
                既存事業や社内の技術に縛られないインターンシップだからこそのユニークな提案は、どれも⽬を⾒張るものがありました 。</p>
            <p>また、彼⼥の社会問題解決への情熱と⾔語や⽂化の壁を乗り越えてコミュニケーションしようとする姿勢は、周囲の1⼈1⼈、そして組織に⼤きな刺激を与えました。<br>
                インターンシップは、学⽣だけでなく受⼊組織にとっても⼤きな学びの機会です。</p>
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
        {src: "2020corporation-logo/nec.jpeg", alt: "NEC株式会社のロゴ"}
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