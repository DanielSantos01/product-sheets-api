require('dotenv').config();
const express = require('express');
const { resolve } = require('path');

const connectionPort = process.env.PORT || 3002;
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));

app.set('views', resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(connectionPort, () => console.log(`successfull listening to port ${connectionPort}`));

