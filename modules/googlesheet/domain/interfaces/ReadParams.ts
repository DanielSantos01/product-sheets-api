import { ReadResponse } from './ReadResponse';

interface ReadParams { 
  spreadsheetId: string; 
  range: string;
  resolve: (param: ReadResponse) => void;
}

export { ReadParams };
