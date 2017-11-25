const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js"
	},
	output: {
		path: path.resolve(__dirname,"app/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
	    new webpack.ProvidePlugin({
	    $: "jquery",
	    jQuery: "jquery",
	    "window.jQuery": "jquery"
	    })
	]
}