import { IEntry } from "./IEntry";

export interface ICategory {
  id: string;
  name: string;
  color?: string;
  isInit?: boolean; 
  isDefault?: boolean;
  isCredit?: boolean;
  isDebit?: boolean;
  order?: number;
  entries: IEntry[];
}
