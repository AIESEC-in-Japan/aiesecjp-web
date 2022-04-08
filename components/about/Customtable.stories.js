import AboutCustomTable from './CustomTable.vue';

export default {
    title: 'components/about/CustomTable.vue',
    component: AboutCustomTable,

};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AboutCustomTable },
    template: '<AboutCustomTable v-bind="$props" />'
});

export const SingleRow = Template.bind({});
SingleRow.args = {
    listData: [{
        caption: '諮問',
        description: '田中伸男（公共財団法人笹川平和財団 会長）'
    }]
};

export const ToolongRow = Template.bind({});
ToolongRow.args = {
    listData: [{
        caption: 'テストです。長い文字列だったらどう反応するのかをみています',
        description: 'wertyuiolkjhgfdxcvbnm,jbvftyuiknbgyuiovklmbfgjhjokflbmgjsllsolmojihubjnkjihugyvhhugyftcgvyftcfgftrdseewaaSZdxfcgvhbjnkml,,;lppkoijhuygtfrdessxcfvgbhnjmk,l'
    },
    {
        caption: '絵文字に反応するかのテストです🐥',
        description: '田中伸男（公共財団法人笹川平和財団 会長）'
    }]
};

export const MultiRow = Template.bind({});
MultiRow.args = {
    listData: [{
        caption: '諮問',
        description: '田中伸男（公共財団法人笹川平和財団 会長）'
    },
    {
        caption: '諮問',
        description: '根元勝則（一般社団法人日本経済団体連合会 専務理事）'
    },
    {
        caption: '諮問',
        description: '遠藤功（株式会社ローランド・ベルガー 日本法人会長）'
    },
    {
        caption: '諮問',
        description: '鈴木良伸（有限会社ステージ・フォー・ワン 代表取締役）'
    },
    {
        caption: '諮問',
        description: '堅田 航平（五常・アンド・カンパニー株式会社 CFO）'
    },
    {
        caption: '諮問',
        description: '渋谷 直毅（クレディ・スイス証券株式会社 インターネット・メディア部長）'
    }
    ]
};
