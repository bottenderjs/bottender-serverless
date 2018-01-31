module.exports = {
  parser: 'babel-eslint',
  extends: ['yoctol-base'],
  env: {
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['import'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
