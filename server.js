const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// Create app server
const app = express();
// Setup api
const api = require('./dist/api/api');
app.use('/api', api);
// Setup static files
const publicDir = path.join(__dirname, 'dist/web');
app.use(express.static(publicDir));
// Rewrite all other requests to index.html
app.all('/*', (req,res)=>{
    res.sendFile(`${publicDir}/index.html`);
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at http://localhost:${process.env.PORT}`)
});
