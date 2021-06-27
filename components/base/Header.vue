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
            Services
          </nuxt-link>
          <div
            v-show="!this.$isMobile() ? isShowNestedItems : drawer"
            class="navigation-nested"
          >
            <ul class="navigation-nested-list">
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/outgoing"
                >
                  For Students
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/incoming"
                >
                  For Companies
                </nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link
                  class="navigation-link"
                  to="/safety"
                >
                  Safety
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-item">
          <nuxt-link
            to="/global-youth-dialogue"
            class="navigation-link"
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
      <v-app-bar-nav-icon
        v-show="this.$isMobile()"
        class="navigation-mobile-icon"
        @click.stop="drawer = !drawer"
      />
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
  width: 100vw;
  height: 5rem;
  line-height: 5rem;
  padding: 0 5%;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: white;

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

      @include sp {
        z-index: $headerDrawerIndex;
        background-color: $white;
        flex-direction: column;
        position: absolute;
        top: 4rem;
        right: 0;
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
        line-height: 2.5rem;
        width: 100vh;
      }
    }

    &-item {
      margin-left: 3rem;
      list-style-type: none;

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
      box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.5);

      @include sp {
        position: relative;
        top: 0;
        padding: 0.5rem;
        box-shadow: none;
      }

      &-list {
        flex-flow: column;
        padding-left: 0;

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
      left: 10px;

      img {
        width: 300px;
        max-height: 60px;

        @include sp {
          width: 40vw;
        }
      }
    }

    &-link {
      color: $dark-gray;
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

