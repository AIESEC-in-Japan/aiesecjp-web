<template>
  <div class="organization-container">
    <div class="organization-contents">
      <div class="organization-outline" id="outline"> 
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
      <div class="organization-content">
        <h2 id="or1" class="organization-table-title">
          役員一覧
        </h2>
        <OrganizationCustomTable :list-data="officers" />
        <h2 id="or2" class="organization-table-title">
          諮問一覧
        </h2>
        <OrganizationCustomTable :list-data="advisers" />
        <h2 id="or3" class="organization-table-title">
          団体情報
        </h2>
        <OrganizationCustomTable :list-data="organization" />
        <h2 id="or4" class="organization-table-title">
          財務情報
        </h2>
        <div class="organization-table"
          v-for="(item, index) in items"
          :key="index"
        >
          <p><a :href="item.link">{{ item.title }}</a></p>
        </div>
        <h2 id="or5" class="organization-table-title">
          コンプライアンス
        </h2>
        <p class="compliance">
          アイセックでは、「コンプライアンス規程」を定め、組織・構成員法令及び社会規範の遵守を図っております。また、「コンプライアンス小委員会」を設け、各種制度の設計・改善施策の実施を行なっています。加えて、外部有識者を委員に含む「ハラスメント対策委員会・倫理小委員会等」も設け、内部通報や労務・ハラスメント対策の対応を行なっています。
        </p>
        <h2 id="or6" class="organization-table-title">
          情報セキュリティ基本方針
        </h2>
        <p class="info-security">
          アイセックは、関係者の皆様の個人情報を厳重に保護するために、以下のような取り組みを行っています。<br>
          （1）個人情報保護規程の制定<br>
          &nbsp;&nbsp;・アイセックは、個人情報保護規程を定め、それに基づいて関係者の方々の個人情報を取り扱います。<br>
          （2）個人情報保護責任者の設置<br>
          &nbsp;&nbsp;・個人情報保護責任者を任命し、全ての情報発信および情報保護が各種ガイドラインに準拠するよう管理しています。<br>
          （3）定期的な内部監査の実施<br>
          &nbsp;&nbsp;・内部監査機関による定期的な監査を実施し、情報セキュリティ対策の有効性を確認し、継続的な改善を図っています。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { href: "#or1", text: "01", nextText: "役員一覧" },
        { href: "#or2", text: "02", nextText: "諮問一覧" },
        { href: "#or3", text: "03", nextText: "団体情報" },
        { href: "#or4", text: "04", nextText: "財務情報" },
        { href: "#or5", text: "05", nextText: "コンプライアンス" },
        { href: "#or6", text: "06", nextText: "情報セキュリティ基本方針" }
      ],
      officers: [
        {
          caption: "会長",
          description:
            "各務茂夫（東京大学 大学院工学系研究科 教授 産学協創推進本部副本部長）",
        },
        {
          caption: "専務理事",
          description: "森本大貴（大阪大学 工学部 4年）",
        },
        {
          caption: "副会長",
          description:
            "西野史子（一橋大学 大学院社会学研究科 教授）",
        },
        {
          caption: "常務理事",
          description: "佐藤夕夏（東京女子大学 現代教養学部 4年）",
        },
        {
          caption: "理事",
          description: "伊藤友章（北海学園大学 経営学部 教授）",
        },
        {
          caption: "理事",
          description: "江夏幾多郎（神戸大学 経済経営研究所 准教授）",
        },
        {
          caption: "理事",
          description: "椙山泰生（椙山女学園大学 現代マネジメント学部 教授 / 学校法人椙山女学園 理事長 / 京都大学 名誉教授）",
        },
        {
          caption: "理事",
          description: "横田一彦（早稲田大学 商学部 教授）",
        },
        {
          caption: "理事",
          description: "米田邦彦（広島修道大学 商学部 教授）",
        },
        {
          caption: "監事",
          description: "太田康広（慶應義塾大学大学院経営管理研究科エーザイチェアシップ基金教授）",
        },
      ],
      advisers:[
        {
          caption : '諮問',
          description : '田中伸男（タナカグローバル（株） CEO）'
        },
        {
          caption : '諮問',
          description : '根本勝則（一般社団法人 東京経営者協会 専務理事）'
        },
        {
          caption : '諮問',
          description : '鈴木美伸（有限会社ステージ・フォー・ワン 代表取締役）'
        },
        {
          caption : '諮問',
          description : '堅田航平（五常・アンド・カンパニー株式会社 CFO）'
        },
        {
          caption : '諮問',
          description : '渋谷直毅'
        },
        {
          caption : '諮問',
          description : '福山和貴（アンダーソン・毛利・友常法律事務所 アソシエイツ）'
        }
      ],
      organization:[
        {
          caption: "団体名",
          description: "特定非営利活動法人アイセック・ジャパン （AIESEC in Japan）",
        },
        { 
          caption: "所轄庁", 
          description: "東京都" },
        {
          caption: "設立",
          description: "1962年 (2001年　特定非営利活動法人格取得)",
        },
        {
          caption: "代表",
          description:
            "各務茂夫 (東京大学 大学院工学系研究科 教授 産学協創推進本部 副本部長)",
        },
        { 
          caption: "専務理事", 
          description: "森本大貴 (大阪大学 4年)"
        },
        {
          caption: "所在地",
          description:
            "〒162-0814 東京都新宿区新小川町4-16飯田橋プラレールビル3F",
        },
        {
          caption: "活動内容",
          description:
            "社会教育の推進を図る活動・国際協力活動を行う団体の運営、又は活動に関する連絡、助言又は援助の活動",
        },
        { 
          caption: "電話番号",
          description: "03-6457-5806"
        },
        {
          caption: "電話受付時間",
          description: "月・水・金 10:00-12:00, 13:00-17:00"
        },
        {
          caption: "FAX番号",
          description: "03-6457-5809"
        },
        {
          caption: "E-mail",
          description: "info@aiesec.jp"
        },
      ],
      items:[
        {
          title : '2023年度 貸借対照表', 
          link : 'https://drive.google.com/file/d/1wn4lZ48LAStr7R-lOaiiv3IIuIHohgAF/view?usp=sharing'
        },
        {
          title : '2023年度 活動計算書',
          link : 'https://drive.google.com/file/d/1Vp91YI-N6NcdYsVSzupheCYU8JpYPftd/view?usp=drive_link'
        },
        {
          title : '2022年度 貸借対照表', 
          link : 'https://drive.google.com/file/d/1pW9Cf6oG9FixUv9q007-0RfRuNNIkcQi/view?usp=drive_link'
        },
        {
          title : '2022年度 活動計算書',
          link : 'https://drive.google.com/file/d/1JrcA01Is7ReEFBFgXz5cObwdhbvOaWPe/view?usp=drive_link'
        },
        {
          title : '2021年度 貸借対照表',
          link : 'https://drive.google.com/file/d/1ToU5i1DBtS1HLg6whwE1V1H3HuF-sgv_/view?usp=drive_link'
        },
        {
          title : '2021年度 活動計算書',
          link : 'https://drive.google.com/file/d/1oyv8OJCvD7i5bus0vGMDiiIAHJO3TvBN/view?usp=drive_link'
        },
        {
          title : '2020年度 貸借対照表',
          link : 'https://drive.google.com/file/d/1ihRHGJmhHu7q8nDBLWgWpVT3W7A8n7p-/view?usp=drive_link'
        },
        {
          title : '2020年度 活動計算書',
          link : 'https://drive.google.com/file/d/1jS3onYGpDy8ERUp468niSjFquRvDMYJ1/view?usp=drive_link'
        },
        {
          title : '2019年度 貸借対照表',
          link : 'https://drive.google.com/file/d/18DmZ70P7w1Xxb-j6-R6Rgeg7Bjao5tjK/view?usp=drive_link'
        },
        {
          title : '2018年度 貸借対照表',
          link : 'https://drive.google.com/file/d/1EWW5pHvheUIjIYaSgmNohDP2bXm7zVdI/view?usp=drive_link'
        }
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
.organization {
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
    color: $dark-gray;

    @media(max-width:959px){
      width: 100%;
      height: auto;
      overflow:visible;
    }

    .organization-table-title {
      font-size: 1.5rem;
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
      color: $blue;

      &::before{
        display: block;
        height: 9rem;
        margin-top: -9rem;
        content: "";
      }

    }
    p{
      line-height: 2;

    }
  }
}

.button-container{
  display: flex;
  margin-bottom: 0.8rem;
  margin-left: 0rem;
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
