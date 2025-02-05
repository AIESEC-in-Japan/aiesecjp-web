<template>
  <div class="news-container">
    <div class="news-contents">
      <div class="news-header">
        <div class="news-date">
          <p>25.02.05</p>
        </div>
        <div class="news-category">
          <p>パートナーシップのご提案</p>
        </div>
      </div>
      <h2 class="news-title">
        <span>Indobox株式会社と共同セミナー開催「可能性を広げるインド人材活用の第一歩」</span>
      </h2>
      <p class="news-text">
        特定非営利活動法人アイセック・ジャパン（以下アイセック・ジャパン）は、日本企業のインド進出サポート・インド人材の日本展開を行うIndobox株式会社（本社：愛知県名古屋市、以下Indobox）と「日印研修生交換事業」で連携し、2月28日(金)15時より共同セミナーを開催致します。次世代のグローバルリーダー育成と日本企業のインド理解・インド人材活用を促進します。<br>
        詳しくは <a href="https://prtimes.jp/main/html/rd/p/000000011.000123456.html" target="_blank">プレスリリース</a> をご覧ください。
        
      </p>
      <div class="img-wrapper">
        <div class="img1" />
      </div>
      <p class="text-head">
        セミナー概要<br>
      </p>
      <p class="news-text">
        主催：Indobox株式会社、特定非営利活動法人アイセック・ジャパン<br><br>
        日時：2025年2月28日 (金) 15:00~16:30 ※終了後、個別相談会あり（事前申込制）<br><br>
        場所：上智大学 四ツ谷キャンパス 1号館 407号室  または  オンライン※（ハイブリッド開催）<br>
         (〒102-8554 東京都千代田区紀尾井町７−１) <br>
        ※オンラインのURLリンクは、申し込みされた方へ別途メールで送付いたします。<br><br>
        参加費: 無料<br><br>
        申込締切：2025年2月26日 (水) 17:00<br><br>
      </p>
      <p class="news-text">
        お申し込みは、<a href="https://docs.google.com/forms/d/e/1FAIpQLSc225grU_aMFxsG2hwyiq39Mxy_RHxCQq2NF6deqvg-gGn_cw/viewform" target="_blank">こちら</a> からお願いいたします。<br><br>
      </p>
      <p class="news-text">
        ＜プログラム＞<br>
        １. 講演 『可能性を広げるインド人材活用』<br>
          &nbsp;&nbsp;登壇者：Indobox株式会社 代表取締役 丹治 大佑<br><br>

        ２. パネルディスカッション 『日本人・インド人が協働するには？』(日本語)<br>
          &nbsp;&nbsp;パネリスト<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;アイセック・ジャパン 専務理事 森本 大貴<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;インド人社会人 (日本在住) <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;インド人留学生 (日本在住) <br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;インド人を雇用している日本企業<br>
          &nbsp;&nbsp;モデレーター<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indobox株式会社 代表取締役 丹治 大佑<br><br>

        ３. 日印研修生交換事業についての説明 ( アイセック・ジャパンより) <br>
        ４. Q & A<br>
        ５. 個別相談会 (希望者のみ) <br><br>
      </p>
      
      <p class="news-text">
        皆様のご参加をお待ちしております。<br>
        お問い合わせ・インド人学生インターンシップ受け入れにご興味のある方は <a href="/contact/company">お問い合わせフォーム</a> よりお気軽にお問い合わせください。<br><br>
      </p>
      <div class="img-wrapper">
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
a{
  color: $blue;
}
.img-wrapper{
  width: 100%;
}
.img1{
  background-image: url(~/assets/images/news/news0005_1.webp);
  background-size: cover;
  background-position: center;
  height: 6vw;
  width: 22vw;
  margin: 1rem;
  @media(max-width: 768px){
    height: 10vw;
    width: 32vw;
  }
  @media(max-width: 425px){
    height: 20vw;
    width: 64vw;
  }
}
.img2{
  background-image: url(~/assets/images/news/news0005_2.png);
  background-size: cover;
  background-position: center;
  height: 70.5vw;
  width: 50vw;
  margin: 3rem auto;
  border: 0.6px solid $dark-gray;

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
