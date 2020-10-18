const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

module.exports = env => {

	const dotenvPlugin = new DotenvPlugin({
		path: env === 'development' ? './.env-dev' : './.env-prod'
	})

    return {
		entry: './src/index.tsx',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
			chunkFilename: '[id].js',
			publicPath: ''
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".json", '.png']
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
				{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|jpe?g|gif|jp2|webp)$/,
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]'
					}
				}
			]
		},
		plugins: [
			dotenvPlugin,
			new HtmlWebpackPlugin({
				template: __dirname + '/src/index.html',
				filename: 'index.html',
				inject: 'body'
			})
		]
	}
};
