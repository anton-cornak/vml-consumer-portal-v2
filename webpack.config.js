const path = require('path');

const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: prod ? 'production' : 'development',
	entry: path.join(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.ts', '.tsx', '.js', '.json'],
				},
				use: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	devtool: prod ? undefined : 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			favicon: path.join(__dirname, 'public', 'favicon.ico'),
		}),
		new MiniCssExtractPlugin(),
	],
};
