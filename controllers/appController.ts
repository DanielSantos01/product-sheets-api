import {  ReadResponse, WriteValueModel } from '../modules/googlesheet/domain/interfaces';
import SpreadsheetHelper from '../modules/googlesheet/adapters/SpreadsheetHelper';

const getHome = (req: any, res: any): void => {
  res.render('index');
};

const query = async (req: any, res: any): Promise<void> => {
  const { spreadsheetId, range } = req.body;
  try {
    const response: ReadResponse = await SpreadsheetHelper.read({ spreadsheetId, range });
    res.send(response);
  } catch (err) {
    res.send('failed to read spreadsheet...');
  }
};

const put = async (req: any, res: any): Promise<void> => {
  const { spreadsheetId, range, value } = req.body;
  try {
    const response: WriteValueModel =await SpreadsheetHelper.write({
      spreadsheetId,
      range,
      value,
    });
    res.send(response);
  } catch (err) {
    res.send('failed to write spreadsheet...');
  }
};

export default { getHome, query, put };
