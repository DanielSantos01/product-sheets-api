/**
 * Server seyup, defining the connection port that will be listening
 * view engine to render a simple presentation in the main route and the
 * routes that will be used as endpoints.
 * Main route: https://product-sheets-api.herokuapp.com/
 */

require('dotenv').config();
const express = require('express');
const { resolve } = require('path');
const routes = require('./routes');

const connectionPort = process.env.PORT || '3002';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(connectionPort, () => console.log(`successfull listening to port ${connectionPort}`));
