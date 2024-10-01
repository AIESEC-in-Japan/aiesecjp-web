import Top from './Top.vue';

export default {
  title: 'components/organization/Top',
  component: Top,
};

export const TopStory = () => ({
  components: {Top},
  template: '<Top />',
});
