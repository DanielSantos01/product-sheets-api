require('dotenv').config();
const { google } = require('googleapis');

const sheet = google.sheets({
    version: 'v4',
    auth: 'AIzaSyDf8tbd8HOz7rmyUnX-sk83L1r2S0sg8R8',
});

module.exports = sheet;
