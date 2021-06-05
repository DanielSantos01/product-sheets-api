# product-sheets-api
 A google api consumer used to increase the use of product-register-api

## Tecnologies
This API was developed by using Node.JS tecnology and Sheets API provided by Google.

## Purpose
This api was intended to be a module coupled, or not, to the ProductRegister.io website, whose data follow below:<br />
Website: https://product-register-io.vercel.app/<br />
Website Repository: https://github.com/DanielSantos01/ProductRegister.io/

## Operation
Using google sheets, this API is able to read and write in google online spreadsheets, the frontend only needs to inform the ID of a spreadsheet to which it has access and provide the location an the new cell(s) value(s)

## Data protocol
I'm pretty sure you've used a spreadsheet and seen how the selection method works. However, as this is not something very trivial, I will explain quickly and basically.

### Range:
When you read or write data in a spreadsheet, you need to specify the desired range, which follows the following pattern:
**SpreadsheetSection**!**InitialColumn InitialRow**:**FinalColumn FinalRow**
So let's say you want to write information from cell **A1** to cell **B7** in the **DATA** section of your spreadsheet. Your location would be: DATA!A1:B7

### Value:
The way the google API handles spreadsheet data is quite interesting, but a little laborious, as it treats each row as an array of strings.
Briefly explained, suppose you have two columns, one for the name and one for the function. For google, two lines of this document would follow the following format:<br />
**[[name1, role1], [name2, role2], ...]**

For ease of use, I made it only necessary to separate the contents of each cell with a comma. Thus, for a request to the Product-Sheets-API, its values ​​must follow the following format:
valueCell1,valueCell2,valueCell3...

## endpoints
1) Write:<br />
   url: https://product-sheets-api.herokuapp.com/put<br />
   method:  POST<br />
   returns: Writted lines as a callback of success (any other results mean fail)<br />
   body params:
   ```
   {
     spreadsheetId: { type: String, required: true },
     range: { type: String (in RangeModel), required: true },
     value: { type: String (in ValueModel), required: true },
   }
   ```

2) Read:<br />
   1) Write:<br />
   url: https://product-sheets-api.herokuapp.com/query<br />
   method:  GET<br />
   returns: Cell lines as a callback of success (any other results mean fail)<br />
   query params:
   ```
   {
     spreadsheetId: { type: String, required: true },
     range: { type: String (in RangeModel), required: true },
   }
   ```

## note
_keep in mind that string value and range follow the pattern described in the protocols section._

## Do you want to make changes to the project?
It's easy, just perform the following commands on your terminal:
1. git clone https://github.com/DanielSantos01/product-sheets-api.git
2. cd product-sheets-api
3. yarn install or npm install
_Ready! Now just modify it your way and, if you want, open a pull request._
