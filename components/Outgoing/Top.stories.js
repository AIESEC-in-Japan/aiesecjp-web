import Top from './Top.vue';

export default {
  title: 'components/Outgoing/Top',
  component: Top,
};

export const TopStory = () => ({
  components: {Top},
  template: '<Top />',
});
