<template>
  <header v-scroll="handleScroll" class="header-container">
    <nav>
      <ul>
        <li class="pc-header-item" v-on:mouseleave="mouseLeaveAction" v-on:mouseover="mouseOverAction">
          <a href="">海外インターンシップについて</a>
          <div v-show="isShowNestedItems" class="pc-header-nested">
            <ul class="pc-header-nested-list">
              <li class="pc-header-nested-item">
                <a href="/outgoing">海外インターンシップに参加する</a>
              </li>
              <li class="pc-header-nested-item">
                <a href="/incoming">海外インターン生を受け入れる</a>
              </li>
              <li class="pc-header-nested-item">
                <a href="">安全への取り組み</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="pc-header-item">
          <a href="">オンラインイベントについて</a>
        </li>
        <li class="pc-header-item">
          <a href="/about">About Us</a>
        </li>
      </ul>
      <ul class="sp-header">
        <li class="sp-header-item">
          <a href="/outgoing">Outgoing</a>
        </li>
        <li class="sp-header-item">
          <a href="/incoming">Incoming</a>
        </li>
        <li class="sp-header-item">
          <a href="/about">About</a>
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
      if (window.scrollY > this.$basicSectionSize()) {
        el.setAttribute(
          'style',
          'background-color: black;'
        )
      } else {
        el.setAttribute(
          'style',
          'background-color: transparent;'
        )
      }
      return window.scrollY > this.$basicSectionSize();
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
  padding: 0px 5%;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;


  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);

  ul {
    display: flex;
    justify-content: flex-end;
  }

  .pc-header {
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

.sp-header-item {
  display: none;
}

@media only screen and (max-width: 980px) {
  .pc-header-item {
    display: none;
  }
  .sp-header-item {
    display: block;
    margin-left: 50px;
  }
}
</style>

