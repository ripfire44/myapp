module.exports = (function () {
	const HtmlWebpackPlugin = require('html-webpack-plugin');
	const CleanWebpackPlugin = require('clean-webpack-plugin');
	const path = require('path');

	const dist = path.join(process.cwd(), process.env.npm_package_config_outdir || '/dist', 'web');

	const plugins = [
		new HtmlWebpackPlugin({
			title: process.env.npm_package_config_title || 'My App',
			template: './index.ejs',
		}),
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
	}
	const port = process.env.PORT || 8080;
	const config = {
		context: __dirname,
		entry: {
			web: './main.ts'
		},
		output: {
			path: dist,
			filename: 'js/[name].js',
		},
		plugins,
		module,
		resolve: {
			extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
		},
		devServer: {
			proxy: {
				'/api': {
					target: 'http://localhost:8081',
					pathRewrite: {
						'^/api': ''
					}
				}
			}
		}
	};

	return config;

}());
