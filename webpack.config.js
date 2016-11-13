var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');


var config = {
  entry: {
	  index: APP_DIR + '/index/index.js',
	  visualisation: APP_DIR + '/index/index.js',
	  },
  output: {
    path: BUILD_DIR,
    filename: '[name]bundle.js'
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
  devtool: "source-map",
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;
