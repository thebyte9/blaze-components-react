const common = require('./common.config');

const icons = {
  ...common,
  srcFiles: ['./packs/fontawesome/icons/**/*.svg'],
  outputDirectory: './src/fontawesome',
  iconsFolderName: 'icons',
};

module.exports = icons;
