import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Clean.css';

export const Clean = () => {
  const navigate = useNavigate();
  return (
    <div className="clean-service">
      <div className="content">
      <div className="navbar2">
                    <div className={`nav-item ${location.pathname === '/Service' ? 'active' : ''}`} 
                        onClick={() => navigate('/Service')}>
                        Custom
                    </div>
                    <div className={`nav-item ${location.pathname === '/Service/restore' ? 'active' : ''}`}
                        onClick={() => navigate('/restore')}>
                        Phục hồi
                    </div>
                    <div className={`nav-item ${location.pathname === '/Service/clean' ? 'active' : ''}`}
                        onClick={() => navigate('/clean')}>
                        Vệ sinh
                    </div>
                </div>
      <div className="image-comparison">
        <img 
          src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624468/clean_pic_lbj724.png"
          alt="Gucci shoe before and after cleaning"
          className="comparison-image"
        />
      </div>
      <div className="brand-label">GUCCI</div>

      <div className="service-content">
        <div className="service-info">
          <h2>DỊCH VỤ VỆ SINH</h2>
          
          <div className="service-details">
            <div className="info-section">
              <h3>Thông Tin Dịch Vụ</h3>
              <ul>
                <li>- Giá 150.000 - 300.000 VNĐ</li>
                <li>- Thời gian thực hiện 60-90 phút</li>
                <li>- Bảo hành giặt lại nếu không hài lòng</li>
                <li>- Sử dụng các sản phẩm chuyên dụng</li>
                <li>- Vệ sinh toàn bộ giày</li>
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
                <li>- Vệ sinh sơ bộ, loại bỏ bụi bẩn</li>
                <li>- Xử lý các vết bẩn cứng đầu</li>
                <li>- Làm sạch hoàn thiện</li>
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
