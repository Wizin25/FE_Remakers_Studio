import React from 'react';
import { Navbar } from '../common/Navbar';
import { AppRoutes } from '../../routes';
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/src/assets/images/logo.jpg" alt="Remakers Studio" />
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Dịch Vụ & Sản Phẩm</h3>
              <ul>
                <li>Custom Giày</li>
                <li>Vệ Sinh Giày</li>
                <li>Phục Hồi Giày</li>
                <li>Phụ Kiện Giày</li>
                <li>Sản Phẩm Chăm Sóc Giày</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Về Chúng Tôi</h3>
              <ul>
                <li>Về Remakers</li>
                <li>Chính Sách Giao Nhận</li>
                <li>Chính Sách Bảo Hành</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Liên Hệ & Hỗ Trợ</h3>
              <p>remakers@gmail.com</p>
              <p>0764 269 957</p>
            </div>
          </div>

          <div className="footer-subscribe">
            <h3>Cập Nhật Xu Hướng Mới Nhất</h3>
            <p>Để lại e-mail của bạn để nhận ngay các tin tức, ưu đãi và xu hướng mới nhất từ REMAKERS!</p>
            <div className="subscribe-form">
              <input type="text" placeholder="Điền e-mail của bạn tại đây ..." />
              <button type="submit">➔</button>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-legal">
              <p>Term & Conditions | Privacy Policy</p>
              <p>© 2024 Remakers Studio, All Rights Reserved</p>
            </div>
            <p className="footer-address">
              <span className="location-icon">📍</span> 
              Đường N2, Long Thạnh Mỹ, Quận 9, Hồ Chí Minh, Việt Nam
            </p>
            <div className="social-icons">
              <a href="#"><img src="/path/to/tiktok-icon.png" alt="TikTok" /></a>
              <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};