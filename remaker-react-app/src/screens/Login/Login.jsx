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
        const username = e.target.username.value;

        if (!username || !password) {
            setError("Vui lòng nhập tên đăng nhập và mật khẩu.");
            setShowError(true);
            return;
        }

        const credentials = { username, password };
        const response = await loginUser(credentials);

        if (response.error) {
            setError("Tên đăng nhập hoặc mật khẩu sai.");
            setShowError(true);
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

    useEffect(() => {
        const root = document.documentElement;
        const eye = document.getElementById('eyeball');
        const beam = document.getElementById('beam');
        const passwordInput = document.getElementById('password');

        const handleMouseMove = (e) => {
            if (!beam) return;
            let rect = beam.getBoundingClientRect();
            let mouseX = rect.right + (rect.width / 2);
            let mouseY = rect.top + (rect.height / 2);
            let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
            let degrees = (rad * (20 / Math.PI) * -1) - 350;
            root.style.setProperty('--beamDegrees', `${degrees}deg`);
        };

        const handleEyeClick = (e) => {
            e.preventDefault();
            document.body.classList.toggle('show-password');
            setShowPassword(prev => !prev);
            passwordInput.focus();
        };

        root.addEventListener('mousemove', handleMouseMove);
        eye.addEventListener('click', handleEyeClick);

        return () => {
            root.removeEventListener('mousemove', handleMouseMove);
            eye.removeEventListener('click', handleEyeClick);
        };
    }, []);

    return (
        <div className="login-container">
            <div className="login-image">
                <img
                    src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624468/login-shoe_yftbc6.png"
                    alt="Login"
                    className="side-image"
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Tên Đăng Nhập</label>
                    <input
                        id="username"
                        type="text"
                        className="form-input"
                        placeholder="Nhập tên đăng nhập của bạn"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <div className="input-wrapper">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            placeholder="Nhập mật khẩu của bạn"
                        />
                        <div id="beam"></div>
                        <button id="eyeball" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </button>
                    </div>
                </div>

                <button id="submit" type="submit" className="login-button">Đăng nhập</button>
                <div className="login-footer">
                    <span>Chưa có tài khoản? </span>
                    <a href="/Register" className="signup-link">Đăng ký ngay</a>
                </div>
            </form>

        </div>
    );
};
