import Header from './Header.vue';

export default {
  title: 'components/base/Header',
  component: Header,
};

export const HeaderStory = () => ({
  components: {Header},
  template: '<Header />',
});
