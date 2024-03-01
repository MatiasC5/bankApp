import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(sessionStorage.getItem('user') | '');
  const [userRegistered, setUserRegistered] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        userRegistered,
        setUser,
        setIsLogged,
        setUserRegistered,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};
