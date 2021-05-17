import React from 'react';
import { CategoryProvider } from './Category';
import { EntryProvider } from './Entry';
import { BalanceProvider } from './Balance';
import { AuthProvider } from './Auth';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <CategoryProvider>
      <EntryProvider>
        <BalanceProvider>
          <AuthProvider>{children}</AuthProvider>
        </BalanceProvider>
      </EntryProvider>
    </CategoryProvider>
  );
};
