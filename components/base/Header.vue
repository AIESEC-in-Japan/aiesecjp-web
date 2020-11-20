<template>
  <header class="header-container">
    <nav>
      <div>
        <ul class="pc-header">
          <li class="pc-header-item">
            <a href="/outgoing">海外インターンシップに参加する</a>
          </li>
          <li class="pc-header-item">
            <a href="/incoming">海外インターン生を受け入れる</a>
          </li>
          <li class="pc-header-item">
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
      <div class="sp-header" :class="{ '_state-open': isMenuActive }">
        <div
          class="burger-button"
          @click="toggleMenu"
        >
          <span class="burger-parts"></span>
          <span class="burger-parts"></span>
          <span class="burger-parts"></span>
        </div>
        <transition
          name="sp-header-list"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <ul v-show="isMenuActive" class="sp-header-list">
            <li class="sp-header-item">
              <a href="/outgoing">海外インターンシップに参加する</a>
            </li>
            <li class="sp-header-item">
              <a href="/incoming">海外インターン生を受け入れる</a>
            </li>
            <li class="sp-header-item">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
    }
  }
}
</script>

<style scoped lang="scss">
.header-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  width: 100vw;
  height: 80px;
  line-height: 80px;
  border-bottom-style: solid; 
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;
  .pc-header {
    padding: 0 5%;
    display: flex;
    justify-content: flex-end;
  }
  .pc-header-item {
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
.sp-header-item {
  display: none;
}
@media only screen and (max-width : 980px) {
  .pc-header-item {
    display: none;
  }
  .sp-header-item {
    display: inline;
  }
  .burger-button {
    width: 40px;
    height: 30px;
    margin-bottom: 25px;
    margin-left: auto;
    position: relative;
  }
  .burger-parts {
    background-color: $gray;
    width: 100%;
    height: 2px;
    display: block;
    transition: 0.6s;
    position: absolute;
    &:first-child {
      top: 0;
    }
    &:nth-child(2) {
      top: 14px;
    }
    &:last-child {
      bottom: 0;
    }
  }
  ._state-open {
    height: 100vh;
    background-color: rgba($color: #000000, $alpha: 0.9);
    .burger-parts {
      transform-origin: left;
      &:first-child {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
  .sp-header {
    padding: 25px 5% 0;
  }
  .sp-header-list {
    background-color: rgba($color: $gray, $alpha: 0.85);
    display: flex;
    flex-direction: column;
    text-align: right;
    &-enter-active {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: sp-header-list--anime__opened;
    }
    &-leave-active {
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-name: sp-header-list--anime__closed;
    }
  }
  .sp-header-item {
    padding-right: 50px;
    line-height: 60px;
    border-bottom: solid 0.5px $dark-gray;
    a {
      color: rgba($color: $dark-gray, $alpha: 0.85);
    }
  }
  @keyframes sp-header-list--anime__opened {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes sp-header-list--anime__closed {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
