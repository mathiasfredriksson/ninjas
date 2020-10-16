import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
const DotenvPlugin = require('dotenv-webpack');

const dotenvPlugin = new DotenvPlugin({
  path: './.env-dev'
})

const htmlPlugin = new HtmlWebPackPlugin({
  	template: "./src/index.html"
});

const config: webpack.Configuration = {
	mode: "development",
	entry: "./src/index.tsx",
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{ test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
		]
	},
	plugins: [
		htmlPlugin,
		dotenvPlugin
	]
};

export default config;