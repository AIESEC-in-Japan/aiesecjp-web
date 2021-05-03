import RoundButton from "../RoundButton.vue";


export default {
  title: 'Common/RoundButton',
  component: RoundButton,
  argTypes: {
    onClick: {action: 'clicked'},
    baseColor: {control: 'color'},
    textColor: {control: 'color'},
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
  textColor: '#037Ef3',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  textColor: '#037Ef3',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  textColor: '#037Ef3',
  label: 'B',
};

