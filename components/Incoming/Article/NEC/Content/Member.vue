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
            src="@/assets/images/icx/article/nec/nec_tnm.jpg"
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
                  犬飼 あゆ美
                </td>
              </tr>
              <tr class="example-member-info-table-row">
                <td class="example-member-info-table-row-title">
                  所属委員会
                </td>
                <td class="example-member-info-table-row-content">
                  アイセック慶應義塾大学委員会
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
              ー どのような思いでこの海外インターンシッププログラムを作りましたか？
            </h2>
            <p>今回のインターンシップは、国連の定める持続可能な開発⽬標（SDGs）をベースとして、社会課題解決をテーマとした⼤企業との協働インターンシップの第1号でした。</p>
            <p>インターン⽣の問題意識ベースでプログラムを作ることで、インターン⽣が本当に求めるものを、私たちの事業に沿う形で提供できたことは嬉しかったです。新たな事業の作り⽅としてこれからアイセック・ジャパン全体でも確⽴していきたいです。</p>
          </div>
          <div class="example-member-voice-paragraph">
            <h2 class="example-member-voice-paragraph-question">
              ー 実際にインターンが実現してみての感想を教えてください。
            </h2>
            <p>タムさんとの対話で忘れられない瞬間があります。それは、彼⼥と将来について話していた時のこと。<br>
                「将来的にもこの⾷の安全に取り組んでいくかはわからない。興味ある課題はたくさんある。けれども、社会課題に携わって社会をよくして⾏きたいという想いは変わらない。そのためには、もっとテクノロジーの知識と、いろんな⼈から知⾒を得たり、提携していくためのコミュニケーション能⼒を⾝につけていかなければならない。」と彼⼥は語ってくれました。</p>
            <p>「そのテクノロジーの知識が必要って感じたきっかけはなに？」と私が聞いたところ、「このNECでのインターンシップだよ！」と答えてくれました。これまで何⼗件もの海外インターンシップ受け⼊れに関わってきましたが、ここまで強くインターン⽣の変化を間近で実感できたのは今回が初めてでした。<br>
                社会課題を変えていきたいという想いを深く共有できたのも初めてかもしれません。</p>
            <p>タムさんからは、アイセックにありがとうという⾔葉と、もっといろんな⼈に参加して欲しいというメッセージをいただくことができました。私⾃⾝、このインターンシップに携われたことを⼼から感謝しています。</p>
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
