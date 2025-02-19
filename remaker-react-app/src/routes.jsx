import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Service } from './screens/Service';
import { Clean } from './screens/Service/Clean';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Service/Clean" element={<Clean />} />
    </Routes>
  );
};