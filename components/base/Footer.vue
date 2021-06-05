<template>
  <div class="footer-container">
    <div class="footer-content">
      <h3 class="footer-content-title">AIESEC</h3>
      <p class="footer-description">
        AIESEC(アイセック)は、カナダのモントリオールに本部を置く海外インターンシップの運営を主幹事業とする世界最大級の学生団体です。
        アイセックの日本支部であるアイセック・ジャパンは1962年に創設され、現在では主に大学ごとに25の委員会が活動をしています。
      </p>
    </div>
    <div class="footer-content">
      <h3 class="footer-content-title">About</h3>
      <ul>
        <li>
          <nuxt-link class="footer-content-link" to="/about">団体情報</nuxt-link>
        </li>
        <li>
          <nuxt-link class="footer-content-link" to="/privacy-policy">個人情報の取り扱い</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="footer-content">
      <h3 class="footer-content-title">For Students</h3>
      <ul>
        <li>
          <nuxt-link class="footer-content-link" to="/outgoing">海外インターンシップに参加する</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="footer-content">
      <h3 class="footer-content-title">For Companies</h3>
      <ul>
        <li>
          <nuxt-link class="footer-content-link" to="/incoming">海外インターン生を受け入れる</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="footer-content">
      <h3 class="footer-content-title">Press & Alumni</h3>
      <ul>
        <li>
          <nuxt-link class="footer-content-link" to="">sample text</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  &-container {
    width: 100%;
    padding: 2.5rem 0;
    background-color: $light-gray;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @include tab {
      padding: 0.3rem;
    }
  }

  &-description {
    font-size: 0.75rem;
    width: 11.25rem;
    line-height: 1.5;
    word-break: break-all;

    @include tab {
      width: 100%;
    }
  }

  &-content {
    width: 13.75rem;

    @include tab {
      width: 80%;
      margin: 1rem auto;
    }
  ;

    &-title {
      color: $blue;
      font-size: 1rem;
      font-weight: bold;
      font-style: italic;
      margin-bottom: 1rem;
    }

    &-link {
      font-size: 0.75rem;
      text-decoration: none;
      color: $dark-gray;
    }

    li {
      margin-bottom: 0.5rem;
    }
  }
}

</style>
