import Committee from './Committee.vue';

export default {
  title: 'components/safety/Committee',
  component: Committee,
};

export const CommitteeStory = () => ({
  components: {Committee},
  template: '<Committee />',
});
