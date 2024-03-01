import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const useUser = () => {
  const {
    user,
    setUser,
    isLogged,
    setIsLogged,
    userRegistered,
    setUserRegistered,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const login = () => {
    setIsLogged(true);
    navigate('/');
  };

  const logout = () => {
    setIsLogged(false);
    sessionStorage.removeItem('user');
    setUser({ username: '' });
  };

  return {
    isLogged,
    user,
    setUser,
    login,
    logout,
    setIsLogged,
    userRegistered,
    setUserRegistered,
  };
};
