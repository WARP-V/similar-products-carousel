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
        include: '/client/styles/',
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      },
    ],  
  },
  externals: {
    'react/addons': true, // important!!
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
  },
};
