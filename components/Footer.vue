<template>
  <div class="footer-container" v-if="width>900">
    <div class="footer-desc">
      <h3>AIESEC</h3>
      <p>AIESEC(アイセック)は、カナダのモントリオールに本部を置く海外インターンシップの運営を主幹事業とする世界最大級の学生団体です。アイセックの日本支部であるアイセック・ジャパンは1962年に創設され、現在では主に大学ごとに25の委員会が活動をしています。</p>
    </div>
    <div class="nav-content">
      <h3>About</h3>
      <ul>
        <li>
          <a href="#">AIESECについて</a>
        </li>
        <li>
          <a href="#">パートナーシップについて</a>
        </li>
        <li>
          <a href="#">団体情報</a>
        </li>
        <li>
          <a href="#">安全への取り組み</a>
        </li>
        <li>
          <a href="#">個人情報の取り扱い</a>
        </li>
        <li>
          <a href="#">お問い合わせ</a>
        </li>
      </ul>
    </div>
    <div class="nav-content">
      <h3>For Students</h3>
      <ul>
        <li>
          <a href="#">海外インターンシップに参加する</a>
        </li>
        <li>
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
        </li>
      </ul>
    </div>
    <div class="nav-content">
      <h3>For Companies</h3>
      <ul>
        <li>
          <a href="#">海外インターン生を受け入れる</a>
        </li>
        <li>
          <a href="#">受け入れ事例を見る</a>
        </li>
        <li>
          <a href="#">受け入れの流れと費用</a>
        </li>
      </ul>
    </div>
    <div class="nav-content">
      <h3>Press & Alumni</h3>
      <ul>
        <li>
          <a href="#">プレスルーム</a>
        </li>
        <li>
          <a href="#">アルムナイの方</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="sp-footer-container" v-else>
    <div class="sp-footer-content">
      <button type="button" class="sp-footer-title" :class="{ '_state-open': isOpened[0] }" @click="openItems(0)">
        AIESECについて
      </button>
      <div class="sp-footer-item" :class="{ '_state-open': isOpened[0] }" v-if="isOpened[0]">
        <p>AIESEC(アイセック)は、カナダのモントリオールに本部を置く海外インターンシップの運営を主幹事業とする世界最大級の学生団体です。アイセックの日本支部であるアイセック・ジャパンは1962年に創設され、現在では主に大学ごとに25の委員会が活動をしています。</p>
      </div>
    </div>
    <div class="sp-footer-content">
      <button type="button" class="sp-footer-title" :class="{ '_state-open': isOpened[1] }" @click="openItems(1)">
        About
      </button>
      <ul class="sp-footer-item" :class="{ '_state-open': isOpened[1] }" v-if="isOpened[1]">
        <li>
          <a href="#">AIESECについて</a>
        </li>
        <li>
          <a href="#">パートナーシップについて</a>
        </li>
        <li>
          <a href="#">団体情報</a>
        </li>
        <li>
          <a href="#">安全への取り組み</a>
        </li>
        <li>
          <a href="#">個人情報の取り扱い</a>
        </li>
        <li>
          <a href="#">お問い合わせ</a>
        </li>
      </ul>
    </div>
    <div class="sp-footer-content">
      <button type="button" class="sp-footer-title" :class="{ '_state-open': isOpened[2] }" @click="openItems(2)">
        For Students
      </button>
      <ul class="sp-footer-item" :class="{ '_state-open': isOpened[2] }" v-if="isOpened[2]">
        <li>
          <a href="#">海外インターンシップに参加する</a>
        </li>
        <li>
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
        </li>
      </ul>
    </div>
    <div class="sp-footer-content">
      <button type="button" class="sp-footer-title" :class="{ '_state-open': isOpened[3] }" @click="openItems(3)">
        For Companies
      </button>
      <ul class="sp-footer-item" :class="{ '_state-open': isOpened[3] }" v-if="isOpened[3]">
        <li>
          <a href="#">海外インターン生を受け入れる</a>
        </li>
        <li>
          <a href="#">受け入れ事例を見る</a>
        </li>
        <li>
          <a href="#">受け入れの流れと費用</a>
        </li>
      </ul>
    </div>
    <div class="sp-footer-content">
      <button type="button" class="sp-footer-title" :class="{ '_state-open': isOpened[4] }" @click="openItems(4)">
        Press & Alumni
      </button>
      <ul class="sp-footer-item" :class="{ '_state-open': isOpened[4] }" v-if="isOpened[4]">
        <li>
          <a href="#">プレスルーム</a>
        </li>
        <li>
          <a href="#">アルムナイの方</a>
        </li>
      </ul>
    </div>
  </div>
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
  methods: {
    openItems: function(index) {
      this.isOpened.splice(index,1,!this.isOpened[index]);
    },
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
  color: $blue;
  letter-spacing: 2px;
  padding: 20px;
}
.sp-footer-item {
  color: $dark-gray;
  width: 80%;
  letter-spacing: 2px;
  line-height: 24px;
  a {
    color: $dark-gray;
    text-decoration: none;
    display: block;
    margin: 10px auto;
  }
}
</style>
