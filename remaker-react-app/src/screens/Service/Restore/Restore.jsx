import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Restore.css';
import { submitServiceRequest } from '../../../services/api';

export const Restore = () => {
  const navigate = useNavigate();

  const RESTORE_CATEGORY_ID = "e549c2fb-b379-42c9-9ccc-27edde838327";

  const [formData, setFormData] = useState({
    fullName: '',
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
    const userId = localStorage.getItem("userId");

    const payload = {
      ...formData,
      servicesCategoryId: RESTORE_CATEGORY_ID,
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
          fullName: '',
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
    <div className="restore-service">
      <div className="content">
        <div className="navbar2">
          <div className="nav-item" onClick={() => navigate('/Service')}>Custom</div>
          <div className="nav-item active" onClick={() => navigate('/restore')}>Phục hồi</div>
          <div className="nav-item" onClick={() => navigate('/clean')}>Vệ sinh</div>
        </div>

        <div className="image-comparison">
          <img 
            src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624469/restore_pic_nsmna7.png"
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Họ và Tên"
                value={formData.fullName}
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
