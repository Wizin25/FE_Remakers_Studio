import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Restore.css';

export const Restore = () => {
  const navigate = useNavigate();
  return (
    <div className="restore-service">
        <div className="content">
        <div className="navbar2">
                    <div className="nav-item" onClick={() => navigate('/Service')}>Custom</div>
                    <div className="nav-item active" onClick={() => navigate('/restore')}>Phục hồi</div>
                    <div className="nav-item active" onClick={() => navigate('/clean')}>Vệ sinh</div>
                </div>
      <div className="image-comparison">
        <img 
          src="/src/assets/images/restore_pic.png"
          alt="Shoe before and after restoration"
          className="comparison-image"
        />
      </div>
      <div className="brand-label">Louis Vuitton</div>
      
      <div className="service-content">
        <div className="service-info">
          <h2>DỊCH VỤ PHỤC HỒI</h2>
          
          <div className="service-details">
            <div className="info-section">
              <h3>Thông Tin Dịch Vụ</h3>
              <ul>
                <li>- Giá 250.000 - 500.000 VNĐ</li>
                <li>- Thời gian thực hiện 3-7 ngày</li>
                <li>- Bảo hành phục hồi lại nếu không hài lòng</li>
                <li>- Sử dụng các sản phẩm chuyên dụng</li>
                <li>- Phục hồi form dáng, màu sắc</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Thời Gian</h3>
              <ul>
                <li>- Thứ 2 - Thứ 7: 9:00 - 21:00</li>
                <li>- Chủ nhật: 9:00 - 17:00</li>
              </ul>
            </div>

            <div className="info-section">
              <h3>Quy Trình Thực Hiện</h3>
              <ol>
                <li>- Kiểm tra và ghi nhận tình trạng giày</li>
                <li>- Vệ sinh và xử lý sơ bộ</li>
                <li>- Phục hồi form dáng</li>
                <li>- Xử lý màu sắc và chất liệu</li>
                <li>- Hoàn thiện và kiểm tra</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="booking-form">
          <h3>Nhận Tư Vấn</h3>
          <form>
            <input type="text" placeholder="Họ và Tên" />
            <input type="tel" placeholder="Số điện thoại" />
            <input type="email" placeholder="Địa chỉ Email" />
            <textarea placeholder="Ghi chú" />
            <button type="submit" className="submit-btn">GỬI</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}; 