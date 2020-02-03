<template>
  <div class="footer-container">
    <nav class="footer-nav">
      <div class="nav-content">
        <h3>AIESEC</h3>
        <ul>
          <li>トップ</li>
          <li>学生の方</li>
          <li>企業の方</li>
          <li>プレスルーム</li>
        </ul>
      </div>
      <div class="nav-content">
        <h3>ABOUT</h3>
        <ul>
          <li>アイセックとは</li>
          <li>安全への取り組み</li>
          <li>個人情報</li>
          <li>Join AIESEC</li>
        </ul>
      </div>
      <div class="nav-content">
        <h3>CONTACT</h3>
        <ul>
          <li>お問い合わせ</li>
          <li>新歓と採用</li>
          <li>理事会</li>
        </ul>
      </div>
    </nav>
    <div class="copyright">
      <p>
        <small>© 2019 @andmohiko</small>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  height: 500px;
  line-height: 60px;
  position: relative;
  background-color: #f2f2f2;

  color: #aaa;
  // color: #000;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  // justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}

.footer-nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.nav-content {
  height: 400px;
  width: 150px;
  // display: flex;
  // justify-content: center;
  // justify-content: space-between;
  // flex-direction: row;
  // flex-wrap: wrap;
  h3 {
    position: relative;
    left: 40px;
    // justify-content: right;
  }

  ul {
    // display: flex;
  }
  li {
    // margin-left: 30px;
    list-style-type: none;
  }
}
</style>