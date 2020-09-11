<template>
  <div class="footer-container">
    <div class="footer-desc">
      <h3>AIESEC</h3>
      <p>AIESEC(アイセック)は、カナダのモントリオールに本部を置く海外インターンシップの運営を主幹事業とする世界最大級の学生団体です。アイセックの日本支部であるアイセック・ジャパンは1962年に創設され、現在では主に大学ごとに25の委員会が活動をしています。</p>
    </div>
    <div class="nav-content">
      <h3>About</h3>
      <ul>
        <li>
          <a href="#">AIESECについて</a>
        </li>
        <li>
          <a href="#">パートナーシップについて</a>
        </li>
        <li>
          <a href="#">団体情報</a>
        </li>
        <li>
          <a href="#">安全への取り組み</a>
        </li>
        <li>
          <a href="#">個人情報の取り扱い</a>
        </li>
        <li>
          <a href="#">お問い合わせ</a>
        </li>
      </ul>
    </div>
    <div class="nav-content">
      <h3>For Students</h3>
      <ul>
        <li>
          <a href="#">海外インターンシップに参加する</a>
        </li>
        <li>
          <a href="#">海外ボランティアに参加する</a>
        </li>
        <li>
          <a href="#">体験記を見る</a>
        </li>
        <li>
          <a href="#">参加の流れと費用</a>
        </li>
        <li>
          <a href="#">危機管理サポート</a>
        </li>
        <li>
          <a href="#">話を聞いてみる</a>
        </li>
      </ul>
    </div>
    <div class="nav-content">
      <h3>For Companies</h3>
      <ul>
        <li>
          <a href="#">海外インターン生を受け入れる</a>
        </li>
        <li>
          <a href="#">受け入れ事例を見る</a>
        </li>
        <li>
          <a href="#">受け入れの流れと費用</a>
        </li>
      </ul>
    </div>
    <div class="nav-content">
      <h3>Press & Alumni</h3>
      <ul>
        <li>
          <a href="#">プレスルーム</a>
        </li>
        <li>
          <a href="#">アルムナイの方</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  height: 360px;
  line-height: 36px;
  background-color: $light-gray;

  font-size: 12px;
  color: $dark-gray;
  display: flex;
  padding-top: 40px;
  justify-content: center;
  h3 {
    color: $blue;
    font-size: 16px;
    letter-spacing: 2px;
    position: relative;
    left: 40px;
  }
  a {
    text-decoration: none;
    color: $dark-gray;
  }
}

.footer-desc {
  height: 300px;
  width: 180px;
  line-height: 24px;
  margin: 0px 40px;
  h3 {
    padding: 10px 0px;
    left: 0px;
  }
}

.nav-content {
  height: 300px;
  width: 220px;
  li {
    list-style-type: none;
  }
}
</style>