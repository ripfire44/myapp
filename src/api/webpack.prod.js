const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');
const config = require('./webpack.config');

config.plugins.push(new BabelMinifyWebpackPlugin());
delete config.devtool;

module.exports = config;
