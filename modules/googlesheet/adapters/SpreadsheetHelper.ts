const googleSheet = require('./GoogleSheet');

import { ISpreadsheet } from '../data/ISpreadsheet';
import Spreadsheet from '../infra/Spreadsheet';

const SpreadsheetHelper: ISpreadsheet = new Spreadsheet(googleSheet);

export default SpreadsheetHelper;
