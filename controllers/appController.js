const SpreadsheetHelper = require('../modules/googlesheet/adapters/SpreadsheetHelper');

const getHome = (req, res) => {
  res.render('index');
};

const query = (req, res) => {
  const { spreadsheetId, range } = req.body;
  try {
    const resolve = (response) => res.send(response);
    SpreadsheetHelper.read({ spreadsheetId, range, resolve });
  } catch (err) {
    res.send('failed to read spreadsheet...');
  }
};

const put = (req, res) => {
  const { spreadsheetId, range, value } = req.body;
  try {
    const resolve = (response) => res.send(response);
    SpreadsheetHelper.write({
      spreadsheetId,
      range,
      value,
      resolve,
    });
  } catch (err) {
    res.send('failed to write spreadsheet...');
  }
};

module.exports = { getHome, query, put };
