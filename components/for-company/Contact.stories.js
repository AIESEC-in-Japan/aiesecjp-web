import Contact from './Contact.vue';

export default {
  title: 'components/for-company/Contact',
  component: Contact,
};

export const ContactStory = () => ({
  components: {Contact},
  template: '<Contact />',
});
