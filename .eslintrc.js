module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'no-unused-vars': 'off',
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': ['off'],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {requireConfigFile: 'false'},
  babelOptions: {configFile: './.babelrc'},
};
