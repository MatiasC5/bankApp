import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(sessionStorage.getItem('user') | '');
  const [userRegistered, setUserRegistered] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  const [moneyInAccount, setUserMoneyInAccount] = useState({
    amount: 0,
    description: '',
    date: `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
    moneyReceived: 0,
  });

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        userRegistered,
        setUser,
        setIsLogged,
        setUserRegistered,
        moneyInAccount,
        setUserMoneyInAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};
