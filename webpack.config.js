if (process.env == 'production') {

  module.exports = require('./config/webpack.prod.js');
}
else {
  module.exports = require('./config/webpack.dev.js');
}