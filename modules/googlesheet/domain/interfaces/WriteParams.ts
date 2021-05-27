interface WriteParams { 
  readonly spreadsheetId: string; 
  readonly range: string;
  readonly value: string;
}

type WriteLine = string[];
type WriteValueModel = WriteLine[];

export { WriteParams, WriteValueModel };
