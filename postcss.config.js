const colors = require('./app/config/colors');

module.exports = {
  plugins: [
    require('postcss-reporter'),
    require('postcss-cssnext'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars')({
      variables: {
        orange: colors.orange,
        mintGreen: colors.mintGreen,
        blue: colors.blue,
        gray: colors.gray,
        yellow: colors.yellow,
      }
    })
  ]
}
