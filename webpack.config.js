module.exports = function(){
	const apiConfig = require('./src/api/webpack.prod');
	const webConfig = require('./src/web/webpack.config');

	return [apiConfig, webConfig];
	
}();