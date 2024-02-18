import Donation from './Donation.vue';

export default {
  title: 'components/about/Donation',
  component: Donation,
};

export const DonationStory = () => ({
  components: {Donation},
  template: '<Donation />',
});
