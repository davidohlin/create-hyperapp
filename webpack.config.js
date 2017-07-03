'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEV = process.env.NODE_ENV === 'development'

module.exports = {
	target: 'web',
	entry: './src/main.js',
	output: { 
		filename: 'bundle.js',
		path: DEV ? path.resolve(__dirname, 'public/') : path.resolve(__dirname, 'build/')
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
		new HtmlWebpackPlugin({
			title: 'Hyperapp',
			template: 'public/index.html'
		}),
		...DEV ? [
			new webpack.HotModuleReplacementPlugin(),
		] : [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					dead_code: true,
					screw_ie8: true,
					unused: true,
					warnings: false
				},
				mangle: {screw_ie8: true},
				output: {
					comments: false,
					screw_ie8: true
				},
				sourceMap: true
			})
		]
	],
}
