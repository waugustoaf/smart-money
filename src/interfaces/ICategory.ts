import { IEntry } from "./IEntry";

export interface ICategory {
  id: string;
  name: string;
  color?: string;
  isDefault?: boolean;
  isCredit?: boolean;
  isDebit?: boolean;
  order?: boolean;
  entries?: IEntry[];
}
