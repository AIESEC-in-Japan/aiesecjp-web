<template>
  <div class="aboutus-table-container">
      <h2 class="aboutus-table-title">役員一覧</h2>
      <CustomTable v-bind:listdata="items" />
  </div>
</template>

<script>
  export default{

    data: () => {
      return{
        items:[
          {position :  '会長',
            name : '各務 茂夫（東京大学 大学院工学系研究科 教授 産学協創推進本部 副本部長）'},

          {position :  "専務理事",
            name : "菅家 周平（早稲田大学 3年）"},

          {position :  "副会長",
          name : "松塚 ゆかり（一橋大学森有礼高等教育国際流動化機構 教授）"},

          {position :  "副会長",
          name : "菊地 端夫（明治大学 経営学部 准教授）"},

          {position :  "常務理事",
          name : "余越 優（東京大学 4年）"},

          {position :  "理事",
          name : "伊藤 友章（北海学園大学 経営学部 教授）"},

          {position :  "理事",
          name : "江夏 幾太郎（神戸大学 経済経営研究所 准教授）"},

          {position :  "理事",
          name : "椙山 泰生（京都大学 経済学部 教授）"},

          {position :  "理事",
          name : "横田 一彦（早稲田大学 商学部 教授）"},

          {position :  "理事",
          name : "米田 邦彦（広島修道大学 商学部 教授）"},

          {position :  "監事",
          name : "太田 康広（慶應義塾大学ビジネス・スクール教授）"}
        ],
      };
    },
  };
</script>

   // {position :  "副会長",
   // name : "松塚 ゆかり（一橋大学森有礼高等教育国際流動化機構 教授）"
   // },

   // {position :  "副会長",
   // name : "菊地 端夫（明治大学 経営学部 准教授）"
   // },

   // {position :  "常務理事",
   // name : "余越 優（東京大学 4年）"
   // },

   // {position :  "理事",
    //name : "伊藤 友章（北海学園大学 経営学部 教授）"
   // },

   // {position :  "理事",
   // name : "江夏 幾太郎（神戸大学 経済経営研究所 准教授）"
   // },

   // {position :  "理事",
   // name : "椙山 泰生（京都大学 経済学部 教授）"
   // },

   // {position :  "理事",
   // name : "横田 一彦（早稲田大学 商学部 教授）"
    //},

   /// {position :  "理事",
   // name : "米田 邦彦（広島修道大学 商学部 教授）"
   // },

   // {position :  "監事",
   // name : "太田 康広（慶應義塾大学ビジネス・スクール教授）"
   // }


<style scoped lang="scss">
// TODO いずれtable componentを作ってここのstyleを消す。
// 以下を消すと、原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

  // .officers{
  //   &-container{
  //     width: 800px;
  //     margin: 50px auto;
  //   }

  //   &-title{
  //     color: $blue;
  //     font-size: 24px;
  //     font-weight: bold;
  //     letter-spacing: 2px;
  //     margin-top: 40px;
  //     margin-bottom: 20px;
  //   }

  // }
</style>
