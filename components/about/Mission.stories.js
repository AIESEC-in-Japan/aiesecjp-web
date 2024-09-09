import Mission from './Mission.vue';

export default {
  title: 'components/about/Mission',
  component: Mission,
};

export const MissionStory = () => ({
  components: {Mission},
  template: '<Mission />',
});
