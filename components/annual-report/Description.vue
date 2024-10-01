<template>
  <div class="ar-container">    
    <div class="ar-contents">
      <p class="ar-title">
        Annual Report
      </p>
      <h2 class="ar-title-sub">アニュアルレポート</h2>
      <div class="text-wrapper">
        <p>
          アイセック・ジャパンは、「令和４年度年次報告書」（アニュアルレポート）を発行しました。<br>
          <br>
          主幹事業である海外インターンシップの送り出し事業は、3年ぶりとなる再開の時を迎え、受け入れ事業も再開に向けた準備を重ねて参りました。またオンラインでの異文化交流プログラムでも、若者のリーダーシップと異文化理解を育む経験を届けて参りました。<br>
          <br>
          皆様の多大なるご支援を賜り、厚く感謝申し上げます。<br>
          ぜひご覧ください。<br>
          <br>
          レポートは、下記URLをクリックいただくとPDFファイルにてダウンロードいただけます。<br>
          なお、冊子版をご希望の方は、<a href="/#contact">お問い合わせフォーム</a>までご連絡ください。<br>
        </p>
        <p><a href="https://drive.google.com/file/d/12q7_The2zjM_w7rnsCbzimGxQmYGTYfd/view?usp=drive_link" target="_blank">令和４年度年次報告書</a></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* 一時的な対応。今後はmarkdownで描けるようにするかも */
.ar{
  &-container {
    position: relative;
    margin: 8rem 0 5rem 0;
    width: 100vw;
  }

  &-contents{
    display: flex;
    flex-direction: column;
    margin: 0 5%;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    .text-wrapper{
      width: 100%;
      margin-top: 3rem;

      p{
        font-size: 1rem;
        line-height: 1.9;
      }
      a{
        color: $blue;
      }
    }
  }

  &-title{
    color: $blue;
    font-size: 2rem;
  
    &-sub{
      color: $dark-gray;
      font-size: 1.35rem;
    }
  }
     
  
}


</style>
