const { google } = require('googleapis');
const { web } = require('../../../credentials.json');
const token = require('.,/../../token.json');
const { client_id, client_secret, redirect_uris } = web;

const auth = new google.auth.OAuth2(
  client_id, client_secret, redirect_uris[0]);

auth.setCredentials(token);

const sheets = google.sheets({version: 'v4', auth });

module.exports = sheets;
