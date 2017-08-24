const express = require('express');
const webpack = require('webpack');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const apiConfig = require('./src/api/webpack.config');

var apiServer;

webpack(apiConfig).watch({}, (err, stats) => {
    if (apiServer) { apiServer.close(); }

    // delete api from modules cache
    delete require.cache[require.resolve('./dist/api/api')];
    const api = require('./dist/api/api');
    api.use(morgan('dev'));
    api.use(bodyParser.json());
    api.use(bodyParser.urlencoded({ extended: false }));

    apiServer = api.listen(8081, () => {
        console.log('Server listening on http://localhost:8081/');
    });
});

