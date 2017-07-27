const webpack = require('webpack');

module.exports = {
	entry: {
		"Modal": './src/Modal.js',
		"LoadingAnimator": './src/loadingAnimator/LoadingAnimator.js'
	},
	output: {
		path: './build',
		filename: "[name].js",
		library: ["[name]"]
//		library: ['UIComponents', "[name]"]

	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons'
		})
	]
};
