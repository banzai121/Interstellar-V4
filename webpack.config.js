const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js', // Adjust this if your entry file is located elsewhere

  // Output configuration
  output: {
    filename: 'bundle.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },

  // Module rules to define how files should be processed
  module: {
    rules: [
      {
        test: /\.js$/, // For JavaScript files
        exclude: /node_modules/, // Ignore node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // For CSS files
        use: ['style-loader', 'css-loader'], // Load CSS into JS and inject into DOM
      },
    ],
  },

  // Enable source maps for easier debugging
  devtool: 'source-map',

  // Development server configuration (optional, if you're using webpack-dev-server)
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000, // Change port if necessary
  },

  // Mode: 'development' for better debugging, 'production' for optimized output
  mode: 'development',
};
