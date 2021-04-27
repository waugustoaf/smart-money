import React from 'react';
import { EntryProvider } from './Entry';

export const AppProvider: React.FC = ({ children }) => {
  return <EntryProvider>{children}</EntryProvider>;
};
