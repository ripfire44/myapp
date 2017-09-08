const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Create app server
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
// Setup api
const Api = require('./dist/api').Api;
const api = new Api();
app.use('/api', api);
// Setup static files
const publicDir = path.join(__dirname, 'dist/web');
app.use(express.static(publicDir));
// Rewrite all other requests to index.html
app.all('/*', (req,res)=>{
    res.sendFile(`${publicDir}/index.html`);
});
let port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
});
