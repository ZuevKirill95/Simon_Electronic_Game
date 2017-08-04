var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',//здесь это нужно? webpack.HotModuleReplacementPlugin вроде и так работает
    'babel-polyfill',//не очень понял что это. Понял так, что это позволяет пользоваться хтмл5 и ксс3 в браузерах
                    //которые их не поддерживают          
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'//Понял, что это путь к ассетам, но не совсем понял как это работает, да и пути /static
                          //у нас вроде нет
  },
    //Дальше вроде понял и вроде как переписал под современный стандарт, хотя есть вопросы
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,        
        use: [
          'react-hot-loader',
          'babel-loader'],
        include: [
          path.resolve(__dirname, 'src'),//что за инклуд, что он делает?
        ],
         plugins: ['transform-runtime'],//это я вообще не понял
     },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, 'src'),//опять этот инклуд
        ],
      }
    ]
  }
}
