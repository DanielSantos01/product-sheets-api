import {
  ReadParams,
  ReadResponse,
  WriteParams,
  WriteValueModel,
} from '../domain/interfaces';

interface ISpreadsheet {
  read: (params: ReadParams) => Promise<ReadResponse>;
  write: (params: WriteParams) => Promise<WriteValueModel>;
}

export { ISpreadsheet };