import { useNavigation } from '@react-navigation/native';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { ICategory } from '../interfaces/ICategory';
import { IEntry } from '../interfaces/IEntry';
import { deleteEntry, getEntries, saveEntry } from '../services/Entries';

interface SaveEntryProps {
  amount: string;
  isInit: boolean;
  id?: string;
  entryAt?: Date;
  category: ICategory;
  description: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  photo?: string | null;
}

interface IEntryContextProps {
  entries: IEntry[];
  isLoading: boolean;
  save: (item: SaveEntryProps) => void;
  remove: (id: string) => void;
  days: number;
  setDays: React.Dispatch<React.SetStateAction<number>>;
  category: ICategory;
  setCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  updateView: () => void;
}

const EntryContext = createContext({} as IEntryContextProps);

const EntryProvider: React.FC = ({ children }) => {
  const [entries, setEntries] = useState([] as IEntry[]);
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(0);
  const [category, setCategory] = useState({} as ICategory);
  const [updateManually, setUpdateManually] = useState(0);

  useEffect(() => {
    (async () => {
      const entryArray = await getEntries({ days, category });
      setCategory(category);
      setEntries(entryArray);
      setIsLoading(false);
    })();
  }, [days, category, updateManually]);

  const save = useCallback(
    async ({
      amount,
      isInit,
      id,
      entryAt,
      category,
      description,
      latitude,
      longitude,
      address,
      photo,
    }: SaveEntryProps) => {
      const data = {
        amount: parseFloat(amount),
        id: id || uuid(),
        entryAt: entryAt || new Date(),
        isInit,
        description,
        category,
        latitude,
        longitude,
        address,
        photo,
      };

      saveEntry(data, !!id);

      setCategory({} as ICategory);

      const newEntries = await getEntries({ days, category });
      setEntries(newEntries);
    },
    [],
  );

  const remove = useCallback((id: string) => {
    (async () => {
      setEntries(value => value.filter(entry => entry.id !== id));
      await deleteEntry(id);
    })();
  }, []);

  const updateView = useCallback(() => {
    setUpdateManually(previousValue => previousValue + 1);
  }, []);

  return (
    <EntryContext.Provider
      value={{
        entries,
        save,
        isLoading,
        remove,
        days,
        setDays,
        category,
        setCategory,
        updateView,
      }}
    >
      {children}
    </EntryContext.Provider>
  );
};

const useEntry = () => {
  const entry = useContext(EntryContext);

  if (!entry) {
    throw new Error('useEntry must be used within EntryProvider');
  }

  return entry;
};

export { EntryProvider, useEntry };
