import RoundButton from "../RoundButton.vue";


export default {
  title: 'Common/RoundButton',
  component: RoundButton,
  argTypes: {
    onClick: {action: 'clicked'},
    backgroundColor: {control: 'color'},
    color: {control: 'color'},
    size: {control: {type: 'select', options: ['small', 'medium', 'large']}},
  },
};


const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {RoundButton},
  template: '<RoundButton @click="onClick" v-bind="$props"/>',
});

export const BasicButton = Template.bind({});
BasicButton.args = {
  label: 'Button',
  color: '#037Ef3',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  color: '#037Ef3',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  color: '#037Ef3',
  label: 'B',
};

