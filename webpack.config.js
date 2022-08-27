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
          title: 'Output Management',
        }),
      ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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