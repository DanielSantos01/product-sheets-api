import {  ReadResponse, WriteValueModel } from '../modules/googlesheet/domain/interfaces';
import SpreadsheetHelper from '../modules/googlesheet/adapters/SpreadsheetHelper';

const getHome = (req: any, res: any): void => {
  res.render('index');
};

const query = (req: any, res: any) => {
  const { spreadsheetId, range } = req.body;
  try {
    const resolve = (response: ReadResponse) => res.send(response);
    SpreadsheetHelper.read({ spreadsheetId, range, resolve });
  } catch (err) {
    res.send('failed to read spreadsheet...');
  }
};

const put = (req: any, res: any) => {
  const { spreadsheetId, range, value } = req.body;
  try {
    const resolve = (response: WriteValueModel) => res.send(response);
    SpreadsheetHelper.write({
      spreadsheetId,
      range,
      value,
      resolve,
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = { getHome, query, put };
