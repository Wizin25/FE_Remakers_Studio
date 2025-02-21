import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Service } from './screens/Service';
import { Clean } from './screens/Service/Clean/Clean';
import { Restore } from './screens/Service/Restore/Restore';
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/clean" element={<Clean />} />
      <Route path="/restore" element={<Restore />} />
    </Routes>
  );
};