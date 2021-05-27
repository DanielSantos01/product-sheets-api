import { ReadParams, WriteParams } from '../domain/interfaces';

interface ISpreadsheet {
  read: (params: ReadParams) => void;
  write: (params: WriteParams) => void;
}

export { ISpreadsheet };
