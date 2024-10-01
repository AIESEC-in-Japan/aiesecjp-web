import News from './News.vue';

export default {
  title: 'components/about/News',
  component: News,
};

export const NewsStory = () => ({
  components: {News},
  template: '<News />',
});
