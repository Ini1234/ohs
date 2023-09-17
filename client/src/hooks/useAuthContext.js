import { AuthContext } from '../context/authContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('Auth Context must be used inside  AuthContextProvider');
  }

  return context;
};
