var webpack = require('webpack'); 
var path = require('path');
module.exports = { 
  mode: 'development',  
  entry: './src/index.js',
  output: { 
    path: __dirname + '/public/', 
    filename: 'bundle.js' 
  }, 
  devServer: { 
    hot: true,
    inline: true,
    port: 3000,
    contentBase: __dirname + '/public/',
  }, 
  module: { 
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  }, 
  plugins: [ new webpack.HotModuleReplacementPlugin() ] 
}