import React from 'react';
import { CategoryProvider } from './Category';
import { EntryProvider } from './Entry';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <CategoryProvider>
      <EntryProvider>{children}</EntryProvider>
    </CategoryProvider>
  );
};
