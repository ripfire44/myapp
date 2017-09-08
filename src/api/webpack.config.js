module.exports = (function () {
	const CleanWebpackPlugin = require('clean-webpack-plugin');
	const fs = require('fs');
	const path = require('path');

	const dist = path.join(process.cwd(), process.env.npm_package_config_outdir || '/dist', 'api');

	const externals = fs.readdirSync("node_modules")
		.reduce(function (acc, mod) {
			if (mod === ".bin") {
				return acc
			}
			acc[mod] = "commonjs " + mod
			return acc
		}, {});

	const plugins = [
		new CleanWebpackPlugin([dist], { root: process.cwd() }),
	];

	const module = {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader',
					}
				]
			}
		]
	};

	const config = {
		context: __dirname,
		entry: {
			index: `./index.ts`
		},
		output: {
			path: dist,
			filename: '[name].js',
			libraryTarget: 'commonjs2',
			devtoolModuleFilenameTemplate: '[absolute-resource-path]',
			devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
		},
		target: 'node',
		plugins,
		module,
		externals,
		resolve: {
			extensions: ['.ts', '.js', '.json'],
		},
		devtool: 'source-map',
	};

	return config;
}());