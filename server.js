require('dotenv').config();

//Install express server
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan')
var cors = require('cors')

const app = express();

// add logging
app.use(morgan('combined'))

app.use(cors())

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

// proxy API calls
app.use(
    '/api/',
    createProxyMiddleware({
        target: 'https://api.airtable.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/',
        },
        headers: {
            'Authorization': 'Bearer ' + process.env.AIRTABLE_PRIVATE_KEY,
        },
    }),
);

app.get('/*', function(req,res) {
    console.log('index');
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
