// pageは起動した方が早いが立ち上げられない人のために書いてあげても良い。

import About from './index.vue';

export default {
  title: 'AIESECについて',
  titleTemplate:null,
  component: About,
};

export const AboutPageStory = () => ({
  components: { About  },
  template: '<About />',
});
