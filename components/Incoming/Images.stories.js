import Images from './Images.vue';

export default {
  title: 'components/Incoming/Images',
  component: Images,
};

export const ImagesStory = () => ({
  components: {Images},
  template: '<Images />',
});
