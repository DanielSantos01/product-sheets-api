import { sheets_v4, } from 'googleapis';

import { ISpreadsheet } from '../data/ISpreadsheet';
import { ReadParams, WriteParams, WriteValueModel } from '../domain/interfaces';

class Spreadsheet implements ISpreadsheet {
   googleSheet: sheets_v4.Sheets;

   constructor(googleSheet: sheets_v4.Sheets) {
     this.googleSheet = googleSheet;
     this.read = this.read.bind(this);
     this.write = this.write.bind(this);
   }

   read(readProps: ReadParams): void {
     const { resolve, ...rest} = readProps;
     this.googleSheet.spreadsheets.values
       .get(rest)
       .then(res => resolve(res.data.values || []));
   }

   write(writeProps: WriteParams): void {
     const { range, spreadsheetId, value, resolve } = writeProps;
     const values: WriteValueModel = [ [ value ] ];
     this.googleSheet.spreadsheets.values.update({
       spreadsheetId,
       range,
       valueInputOption: 'USER_ENTERED',
       resource: { values },  // Sheet type do not recognize resorce as an update param
     } as any)
       .then(res => {
         const isDone: boolean = res.status === 200;
         const finalResponse: WriteValueModel = isDone ? res.config.data.values : [];
         resolve(finalResponse);
       });
   }
}

export default Spreadsheet;
