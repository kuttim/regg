const { override, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
  babelInclude([
    // tell Babel to include common files
    path.resolve('src'),
    path.resolve('../common/src'),
  ])
);