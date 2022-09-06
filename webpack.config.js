const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        createtodo: './src/createtodo.js',
        createproject: './src/createproject.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          hash: true,
          title: 'Aingkaran TODO APP',
          template: './src/index.html',
          filename: './index.html' //relative to root of the application
      })
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

  },
  mode:'development',
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};