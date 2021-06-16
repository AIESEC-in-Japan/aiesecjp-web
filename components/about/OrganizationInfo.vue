<template>
  <div class="aboutus-table-container">
      <h2 class="aboutus-table-title">団体情報</h2>
      <CustomTable v-bind:listdata="items" />
  </div>
</template>

<script>
export default{
  data: () => {
    return{
      items:[
        {position: '団体名',
        name: '特定非営利活動法人アイセック・ジャパン （AIESEC in Japan）'},

        {position: '所轄庁',
        name: '東京都'},

        {position: '設立',
        name: '1962年 （2001年　特定非営利活動法人格取得）'},

        {position: '代表',
        name: '各務茂夫 （東京大学 大学院工学系研究科教授 産学協創推進本部副本部長）'} ,

        {position: '専務理事',
        name: '菅家 周平（早稲田大学 3年）'},

        {position: '所在地',
        name: '〒162-0814 東京都新宿区新小川町4-16飯田橋プラレールビル3F'},

        {position: '活動内容',
        name: '・社会教育の推進を図る活動\n・国際協力活動\n前各号の掲げる活動を行う団体の運営\n又は活動に関する連絡、助言又は援助の活動'},
        
        //<ul style="margin-left: 1 em">
              //<li>社会教育の推進を図る活動</li>
              //<li>国際協力の活動</li>
            //</ul>
            //前各号の掲げる活動を行う団体の運営 <br />
            //又は活動に関する連絡、助言又は援助の活動},
        
        {position: '電話番号',
        name: '03-6457-5806'},

        {position: 'FAX番号',
        name: '03-6457-5809'},

        {position: 'E-mail',
        name: 'info@aiesec.jp'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
// TODO いずれtable componentを作ってここのstyleを消す。
// 以下を消すと、原因はわからないが、scssが反映されなくなることがあるので消してはいけない。

  // .info{
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
    
  //   ul {
  //   list-style-type: square;
  //   list-style-position: inside;
  //   }
  // }
</style>
