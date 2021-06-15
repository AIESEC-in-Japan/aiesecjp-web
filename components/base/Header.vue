<template>
  <header
    class="header-container"
    :class="headerContainerClass"
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
      <ul>
        <li
          class="navigation-item"
          @mouseleave="mouseLeaveAction"
          @mouseover="mouseOverAction"
        >
          <nuxt-link
            to=""
            :class="navigationLinkClass"
          >
            海外インターンシップについて
          </nuxt-link>
          <div
            v-show="isShowNestedItems"
            class="navigation-nested"
          >
            <ul class="navigation-nested-list">
              <li class="navigation-nested-item">
                <nuxt-link
                  to="/outgoing"
                  :class="navigationLinkClass"
                >
                  海外インターンシップに参加する
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  to="/incoming"
                  :class="navigationLinkClass"
                >
                  海外インターン生を受け入れる
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  to=""
                  :class="navigationLinkClass"
                >
                  安全への取り組み
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-item">
          <nuxt-link
            to=""
            :class="navigationLinkClass"
          >
            オンラインイベントについて
          </nuxt-link>
        </li>
        <li class="navigation-item">
          <nuxt-link
            to="/about"
            :class="navigationLinkClass"
          >
            About Us
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isShowNestedItems: false
    }
  },
  methods: {
    mouseOverAction() {
      this.isShowNestedItems = true
    },
    mouseLeaveAction() {
      this.isShowNestedItems = false
    }
  },
  computed: {
    isScrollOverTopSection() {
      return this.$window.pageYOffset > this.$basicSectionSize();
    },
    // vueの標準的な動的classの実装です。 https://jp.vuejs.org/v2/guide/class-and-style.html
    headerContainerClass() {
      return this.isScrollOverTopSection ? 'header-container__white' : 'header-container';
    },
    navigationLinkClass() {
      return this.isScrollOverTopSection ? 'navigation-link__white' : 'navigation-link';
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
  background-color: transparent;
  width: 100vw;
  height: 80px;
  line-height: 80px;
  padding: 0 5%;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);

  &__white {
    @extend .header-container;

    background-color: white;
    border-bottom: none;
  }

  ul {
    display: flex;
    justify-content: flex-end;
  }

  .navigation {
    &-item {
      margin-left: 1rem;
      list-style-type: none;
    }

    &-nested {
      position: absolute;
      top: 5rem;

      &-list {
        margin-top: 0.5rem;
        flex-flow: column;
        border-left: $gray solid 1px;
      }

      &-item {
        margin-left: 0.5rem;
        list-style-type: none;
        line-height: 30px;
      }
    }

    &-logo {
      position: absolute;
      top: 10px;
      bottom: 0;
      left: 10px;

      img {
        width: 300px;
        max-height: 60px;
      }
    }

    &-link {
      color: white;
      font-weight: bold;
      text-decoration: none;
      font-size: 1rem;
      letter-spacing: 2px;

      &:hover {
        opacity: 0.7;
      }

      &__white {
        @extend .navigation-link;

        color: $gray;
      }
    }
  }
}

</style>

