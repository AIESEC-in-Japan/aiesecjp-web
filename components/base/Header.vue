<template>
  <header class="header-container">
    <nav>
      <ul>
        <li class="pc-header-item" v-on:mouseover="mouseOverAction" v-on:mouseleave="mouseLeaveAction">
          <a href="">海外インターンシップについて</a>
          <ul class="pc-header-nested" v-show="isShowNestedItems">
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
  padding: 0px 5%;
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: $gray;
  ul {
    display: flex;
    justify-content: flex-end;
  }
  .pc-header{
    &-item {
      margin-left: 90px;
      list-style-type: none;
    }
    &-nested{
      position: absolute;
      top:85px;
      flex-flow: column;
      border-left: $gray solid 1px;
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

@media only screen and (max-width : 980px) {
  .pc-header-item {
    display: none;
  }
  .sp-header-item {
    display: block;
    margin-left: 50px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isShowNestedItems: false
    }
  },
  methods: {
    mouseOverAction(){
      this.isShowNestedItems = true
      console.log('hover')
      console.log(this.isShowNestedItems)
    },
    mouseLeaveAction(){
      this.isShowNestedItems = false
      console.log('leave')
      console.log(this.isShowNestedItems)
    }
  }
}

</script>
