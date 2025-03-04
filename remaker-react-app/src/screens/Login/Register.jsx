import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Sử dụng CSS của trang đăng nhập

export const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng ký ở đây
        navigate('/'); // Chuyển hướng sau khi đăng ký thành công
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-content">
                    <h1 className="login-title">Đăng Ký Tài Khoản</h1>
                    
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Họ và Tên</label>
                            <input 
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Nhập họ và tên của bạn"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Nhập email của bạn"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input
                                type="password"
                                id="password" 
                                className="form-input"
                                placeholder="Nhập mật khẩu của bạn"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                            <input
                                type="password"
                                id="confirmPassword" 
                                className="form-input"
                                placeholder="Xác nhận mật khẩu của bạn"
                                required
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Đăng Ký
                        </button>

                        <div className="login-footer">
                            <span>Đã có tài khoản? </span>
                            <a href="/login" className="signup-link">Đăng nhập ngay</a>
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