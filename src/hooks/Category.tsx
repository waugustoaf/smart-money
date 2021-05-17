import React, { createContext, useContext, useEffect, useState } from 'react';
import { ICategory } from '../interfaces/ICategory';
import {
  getAllCategories,
  getCreditCategories,
  getDebitCategories,
  getInitCategories,
} from '../services/Categories';

interface CategoryProps {
  categories: ICategory[];
  debitCategories: ICategory[];
  creditCategories: ICategory[];
  initCategory: ICategory;
}

const CategoryContext = createContext({} as CategoryProps);

const CategoryProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [debitCategories, setDebitCategories] = useState<ICategory[]>([]);
  const [creditCategories, setCreditCategories] = useState<ICategory[]>([]);
  const [initCategory, setInitCategory] = useState<ICategory>({} as ICategory);

  useEffect(() => {
    (async () => {
      const allCategoriesHandle = await getAllCategories();
      setCategories(allCategoriesHandle);
      const debitCategoriesHandle = await getDebitCategories();
      setDebitCategories(debitCategoriesHandle);
      const creditCategoriesHandle = await getCreditCategories();
      setCreditCategories(creditCategoriesHandle);
      const initCategoriesHandle = await getInitCategories();
      setInitCategory(initCategoriesHandle[0]);
    })();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, debitCategories, creditCategories, initCategory }}
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
