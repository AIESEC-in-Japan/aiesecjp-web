import AdvisorList from './AdvisorList.vue';

export default {
  title: 'components/about/AdvisorList',
  component: AdvisorList,
};

export const AdvisorListStory = () => ({
  components: {AdvisorList},
  template: '<AdvisorList />',
});
