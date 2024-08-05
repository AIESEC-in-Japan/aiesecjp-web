<template>
  <footer class="footer-container">
    <div class="footer-bg"></div>
    <div class="footer-wrapper">
      <div class="footer-content">
        <h3 class="footer-content-title">
          AIESECについて
        </h3>
        <ul>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              ビジョン
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              ミッション
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              バリュー
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              サービス
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer-content">
        <h3 class="footer-content-title">
          学生の方へ
        </h3>
        <ul>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/outgoing"
            >
              海外インターンシップ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/global-youth-dialogue"
            >
              global youth dialogue
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="footer-content">
        <h3 class="footer-content-title">
          企業の方へ
        </h3>
        <ul>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/incoming"
            >
              海外インターンシップ受け入れ
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/for-company"
            >
              協賛について
            </nuxt-link>
          </li>
          <!-- 実例集へのリンクを停止 2022/05/22
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/incoming/article"
            >
              インターンシップ実例
            </nuxt-link>
          </li>
          -->
        </ul>
      </div>
      <div class="footer-content">
        <h3 class="footer-content-title">
          団体概要
        </h3>
        <ul>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/about"
            >
              団体情報
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              理事紹介
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              活動報告
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              委員会紹介
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="footer-content-link"
              to="/#"
            >
              安全への取り組み
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-icon">
      <div class="sns">
        <div class="x"></div>
        <div class="instagram"></div>
      </div>
      <div class="logo">
        <img
          alt="logo"
          src="@/assets/images/logo/blue-logo.png"
        >
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
.footer {
  &-container{
    position:relative;
    height: max-content;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    align-items: center;
    width: 100%;
    

    @include tab{
      flex-direction: column;
      padding: 2rem 0;

    }

  }
  &-bg{
    display: inline;
    position: absolute;
    // background-image: linear-gradient(160deg,  $blue 28%, #00cb9a 100%);
    background-image: linear-gradient(160deg,  $blue 28%, #F2F8FE 100%);
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 10rem 0 0 0;
    box-shadow: 0 -4px 29.2px rgba(0, 0, 0, 0.1);

  }
  &-wrapper {
    width: 100%;
    position:relative;
    height: max-content;
    padding: 6rem 0 1rem 5rem;
    display: flex;
    justify-content: space-around;
    z-index:10;

    @include tab {
      padding: 0.3rem;
    }
  }


  &-content {
    width: 12rem;

    @include tab {
      width: 80%;
      margin: 1rem auto;
    }

    ul{
      padding: 0;
    }

    &-title {
      color: $blue;
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: $white;
    }

    &-link {
      font-size: 0.8rem;
      color: $white;
      text-decoration: none;
      font-family: $YuGothic;
    }

  }
}

.footer-icon{
  position: relative;
  padding-right: 14px;

  .sns-container{}

  .logo-icon{}

  .logo{
    position: relative;
    width: 18rem;
    max-height: 5rem;

    img{
      width: 100%;
      max-height: 100%;
    }

    @include tab{
      width: 18rem;

    }
  }
}




</style>
