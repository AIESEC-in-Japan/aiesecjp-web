import Completed from './Completed.vue';

export default {
  title: 'components/download/Completed',
  component: Completed,
};

export const CompletedStory = () => ({
  components: {Completed},
  template: '<Completed />',
});
