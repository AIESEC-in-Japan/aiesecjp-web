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
      <ul>
        <li
          class="navigation-item"
          @mouseleave="mouseLeaveAction"
          @mouseover="mouseOverAction"
        >
          <nuxt-link
            class="navigation-link"
            to=""
          >
            Services
          </nuxt-link>
          <div
            v-show="isShowNestedItems"
            class="navigation-nested"
          >
            <ul class="navigation-nested-list">
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/outgoing"
                >
                  海外インターンシップに参加する
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/incoming"
                >
                  海外インターン生を受け入れる
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/safety"
                >
                  安全への取り組み
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to=""
          >
            Events
          </nuxt-link>
        </li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to="/about"
          >
            About Us
          </nuxt-link>
        </li>
        <li class="navigation-item">
          <nuxt-link
            class="navigation-link"
            to="/about"
          >
            Contact Us
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
  width: 100vw;
  height: 5rem;
  line-height: 80px;
  padding: 0 5%;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: white;

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
        line-height: 2rem;
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
      color: $gray;
      font-weight: bold;
      text-decoration: none;
      font-size: 1rem;
      letter-spacing: 2px;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}

</style>

