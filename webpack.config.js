module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      test: /\.(js|jsx)$/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
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
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}