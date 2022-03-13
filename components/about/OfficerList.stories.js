import OfficerList from './OfficerList.vue';

export default {
  title: 'components/about/OfficerList',
  component: OfficerList,
};

export const OfficerListStory = () => ({
  components: {OfficerList},
  template: '<OfficerList />',
});
