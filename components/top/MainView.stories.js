
import MainView from './MainView.vue';

export default {
  title: 'components/top/MainView.vue',
  component: MainView,
};

export const MainViewStory = () => ({
  components: { MainView },
  template: '<MainView />',
});
