import React from 'react';
import { CategoryProvider } from './Category';
import { EntryProvider } from './Entry';
import { BalanceProvider } from './Balance';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <CategoryProvider>
      <EntryProvider>
        <BalanceProvider>{children}</BalanceProvider>
      </EntryProvider>
    </CategoryProvider>
  );
};
