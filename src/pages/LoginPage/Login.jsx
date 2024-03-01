import { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, login, userRegistered } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    userRegistered.some((user) => {
      if (user.name === username && user.password === password) {
        const userData = { username, password };
        setUser(userData);
        sessionStorage.setItem('user', JSON.stringify(userData));
        login();
      } else {
        alert('enter the username and password');
      }
    });
  };

  return (
    <main className="w-full flex flex-col items-center ">
      <form
        className=" flex flex-col gap-4 w-96  p-20 bg-gray-200  rounded-md relative top-64"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 rounded-md">Log In</button>
      </form>
      <Link
        to="/register"
        className="relative top-64 mt-4 text-sm text-center text-blue-500 hover:underline cursor-pointer"
      >
        Crear una cuenta
      </Link>
    </main>
  );
};
