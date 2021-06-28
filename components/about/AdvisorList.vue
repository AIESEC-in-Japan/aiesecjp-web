<template>
  <div class="aboutus-table-container">

    <h2 class="aboutus-table-title">諮問一覧</h2>
  </div>
</template>

<script>
  export default{
    data: () =>{
      return{
        items:[
          {
            position : '諮問',
            name : '田中 伸男（公共財団法人笹川平和財団 会長）'
          },
          {
            position : '諮問',
            name : '根元 勝則（一般社団法人日本経済団体連合会 専務理事）'
          },
          {
            position : '諮問',
            name : '遠藤 功（株式会社ローランド・ベルガー 日本法人会長）'
          },
          {
            position : '諮問',
            name : '鈴木 良伸（有限会社ステージ・フォー・ワン 代表取締役）'
          },
          {
            position : '諮問',
            name : '堅田 航平（五常・アンド・カンパニー株式会社 CFO）'
          },
          {
            position : '諮問',
            name : '渋谷 直毅（クレディ・スイス証券株式会社 インターネット・メディア部長）'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

// TODO いずれtable componentを作ってここのstyleを消す。
// 以下を消すと、原因はわからないが、scssが反映されなくなることがあるので消してはいけない。
// .advisor{
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
