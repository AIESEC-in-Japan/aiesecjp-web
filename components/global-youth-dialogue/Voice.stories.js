import Voice from './Voice.vue';

export default {
  title: 'components/global-youth-dialogue/Voice',
  component: Voice,
};

export const VoiceStory = () => ({
  components: {Voice},
  template: '<Voice />',
});
