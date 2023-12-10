const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/bundle.ts',
	mode: "development",
	output: {
		filename: 'standalone_bundle.js',
		path: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.join(__dirname, 'public/index.html'), to: 'index.html' },
				{ from: path.join(__dirname, 'public/standalone_projector_config.json'), to: 'standalone_projector_config.json' },
			],
		}),
	],
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.ts', '.js'],
	}
};
