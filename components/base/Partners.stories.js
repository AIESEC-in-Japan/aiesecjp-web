import Partners from './Partners.vue';

export default {
  title: 'components/base/Partners',
  component: Partners,
};

export const PartnersStory = () => ({
  components: {Partners},
  template: '<Partners />',
});
