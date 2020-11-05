<template>
  <client-only>
    <div v-if="isWideMenu" class="footer-container">
      <div class="footer-desc">
        <h3>AIESEC</h3>
        <p>AIESEC(アイセック)は、カナダのモントリオールに本部を置く海外インターンシップの運営を主幹事業とする世界最大級の学生団体です。アイセックの日本支部であるアイセック・ジャパンは1962年に創設され、現在では主に大学ごとに25の委員会が活動をしています。</p>
      </div>
      <div class="nav-content">
        <h3>About</h3>
        <ul>
          <!-- <li>
            <a href="#">AIESECについて</a>
          </li>
          <li>
            <a href="#">パートナーシップについて</a>
          </li> -->
          <li>
            <a href="#">団体情報</a>
          </li>
          <!-- <li>
            <a href="#">安全への取り組み</a>
          </li>
          <li>
            <a href="#">個人情報の取り扱い</a>
          </li>
          <li>
            <a href="#">お問い合わせ</a>
          </li> -->
        </ul>
      </div>
      <div class="nav-content">
        <h3>For Students</h3>
        <ul>
          <li>
            <a href="#">海外インターンシップに参加する</a>
          </li>
          <!-- <li>
            <a href="#">海外ボランティアに参加する</a>
          </li>
          <li>
            <a href="#">体験記を見る</a>
          </li>
          <li>
            <a href="#">参加の流れと費用</a>
          </li>
          <li>
            <a href="#">危機管理サポート</a>
          </li>
          <li>
            <a href="#">話を聞いてみる</a> 
          </li>  -->
        </ul>
      </div>
      <div class="nav-content">
        <h3>For Companies</h3>
        <ul>
          <li>
            <a href="#">海外インターン生を受け入れる</a>
          </li>
          <!-- <li>
            <a href="#">受け入れ事例を見る</a>
          </li>
          <li>
            <a href="#">受け入れの流れと費用</a>
          </li> -->
        </ul>
      </div>
      <div class="nav-content">
        <h3>Press & Alumni</h3>
        <ul>
          <!-- <li>
            <a href="#">プレスルーム</a>
          </li>
          <li>
            <a href="#">アルムナイの方</a>
          </li> -->
        </ul>
      </div>
    </div>
    <div v-else class="sp-footer-container">
      <div class="sp-footer-content">
        <button
          type="button"
          class="sp-footer-title"
          :class="{ '_state-open': isOpened[0] }"
          @click="openItems(0)"
        >
          AIESECについて
        </button>
        <transition
          name="sp-footer-item"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <div v-if="isOpened[0]" class="sp-footer-item">
            <p>AIESEC(アイセック)は、カナダのモントリオールに本部を置く海外インターンシップの運営を主幹事業とする世界最大級の学生団体です。アイセックの日本支部であるアイセック・ジャパンは1962年に創設され、現在では主に大学ごとに25の委員会が活動をしています。</p>
          </div>
        </transition>
      </div>
      <div class="sp-footer-content">
        <button
          type="button"
          class="sp-footer-title"
          :class="{ '_state-open': isOpened[1] }"
          @click="openItems(1)"
        >
          About
        </button>
        <transition
          name="sp-footer-item"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <ul v-if="isOpened[1]" class="sp-footer-item">
            <!-- <li>
              <a href="#">AIESECについて</a>
            </li>
            <li>
              <a href="#">パートナーシップについて</a>
            </li>  -->
            <li>
              <a href="#">団体情報</a>
            </li>
             <!-- <li>
              <a href="#">安全への取り組み</a>
            </li>
            <li>
              <a href="#">個人情報の取り扱い</a>
            </li>
            <li>
              <a href="#">お問い合わせ</a> 
            </li> -->
          </ul>
        </transition>
      </div>
      <div class="sp-footer-content">
        <button
          type="button"
          class="sp-footer-title"
          :class="{ '_state-open': isOpened[2] }"
          @click="openItems(2)"
        >
          For Students
        </button>
        <transition
          name="sp-footer-item"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <ul v-if="isOpened[2]" class="sp-footer-item">
            <li>
              <a href="#">海外インターンシップに参加する</a>
            </li>
            <!-- <li>
              <a href="#">海外ボランティアに参加する</a>
            </li>
            <li>
              <a href="#">体験記を見る</a>
            </li>
            <li>
              <a href="#">参加の流れと費用</a>
            </li>
            <li>
              <a href="#">危機管理サポート</a>
            </li>
            <li>
              <a href="#">話を聞いてみる</a> 
            </li> -->
          </ul>
        </transition>
      </div>
      <div class="sp-footer-content">
        <button
          type="button"
          class="sp-footer-title"
          :class="{ '_state-open': isOpened[3] }"
          @click="openItems(3)"
        >
          For Companies
        </button>
        <transition
          name="sp-footer-item"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <ul v-if="isOpened[3]" class="sp-footer-item">
            <li>
              <a href="#">海外インターン生を受け入れる</a>
            </li>
            <!-- <li>
              <a href="#">受け入れ事例を見る</a>
            </li>
            <li>
              <a href="#">受け入れの流れと費用</a>
            </li>  -->
          </ul>
        </transition>
      </div>
      <div class="sp-footer-content">
        <button
          type="button"
          class="sp-footer-title"
          :class="{ '_state-open': isOpened[4] }"
          @click="openItems(4)"
        >
          Press & Alumni
        </button>
        <transition
          name="sp-footer-item"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <ul v-if="isOpened[4]" class="sp-footer-item">
            <!-- <li>
              <a href="#">プレスルーム</a>
            </li>
            <li>
              <a href="#">アルムナイの方</a>
            </li>  -->
          </ul>
        </transition>
      </div>
    </div>
  </client-only>
