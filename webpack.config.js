var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
<<<<<<< HEAD
      },
      {
        test: /\.mp3$/,
        use: ['file-loader']
      }
=======
    },
    {
        test: /\.mp3$/,
        use: ['file-loader']
    }
>>>>>>> c31c50012cd8f04a89cb36be8647ab8cb1fdacd0
    ]
  }
}
