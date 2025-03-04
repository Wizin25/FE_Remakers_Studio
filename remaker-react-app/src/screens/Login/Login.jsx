import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-content">
          <h1 className="login-title">Chào Mừng Bạn Quay Lại</h1>
          
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                className="form-input"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password" 
                className="form-input"
                placeholder="Nhập mật khẩu của bạn"
              />
            </div>

            <button type="submit" className="login-button" onClick={() => navigate('/SharedLayout')}>
              Đăng nhập
            </button>

            <div className="login-footer">
              <span>Chưa có tài khoản? </span>
              <a href="/Register" className="signup-link">Đăng ký ngay</a>
            </div>
          </form>
        </div>

        <div className="login-image">
          <img 
            src="/src/assets/images/login-shoe.jpg" 
            alt="Login"
            className="side-image"
          />
        </div>
      </div>
    </div>
  );
};
