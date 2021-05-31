const { GeneratedAPIs } = require('googleapis/build/src/apis');

class Spreadsheet {
   googleSheet;

   /**
    * Class constructor that received a GoogleSheetApi service by dependency injection
    * @param {GeneratedAPIs.sheets} googleSheet 
    */
   constructor(googleSheet) {
     this.googleSheet = googleSheet;
     this.read = this.read.bind(this);
     this.write = this.write.bind(this);
   }

   /**
    * @param {@type {googlesheetId, range}} readProps 
    * @returns The line(s) read from the file in Array notation, or an advertise for
    * the case of fail.
    */
   async read(readProps) {
     try {
       const response = await this.googleSheet.spreadsheets.values.get(readProps);
       return response.data.values;
     }catch(err) {
       return 'failed to read spreadsheet. Verify your query params';
     }
   }

   /**
    * 
    * @param {@type {googlesheetId, range, value}} writeProps 
    * @returns The same data recentely written in document (as a callback to
    * describe the success of the action), or an advertisement for the case of fail
    */
   async write(writeProps) {
     const { range, spreadsheetId, value } = writeProps;
     const values = [ value.split(',') ];
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
