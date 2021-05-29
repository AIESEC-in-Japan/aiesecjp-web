module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "es2021": true
  },
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  extends: [
    // see this https://eslint.vuejs.org/user-guide/#usage
    'plugin:vue/strongly-recommended',
    "eslint:recommended",
  ],
  plugins: [
    'vue'
  ],
  rules: {}
}

