const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  // webpack configuration

  entry: path.resolve(__dirname, 'status', 'src', 'main.js'), // Your main JS entry file (create if necessary)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'status', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'status', 'index.html'), // Path to your index.html
    }),
  ],
  devtool: 'source-map',
  mode: 'development',
};
