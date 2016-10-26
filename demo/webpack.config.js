var path = require('path');

module.exports = {
  entry: './entry.jsx', 
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          babelrc: false,
          presets: ['react']
        }
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  }
};
