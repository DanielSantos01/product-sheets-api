const googleSheet = require('./GoogleSheet');
const Spreadsheet = require('../infra/Spreadsheet');

const SpreadsheetHelper = new Spreadsheet(googleSheet);

module.exports = SpreadsheetHelper;
