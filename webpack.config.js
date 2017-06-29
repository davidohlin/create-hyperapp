'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const DEV = process.env.NODE_ENV === 'development'

module.exports = {
	entry: './src/main.js',
	output: { 
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/')
	},
	devServer: {
		publicPath: '/',
		contentBase: 'public',
	},
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                loader: ExtractTextPlugin.extract('css-loader')
            }
		]
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
		new webpack.HotModuleReplacementPlugin(),
		...DEV ? [

		] : [
		
		]
	],
}