import Contact from './Contact.vue';

export default {
  title: 'components/global-youth-dialogue/Contact',
  component: Contact,
};

export const ContactStory = () => ({
  components: {Contact},
  template: '<Contact />',
});
