import Vue from 'vue'

Vue.use({
  install(Vue, option) {
    Vue.prototype.$isMobile = () => {
      const maxSpWidth = 480;  // mixin.scssと同じ値を使用してください
      const width = Vue.prototype.$window.width;
      return width <= maxSpWidth;
    }
  }
})
