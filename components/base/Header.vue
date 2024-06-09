<template>
  <header
    class="header-container"
  >
    <nav>
      <div class="navigation-logo">
        <nuxt-link to="/">
          <img
            alt="logo"
            src="@/assets/images/logo/blue-logo.png"
          >
        </nuxt-link>
      </div>
      <ul
        v-show="!this.$isMobile() || drawer"
        class="navigation-list"
        @click.stop="drawer = !drawer"
      >
        <li
          class="navigation-item"
          @mouseleave="mouseLeaveAction"
          @mouseover="mouseOverAction"
        >
          <nuxt-link
            class="navigation-link"
            to=""
          >
            AIESECについて
          </nuxt-link>
          <!-- <div
            v-show="!this.$isMobile() ? isShowNestedItems : drawer"
            class="navigation-nested"
          >
            <ul class="navigation-nested-list">
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/#"
                >
                  aaaaaaaaaaaaaaa
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/incoming"
                >
                  ミッション
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/safety"
                >
                  企業の方へ
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/#"
                >
                  団体概要
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/#"
                >
                  NEWS
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/#"
                >
                  お問い合わせ
                </nuxt-link>
              </li>
            </ul>
          </div> -->
        </li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to="/#"
          >
            学生の方へ
          </nuxt-link>
        </li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to="/#"
          >
            企業の方へ
          </nuxt-link>
        </li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to="/#"
          >
            団体概要
          </nuxt-link>
        </li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to="/#"
          >
            NEWS
          </nuxt-link>
        </li>
        <li class="navigation-item">|</li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to="/#"
          >
            お問い合わせ
          </nuxt-link>
        </li>
        <!-- 外部リンク -->
        <!-- <li class="navigation-item"> 新歓専用ページ(2022, 2023のみ使用し、2024で削除)
          <div class="lp-button">
            <a
              class="lp-button-text"
              href="https://aiesec.jp/lp/#"
            >
              Recruitment
            </a>
          </div>
        </li> -->
      </ul>
      <div
        v-show="this.$isMobile() && drawer"
        class="filter"
        @click.stop="drawer = false"
      />
      <v-app-bar-nav-icon
        v-show="this.$isMobile()"
        class="navigation-mobile-icon"
        @click.stop="drawer = !drawer"
      >
        <v-icon v-if="drawer">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-menu
        </v-icon>
      </v-app-bar-nav-icon>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowNestedItems: false,
      drawer: false,
    }
  },
  methods: {
    mouseOverAction() {
      this.isShowNestedItems = true
    },
    mouseLeaveAction() {
      this.isShowNestedItems = false
    },
  }
}

</script>

<style lang="scss" scoped>
/* stylelint-disable unit-disallowed-list */
// ここは細かく指定したいので、許容
.header-container {
  z-index: $headerIndex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 90vw;
  height: 5rem;
  line-height: 5rem;
  padding: 0 5%;
  margin: 1rem auto 0 auto;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: rgba(255, 255, 255, 0.66);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 3rem;

  .navigation {
    &-mobile {
      &-icon {
        position: absolute;
        right: 1rem;
        top: 1.5rem;
      }
    }

    &-list {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;

      @include sp {
        z-index: $headerDrawerIndex;
        background-color: $white;
        flex-direction: column;
        position: absolute;
        top: 4rem;
        right: 0;
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
        line-height: 2.5rem;
        width: 100vw;
      }
    }

    &-item {
      margin-left: 3rem;
      list-style-type: none;
      align-items: center;
      margin-left: 2rem;

      @include sp {
        padding-right: 1rem;
        border-top: $gray dashed 1px;
        line-height: 2.5rem;

        &:first-child {
          border-top: none;
        }
      }
    }

    &-nested {
      position: absolute;
      top: 5rem;
      padding: 1rem;
      background-color: $white;
      box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);

      @include sp {
        position: relative;
        top: 0;
        padding: 0.5rem;
        box-shadow: none;
      }

      &-list {
        flex-flow: column;
        padding-left: 0;
        flex-wrap: wrap;


        @include sp {
          border-left: none;
          margin-top: 0;
        }
      }

      &-item {
        padding: 0.5rem;
        list-style-type: none;
        line-height: 2rem;
      }
    }

    &-logo {
      position: absolute;
      top: 10px;
      bottom: 0;
      left: 24px;
      width: 14vw;
      align-items: center;


      img {
        width:105%;
        max-height: 60px;

        @include sp {
          width: 40vw;
        }
      }
    }

    &-link {
      color: black;
      font-weight: bold;
      text-decoration: none;
      font-size: 0.94rem;
      letter-spacing: 0.8px;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}

.filter {
  content: '';
  position: absolute;
  height: calc(100vh - 80px);
  width: 100vw;
  z-index: $headerDrawerBackGroundIndex;
  top: 80px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

/* stylelint-disable */
.lp {
  &-button {
    width: 175px;
    height: 45px;
    background-color: rgb(0, 112, 191);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-top: 16px;
    padding: 0;
    
    &:hover {
      opacity: 0.7;
    }
    
    &-text {
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      letter-spacing: 2px;
      border-radius: 15px;
      text-align: center;
      line-height: 2.5;
      width: 100%;
    }
  }
}

</style>
