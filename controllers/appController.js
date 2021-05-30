const SpreadsheetHelper = require('../modules/googlesheet/adapters/SpreadsheetHelper');

const getHome = (req, res) => {
  res.render('index');
};

const query = async (req, res) => {
  const queryData = { ...req.query };
  const queryResponse = await SpreadsheetHelper.read(queryData);
  res.send(queryResponse);
};

const put = async (req, res) => {
  const putData = { ...req.body }
  const putResponse = await SpreadsheetHelper.write(putData);
  res.send(putResponse);
};

module.exports = { getHome, query, put };
