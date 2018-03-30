const path = require("path")
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8887
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015", "react"]
					}
				}
			},
			{
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
	       use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [autoprefixer()]
							}
						},
						'sass-loader'
	        ]
	      })
	    },
			{
				test: /\.(png|gif|jpg|svg)$/,
				use: [
					{loader: "url-loader"}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({template: 'src/index.html'})
	]
}
