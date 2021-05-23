<template>
  <div class="kadai-container">
    <div class="kadai-detail">
      <h1>MCBCXPメンバー一覧</h1>
      <table class="kadai-table">
      <tr>
        <th>統括</th>
        <td>出口啓悟</td>
      </tr>
      <tr>
        <th></th>
        <td>山地和花</td>
      </tr>
      <tr>
        <th></th>
        <td>後藤ひかる</td>
      </tr>
      <tr>
        <th></th>
        <td>霜田翔平</td>
      </tr>
      <tr>
        <th></th>
        <td>岡本大暉</td>
      </tr>
      </table>
    </div>
  </div>
</template>


<style scoped lang="scss">
.kadai-container  {
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
.kadai-table  {
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
