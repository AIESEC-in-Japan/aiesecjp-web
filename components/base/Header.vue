<template>
<client-only>
  <header class="header-wrapper">
  <div class="header-container">
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
        class="navigation-list-pc"
      >
      <li
          class="navigation-item"
          @mouseleave="mouseLeaveAction(index)"
          @mouseover="mouseOverAction(index)"
          v-for="(item, index) in navigationItems"
          :key="index"
        >
          <Nuxt-link class="navigation-link" :to=item.link>
            {{ item.title }}
          </Nuxt-link>
          <div v-show="isShowNestedItems[index] && isActive"
            class="navigation-nested"
            :class="{'is-active': isActive}"
            v-if="item.subItems">
            <ul class="navigation-nested-list"> 
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="navigation-nested-item">
                <nuxt-link class="navigation-link" :to="subItem.link">
                  {{ subItem.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
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
      <ul
        class="navigation-list-sp"
        :class="{'is-show': isShow}"
      >
        <li
          class="navigation-item"
          v-for="(item, index) in navigationItems"
          :key="index"
        >
          <Nuxt-link class="navigation-link" :to=item.link @click.native="isShowList(); toggleScroll()">
            {{ item.title }}
          </Nuxt-link>
          <div>
            <ul class="navigation-nested-list"> 
              <li v-for="(subItem, subIndex) in item.subItems" :key="subIndex" class="navigation-nested-item">
                <nuxt-link class="navigation-link" :to="subItem.link" @click.native="isShowList(); toggleScroll()">
                  {{ subItem.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
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
      <v-app-bar-nav-icon
        class="navigation-mobile-icon"
        @click="isShowList(); toggleScroll()"
      >
        <v-icon v-if="isShow">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-menu
        </v-icon>
      </v-app-bar-nav-icon>
    </nav>
  </div>
  </header>
  </client-only>
</template>

<script>
// function scroll_control(event) {
//   event.preventDefault();
// }
export default {
  data() {
    return { 
      isShowNestedItems: [],
      isShow: false,//ハンバーガー時のリスト以下の表示
      isActive: false,//PCホバーの表示
      navigationItems: [
        {
          title: "AIESECについて",
          link: "/#about",
          subItems: [
            { title: "ビジョン・ミッション", link: "/about" },
            { title: "代表メッセージ", link: "/message" }
          ]
        },
        {
          title: "学生の方へ",
          link: "/#student",
          subItems: [
            { title: "海外インターンシップ", link: "/outgoing" },
            { title: "global youth dialogue", link: "/global-youth-dialogue" }
          ]
        },
        {
          title: "企業の方へ",
          link: "/#company",
          subItems: [
            { title: "海外インターンシップ受け入れ", link: "/incoming" },
            { title: "協賛について", link: "/for-company" }
          ]
        },
        {
          title: "団体概要",
          link: "/organization",
          subItems: [
            { title: "団体概要トップ", link: "/organization" },
            { title: "役員・諮問一覧", link: "/organization#p1" },
            { title: "団体情報", link: "/organization#p3" },
            { title: "財務情報", link: "/organization#p4" },
            { title: "コンプライアンス", link: "/organization#p5" },
            { title: "情報セキュリティ基本方針", link: "/organization#p6" },
            { title: "安全への取り組み", link: "/safety" }
          ]
        },
        {
          title: "NEWS",
          link: "/news"
        },
        {
          title: "お問い合わせ",
          link: "/#contact"
        }
      ]
    }
  },
  methods: {
    mouseOverAction(index) {
      this.$set(this.isShowNestedItems, index, true); 
      this.isActive = true; // クラスの追加
    },
    mouseLeaveAction(index) {
      this.$set(this.isShowNestedItems, index, false);
      this.isActive = false; // クラスの削除
    },
    isShowList() {
      this.isShow = !this.isShow; // クラスの追加・削除を切り替える
    },
    toggleScroll() {
      const bodyElement = document.body;
      const menuElement = document.querySelector('.navigation-list-sp');
    if (this.isShow === true) {
      bodyElement.style.position = 'fixed';  // ページ全体のスクロールを完全に無効化
      bodyElement.style.overflow = 'hidden'; // ページ全体のスクロールを無効化
      menuElement.style.overflowY = 'auto';  // ハンバーガーメニューの内部でスクロールを有効化
      bodyElement.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = bodyElement.style.top;
      bodyElement.style.position = '';
      bodyElement.style.overflow = '';  // ページ全体のスクロールを再有効化
      menuElement.style.overflowY = ''; // メニューのスクロールを無効化
      window.scrollTo(0, parseInt(scrollY || '0') * -1); // スクロール位置を元に戻す
    }
  },
  }
}

</script>

<style lang="scss" scoped>
/* stylelint-disable unit-disallowed-list */
// ここは細かく指定したいので、許容

.header-wrapper{
  z-index: $headerIndex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  padding: 1rem auto 0 auto;
}
.header-container {
  width: 90vw;
  height: 5rem;
  line-height: 5rem;
  padding: 0 5%;
  margin: 1rem auto 0  auto;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: rgba(255, 255, 255, 0.66);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 3rem;

  .navigation {
    position: relative;
    &-mobile {
      &-icon {
        display: none;
        position: absolute;
        right: 10vw;
        top: 2.4rem;
        @media (max-width: 900px){
          display: block;
          z-index: 99999;
        }
      }
    }

    &-list-pc{
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;

      @media (max-width: 900px){
        display: none;
      }
    }
    &-list-sp{
        display: none;
        @media (max-width: 900px){
          z-index: $headerDrawerIndex;
          background-color: $white;
          flex-direction: column;
          position: absolute;
          top: 0;
          left: 0vw;
          transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
          line-height: 0.6rem;
          width: 100vw;
          height: 100vh;
          padding-top: 3rem;
          overflow-y: auto; // ハンバーガーメニュー内部でスクロール可能
          overscroll-behavior: contain; // メニュー外へのスクロールを防ぐ

          .navigation-link{
            color: $blue;
          }

          &.is-show{
            display: block;       
          }

        }
      }

   

    &-item {
      margin-left: 3rem;
      list-style-type: none;
      align-items: center;
      margin-left: 2rem;

      @media(max-width:1200px){
        margin-left: 1.2rem;
      }

      @media (max-width: 900px){
        padding:0 0 0.2rem 0;
        border-top: $light-gray solid 0.8px;
        line-height: 2.5rem;

        &:first-child {
          border-top: none;
        }
        
      }
    }
   

    &-nested {
      display: none;
      position: absolute;
      top: 6rem;
      padding: 1rem;
      background-color: $white;
      border-top: $light-gray 0.3px solid;
      border-radius: 0 0 1rem 1rem;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
      
      &.is-active{
        display: block;
      }

      @media (max-width: 900px){
        display: none;
        position: relative;
        top: 0;
        padding: 0.5rem;
        box-shadow: none;
        border: none;

        &.is-show{
          display: block;
        }
      }

      &-list {
        flex-flow: column;
        padding-left: 0;
        flex-wrap: wrap;


        @media (max-width: 900px){
          border-left: none;
          margin-top: 0;
          padding-left: 0.5rem;
        }
      }

      &-item {
        padding: 0.5rem;
        list-style-type: none;
        line-height: 2rem;

        @media (max-width: 900px){
          padding:  0;
          line-height: 1.4rem;
          .navigation-link{
              color: $dark-gray;
          }
        }
      }
    }

    &-logo {
      position: absolute;
      text-align: left;
      bottom: 0;
      left: 7vw;
      width: 14rem;


      img {
        width:100%;
        max-height: 60px;
        vertical-align: middle;
      }
      
      @media(max-width:1200px){
        width: 12rem;
      }

      @include tab {
        width: 10rem;
      }
      @include sp {
          width: 10rem;
        }
    }

    &-link {
      text-decoration: none;
      font-size: 0.94rem;
      letter-spacing: 0.6px;
      color: $dark-gray;

      &:hover {
        opacity: 0.7;
      }

      @include tab {
        font-size: 0.9rem;
        letter-spacing: 0.5px;
      }
      
    }
  }
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
