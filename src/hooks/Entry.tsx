import { useNavigation } from '@react-navigation/native';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
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
}

interface IEntryContextProps {
  entries: IEntry[];
  isLoading: boolean;
  save: (item: SaveEntryProps) => void;
  remove: (id: string) => void;
}

const EntryContext = createContext({} as IEntryContextProps);

const EntryProvider: React.FC = ({ children }) => {
  const [entries, setEntries] = useState([] as IEntry[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const entryArray = await getEntries();
      setEntries(entryArray);
      setIsLoading(false);
    })();
  }, []);

  const save = useCallback(
    async ({ amount, isInit, id, entryAt, category, description  }: SaveEntryProps) => {
      console.log(description);

      const data = {
        amount: parseFloat(amount),
        id: id || uuid(),
        entryAt: entryAt || new Date(),
        isInit,
        description,
        category,
      };

      saveEntry(data, !!id);

      const newEntries = await getEntries();
      setEntries(newEntries);
    },
    [],
  );

  const remove = useCallback((id: string) => {
    (async () => {
      await deleteEntry(id);

      setEntries(value => value.filter(entry => entry.id !== id));
    })();
  }, []);

  return (
    <EntryContext.Provider value={{ entries, save, isLoading, remove }}>
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
