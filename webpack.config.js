var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var path = require('path');

var isProd = process.env.NODE_ENV === 'production'; //true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    loader: ['css-loader','sass-loader'],
    publicPath: '/dist'
})
var cssConfig = isProd ? cssProd : cssDev;


module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    './src/app.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    // directorio de destino para todos los archivos de salida
  },
  externals:{
      jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
      }),
      new HtmlWebpackPlugin({
          hash: true,
          template: './src/index.html'
      }),
      new ExtractTextPlugin({
          filename: 'app.css',
          disable: !isProd,
          allChunks: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node:modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015'],
            "stage-2",
            "react"
          ]
        }
      },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        exclude: /node:modules/,
        use: [
          {
            loader: 'url-loader?limit=100000&name=fonts/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico|JPG)$/,
        use: [
          {
            loader: 'url-loader?limit=1000&name=images/[name].[ext]',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css']
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), //Tell the server where to serve content from.
    compress: true,
    port: 9000,
    host: "0.0.0.0" //server to be accessible externally
  }
};