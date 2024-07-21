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
            src="@/assets/images/incoming/article/inakanomado/tnm.jpg"
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
                  渡邊 永
                </td>
              </tr>
              <tr class="example-member-info-table-row">
                <td class="example-member-info-table-row-title">
                  所属委員会
                </td>
                <td class="example-member-info-table-row-content">
                  アイセック関西学院大学委員会
                </td>
              </tr>
              <tr class="example-member-info-table-row">
                <td class="example-member-info-table-row-title">
                  学年(当時)
                </td>
                <td class="example-member-info-table-row-content">
                  2年
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
            <p>
              最初は不安の⽅が⼤きかったです。インターン⽣が来⽇するまでは、余裕がありませんでした。<br>
              しかし、アイセックを通して⾃分たちで作った企画が形になり、社会に少ながらずとも影響を与えるんだなと思うとワクワクが⽌まらなかったです。
            </p>
            <p>何が⼀番正しいやり⽅かなんて正直わかりません。けれど、企業様、インターン⽣を含めてどのようなやり⽅が一番やりたいと思えるのかを優先しました。結果的に、振り返るとそれが良かったのかと思います。</p>
          </div>
          <div class="example-member-voice-paragraph">
            <h2 class="example-member-voice-paragraph-question">
              ー 実際にインターンが実現してみての感想を教えてください。
            </h2>
            <p>
              インターン終了直後は正直なところ、このインターンが社会に価値を⽣み出せたか分かりませんでした。ただ、インターンが終わった時にJulioさんから「アイセックでやれて良かった」「このインターンに参加できて嬉しかったし、いろんなことを考えさせられる時間になった」と⾔ってもらえた時は本当にうれしかったです。<br>
              3ヶ⽉間、よく分からないことも含めて必死に試⾏錯誤した結果、それを喜んでくれる⼈が⽬の前にいるといううれしさは、今でも全く忘れていないです。
            </p>
            <p>同時に、今回のインターンは⾃分たちがやりたいこと・やるべきことの始まりにすぎなくて、ここからが勝負だということにも気がつきました。ここからスタートした気持ちでしっかりとインターンシップをつくっていく。その思いを持ち続けられればもっと価値のあるものになるし、⾃分たちが⽬指すものに近づけられると思います。</p>
            <p>そして何よりも⾃分たちがやっていることを本当に必要としてくれる社会を作れるのではないかと思っています。それができて初めて今回のインターンが成功したなと納得できるのかなと思います。</p>
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

  &-member {
    &-title {
      text-align: center;
    }

    h1 {
      margin: 3rem 0 0.5rem;
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
      /* stylelint-disable unit-disallowed-list */
      padding: 2rem;
      margin: 1.5rem 0;
      background: linear-gradient(25deg, rgba(48, 195, 158, 0.2), rgba(3, 126, 243, 0.2));
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
        background-color: $white;
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
