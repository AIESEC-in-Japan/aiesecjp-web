import Donation from './Donation.vue';

export default {
  title: 'components/organization/Donation',
  component: Donation,
};

export const DonationStory = () => ({
  components: {Donation},
  template: '<Donation />',
});
