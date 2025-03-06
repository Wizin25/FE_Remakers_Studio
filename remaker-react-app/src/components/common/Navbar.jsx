import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
          <img
            className="logo-2"
            alt="Logo"
            src="/src/assets/images/logo.jpg"
          />
        </div>

        {/* Menu Items */}
        <div className="navbar">
          <div className="custom" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>TRANG CHỦ</div>
          <div className="d-ch-v" onClick={() => { navigate('/service'); window.scrollTo(0, 0); }}>DỊCH VỤ</div>
          <div className="s-n-ph-m" onClick={() => { navigate('/Product'); window.scrollTo(0, 0); }}>SẢN PHẨM</div>
          <div className="li-n-h" onClick={() => { navigate('/'); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>LIÊN HỆ</div>
        </div>

        {/* User Actions */}
        <div className="nav-actions">
          <div className="user-account" onClick={() => { navigate('/login'); window.scrollTo(0, 0); }}>
            <img
              className="account-icon"
              alt="Account"
              src="/src/assets/images/user.jpg"
            />
            <span>Tài khoản</span>
          </div>
          <div className="shopping-cart" onClick={() => { navigate('/Cart'); window.scrollTo(0, 0); }}>
            <img
              className="cart-icon"
              alt="Cart"
              src="/src/assets/images/cart.jpg"
            />
            <span>Giỏ hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
};