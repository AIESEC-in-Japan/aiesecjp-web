
import AboutAiesec from './AboutAiesec.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Top/AboutAiesec',
  component: AboutAiesec,
};

export const Main = () => ({
  components: { AboutAiesec },
  template: '<AboutAiesec />',
});
