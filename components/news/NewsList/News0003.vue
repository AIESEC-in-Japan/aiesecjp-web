<template>
  <div class="news-container">
    <div class="news-contents">
      <div class="news-header">
        <div class="news-date">
          <p>25.01.06</p>
        </div>
        <div class="news-category">
          <p>その他</p>
        </div>
      </div>
      <h2 class="news-title">
        <span>新年のご挨拶</span>
      </h2>
      <p class="news-text">
        謹んで新年のご挨拶を申し上げます。<br>
        2025年の年頭にあたり、アイセック・ジャパンを代表して、平素より私たちの活動をご支援いただいている皆様に心より感謝申し上げます。<br><br>
        昨年は、海外インターンシップの再開をはじめ、多くの変化があった一年でしたが、皆様の温かいご支援とご理解のおかげで、私たちは多くの挑戦を乗り越えることができました。この場をお借りして、改めて御礼申し上げます。<br><br>
        今年の干支は「乙巳」です。「乙」は困難があっても前に進むことを表し、「巳」は「再生と変化」を意味します。自然界に目を向ければ、草木は強い風雨にさらされても、時には曲がりくねりながら成長し続けます。その姿は、私たちが目指す持続可能な発展や、新しい挑戦に対するしなやかさの象徴とも言えるでしょう。<br><br>
        「持続可能な開発のための2030アジェンダ」としてSDGsが国連総会で採択されたのは2015年です。以来10年が過ぎ、残り5年となりました。2030年の目標達成に向けて、私たちが果たすべき役割はますます重要になっています。<br><br>
        昨年開催された「未来サミット（Summit of the Future）」をはじめとする各国際会議では、政府や企業だけでなく、第三セクター、そして若者の具体的なアクションが強く求められました。私たちアイセックも、その社会的な役割の大きさを改めて自覚し、若者が主体的に行動できる場の提供にさらに尽力してまいります。<br><br>
        アイセックは今、重要な変化の過程にあります。グローバル社会が直面する新たな課題に対して、私たちは若者の力を引き出し、リーダーシップを発揮できる場を創り続けてまいりました。しかし、こうした変化を平和な社会に向けたインパクトにつなげていくためには、未来と過去をつなぐ柔軟な姿勢が求められます。同時に、その変化を確かなものにするためには、私たち一人ひとりが弛まぬ努力を重ねる必要があります。<br><br>
        2025年は、この乙巳の年の持つ「しなやかさと再生」の精神を大切にしながら、私たちの活動をさらに前進させる年にしたいと考えております。社会や経済が急速に変化する中、アイセック・ジャパンが提供する海外インターンシップやリーダーシッププログラムを通じて、より多くの若者が自己のリーダーシップを磨き、世界に貢献できる存在へと成長できるよう努めてまいります。<br><br>
        昨年は、多くの若者が新しい環境で挑戦し、自らの価値観を広げる貴重な経験を積みました。異文化交流を通じて、多様性を受け入れ、他者との協働を深めることで、多くの学びがありました。私たちはその姿に、若者が持つ可能性の大きさを改めて感じています。今後も、若者が持つ無限の可能性を信じ、一人ひとりが自らの力で未来を切り拓ける環境を創り続けることが、私たちの使命であると確信しております。<br><br>
        社会が抱える課題は、個人や一つの組織だけで解決できるものではありません。だからこそ、アイセック・ジャパンは多くのステークホルダーの皆様と協力し、共に未来を築いていく必要があります。2025年は、これまでの取り組みをさらに強化し、持続可能な未来の創造に向けた新たなプロジェクトやパートナーシップの構築にも積極的に取り組んでまいります。<br><br>
        本年も、皆様と共に歩み、共に新たな可能性を切り拓いていけることを心より楽しみにしております。2025年が皆様にとって希望と実りの多い一年となりますよう、心からお祈り申し上げます。引き続き、変わらぬご支援とご協力を賜りますようお願い申し上げます。<br><br>
        2025年 元旦<br>
        特定非営利活動法人アイセック・ジャパン<br>
        専務理事 森本
      </p>
      <div class="button-container">
        <p class="button-nextText">
          お知らせ一覧に戻る
        </p>
        <a
          class="button"
          href="/news"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

.news-container {
  position: relative;
  margin: 8rem 0 10rem 0;
  width: 100%;
  height: max-content;
}

.news-contents{
  position: relative;
  margin: 0 5%;
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }
}

.news-header{
 display: flex;
 justify-content: space-between;
 width: 100%;
}

.news-date{
  padding: 12px 30px 12px 0;  
  text-align: center;
  & p{
  font-size: 1rem;
  margin: 0;
  text-align: center;

  }
}

.news-category{
  margin: 0 0 0 auto;
  text-align: center;
}
.news-category p{
  padding: 12px 30px;  
  width: max-content;
  border: 0.8px $dark-gray  solid;
  border-radius: 3rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
  @media(max-width: 580px){
    padding: 4px 12px;  
    width: fit-content;
    margin-top: 1rem;
    margin-left: auto;
  }
}

.news-title{
  font-size: 2rem;
  text-align: center;
  margin: 2rem auto;
  line-height: 4rem;
  border-bottom: solid 3px $blue;
  width: fit-content;
}

.news-text{
  font-size: 1rem;
  margin: 1rem;
  width: fit-content;
}
a{
  color: $blue;
}
.button-container{
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
.button-nextText{
  display: block;
  font-size: 1.35rem;
  padding: 6px;
  padding-left: 0;
  margin: 0;
}
.button{
  display: inline-block;
  position: relative;
  background-color: $blue;
  width: 50px;
  height: 50px;
  padding: auto;
  margin-left: 16px;
  border-radius: 5rem;
  border: 2px solid $blue;
  box-shadow:  0 0 24.5px rgba(3, 126, 243,0.22);
  transition: all 0.3s ease 0s;

  &:hover{
    transition-duration: .3s;
    transform: scale(1.1);
  }
}

.button::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 10px;
  height: 10px;
  border-top: 1.5px solid #fff;
  border-right: 1.5px solid #fff;
  transform: rotate(45deg);
}


</style>
