import React, { createContext, useContext, useEffect, useState } from 'react';

interface BalanceProps {
  update: number;
  setUpdate: React.Dispatch<React.SetStateAction<number>>;
}

const AuthContext = createContext({} as BalanceProps);

const AuthProvider: React.FC = ({ children }) => {
  const [update, setUpdate] = useState(0);

  return (
    <AuthContext.Provider value={{ update, setUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return authContext;
};

export { AuthProvider, useAuth };
