const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'app.js',
    publicPath: 'dist/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}