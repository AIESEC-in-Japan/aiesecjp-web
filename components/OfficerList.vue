<template>
<div class="officers-container">
  <div class="officers-items">
    <h2>役員一覧</h2>
    <table class="officers-list">
      <tr>
        <th>会長</th>
        <td>各務茂夫（東京大学 大学院工学系研究科 教授 産学協創推進本部 副本部長）</td>
      </tr>
      <tr>
        <th>専務理事</th>
        <td>森原正希（早稲田大学 創造理工学部建築学科 3年）</td>
      </tr>
      <tr>
        <th>副会長</th>
        <td>松塚ゆかり（一橋大学森有礼高等教育国際流動化機構 教授）</td>
      </tr>
      <tr>
        <th>副会長</th>
        <td>菊地端夫（明治大学 経営学部 准教授）</td>
      </tr>
      <tr>
        <th>常務理事</th>
        <td>山内駿介（大阪大学 経済学部 4年）</td>
      </tr>
      <tr>
        <th>理事</th>
        <td>伊藤友章（北海学園大学 経営学部 教授）</td>
      </tr>
      <tr>
        <th>理事</th>
        <td>江夏幾太郎（神戸大学 経済経営研究所 准教授）</td>
      </tr>
      <tr>
        <th>理事</th>
        <td>椙山泰生（京都大学 経済学部 教授）</td>
      </tr>
      <tr>
        <th>理事</th>
        <td>横田一彦（早稲田大学 商学部 教授）</td>
      </tr>
      <tr>
        <th>理事</th>
        <td>横田邦彦（広島修道大学 商学部 教授）</td>
      </tr>
      <tr>
        <th>監事</th>
        <td>太田康広（慶應義塾大学ビジネス・スクール教授）</td>
      </tr>
    </table>
  </div>
</div>
</template>

<style scoped lang="scss">
.officers-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  h2 {
    color: $blue;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
.officers-list {
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 30px;
  th, td {
    padding: 16px;
    border-bottom-style: solid; 
    border-bottom-width: 0.5px;
    border-bottom-color: $gray;
  }
}
</style>
