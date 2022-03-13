import IconInAssetsPath from './IconInAssetsPath.vue';

export default {
  title: 'components/base/IconInAssetsPath',
  component: IconInAssetsPath,
};

export const IconSupportStory = () => ({
  components: {IconInAssetsPath},
  template: '<IconInAssetsPath  :data="icons.icon_support" />',
});

export const IconGlobeStory = () => ({
  components: {IconInAssetsPath},
  template: '<IconInAssetsPath  :data="icons.icon_globe" />',
});


const icons = {
  icon_support:
    {src: "images/icx/tech-support.svg", alt: "tech-support"},
  icon_globe:
    {src: "images/icx/globe.svg", alt: "globe"}
}
