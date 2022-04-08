import Feature from './Feature.vue';

export default {
  title: 'components/Outgoing/Feature',
  component: Feature,
};

export const FeatureStory = () => ({
  components: {Feature},
  template: '<Feature />',
});
