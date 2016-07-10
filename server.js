require('babel-register')({
    presets: ['react']
});

const express = require('express');
const app = express();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Component = require('./Component.jsx');


app.use(express.static('public'));

app.get('/', function(request, response) {
    var html = ReactDOMServer.renderToString(
        React.createElement(Component)
    );

    response.send(html);
});

var PORT = 3000;

app.listen(PORT, function() {
    console.log('listening on http://localhost:3000');
});