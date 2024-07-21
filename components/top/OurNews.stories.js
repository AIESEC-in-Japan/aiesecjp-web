import OurNews from './OurNews.vue';

export default {
  title: 'components/top/OurNews.vue',
  component: OurNews,
};

export const OurNewsStory = () => ({
  components: {OurNews},
  template: '<OurNews />',
});
