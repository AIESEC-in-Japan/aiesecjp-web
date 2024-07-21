import Voice from './Voice.vue';

export default {
  title: 'components/Outgoing/Voice',
  component: Voice,
};

export const VoiceStory = () => ({
  components: {Voice},
  template: '<Voice />',
});
