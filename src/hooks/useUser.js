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
    moneyInAccount,
    setUserMoneyInAccount,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const login = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    setIsLogged(true);
    navigate(lastPath, { replace: true });
  };

  const logout = () => {
    setIsLogged(false);
    sessionStorage.removeItem('user');
    setUser({ username: '' });
    setUserMoneyInAccount({
      amount: 0,
      description: '',
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
    });
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
    moneyInAccount,
    setUserMoneyInAccount,
  };
};
