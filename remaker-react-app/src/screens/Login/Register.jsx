import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/api'; // Import API đăng ký
import './Login.css'; // Sử dụng CSS của trang đăng nhập

export const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
        username: '',
        password: '',
        rePassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Cập nhật dữ liệu nhập vào state
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Xử lý đăng ký
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra xác nhận mật khẩu
        if (formData.password !== formData.rePassword) {
            setError("Mật khẩu xác nhận không khớp!");
            return;
        }

        // Kiểm tra họ và tên
        if (!formData.fullName) {
            setError("Họ và tên không được để trống!");
            return;
        }

        // Kiểm tra địa chỉ
        if (!formData.address) {
            setError("Địa chỉ không được để trống!");
            return;
        }

        // Kiểm tra số điện thoại
        if (!formData.phoneNumber) {
            setError("Số điện thoại không được để trống!");
            return;
        }

        // Chuẩn bị dữ liệu gửi lên API
        const userData = {
            fullName: formData.fullName,
            address: formData.address,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            username: formData.username,
            password: formData.password
        };

        try {
            const response = await registerUser(userData);

            if (response.error) {
                setError(response.error);
            } else {
                setSuccess("Đăng ký thành công! Đang chuyển hướng...");
                setTimeout(() => navigate('/Login'), 2000); // Chuyển hướng sau 2s
            }
        } catch (err) {
            setError("Đăng ký thất bại! Vui lòng thử lại.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-content">
                    <h1 className="login-title">Đăng Ký Tài Khoản</h1>
                    
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Họ và Tên</label>
                            <input 
                                type="text"
                                id="fullName" // Updated id to match new state
                                className="form-input"
                                placeholder="Nhập họ và tên của bạn"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Địa Chỉ</label>
                            <input 
                                type="text"
                                id="address" // New input for address
                                className="form-input"
                                placeholder="Nhập địa chỉ của bạn"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Số Điện Thoại</label>
                            <input 
                                type="tel"
                                id="phoneNumber" // New input for phone number
                                className="form-input"
                                placeholder="Nhập số điện thoại của bạn"
                                value={formData.phoneNumber}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Tên Đăng Nhập</label>
                            <input 
                                type="text"
                                id="username"
                                className="form-input"
                                placeholder="Nhập tên đăng nhập của bạn"
                                value={formData.username}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="rePassword">Xác nhận mật khẩu</label>
                            <input
                                type="password"
                                id="rePassword" 
                                className="form-input"
                                placeholder="Xác nhận mật khẩu của bạn"
                                value={formData.rePassword}
                                onChange={handleChange}
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
                        src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624468/login-shoe_yftbc6.png" 
                        alt="Login"
                        className="side-image"
                    />
                </div>
            </div>
        </div>
    );
};
