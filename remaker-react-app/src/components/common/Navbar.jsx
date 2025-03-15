import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem('username'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername(null); // Cập nhật state trước

    // 🔥 Báo hiệu cho React cập nhật ngay lập tức
    window.dispatchEvent(new Event('storage'));

    // 🔥 Dùng setTimeout để đảm bảo navigate chạy sau khi state cập nhật
    setTimeout(() => {
        navigate('/Login');
    }, 100);
};

  console.log('Current username:', username);

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
          <div className="li-n-h" onClick={() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>LIÊN HỆ</div>
        </div>

        {/* User Actions */}
        <div className="nav-actions">
          {username ? (
            <div 
              className="user-account"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => { navigate('/SharedLayout'); window.scrollTo(0, 0); }} // Navigate to SharedLayout on username click
            >
              <img
                className="account-icon"
                alt="Account"
                src="/src/assets/images/user.jpg"
              />
              <span>{username}</span>
              {isHovered && (
                <div className="dropdown">
                  <button onClick={() => { handleLogout(); navigate('/Login'); }}>Đăng xuất</button>
                </div>
              )}
            </div>
          ) : (
            <div className="user-account" onClick={() => { navigate('/Login'); window.scrollTo(0, 0); }}>
              <img
                className="account-icon"
                alt="Account"
                src="/src/assets/images/user.jpg"
              />
              <span>Tài khoản</span>
            </div>
          )}
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