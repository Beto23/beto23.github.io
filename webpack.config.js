var path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
    // directorio de destino para todos los archivos de salida
  },
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};