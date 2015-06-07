module.exports = {
  entry: './lib/index',
  output: {
    path: './dist',
    filename: 'on-full-screen.js',
    library: 'onFullScreen',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    }]
  }
};
