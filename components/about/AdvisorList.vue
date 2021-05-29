<template>
  <div class="advisor-container">
    <div class="advisor-detail">
      <h1>諮問一覧</h1>
      <table class="advisor-table">
        <tr>
          <th>諮問</th>
          <td>田中伸男（公共財団法人笹川平和財団　会長）</td>
        </tr>
        <tr>
          <th>諮問</th>
          <td>根元勝則（一般社団法人日本経済団体連合会　専務理事）</td>
        </tr>
        <tr>
          <th>諮問</th>
          <td>遠藤 功（株式会社ローランド・ベルガー　日本法人会長）</td>
        </tr>
        <tr>
          <th>諮問</th>
          <td>鈴木良伸（有限会社ステージ・フォー・ワン　代表取締役）</td>
        </tr>
        <tr>
          <th>諮問</th>
          <td>堅田航平（五常・アンド・カンパニー株式会社　CFO）</td>
        </tr>
        <tr>
          <th>諮問</th>
          <td>渋谷 直毅（みずほ証券株式会社　ディレクター）</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.advisor-container  {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
  h1  {
   color: $blue;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
.advisor-table  {
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 30px;
  th, td  {
    padding: 24px 16px;
    border-bottom-style: solid; 
    border-bottom-width: 0.5px;
    border-bottom-color: $gray;
  }
  th  {
    text-align: left;
  }
  td  {
    padding-right: 160px;
    padding-left: 50px;
  }
}
</style>
