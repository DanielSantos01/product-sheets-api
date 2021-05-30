// TODO - Catches

class Spreadsheet {
   googleSheet;

   constructor(googleSheet) {
     this.googleSheet = googleSheet;
     this.read = this.read.bind(this);
     this.write = this.write.bind(this);
   }

   async read(readProps) {
     try {
       const response = await this.googleSheet.spreadsheets.values.get(readProps);
       return response.data.values;
     }catch(err) {
       return 'failed to read spreadsheet. Verify your query params';
     }
   }

   async write(writeProps) {
     const { range, spreadsheetId, value } = writeProps;
     const values = [ [ value ] ];
     try {
      const response = await this.googleSheet.spreadsheets.values.update({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource: { values },
      });

      const isDone = response.status === 200;
      return isDone ? response.config.data.values : [];
     }catch (err) {
      return 'failed to write spreadsheet. Verify your body params'
     }
   }
}

module.exports = Spreadsheet;
