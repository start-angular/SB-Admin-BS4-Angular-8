//Install express server
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/'));

// proxy API calls
app.use(
    '/api/v1',
    createProxyMiddleware({
        target: 'https://api.airtable.com/v0/appomfnEuJTgyaOkD/',
        changeOrigin: true,
    }),
);

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);