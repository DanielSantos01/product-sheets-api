import { sheets_v4, } from 'googleapis';

import { ISpreadsheet } from '../data/ISpreadsheet';
import {
  ReadParams,
  ReadResponse,
  WriteParams,
  WriteValueModel,
} from '../domain/interfaces';

class Spreadsheet implements ISpreadsheet {
   googleSheet: sheets_v4.Sheets;

   constructor(googleSheet: sheets_v4.Sheets) {
     this.googleSheet = googleSheet;
     this.read = this.read.bind(this);
     this.write = this.write.bind(this);
   }

   async read(readProps: ReadParams): Promise<ReadResponse> {
     const result = await this.googleSheet.spreadsheets.values.get(readProps);
     return result.data.values || [];
   }

   async write(writeProps: WriteParams): Promise<WriteValueModel> {
     const { range, spreadsheetId, value } = writeProps;
     const values: WriteValueModel = [ [ value ] ];
     const result = await this.googleSheet.spreadsheets.values.update({
       spreadsheetId,
       range,
       valueInputOption: 'USER_ENTERED',
       resource: { values },
     } as any); // Sheet type do not recognize resorce as a update param

     const isDone: boolean = result.status === 200;
     return isDone ? result.config.data.values : [];
   }
}

export default Spreadsheet;
