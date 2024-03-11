import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useForm } from '../../hooks/useForm';

export const Register = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const { setUserRegistered, userRegistered } = useUser();

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: '',
    password: '',
    email: '',
  });

  const onNewUser = (user) => {
    if (!userInfo.name || !userInfo.password) return;
    setUserRegistered((prevUser) => [...prevUser, user]);
  };

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const newUser = {
      name: userInfo.name,
      password: userInfo.password,
      email: userInfo.email,
    };
    onNewUser(newUser);
    if (!userInfo.name || !userInfo.password) {
      setIsEmpty(true);
      return;
    }

    setUserInfo({
      name: '',
      password: '',
      email: '',
    });
    setUserCreated(true);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  // useEffect(() => {
  //   console.log(userRegistered);
  // }, [userRegistered]);

  return (
    <section className=" flex  flex-col items-center justify-center h-screen">
      {userCreated ? (
        <div className="fixed top-1/2 flex flex-col gap-4 items-center">
          <span>✔️</span>
          <h4>User has been created</h4>
        </div>
      ) : (
        <form
          className=" flex flex-col gap-4 p-20 bg-gray-200  rounded-md "
          onSubmit={handleForm}
        >
          <label htmlFor="user" className="font-semibold">
            User
          </label>
          <input
            type="text"
            className={`border ${isEmpty ? 'border-red-500' : ''} h-10`}
            id="user"
            onChange={(e) => handleInputChange(e)}
            name="name"
            value={userInfo.name}
          />
          {isEmpty ? (
            <span className="text-red-500 text-xs text-center -mt-3">
              Please complete this field
            </span>
          ) : (
            ''
          )}
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            className={`border ${isEmpty ? 'border-red-500' : ''} h-10`}
            id="password"
            onChange={(e) => handleInputChange(e)}
            name="password"
            value={userInfo.password}
          />
          {isEmpty ? (
            <span className="text-red-500 text-xs text-center -mt-3">
              Please complete this field
            </span>
          ) : (
            ''
          )}
          <label htmlFor="password" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            className={`border ${isEmpty ? 'border-red-500' : ''} h-10`}
            id="email"
            onChange={(e) => handleInputChange(e)}
            name="email"
            value={userInfo.email}
          />
          {isEmpty ? (
            <span className="text-red-500 text-xs text-center -mt-3">
              Please complete this field
            </span>
          ) : (
            ''
          )}

          <button
            className="bg-blue-600 p-2 rounded-md  text-xl hover:bg-blue-400 text-white"
            type="submit"
          >
            Register
          </button>
          <Link
            to="/login"
            className="text-sm text-center text-blue-500 hover:underline cursor-pointer"
          >
            <span>¿Ya tienes una cuenta?</span>
          </Link>
        </form>
      )}
    </section>
  );
};
