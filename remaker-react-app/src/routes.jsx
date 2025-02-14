import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Service } from './screens/Service';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Service" element={<Service />} />
    </Routes>
  );
};