import Contact from './Contact.vue';

export default {
  title: 'components/Incoming/Contact',
  component: Contact,
};

export const ContactStory = () => ({
  components: {Contact},
  template: '<Contact />',
});
