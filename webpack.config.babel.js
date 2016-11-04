import path from 'path';

module.exports = {
	entry: {
	  preload: './target/main.js',
	  recommender: './target/recommender.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '../dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].bundle.js'
	}/*,
	module: {
		loaders: [
		  {
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
			  presets: ['es2015', 'react']
			}
		  }
		]
	}*/
};