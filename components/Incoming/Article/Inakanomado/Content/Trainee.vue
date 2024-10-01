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
            src="@/assets/images/incoming/article/inakanomado/trainee.png"
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
                  Julio Anthony Leonard さん
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  出身国
                </td>
                <td class="example-trainee-info-table-row-content">
                  インドネシア
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  出身大学
                </td>
                <td class="example-trainee-info-table-row-content">
                  Institut Teknologi Sepuluh Nopember
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  専攻
                </td>
                <td class="example-trainee-info-table-row-content">
                  情報エンジニアリング
                </td>
              </tr>
              <tr class="example-trainee-info-table-row">
                <td class="example-trainee-info-table-row-title">
                  語学スキル
                </td>
                <td class="example-trainee-info-table-row-content">
                  英語、インドネシア語
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="example-trainee-voice">
          <div class="example-trainee-voice-paragraph">
            <h2 class="example-trainee-voice-paragraph-question">
              ー インターンシップへの参加を考えたきっかけはなんでしたか？
            </h2>
            <p>
              私はよく、留学⽣をサポートするボランティアに参加していたのですが、彼らはいつも⾃国の⽂化のことや、彼らがどのようにインドネシアに貢献したいのかを話してくれました。<br>
              そんな経験から、私は国境に左右されない時代が来ると信じています。私たちは他国の⼈々と協働していく必要があるのです。このモチベーションが私をインターンシップ参加へと導いてくれました。
            </p>
            <p>他国の⼈々はどんな⾵に働いているのかを知り、関係を築き、今までと異なる環境で働く経験を得るため。また他国ではどんなことが懸念されているのかを知るため。それが海外インターンシップに参加した⽬的でした。</p>
          </div>
          <div class="example-trainee-voice-paragraph">
            <h2 class="example-trainee-voice-paragraph-question">
              ー 実際にインターンを終えて、Julioさんにはどんな変化がありましたか？
            </h2>
            <p>
              いなかの窓でインターンをする前は、私は⾃分には何もないと思っていました。⽇本語もわからない、⾷も⽂化も知らない状態だったので。⾃分⾃⾝のリーダーシップにも期待していませんでした。<br>
              しかし、まったく知らない世界に来て、私は毎⽇新しいことを学ぶ喜びを感じていました。 数⽇経つと⽇本語も少し覚え、周りの⼈々と繋がり、影響を与え合ったり、知識を共有したり、深い絆を作ることができるようになりました。
            </p>
            <p>アイセックとともに⽇本の⽂化に浸った⽇々は、本当に忘れがたい思い出です。また、会社の⼈が私に専⾨的なことを教えて下さる時には胸が⾼鳴りました。</p>
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
    margin: 3rem auto;

    @include sp {
      width: 100%;
    }
  }

  &-trainee {
    &-title {
      text-align: center;
    }

    h1 {
      margin: 3rem 0 0.5rem;
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
      /* stylelint-disable unit-disallowed-list */
      padding: 2rem;
      margin: 1.5rem 0;
      background: linear-gradient(25deg, rgba(244, 137, 36, 0.2), rgba(239, 69, 115, 0.2));
      display: flex;
      flex-flow: column;
      flex-wrap: wrap;
      align-items: center;

      &-logo {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 50%;
        object-position: -10px 0;
        margin-bottom: 1.5rem;
        border: solid 4px #ef4573;
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
          color: #ef4573;
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
