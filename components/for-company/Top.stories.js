import Top from './Top.vue';

export default {
  title: 'components/for-company/Top',
  component: Top,
};

export const TopStory = () => ({
  components: {Top},
  template: '<Top />',
});
