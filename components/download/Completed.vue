<template>
 <div class="download-container">
    <div class="download-contents">
      <p class="download-title">資料ダウンロードが完了しました</p>
      <p class="download-title-description">
        この度は、アイセックにご関心をお寄せいただき、誠にありがとうございます。<br>
        ご不明点・ご質問などございましたら、お気軽にお問い合わせください。
      </p>
      <a class="button" href="../">トップページへ戻る&nbsp;&nbsp;&nbsp;&nbsp;</a>
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
  margin-bottom: 8rem;

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
        text-align: center;
        margin-bottom: 4rem;
      }
    }

    .button{
      color: white;
        position: relative;
        background-color: $blue;
        width: 24rem;
        height: 5.4rem;
        padding: auto;
        margin-top: 1rem;
        border-radius: 5rem;
        border: 2px solid $blue;
        box-shadow:  0 0 24.5px rgba(3, 126, 243,0.22);
        transition: all 0.3s ease 0s;
        font-size: 1.1rem;
        align-items: center;
        display: flex;
        justify-content: center;
        margin-left: auto;
        margin-right: auto; 
        text-decoration: none;

        &:hover{
          transition-duration: .3s;
          transform: scale(1.04);
        }

        &::before {
          content: "";
          position: absolute;
          margin: auto;
          top: 3px;
          bottom: 0;
          right: 26%;
          width: 10px;
          height: 10px;
          border-top: 2px solid #fff;
          border-right: 2px solid #fff;
          transform: rotate(45deg);
        }

      }
  }
}

</style>
