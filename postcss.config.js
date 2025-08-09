module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./index.html', './work/**/*.html', './js/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' })
  ]
};
