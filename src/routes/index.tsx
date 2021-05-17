import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import AuthenticatedRoutes from './authenticated';

import { Load } from '../components/Load';
import { Welcome } from '../pages/Welcome';
import { useAuth } from '../hooks/Auth';
import UnauthorizedRoutes from './unauthorized';

const Routes: React.FC = () => {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { update } = useAuth();

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('@SmartMoney:user');
      setIsNewUser(!data);
      setIsLoading(false);
    })();
  }, [isNewUser, update]);

  if (!isLoading) {
    if (isNewUser) {
      return <UnauthorizedRoutes />
    } else {
      return <AuthenticatedRoutes />;
    }
  } else {
    return <Load />;
  }
};

export default Routes;
