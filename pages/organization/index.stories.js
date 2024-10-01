// pageは起動した方が早いが立ち上げられない人のために書いてあげても良い。

import Organization from './index.vue';

export default {
  title: 'pages/organization',
  component: Organization,
};

export const OrganizationPageStory = () => ({
  components: { Organization  },
  template: '<Organization />',
});
