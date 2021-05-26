require('dotenv').config();
const { google } = require('googleapis');

const sheet = google.sheets({
    version: process.env.AUTH_VERSION,
    auth: process.env.AUTH_ID,
});

module.exports = sheet;
