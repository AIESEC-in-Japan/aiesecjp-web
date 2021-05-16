<template>
  <!--  <header v-scroll="handleScroll" class="header-container">-->
  <!--         TODO : 冗長だけど、classが変わるタイミングが違うが解決されるのでこっちの方がよい？ -->
  <header
    class="header-container"
    v-bind:class="[isScrollOverTopSection? 'header-container__white' : 'header-container']">
    <nav>
      <ul>
        <li class="navigation-item" v-on:mouseleave="mouseLeaveAction" v-on:mouseover="mouseOverAction">
          <!--         TODO : 毎回これ書くのは頭悪いのでやり方考える -->
          <nuxt-link to="" v-bind:class="[isScrollOverTopSection? 'navigation-link__white' : 'navigation-link']">
            海外インターンシップについて
          </nuxt-link>
          <div v-show="isShowNestedItems" class="navigation-nested">
            <ul class="navigation-nested-list">
              <li class="navigation-nested-item">
                <nuxt-link class="navigation-link" to="/outgoing">海外インターンシップに参加する</nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link class="navigation-link" to="/incoming">海外インターン生を受け入れる</nuxt-link>
              </li>
              <li class="navigation-nested-item">
                <nuxt-link class="navigation-link" to="">安全への取り組み</nuxt-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="navigation-item">
          <nuxt-link class="navigation-link" to="">オンラインイベントについて</nuxt-link>
        </li>
        <li class="navigation-item">
          <nuxt-link class="navigation-link" to="/about">About Us</nuxt-link>
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
    },
    handleScroll(evt, el) {
      if (this.isScrollOverTopSection) {
        el.className = el.className + '__white';
      } else {
        el.className = 'header-container';
      }
      return this.isScrollOverTopSection;
    }
  },
  computed: {
    isScrollOverTopSection() {
      return this.$window.pageYOffset > this.$basicSectionSize();
    }
  }
}

</script>

<style lang="scss" scoped>

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
      margin-left: 90px;
      list-style-type: none;
    }

    &-nested {
      position: absolute;
      top: 80px;

      &-list {
        margin-top: 5px;
        flex-flow: column;
        border-left: $gray solid 1px;
      }

      &-item {
        margin-left: 10px;
        list-style-type: none;
        line-height: 30px;
      }
    }
  }


  .navigation-link {
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 16px;
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

</style>

