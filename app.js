"use strict";

const express = require('express');
const exphbs = require('express-handlebars');
const ip = require('ip');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

const index = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public'))); // <== joins path to public folder to access styles

app.use('/', index);

const port = process.env.PORT || 5000; // <== selects port for heroku, defaults to port:5000 locally

app.listen(port, () => {
  console.log(`Get to work at http://${ip.address()}:${port} or http://localhost:${port}`);
});
