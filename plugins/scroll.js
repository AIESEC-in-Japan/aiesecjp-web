import Vue from 'vue'

// 今は使わないかもしれないけど、
// スクロール量によってアニメーションが開始されるというイケてるデザインを取り入れたい時に使えるものです。
// 書き方は公式のドキュメンとにあるものとほぼ同じなので使い方がわからない場合は以下を見てください。
// https://vuejs.org/v2/cookbook/creating-custom-scroll-directives.html#v3-banner
// by komatsu

Vue.directive('scroll', {
  bind(el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
