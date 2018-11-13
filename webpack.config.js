
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: `${__dirname}/client`,
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: [/node_modules/, /coverage/],
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'],
        },
      },
      {
        test: [/\.css$/],
        exclude: [/node_modules/, /coverage/],
        use: ['style-loader','css-loader'],
      },
    ],  
  }
};
