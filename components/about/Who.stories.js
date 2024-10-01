import Who from './Who.vue';

export default {
  title: 'components/about/Who',
  component: Who,
};

export const WhoStory = () => ({
  components: {Who},
  template: '<Who />',
});
