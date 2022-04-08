import Top from './Top.vue';

export default {
  title: 'components/Incoming/Top',
  component: Top,
};

export const TopStory = () => ({
  components: {Top},
  template: '<Top />',
});
