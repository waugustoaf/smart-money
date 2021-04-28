export interface IEntry {
  id: string;
  amount: number;
  description?: string;
  entryAt: Date;
  latitude?: number;
  longitude?: number;
  address?: string;
  photo?: string;
  isInit: boolean
  category?: ICategory;
}

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