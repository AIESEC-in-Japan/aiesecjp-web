<template>
  <div class="container">
    <h2 class="about-title">アイセックのインターンシップの受け入れ</h2>
    <div class="about-contents">
      <div class="about-content">
        <img src="https://dora-world.com/uassets/c53/c489eeb54ec6357ff9133d1f01f4c/553_09.jpeg" alt="">
          <h3>海外からのインターン生受け入れに際しての<br>アイセックメンバーによるサポート</h3>
        <div class="about-text">  
          <p>アイセックのメンバーがそれぞれのインターンシップの<br>サポートをマネージャーとして担当させていただきます。<br>インターン生の選定の支援、空港への送迎などインターン<br>シップ前後のサポート、そして企業様とインターン生と三<br>者での定期的なミーティングの実施などインターンシップ<br>中のサポートも行っています。</p>
        </div>
      </div>
      <div class="about-content">
        <img src="https://stat.ameba.jp/user_images/20170223/07/milestonecanada-toronto/80/21/j/o0300030013875149788.jpg" alt="">
          <h3>世界中の学生がインターン候補生となる<br>独自のプラットフォーム</h3>
        <div class="about-text">  
          <p>アイセック独自のプラットフォームにて、<br>世界110以上の国と地域のインターン候補生に貴社のイン<br>ターンシップの情報を提示していただくことが可能です。<br>近年は特にアジア圏の学生とのマッチング件数が多くなっ<br>ておりますが、他の地域であっても応募者の中から最適な<br>人材を選定するマッチングをサポートさせていただきます。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.about-title{
  color: #6ab4bd;
  font-size: 24px;
  margin: 40px;
  letter-spacing: 2px;
  font-family: "游ゴシック","Lato";
}
.about-contents{
  display: flex;
  justify-content: center;
  padding: 0px,60px;
  flex-wrap: wrap;
}
.about-content{
  margin: 0 40px;
  width:400px;
  font-family: "游ゴシック","Lato";
  h3{
    font-size: 16px;
    color:#6ab4bd;
    letter-spacing: 2px;
    padding: 10px 20px;
  }
  p{
    font-size: 12px;
  }
  img{
    width: 200px;
    height: 200px;
    object-fit: cover; 
    border-radius: 10px;/*角の丸み*/
  }
}
</style>

