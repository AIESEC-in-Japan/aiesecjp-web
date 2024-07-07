import Top from './Top.vue';

export default {
  title: 'components/about/Top',
  component: Top,
};

export const TopStory = () => ({
  components: {Top},
  template: '<Top />',
});
