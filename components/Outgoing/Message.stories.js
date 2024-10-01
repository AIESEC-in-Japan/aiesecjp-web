import Message from './Message.vue';

export default {
  title: 'components/Outgoing/Message',
  component: Message,
};

export const MessageStory = () => ({
  components: {Message},
  template: '<Message />',
});
