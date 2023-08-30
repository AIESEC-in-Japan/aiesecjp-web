import FinanceInfo from './FinanceInfo.vue';

export default {
  title: 'components/about/FinanceInfo',
  component: FinanceInfo,
};

export const FinanceInfoStory = () => ({
  components: {FinanceInfo},
  template: '<FinanceInfo />',
});
