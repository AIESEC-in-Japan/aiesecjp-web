<template>
  <div class="message-container">    
    <div class="message-contents">
      <p class="message-title">
        Message
      </p>
      <h2 class="message-title-sub">代表メッセージ</h2>
      
      <div class="message-wrapper">
        <div class="image" alt="代表者"></div>
        <div class="text-wrapper">
          <p class="text-title">
            グローバルに活躍する<br>
            若者のリーダーシップを育んでいきます
          </p>
          <p class="contents">
            私、森本大貴は、このたび、アイセック・ジャパン専務理事に就任することになりましたことを、大変嬉しく思います。<br>
            世界に目を向けますと、人々の価値観、平和のあり方、私たちの生活を支えてきたひとつひとつが大きな変換点を迎えていると感じております。思い返してみますと昨年は、社会のあらゆる領域で不確実性がますます高まり、絶対的な解決策のない難題が複雑に絡み合う中で、AlESECの新たなスタンダートが問い直された一年だったように感じます。<br>
            2024年度は、2025年までの区切りとなるとともに、2030年に向けた新たなスタートとなる一年であると考えております。そのような中で、アイセック今日までに築いてきた現地を訪れ、目で見て、肌で感じるCross-cultural understandingを届けるとともに、最大のリーダーシッププラットフォームとして、価値の発揮できる組織に発展させていく所存です。<br>
            アイセック・ジャパンとして、新たなステージを迎えるにあたって、アイセックメンバー一同、最大限の努力をして参りますので、これからアイセックの更なる発展を応援していただくと共に、引き続きご指導、ご鞭撻をお願いする所存でございます。
          </p>
          <div class="name-wrapper">
            <p class="role">2024年度事務局統括</p>
            <p class="name">森本大貴</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.message {

  &-container {
    position: relative;
    margin: 5rem 0 0 0;
    width: 100vw;

  }
 
  
  &-contents {
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
  }

  &-title{
    color: $blue;
    font-size: 2rem;
  
    &-sub{
      color: $dark-gray;
      font-size: 1.35rem;
    }
  }

  &-wrapper{
    display: flex;
    margin-top: 3rem;
    .image{
        width: 26rem;
        height: 32rem;
        background-image: url(./assets/images/message/message.png);
        background-position: center;
        background-repeat: none;
        background-size: cover;
      }
    .text-wrapper{
      width: 60%;
      padding-top: 0.2rem;
      padding-left: 2.6rem;
      .text-title{
          font-size: 2rem;
      }
      .contents{
        margin-top: 1rem;
        line-height: 1.9;
      }
      .name-wrapper{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        .role{
          font-size: 1rem;
          padding-right: 1rem;
          margin: 0;
        }
        .name{
          font-size: 2rem;
          margin: 0;
        }
      }
    }
  }
}

</style>
