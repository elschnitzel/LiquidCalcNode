const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Init App
const app = express();

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Calculation'
    });
});

//Add Route
app.get('/price', function (req, res) {
    res.render('price', {
    });
});

//Start Server
app.listen('3000', function () {
    console.log('Server listening on Port 3000');
});