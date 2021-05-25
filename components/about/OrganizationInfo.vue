<template>
  <div class="info-container">
    <div class="info-items">
      <h2>団体情報</h2>
      <table class="info-list">
        <tr>
          <th>団体名</th>
          <td>特定非営利活動法人アイセック・ジャパン （AIESEC in Japan）</td>
        </tr>
        <tr>
          <th>所轄庁</th>
          <td>東京都</td>
        </tr>
        <tr>
          <th>設立</th>
          <td>1962年 （2001年　特定非営利活動法人格取得）</td>
        </tr>
        <tr>
          <th>代表</th>
          <td>
            各務茂夫 （東京大学 大学院工学系研究科教授 産学協創推進本部
            副本部長）
          </td>
        </tr>
        <tr>
          <th>専務理事</th>
          <td>森原正希 （早稲田大学創造理工学部建築学科3年）</td>
        </tr>
        <tr>
          <th>所在地</th>
          <td>〒162-0814 東京都新宿区新小川町4-16飯田橋プラレールビル3F</td>
        </tr>
        <tr>
          <th>活動内容</th>
          <td>
            <ul style="margin-left: 1 em">
              <li>社会教育の推進を図る活動</li>
              <li>国際協力の活動</li>
            </ul>
            前各号の掲げる活動を行う団体の運営 <br />
            又は活動に関する連絡、助言又は援助の活動
          </td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td>03-6457-5806</td>
        </tr>
        <tr>
          <th>FAX番号</th>
          <td>03-6457-5809</td>
        </tr>
        <tr>
          <th>E-mail</th>
          <td>info@aiesec.jp</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-container {
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
ul {
  list-style-type: square;
  list-style-position: inside;
}
.info-list {
  margin-top: 30px;
}
</style>
