import CookieOptIn from './CookieOptIn.vue';

export default {
  title: 'components/base/CookieOptIn',
  component: CookieOptIn,
};

export const CookieOptInStory = () => ({
  components: {CookieOptIn},
  template: '<CookieOptIn />',
});
