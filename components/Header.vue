<template>
  <header class="header-container">
    <nav>
      <ul>
        <li>
          <a href="#">海外インターンシップに参加する</a>
        </li>
        <li>
          <a href="#">海外インターン生を受け入れる</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header-container {
  position:fixed;
  top: 0;
  background-color:transparent;
  width: 100%;
  height: 80px;
  line-height: 80px;

  padding: 0px 5%;
  border-bottom-style: solid; 
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;

  ul {
    display: flex;
    float: right;
  }
  li {
    margin-left: 90px;
    list-style-type: none;
  }
  a {
    color: $gray;
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
    letter-spacing: 2px;
  }
  a:hover {
    opacity: 0.7;
  }
}
</style>