import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export const Header = () => {
  const { isLogged, logout } = useUser();

  return (
    <header className=" w-full text-right p-2 ">
      {isLogged ? (
        <Link onClick={logout}>log out</Link>
      ) : (
        <Link to="/login">log in</Link>
      )}
    </header>
  );
};
