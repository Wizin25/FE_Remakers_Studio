import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { loginUser } from '../../services/api';

export const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (!username) {
            navigate('/Login');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // Kiểm tra xem người dùng đã nhập thông tin chưa
        if (!username || !password) {
            setError("Vui lòng nhập tên đăng nhập và mật khẩu.");
            return;
        }

        const credentials = { username, password };
        const response = await loginUser(credentials);

        // Kiểm tra phản hồi từ API
        if (response.error) {
            setError("Tên đăng nhập hoặc mật khẩu không chính xác.");
            setShowError(true);
            console.error(response.error);
            setTimeout(() => {
                setShowError(false);
            }, 3000); // Ẩn thông báo sau 3 giây
        } else {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', credentials.username);
            console.log('Username saved:', credentials.username);
            console.log(response.message);

            // 🔥 Báo hiệu cho Navbar cập nhật ngay lập tức
            window.dispatchEvent(new Event('storage'));

            navigate('/');
        }
    };

    return (
        <div className="login-container">
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

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input
                                type="password"
                                id="password" 
                                className="form-input"
                                placeholder="Nhập mật khẩu của bạn"
                            />
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
                        src="/src/assets/images/login-shoe.jpg" 
                        alt="Login"
                        className="side-image"
                    />
                </div>
            </div>
        </div>
    );
};
