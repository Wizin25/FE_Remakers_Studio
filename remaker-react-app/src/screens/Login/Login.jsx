import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { loginUser } from '../../services/api';

export const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) {
            navigate('/Login');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Dùng state trực tiếp
        const username = e.target.username.value;
        // const password = e.target.password.value ❌ bỏ dòng này đi
      
        if (!username || !password) {
          setError("Vui lòng nhập tên đăng nhập và mật khẩu.");
          return;
        }
      
        const credentials = { username, password }; // Dùng password từ state
        const response = await loginUser(credentials);
      
        if (response.error) {
          // xử lý lỗi
        } else {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('username', credentials.username);
          window.dispatchEvent(new Event('storage'));
      
          if (credentials.username === 'admin') {
            navigate('/admin');
          } else {
            navigate('/SharedLayout');
          }
        }
      };
      

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container" >
            <div className="login-box">
                <div className="login-content">
                    <h1 className="login-title">Chào Mừng Bạn Quay Lại</h1>

                    {showError && (
                        <p className="error-message" style={{ animation: 'fadeIn 0.5s' }}>
                            <span role="img" aria-label="warning">⚠️</span> {error}
                        </p>
                    )}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Tên Đăng Nhập</label>
                            <input
                                type="text"
                                id="username"
                                className="form-input"
                                placeholder="Nhập tên đăng nhập của bạn"
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Mật khẩu</label>
                            <div style={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="form-input"
                                    placeholder="Nhập mật khẩu của bạn"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '10px 40px 10px 12px',
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        fontSize: '16px',
                                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                                        transition: 'border 0.2s ease-in-out',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.border = '1px solid #007bff'}
                                    onBlur={(e) => e.target.style.border = '1px solid #ccc'}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '18px',
                                        color: '#555'
                                    }}
                                    title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                                >
                                    {showPassword ? '👁️' : '🙈'}
                                </button>
                            </div>
                        </div>


                        <button type="submit" className="login-button">
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
                        src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624468/login-shoe_yftbc6.png"
                        alt="Login"
                        className="side-image"
                    />
                </div>
            </div>
        </div>
    );
};
