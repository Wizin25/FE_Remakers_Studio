import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img
            className="logo-2"
            alt="Logo"
            src="/src/assets/images/logo.jpg"
          />
        </div>

        {/* Menu Items */}
        <div className="navbar">
          <div className="custom">TRANG CHỦ</div>
          <div className="d-ch-v">DỊCH VỤ</div>
          <div className="s-n-ph-m">SẢN PHẨM</div>
          <div className="li-n-h">LIÊN HỆ</div>
        </div>

        {/* User Actions */}
        <div className="nav-actions">
          <div className="user-account" onClick={() => navigate('/login')}>
            <img
              className="account-icon"
              alt="Account"
              src="/src/assets/images/user.jpg"
            />
            <span>Tài khoản</span>
          </div>
          <div className="shopping-cart">
            <img
              className="cart-icon"
              alt="Cart"
              src="/src/assets/images/cart.jpg"
            />
            <span>Giỏ hàng</span>
            <span className="cart-count">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};