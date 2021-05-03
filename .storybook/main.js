const path = require('path')
const rootPath = path.resolve(__dirname, '../')


module.exports = {
  "stories": [
    "../**/__stories__/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, {configType}) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias['@'] = rootPath
    config.resolve.alias['@components'] = `${rootPath}/components`
    config.resolve.alias['@assets'] = `${rootPath}/assets`

    // Return the altered config
    return config;
  },
}