</template>


<script>
export default {
  props: [
    "width"
  ],
  data() {
    return {
      isOpened: [false,false,false,false,false]
    };
  },
  computed: {
    isWideMenu() {
      if (this.width < 900) {
        return false
      }
      return true
    }
  },
  methods: {
    openItems(index) {
      this.isOpened.splice(index,1,!this.isOpened[index])
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
.footer-container {
  min-height: 360px;
  width: 100%;
  word-break: break-all;
  line-height: 36px;
  background-color: $light-gray;
  font-size: 12px;
  color: $dark-gray;
  display: flex;
  padding-top: 40px;
  justify-content: space-around;
  h3 {
    color: $blue;
    font-size: 16px;
    letter-spacing: 2px;
  }
  a {
    text-decoration: none;
    color: $dark-gray;
  }
}
.footer-desc {
  min-height: 300px;
  max-width: 180px;
  line-height: 24px;
  h3 {
    padding: 10px 0px;
    left: 0px;
  }
}
.nav-content {
  min-height: 300px;
  max-width: 220px;
  li {
    list-style-type: none;
  }
}
.sp-footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $light-gray;
}
.sp-footer-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.sp-footer-title {
  width: 100%;
  font-size: 16px;
  line-height: 16px;
  color: $blue;
  letter-spacing: 2px;
  padding: 20px;
}
.sp-footer-title::after {
  content: "+";
  font-size: 24px;
  float: right;
  -moz-transition: -moz-transform 0.3s ease-in-out;
  -o-transition: -o-transform 0.3s ease-in-out;
  -webkit-transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}
._state-open::after {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
}
.sp-footer-item {
  color: $dark-gray;
  width: 80%;
  letter-spacing: 2px;
  line-height: 24px;
  font-size: 12px;
  overflow: hidden;
  transition: height 0.4s ease-in-out;
  a {
    color: $dark-gray;
    text-decoration: none;
    display: block;
    margin: 10px auto;
  }
  &-enter-active{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: sp-footer-item--anime__opend;
  }
  &-leave-active{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: sp-footer-item--anime__closed;
  }
}
@keyframes sp-footer-item--anime__opend {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
   }
}
@keyframes sp-footer-item--anime__closed {
  0% {
   opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
