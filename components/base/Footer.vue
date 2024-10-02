<template>
  <footer class="footer-container">
    <div class="footer-bg"></div>
    <div class="footer-wrapper">
      <div class="footer-items">
        <div class="footer-content">
          <h3 class="footer-content-title">
            AIESECについて
          </h3>
          <ul>
            <li>
              <a
                class="footer-content-link"
                href="/about"
                >
                AIESECについてトップ  
              </a>
            </li>
            <li>
              <a
                class="footer-content-link"
                href="/message"
              >
                代表メッセージ
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-content">
          <h3 class="footer-content-title">
            学生の方へ
          </h3>
          <ul>
            <li>
              <a
                class="footer-content-link"
                href="/outgoing"
              >
                海外インターンシップ
              </a>
            </li>
            <li>
              <a
                class="footer-content-link"
                href="/global-youth-dialogue"
              >
                global youth dialogue
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-content">
          <h3 class="footer-content-title">
            企業の方へ
          </h3>
          <ul>
            <li>
              <a
                class="footer-content-link"
                href="/incoming"
              >
                海外インターンシップ受け入れ
              </a>
            </li>
            <li>
              <a
                class="footer-content-link"
                href="/for-company"
              >
                協賛について
              </a>
            </li>
            <!-- 実例集へのリンクを停止 2022/05/22
            <li>
              <a
                class="footer-content-link"
                href="/incoming/article"
              >
                インターンシップ実例
              </a>
            </li>
            -->
          </ul>
        </div>
        <div class="footer-content">
          <h3 class="footer-content-title">
            事業・財務報告
          </h3>
          <ul>
            <li>
              <a
                class="footer-content-link"
                href="/annual-report"
              >
                アニュアルレポート
              </a>
            </li>
            <!-- <li>
              <a
                class="footer-content-link"
                href="/organization#p4"
              >
                財務報告
              </a>
            </li> -->
          </ul>
        </div>
        <div class="footer-content">
          <h3 class="footer-content-title">
            団体概要
          </h3>
          <ul>
            <li>
              <a
                class="footer-content-link"
                href="/organization"
              >
                団体概要トップ
              </a>
            </li>
            <!-- <li>
              <a
                class="footer-content-link"
                href="/organization#or1"
              >
                役員・諮問一覧
              </a>
            </li>
            <li>
              <a
                class="footer-content-link"
                href="/organization#or3"
              >
                団体情報
              </a>
            </li>
            <li>
              <a
                class="footer-content-link"
                href="/organization#or5"
              >
                コンプライアンス
              </a>
            </li>
            <li>
              <a
                class="footer-content-link"
                href="/organization#or6"
              >
                情報セキュリティ基本方針
            </a>
            </li> -->
            <li>
              <a
                class="footer-content-link"
                href="/safety"
              >
                安全への取り組み
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-content">
          <h3 class="footer-content-title">
            &nbsp;
          </h3>
          <ul>
            <li>
              <a
                class="footer-content-link"
                href="/privacy-policy"
              >
                プライバシーポリシー
              </a>
            </li>
            <li>
              <a
                class="footer-content-link"
                href="/site-policy"
              >
                サイトポリシー
              </a>
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
            src="@/assets/images/logo/white-blue-logo.svg"
          >
        </div>
      </div>
    </div>
    <p class="copy-right">© 2024 AIESEC in Japan</p>
  </footer>
</template>


<style lang="scss" scoped>
.footer {
  &-container{
    position:relative;
    height: max-content;
    display: flex;
    flex-direction: column;
    padding: 3rem 0 0 0;
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
    background-image: linear-gradient(160deg,  $blue 28%, $green 100%);
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 10rem 0 0 0;
    box-shadow: 0 -4px 29.2px rgba(0, 0, 0, 0.1);

    @include sp{
      border-radius: 6rem 0 0 0;
    }

  }

  &-wrapper{
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 5rem 1rem 0 5rem;
    @include tab{
      flex-direction: column;
      justify-content: center;
      padding: 5rem 1rem 0 1rem;
      width: 100%;
    }

    @media (min-width:1600px){
      margin: 0 auto;
      max-width: 1440px;
    }

  }
  &-items {
    width: 66%;
    position:relative;
    height: max-content;
    justify-content: center;    
    z-index:10;
    display: grid;
    grid-template-columns: repeat(4,25%);
    
    @media (max-width:1100px) {
      grid-template-columns: repeat(3,35%);
    }
    @include tab {
      width: 100%;
      margin-bottom: 3rem;
      grid-template-columns: repeat(3,30%);
      padding-left: 5vw;
    }
    @media (max-width:710px) {
      grid-template-columns: repeat(2,50%);
      padding-left: 6vw;
      width: 100%;

    }
    @include sp{
      margin-left: 1rem;
    }
  }


  &-content {
    width: 15rem;
    max-width: fit-content;
    margin-right: 2rem;
    margin-bottom: 2rem;
    &:last-child{
      margin: 0;
    }
    @media (max-width:1440px) {
      width: 12rem;
      margin-right: 1rem;
      &:nth-of-type(even){
        margin-right: 0;
      }
    }
    @include tab {
      max-width: auto;
      width: 100%;
      margin-right: 2rem;
      margin-bottom: 2rem;
      &:nth-of-type(even){
        margin-right: 0;
      }
    }
    @media (max-width:710px) {
      margin-right: 3rem;
      &:nth-of-type(even){
        margin-right: 0;
      }
    }
    @include sp {
      margin-right: 1rem;
      &:nth-of-type(even){
        margin-right: 0;
      }
    }

    ul{
      padding: 0;
    }

    &-title {
      color: $blue;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: $white;

      @include sp{
        font-size: 0.8rem;
      }
    }

    &-link {
      font-size: 0.8rem;
      color: $white;
      text-decoration: none;
      font-family:  "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
      @include sp{
        font-size: 0.735rem;
      }
    }

  }
}

.footer-icon{
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin-top: auto;

  @include tab{
    margin: auto;
  }

  .sns-container{}

  .logo-icon{}

  .logo{
    position: relative;
    max-height: 5rem;
    max-width: 18rem;
    text-align: center;

    img{
      width: 100%;
      max-height: 100%;
      @media (max-width:425px) {
          width: 80%;
      }
    }
    
  }
}

.copy-right{
  position: relative;
  display: block;
  bottom: 0;
  color: white;
  font-size: 0.8rem;
  margin-top: 4rem;
  margin-bottom: 0;
  font-family: $YuGothic, $TsukuGoPro;

  @include sp{
    font-size: 0.735rem;
  }
}


</style>
