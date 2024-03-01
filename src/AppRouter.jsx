import { Route, Routes } from 'react-router-dom';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { CardsPage } from './pages/CardsPage/CardsPage';
import { TransferPage } from './pages/TransferPage/TransferPage';
import { UserProfile } from './pages/UserProfile/UserProfile';
import { Register } from './pages/RegisterPage/RegisterPage';
import { Login } from './pages/LoginPage/Login';
import { MainPage } from './pages/MainPage/MainPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/accounts" element={<AccountPage />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
