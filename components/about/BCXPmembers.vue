<template>
  <div class="kadai-container">
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
</template>


<style scoped lang="scss">
.kadai-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
  h1 {
    color: $blue;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }
}
.kadai-table {
  margin-top: 30px;
}
</style>
