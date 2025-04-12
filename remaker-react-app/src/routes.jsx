import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Service } from './screens/Service';
import { Clean } from './screens/Service/Clean/Clean';
import { Restore } from './screens/Service/Restore/Restore';
import { Register } from './screens/Login/Register';
import { SharedLayout } from './screens/Account_Information/SharedLayout/SharedLayout';
import { Product } from './screens/Product/Product';
import { Cart } from './screens/Cart/Cart'; // Added Cart import
import { TestApiButton } from './screens/TestApiButton';
import { ProductDetail } from "./screens/Product/ProductDetail";
import PaymentSuccess from "./screens/Cart/PaymentSuccess";
import { AdminPage } from './screens/Admin/AdminPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Service" element={<Service />} />
      <Route path="/clean" element={<Clean />} />
      <Route path="/restore" element={<Restore />} />
      <Route path="/SharedLayout" element={<SharedLayout />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Cart" element={<Cart />} /> {/* Added Cart route */}
      <Route path="/TestApiButton" element={<TestApiButton />} />
      <Route path="/product/:id" element={<ProductDetail />} /> 
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};