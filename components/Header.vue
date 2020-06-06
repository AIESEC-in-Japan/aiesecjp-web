<template>
  <header class="header-container">
    <h1 class="header-logo">
      <a href="/">
        <img src="~/assets/logo-white-300x43.png" alt="AIESEC" />
      </a>
    </h1>

    <nav>
      <ul>
        <li>
          <a href="#student">学生の方</a>
        </li>
        <li>
          <a href="#company">企業の方</a>
        </li>
        <li>
          <a href="#about">アイセックとは</a>
        </li>
        <li>
          <a href="/archive">アーカイブ</a>
        </li>
        <li>
          <a href="/press">プレスルーム</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  position: fixed;
  top: 0;
  background-color: #037ff3;
  width: 100%;
  height: 80px;
  line-height: 80px;

  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0px 5%;

  ul {
    display: flex;
  }
  li {
    margin-left: 30px;
    list-style-type: none;
  }
  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 15px;
  }
  a:hover {
    opacity: 0.7;
  }
  img {
    height: 25px;
  }
}
</style>