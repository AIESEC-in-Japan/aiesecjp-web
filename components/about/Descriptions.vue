<template>
  <div class="about-container">
    <div class="about-outline">
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
    <div class="about-content">
      <h2 id="p1" class="aboutus-table-title">
        役員一覧
      </h2>
      <AboutCustomTable :list-data="officers" />
      <h2 id="p2" class="aboutus-table-title">
        諮問一覧
      </h2>
      <AboutCustomTable :list-data="advisers" />
      <h2 id="p3" class="aboutus-table-title">
        団体情報
      </h2>
      <AboutCustomTable :list-data="organization" />
      <h2 id="p4" class="aboutus-table-title">
        財務情報
      </h2>
      <div class="aboutus-table"
        v-for="(item, index) in items"
        :key="index"
      >
        <h3><a :href="item.link">{{ item.title }}</a></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { href: "#p1", text: "01", nextText: "役員一覧" },
        { href: "#p2", text: "02", nextText: "諮問一覧" },
        { href: "#p3", text: "03", nextText: "団体情報" },
        { href: "#p4", text: "04", nextText: "財務情報" }
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
          description : '根本勝則（一般社団法人日本経済団体連合会 専務理事）'
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
.about {
  height: max-content;

  &-container {
    position: relative;
    margin: 1.5rem 2rem;
    display: flex;

  }

  &-outline{
    width: 30%;
  }

  &-content {
    width: 70%;
    height: 120vh;
    overflow: scroll;
    scroll-behavior: smooth;
    padding-bottom: 10rem;
    scrollbar-width: none;
    padding-top: 9rem;
    margin-top: -7rem;
    margin-bottom: 3rem;

    .aboutus-table-title {
      font-size: 1.35rem;
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;

      &::before{
        display: block;
        height: 9rem;
        margin-top: -9rem;
        content: "";
      }

    }

    &__underline {
      text-decoration: underline;
    }

    p {
      font-size: 0.875rem;
      line-height: 2;
    }

    ul {
      list-style: circle;
      margin-left: 1.5rem;
    }

    li {
      margin: 0.5rem auto;
      color: $dark-gray;
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
    font-weight: bold;
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
