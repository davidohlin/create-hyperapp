const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main.js',

	output: { 
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/')
	},
	devServer: {
		publicPath: "/",
		contentBase: "public"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
}