<template>
 <div class="download-container">
    <div class="download-contents">
      <h3 class="download-title">協賛についてのご案内</h3>
      <p class="download-title-description">以下のような機会をご用意しています。企業様に合わせて柔軟に機会をご提案させていただきますので、お気軽にお問い合わせください</p>
      <!--入力修正メッセージ-->
      <div id="message">
      </div>
      <form class="download-form">
        <!--企業名/団体名-->
        <div class="item">
          <label class="question">企業名/団体名<span> *</span></label>
          <input type="text" id="inputName" name="" class="input" placeholder="株式会社ABC" required>
        </div>
        <!--お名前-->
        <div class="item">
          <label class="question">お名前<span> *</span></label>
          <input type="text" name="" class="input" placeholder="山田 太郎" required>
        </div>
        <!--お名前（フリガナ）-->
        <div class="item">
          <label class="question">お名前（フリガナ）<span> *</span></label>
          <input type="text" name="" class="input" placeholder="ヤマダ タロウ" required>
        </div>
        <!--役職-->
        <div class="item">
          <label class="question">役職<span> *</span></label>
          <input type="text" name="" class="input" placeholder="プロダクトマネージャー" required>
        </div>
        <!--メールアドレス-->
        <div class="item">
          <label class="question">メールアドレス<span> *</span></label>
          <input type="email" name="" class="input" placeholder="aiesec@gmail.jp" required>
        </div>
        <!--電話番号-->
        <div class="item">
          <label class="question">電話番号<span> *</span></label>
          <input type="tel" name="" class="input" placeholder="012-3456-7890" required>
        </div>
        <!--興味を持ったきっかけ-->
        <div class="item">
          <label class="question">弊団体のインターンシップに興味を持たれたきっかけを教えてください。<span> *</span></label>
          <div class="radio-group">
            <label><input type="radio" name="" value="インターネット" class="radio"><p>インターネット</p></label>
            <label><input type="radio" name="" value="メールマガジン" class="radio"><p>メールマガジン</p></label>
            <label><input type="radio" name="" value="プレスリリース" class="radio"><p>プレスリリース</p></label>
            <label><input type="radio" name="" value="OBOG向けmonthly newsletter" class="radio"><p>OBOG向けmonthly newsletter</p></label>
            <label><input type="radio" name="" value="OBOG向けFacebookグループ" class="radio"><p>OBOG向けFacebookグループ</p></label>
            <label><input type="radio" name="" value="OBOG向け記念式典" class="radio"><p>OBOG向け記念式典</p></label>
          </div>
        </div>
        <!--回答者について-->
        <div class="item">
          <label class="question">弊団体のインターンシップに興味を持たれたきっかけを教えてください。<span> *</span></label>
          <div class="radio-group">
            <label><input type="radio" name="" value="アイセックとはこれまで関わりがなく、これまでアイセックを知らなかった企業様" class="radio"><p>アイセックとはこれまで関わりがなく、これまでアイセックを知らなかった企業様</p></label>
            <label><input type="radio" name="" value="アイセックとはこれまで関わりがなかったが、アイセックを知っていた企業様" class="radio"><p>アイセックとはこれまで関わりがなかったが、アイセックを知っていた企業様</p></label>
            <label><input type="radio" name="" value="アイセックを介してインターンシップ生を受け入れた経験はないが、過去にアイセックと関わりがある企業様" class="radio"><p>アイセックを介してインターンシップ生を受け入れた経験はないが、過去にアイセックと関わりがある企業様</p></label>
            <label><input type="radio" name="" value="アイセックを介してインターンシップ生を受け入れた経験がある企業様" class="radio"><p>アイセックを介してインターンシップ生を受け入れた経験がある企業様</p></label>
            <label><input type="radio" name="" value="アイセックOBOGの方" class="radio"><p>アイセックOBOGの方</p></label>
          </div>
        </div>
        <div class="item">
          <input type="submit" id="btnSubmit" value="送信する" class="out">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.download-container {
  position: relative;
  margin: 5rem 0 0 0;
  width: 100vw;

  .download-contents{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
    align-items: center;

    .download-title{
      font-size: 1.35rem;
      margin-bottom: 1.8rem;
      line-height: 4rem;
      border-bottom: $blue 3px solid;

      &-description{
        font-size: 1rem;
      }
    }

    .download-form{
      position: relative;
      width: 60%;
      display: flex;
      flex-direction: column;
      margin: 5rem 0  ;
      font-family: $TsukuGoPro;


      .item{
        margin-bottom: 2rem;
        text-align: center;


        .question{
          font-size: 1rem;
          display: block;
          width: 100%;
          margin-bottom: 1rem;
          text-align:left;

          span{
            color: $red;
          }
  
        }
        .input{
          font: $TsukuGoPro;
          width: 100%;
          height: 4rem;
          padding: 0.8rem;
          background-color: $light-gray;
          box-sizing: border-box;
          margin: 0.5em 0;
          align-items: center;
        }
        .radio-group{
          padding: 5px 0px 5px 0px;
          text-align:left;

          label{
            display: flex;
            align-items: center;
            margin-bottom: 0.9rem;
            
            .radio{
              appearance: none; /* デフォルトのスタイルを消す */
              border: 1.8px solid $gray; /* 枠線 */
              border-radius: 50%; /* 枠線を円にする */
              height: 18px; /* ボタンの高さ */
              margin: 0; /* デフォルトのmarginを消す */
              position: relative;
              width: 18px; /* ボタンの幅 */

              &::before {
                background-color: $blue;
                border-radius: 50%;
                bottom: 0;
                content: "";
                height: 12px;
                left: 0;
                margin: auto;
                opacity: 0;
                position: absolute;
                right: 0;
                top: 0;
                width: 12px;
              }
              &:checked::before {
                opacity: 1;
              }
            }
            p{
              margin: 0;
              padding-left: 10px;
              align-items: center;
            }
          }
        }

        .out{
          width: 18rem;
          height: 4rem;
          margin-top: 1rem;
          background-color: $dark-gray;
          color: white;

        }
      }

    }
  }
}

</style>
