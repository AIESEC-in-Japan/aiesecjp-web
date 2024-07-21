import ContactUs from './ContactUs.vue';

export default {
  title: 'components/top/ContactUs.vue',
  component: ContactUs,
};

export const ContactUsStory = () => ({
  components: {ContactUs},
  template: '<ContactUs />',
});
