var path = require('path');
const webpack = require('webpack')

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
      })
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
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)$/,
        exclude: /node:modules/,
        use: [
          {
            // loader: 'file?name=src/assets/fonts/[name].[hash].[ext]?'
            loader: 'url-loader?limit=100000'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 1000} // conver images < 10k to base64 strings
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css']
  }
};