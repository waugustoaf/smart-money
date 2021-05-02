import React, { createContext, useContext, useEffect, useState } from 'react';
import { getRealm } from '../services/Realm';
import { useEntry } from './Entry';

interface BalanceProps {
  balance: number;
}

const BalanceContext = createContext({} as BalanceProps);

const BalanceProvider: React.FC = ({ children }) => {
  const [balance, setBalance] = useState(0);

  const { entries } = useEntry();

  useEffect(() => {
    (async () => {
      const realm = await getRealm();
      const entries = realm.objects('Entry');
      const amount = entries.sum('amount');

      setBalance(amount || 0);
    })();
  }, [entries]);

  return (
    <BalanceContext.Provider value={{ balance }}>
      {children}
    </BalanceContext.Provider>
  );
};

const useBalance = () => {
  const balanceContext = useContext(BalanceContext);

  if (!balanceContext) {
    throw new Error('useBalance must be used within BalanceProvider');
  }

  return balanceContext;
};

export { BalanceProvider, useBalance };
