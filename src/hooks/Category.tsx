import React, { createContext, useContext, useEffect, useState } from 'react';
import { ICategory } from '../interfaces/ICategory';
import {
  getAllCategories,
  getCreditCategories,
  getDebitCategories,
} from '../services/Categories';

interface CategoryProps {
  categories: ICategory[];
  debitCategories: ICategory[];
  creditCategories: ICategory[];
}

const CategoryContext = createContext({} as CategoryProps);

const CategoryProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [debitCategories, setDebitCategories] = useState<ICategory[]>([]);
  const [creditCategories, setCreditCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async () => {
      const allCategories = await getAllCategories();
      setCategories(allCategories);
      const debitCategories = await getDebitCategories();
      setDebitCategories(debitCategories);
      const creditCategories = await getCreditCategories();
      setCreditCategories(creditCategories);
    })();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, debitCategories, creditCategories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategory must be used within CategoryProvider');
  }

  return context;
};

export { CategoryProvider, useCategory };
