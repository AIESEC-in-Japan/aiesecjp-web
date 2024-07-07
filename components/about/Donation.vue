<template>
    <div class="donation-container">
      <h2 class="donation-title">
        ご寄附について
      </h2>
      <p>
        アイセック・ジャパンは、皆様からのご寄附をコングラント株式会社の寄附ツール経由でお受けしております。<br>
        ご寄附いただける場合は、以下のリンクよりお願い申し上げます。
      </p>
      <p><a href="https://congrant.com/project/aiesec-jp/7564" target="_blank">https://congrant.com/project/aiesec-jp/7564</a></p>
    </div>
</template>
  
  
<style lang="scss" scoped>

// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。
.donation-container{
  position: relative;
    margin: -5rem 10rem 10rem 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
    .donation-title{
      display: inline-block;
        color: $blue;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 0.125rem;
        margin-top: 2.5rem;
        margin-bottom: 1.25rem;
    
        @include sp {
          font-size: 1.25rem;
          margin-top: 1.25rem;
          margin-bottom: 1rem;
        }
    }

    p{
      font-size: 1rem;
      width: fit-content
    }
}
</style>
