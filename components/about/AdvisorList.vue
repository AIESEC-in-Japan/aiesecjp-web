<template>
  <div class="aboutus-table-container">
    <h2 class="aboutus-table-title">
      諮問一覧
    </h2>
    <AboutCustomTable :list-data="items" />
  </div>
</template>

<script>
  export default{
    data: () =>{
      return{
        items:[
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
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

// 原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

</style>
