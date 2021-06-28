import table from './Customtable.vue';

export default {
    title: 'About/table',
    component: table,
    argTypes:{
        listdata:{contral: 'color'}
    }
};

const Template = (args, {argTypes}) => ({
    props: Array,
    components: {table}
});

export const basic = Template.bind({});
basic.args = {

};