module.exports = function(){
	const apiConfig = require('./src/api/webpack.config');
	const webConfig = require('./src/web/webpack.config');

	return [apiConfig, webConfig];
	
}();