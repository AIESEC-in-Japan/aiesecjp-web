import Message from './Message.vue';

export default {
  title: 'components/global-youth-dialogue/Message',
  component: Message,
};

export const MessageStory = () => ({
  components: {Message},
  template: '<Message />',
});
