import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import {App} from './App.jsx';
import { Login } from './pages/LoginPage/Login.jsx';
import { AppRouter } from './AppRouter.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { Register } from './pages/RegisterPage/RegisterPage.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
