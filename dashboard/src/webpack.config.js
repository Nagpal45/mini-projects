const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "os": require.resolve("os-browserify/browser")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
