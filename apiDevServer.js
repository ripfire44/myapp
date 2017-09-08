const express = require('express');
const webpack = require('webpack');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const apiConfig = require('./src/api/webpack.config');

var apiServer;

webpack(apiConfig).watch({
    ignored: /node_modules/
}, (err, stats) => {
    if (apiServer) { apiServer.close(); }

    // delete api from modules cache
    delete require.cache[require.resolve('./dist/api')];
    let app = express();

    
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    let Api = require('./dist/api').Api;
    let api = new Api();
    app.use('/api', api.app);

    let port = process.env.PORT;
    apiServer = app.listen(port, () => {
        console.log(`Server listening on http://localhost:${port}/`);
    });
});

