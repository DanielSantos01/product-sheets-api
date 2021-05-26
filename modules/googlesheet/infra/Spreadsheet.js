class Spreadsheet {
   googleSheet = {};

   constructor(googleSheet) {
      this.googleSheet = googleSheet;
   }

   async read(readProps) {
      const { spreadsheetId, range } = readProps;
   }
}

module.exports = Spreadsheet;
