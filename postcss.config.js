module.exports = {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 16,
        propList: ['*'],
        selectorBlackList: ['.norem'],
        exclude: /node_modules/i
      }
    }
  }
  