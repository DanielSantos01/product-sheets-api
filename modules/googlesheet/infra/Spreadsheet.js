// TODO - Catches

class Spreadsheet {
   googleSheet;

   constructor(googleSheet) {
     this.googleSheet = googleSheet;
     this.read = this.read.bind(this);
     this.write = this.write.bind(this);
   }

   read(readProps) {
     const { resolve, ...rest} = readProps;
     this.googleSheet.spreadsheets.values
       .get(rest)
       .then(res => resolve(res.data.values || []));
   }

   write(writeProps) {
     const { range, spreadsheetId, value, resolve } = writeProps;
     const values = [ [ value ] ];
     this.googleSheet.spreadsheets.values.update({
       spreadsheetId,
       range,
       valueInputOption: 'USER_ENTERED',
       resource: { values },
     })
       .then(res => {
         const isDone = res.status === 200;
         const finalResponse = isDone ? res.config.data.values : [];
         resolve(finalResponse);
       });
   }
}

module.exports = Spreadsheet;
