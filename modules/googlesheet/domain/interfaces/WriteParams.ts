interface WriteParams { 
  spreadsheetId: string; 
  range: string;
  value: string;
  resolve: (param: WriteValueModel) => void;
}

type WriteLine = string[];
type WriteValueModel = WriteLine[];

export { WriteParams, WriteValueModel };
