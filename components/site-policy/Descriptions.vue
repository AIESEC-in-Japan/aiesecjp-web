<template>
  <div class="policy-container">
    <div class="policy-contents">
      <div class="policy-outline" id="outline">
        <a
          class="button-container" 
          v-for="(button, index) in buttons" 
          :key="index"
          :href="button.href" 
          @click="handleClick(index)"
            :class="{ active: activeButtonIndex === index }" 
        >
          <a
            class="button"
          >
            <p>{{ button.text }}</p>
          </a>
          <p class="button-nextText">{{ button.nextText }}</p>
        </a>
      </div>
      <div class="policy-content">
        <h2  id="p1" class="policy-content-title">
          1. 免責事項
        </h2>
        <p>
          アイセック・ジャパンは、細心の注意を払って当ウェブサイトに情報を掲載しておりますが、この情報の正確性および完全性、有用性を保証するものではありません。また、予告なしに、当ウェブサイトに掲載されている情報を変更・中止することがあります。関係者の皆様が当ウェブサイトに記載された情報をご利用になる場合は、ご利用目的に応じ各自のご判断と責任において行ってください。また、アイセック・ジャパンは、皆様が当ウェブサイトに含まれる情報もしくは内容をご利用されたことで直接・間接的に生じた損失に関し一切責任を負うものではありません。さらに、当ウェブサイトのご利用に起因するソフトウェア、ハードウェア上の事故その他の損害についても責任を負いかねます。なお、予告なしに当ウェブサイトの運営を中断または中止することがありますので、あらかじめご了承ください。
        </p>

        <h2  id="p2" class="policy-content-title">
          2. 準拠法および管轄裁判所
        </h2>
        <p>
          当ウェブサイトの内容および当サイトポリシー、免責事項の解釈および適用は、別段の定めのない限り、日本国の法律に準拠します。当ウェブサイトへのアクセスはアクセスされた方の皆様の自由意志によるものとし、当ウェブサイトの利用に関しての責任はアクセスされた方にあります。また、当ウェブサイトの利用に関わる全ての紛争については、別段の定めのない限り、東京地方裁判所を第一審の専属管轄裁判所とします。
        </p>
        <h2  id="p3" class="policy-content-title">
          3. 当ウェブサイトへのリンクについて
        </h2>
        <p>
          当ウェブサイトへのリンクは、営利・非営利を問わず、原則として自由に設定することができます。ただし、以下に記載する事項に該当する場合、またはその恐れがある場合は、リンクの設定をお控えいただくようお願いいたします。
        </p>
        <ul>
          <li>アイセック・ジャパンまたは第三者を誹謗中傷し、あるいはその信用を失墜させる意図を有するウェブサイトからのリンク</li>
          <li>アイセック・ジャパンまたは第三者の知的財産権、財産権、プライバシー権、肖像権、その他の権利を侵害する、または侵害する恐れのあるウェブサイトからのリンク</li>
          <li>フレーム内で当ウェブサイトを表示するなど、当社コンテンツの出所が不明確となり、第三者に誤解を与える可能性のあるリンク方法</li>
          <li>法令または公序良俗に違反する行為、あるいは当ウェブサイトの運営を妨害する恐れのある行為に関与するウェブサイトからのリンク</li>
          <li>アイセック・ジャパンが保有する登録商標を無断で使用してリンクを設定する行為</li>
        </ul>
        <p>
          上記に該当しない場合であっても、アイセック・ジャパンの判断によりリンクの変更または削除をお願いする場合がございます。<br>
          なお、当ウェブサイトのURLは、予告なく変更される場合がございます。あらかじめご了承ください。
        </p>
        <h2  id="p4" class="policy-content-title">
          4. 個人情報の扱い
        </h2>
        <p>
          アイセック・ジャパンは、情報セキュリティの重要性を認識し、情報セキュリティ基本方針に基づき、プライバシーポリシーの遵守と合わせ、これを遵守することを宣言いたします。
        </p>
        <a href="/privacy-policy">プライバシーポリシー</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { href: "#p1", text: "01", nextText: "免責事項" },
        { href: "#p2", text: "02", nextText: "準拠法および管轄裁判所" },
        { href: "#p3", text: "03", nextText: "当ウェブサイトへのリンクについて" },
        { href: "#p4", text: "04", nextText: "個人情報の扱い" }
      ],
      activeButtonIndex: null
    };
  },
  methods: {
    handleClick(index) {
      this.activeButtonIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.policy {
  height: max-content;

  &-container {
    position: relative;
    margin: 5rem 0;
  }

  &-contents{
    position: relative;
    display: flex;
    margin: 0 5%;

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

    @media(max-width:959px){
      flex-direction: column;
    }
  }

  &-outline{
    width: 30%;
    @media(max-width:959px){
      width: 100%;
      padding-top: 8rem;
      margin-top: -8rem;
      
    }
  }

  &-content {
    width: 70%;
    height: 120vh;
    overflow: scroll;
    scroll-behavior: smooth;
    padding-bottom: 10rem;
    padding-left: 1rem;
    scrollbar-width: none;
    padding-top: 9rem;
    margin-top: -7rem;
    margin-bottom: 3rem;

    
    @media(max-width:959px){
      width: 100%;
      height: auto;
      overflow:visible;
    }

    &-title {
      color: $dark-gray;
      font-size: 1.5rem;
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;

      &::before{
        display: block;
        height: 9rem;
        margin-top: -9rem;
        content: "";
      }

    }

    p {
      font-size: 0.875rem;
      line-height: 2;
    }

    ul {
      list-style: circle;
      margin-left: 1.5rem;
      margin-bottom: 1rem;
    }

    li {
      font-size: 0.875rem;
      margin: 0.5rem auto;
      color: $dark-gray;
      list-style: disc;

    }
    a{
      font-size: 0.875rem;
      color: $blue;
    }
  }
}

.button-container{
  display: flex;
  margin-bottom: 0.8rem;
  margin-left: 3rem;
  transition: all 0.3s ease 0s;
  text-decoration: none;

  .button-nextText{
    display: block;
    font-size: 0.875rem;
    padding: 6px;
    padding-left: 18px;
    margin: auto 0;
  }

  .button{
    position: relative;
    width: 48px;
    height: 48px;
    padding: auto;
    border-radius: 5rem;
    transition: all 0.2s ease 0s;
    text-align: center;
    align-content: center;
    text-decoration: none;

    p{
      display: block;
      margin: 0;
      font-size: 0.875rem;
    }
  }

  &:hover{
    .button{
      border: 1px solid $dark-gray;
      transition: all 0.2s ease 0s;

    }
  }



}

.active{
  .button-nextText{
    color: $blue;
  }
  .button{
      background-color: $blue;
      border: 2px solid $blue;
      transition: all 0.2s ease 0s;
      p{
        color: white;

      }

    }
  &:hover{
    .button{
      border: 2px solid $blue;
    }
  }
}



</style>
