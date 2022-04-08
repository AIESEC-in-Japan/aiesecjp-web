import Program from './Program.vue';

export default {
  title: 'components/Outgoing/Program',
  component: Program,
};

export const ProgramStory = () => ({
  components: {Program},
  template: '<Program />',
});
