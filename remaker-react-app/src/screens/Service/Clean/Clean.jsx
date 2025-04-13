import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Clean.css';
import { submitServiceRequest } from '../../../services/api';

export const Clean = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const CLEAN_CATEGORY_ID = "f28201eb-2d86-4b27-8960-753d518496e2";

  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    linkFacebook: '',
    linkShareNike: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId"); // null nếu chưa đăng nhập

    const payload = {
      ...formData,
      servicesCategoryId: CLEAN_CATEGORY_ID,
      createDate: new Date().toISOString(),
    };

    if (userId) {
      payload.userId = userId;
    }

    try {
      const response = await submitServiceRequest(payload);
      if (response.success) {
        alert("Gửi yêu cầu thành công!");
        setFormData({
          fullname: '',
          phoneNumber: '',
          linkFacebook: '',
          linkShareNike: '',
          description: '',
        });
      } else {
        alert("Có lỗi xảy ra khi gửi yêu cầu!");
      }
    } catch (error) {
      console.error("Lỗi gửi API:", error);
      alert("Không thể kết nối máy chủ.");
    }
  };

  return (
    <div className="clean-service">
      <div className="content">
        <div className="navbar2">
          <div className={`nav-item ${location.pathname === '/Service' ? 'active' : ''}`} 
               onClick={() => navigate('/Service')}>
            Custom
          </div>
          <div className={`nav-item ${location.pathname === '/restore' ? 'active' : ''}`}
               onClick={() => navigate('/restore')}>
            Phục hồi
          </div>
          <div className={`nav-item ${location.pathname === '/clean' ? 'active' : ''}`}
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                placeholder="Họ và Tên"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Số điện thoại"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="linkFacebook"
                placeholder="Link Facebook (tuỳ chọn)"
                value={formData.linkFacebook}
                onChange={handleChange}
              />
              <input
                type="text"
                name="linkShareNike"
                placeholder="Link share mẫu Nike (tuỳ chọn)"
                value={formData.linkShareNike}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Ghi chú thêm"
                value={formData.description}
                onChange={handleChange}
              />
              <button type="submit" className="submit-btn">GỬI</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
