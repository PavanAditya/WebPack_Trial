var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
  },
      plugins: [
          new HtmlWebpackPlugin({
              hash: true,
              filename: './index.js' //relative to root of the application
          })
     ]
};
