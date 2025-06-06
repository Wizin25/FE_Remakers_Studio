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
            <img src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624468/logo_uthnzf.png?fbclid=IwY2xjawJFMD1leHRuA2FlbQIxMAABHTlBXJS3eAMzhqPkDptWl_r8r7uB9DQBP3_w0gBw8DrWLZ3p55PHZ0cDng_aem_IvKPqHc0ojp7wNf-Adhyrg" alt="Remakers Studio" />
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
                
                <li>Nhóm Chuyên Gia</li>
                <li>Đối Tác Chiến Lược</li>
                <li>Liên Hệ Với Chúng Tôi</li>
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
              <input type="email" id="emailInput" placeholder="Điền e-mail của bạn tại đây ..." />
              <button type="button" onClick={() => {
                const email = document.getElementById('emailInput').value;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
                if (email.trim() === '') {
                  alert('Vui lòng nhập email của bạn!');
                } else if (!emailPattern.test(email)) {
                  alert('Email không đúng định dạng! Vui lòng nhập lại.');
                } else {
                  alert('Email đã gửi thành công! Chúng tôi sẽ cập nhật cho bạn những thông tin mới nhất.');
                }
              }}>Gửi</button>
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
              <a href="https://www.tiktok.com/@remakers_chamgiayuytin" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/premium-vector/tiktok-logo_628407-1683.jpg" alt="TikTok" />
              </a>
              <a href="https://www.facebook.com/remakersvesinhgiay" target="_blank" rel="noopener noreferrer">
                <img src="https://inuvdp.com/wp-content/uploads/2022/05/logo-facebook-01.jpg" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};