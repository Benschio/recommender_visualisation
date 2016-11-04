var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');


var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query: {
          "presets": ["es2015", "react"]
        }
      }
    ]
  },
	plugins: [
	],
  externals: {
    // Use external version of React and ReactDOM
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map"
};

module.exports = config;
