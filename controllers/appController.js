const SpreadsheetHelper = require('../modules/googlesheet/adapters/SpreadsheetHelper');

/**
 * Meets requests done to https://product-sheets-api.herokuapp.com/
 * presentating card with a link to the github repository.
 * @param {none} req 
 * @param {none} res 
 */
const getHome = (req, res) => {
  res.render('index');
};

/**
 * NOTE: FOR THE EXAMPLES BELOW, THE ACCESS TO SPREADSHEET IS REQUIRED
 */

/**
 * Meets requests done to https://product-sheets-api.herokuapp.com/query
 * This endpoint needs both spreadsheetId and range (in A1 notation) of the
 * file pretended ro read.
 * IMPORTANT: The data needs to be passed as query param!
 * 
 * @example
 * https://product-sheets-api.herokuapp.com/query?spreadsheetId=abcdefgh&range=DATA!A1
 * 
 * @returns the value of the A1 cell of the document identified by the abcdefgh ID
 */
const query = async (req, res) => {
  const queryData = { ...req.query };
  const queryResponse = await SpreadsheetHelper.read(queryData);
  res.send(queryResponse);
};

/**
 * Meets requests done to https://product-sheets-api.herokuapp.com/put
 * This endpoint writes data to a single spreadsheet cell. For that, needs the
 * spreadsheetId, the pretended cell (in A1 notation) and the new cell value
 * IMPORTANT: The data needs to by passed as body param!
 * 
 * @example
 * uri: https://product-sheets-api.herokuapp.com/put
 * body: { spreadsheetId: abcdefgh, range: DATA!A1, value: sky }
 * 
 * @returns the data you write to the A1 cell of the spreadsheet identified by the
 * abcdefgh ID
 */
const put = async (req, res) => {
  const putData = { ...req.body }
  const putResponse = await SpreadsheetHelper.write(putData);
  res.send(putResponse);
};

module.exports = { getHome, query, put };
