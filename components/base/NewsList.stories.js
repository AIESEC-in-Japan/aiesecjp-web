import NewsList from './NewsList.vue';

export default {
  title: 'components/base/NewsList',
  component: NewsList,
};

export const NewsListStory = () => ({
  components: {NewsList},
  template: '<NewsList />',
});
