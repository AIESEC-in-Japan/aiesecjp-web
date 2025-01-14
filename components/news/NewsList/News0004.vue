<template>
  <div class="news-container">
    <div class="news-contents">
      <div class="news-header">
        <div class="news-date">
          <p>25.01.14</p>
        </div>
        <div class="news-category">
          <p>活動報告</p>
        </div>
      </div>
      <h2 class="news-title">
        <span>大阪大学委員会受け入れ事業部でアカデミックセミナーを実施</span>
      </h2>
      <p class="news-text">
        アイセック・ジャパンでは海外の学生を日本の企業に研修生として受け入れていただく受け入れ事業を運営しております。<br>
        2024年8月にアイセック大阪大学委員会にてベトナムから1名の研修生を受け入れました。<br>
        研修での学びを深める一環として、大学教授に講演していただく「アカデミックセミナー」を実施しております。<br>
        2024年9月20日に、名古屋産業大学現代ビジネス学部准教授の今永典秀先生にご講演いただきました。<br>
      </p>
      <p class="text-head">
        アカデミックセミナーの内容<br>
      </p>
      <p class="news-text">
        前半は、ベトナムから来日した研修生に今回のインターンシップで何を行ったのか・どんな成長ができたのか・これからどう活かすのかについてプレゼンテーションをしてもらいました。<br>
        そして後半は、名古屋産業大学現代ビジネス学部准教授の今永典秀先生に『マーケティング~将来のキャリア選択に向けて~』というテーマのもと、現在の世界におけるマーケティング事情についての話やその観点から未来のキャリア選択についてミニ講義をしていただき、参加学生でグループディスカッションを行いました。<br><br>
      </p>
      <p class="news-text">
        ベトナムの研修生・登壇教授である今永先生の感想をご紹介いたします。<br>
      </p>
      <p class="text-head-sub">
        ベトナムの研修生<br>
      </p>
      <p class="news-text">
        大阪大学でのAIESECのアカデミックセミナーに参加し、異文化交流の素晴らしさを実感しました。私の発表を通じて、若者たちに勇気とインスピレーションを伝えられたことを願っています。スキル向上や自己成長を感じ、国際的な友人たちとのつながりも深まりました。この経験は私の人生において貴重な財産となりました。<br>
      </p>
      <p class="text-head-sub">
        登壇教授・今永典秀先生<br>
      </p>
      <p class="news-text">
        実践経験を有する学生の皆さんが、より良い活動を行うために、積極的・意欲的に参加する様子が伝わってきました。これからも、学びと実践を繰り返し、より良い活動へと発展することを願っています。<br><br>
      </p>
      <p class="text-head">
        今後の展望<br>
      </p>
      <p class="news-text">
        アイセック・ジャパン受け入れ事業部は今後も「平和で人々の可能性が最大限発揮された社会」の実現をめざし、受け入れ事業を通じて若者同士の相互交流・挑戦機会を創出していきます。日本国内のより多くの企業様とその実現に向けて協働していけることを心より願っております。<br><br>
      </p>
      <p class="news-text">
        アイセック・ジャパンでは現在、海外学生を受け入れていただく企業様を募集しています。海外インターンシップ受け⼊れに興味のある企業様は、<a href="/contact/company">お問い合わせフォーム</a>よりお気軽にお問い合わせください。<br><br>
      </p>
      <div class="img-wrapper">
        <div class="img1" />
        <div class="img2" />        
      </div>
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
.text-head{
  font-size: 1.25rem;
  margin: 1rem;
  width: fit-content;
  color: $blue;
  &-sub{
    font-size: 1rem;
    margin: 0.4rem 1rem 0 1rem;
    width: fit-content;
    color: $blue;
  }
}
.news-text{
  font-size: 1rem;
  margin: 1rem;
  width: fit-content;
}

.img-wrapper{
  width: 100%;
  display: flex;
}
.img1{
  background-image: url(~/assets/images/news/news0004_1.jpg);
  background-size: cover;
  background-position: center;
  height: 30vw;
  width: 40vw;
  margin: 3rem auto;
}
.img2{
  background-image: url(~/assets/images/news/news0004_2.jpg);
  background-size: cover;
  background-position: center;
  height: 30vw;
  width: 40vw;
  margin: 3rem auto;

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
