import OrganizationInfo from './OrganizationInfo.vue';

export default {
  title: 'components/about/OrganizationInfo',
  component: OrganizationInfo,
};

export const OrganizationInfoStory = () => ({
  components: {OrganizationInfo},
  template: '<OrganizationInfo />',
});
