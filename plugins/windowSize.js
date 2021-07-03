import Vue from 'vue'

Vue.use({
  install(Vue) {
    const $window = Vue.observable({
      width: 0,
      height: 0,
      pageYOffset: 0
    })

    // SSR 時にエラーが出るかもしれないので（addEventListenerが取れない）
    if (process.browser) {
      const onScroll = () => {
        $window.pageYOffset = global.pageYOffset
      }
      const onResize = () => {
        $window.width = document.documentElement.clientWidth
        $window.height = global.innerHeight
      }
      global.addEventListener('scroll', onScroll)
      global.addEventListener('resize', onResize)

      // init
      onScroll()
      onResize()
    }

    Vue.prototype.$window = $window
  }
})

