import Voice from './Voice.vue';

export default {
  title: 'components/Incoming/Voice',
  component: Voice,
};

export const VoiceStory = () => ({
  components: {Voice},
  template: '<Voice />',
});
