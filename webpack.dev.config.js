module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      test: /\.(js|jsx)$/
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/'
  },
  devServer: {
    contentBase: './',
    historyApiFallback: true
  }
}