import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Service.css';
import { TestApiButton } from '../TestApiButton';
import { submitServiceRequest } from '../../services/api';

export const Service = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const CUSTOM_CATEGORY_ID = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        linkFacebook: '',
        linkShareNike: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');

        const payload = {
            ...formData,
            servicesCategoryId: CUSTOM_CATEGORY_ID,
            createDate: new Date().toISOString()
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
                    description: ''
                });
            } else {
                alert("Gửi yêu cầu thất bại!");
            }
        } catch (error) {
            console.error("Lỗi khi gửi yêu cầu:", error);
            alert("Đã có lỗi xảy ra khi kết nối máy chủ.");
        }
    };

    const slides = [
        { src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa1bceaf-21bc-44b5-853b-33eac3c34e2b/WMNS+NIKE+P-6000.png", alt: "Nike P-6000", name: "Nike P-6000" },
        { src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/W+BLAZER+MID+%2777.png", alt: "Nike Blazer Mid '77", name: "Nike Blazer Mid '77" },
        { src: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/705e7806-a5f4-415c-99de-b01e6fda9b4c/AIR+FORCE+1+%2707.png", alt: "Nike Air Force 1", name: "Nike Air Force 1" },
        { src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b535f796-2dcb-4482-9017-16f151c8782e/custom-huarache-run-by-you.png", alt: "Nike Hurache Run", name: "Nike Hurache Run" },
        { src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fa167834-731f-47d5-bdc3-8578415c02df/custom-nike-air-max-97-shoes-by-you.png", alt: "Nike Air Max 97", name: "Nike Air Max 97" },
        { src: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3b58d490-7e40-4768-b023-ac7c6dbc081e/custom-dunk-low-unlocked-by-you.png", alt: "Nike Dunk Low", name: "Nike Dunk Low" },
    ];

    return (
        <div className="service">
            <div className="content">
                <div className="navbar2">
                    <div className={`nav-item ${location.pathname === '/Service' ? 'active' : ''}`} onClick={() => navigate('/Service')}>Custom</div>
                    <div className={`nav-item ${location.pathname === '/restore' ? 'active' : ''}`} onClick={() => navigate('/restore')}>Phục hồi</div>
                    <div className={`nav-item ${location.pathname === '/clean' ? 'active' : ''}`} onClick={() => navigate('/clean')}>Vệ sinh</div>
                </div>
                
                <div className="service-content1">
                    <div className="grid-container" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '20px',
                        padding: '20px'
                    }}>
                        {slides.map((slide, idx) => (
                            <div className="grid-item" key={idx} style={{ textAlign: 'center' }}>
                                <img src={slide.src} alt={slide.alt} style={{ width: '100%', borderRadius: '8px', transition: 'transform 0.3s ease' }} />
                                <p style={{ marginTop: '10px' }}><b>{slide.name}</b></p>
                               
                            </div>
                        ))}
                    </div>
                </div>

                <div className="service-content">
                    <div className="service-info">
                        <h2>DỊCH VỤ CUSTOM</h2>
                        <div className="service-details">
                            <div className="info-section">
                                <h3>Thông Tin Dịch Vụ</h3>
                                <ul>
                                    <li>- Giá từ 400.000 đến 1.999.000 VNĐ</li>
                                    <li>- Thiết kế độc quyền, thể hiện cá tính</li>
                                    <li>- Bảo hành 1 tháng</li>
                                    <li>- Thời gian từ 10 đến 15 ngày</li>
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
                                    <li>- Lên ý tưởng thiết kế</li>
                                    <li>- Vẽ demo 3D</li>
                                    <li>- Thi công</li>
                                    <li>- Hoàn thiện và bàn giao</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="booking-form">
                        <h3>Nhận Tư Vấn</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="fullName" placeholder="Họ và Tên" value={formData.fullName} onChange={handleChange} required />
                            <input type="tel" name="phoneNumber" placeholder="Số điện thoại" value={formData.phoneNumber} onChange={handleChange} required />
                            <input type="text" name="linkFacebook" placeholder="Link Facebook (tuỳ chọn)" value={formData.linkFacebook} onChange={handleChange} />
                            <input type="text" name="linkShareNike" placeholder="Link share mẫu Nike (tuỳ chọn)" value={formData.linkShareNike} onChange={handleChange} />
                            <textarea name="description" placeholder="Ghi chú" value={formData.description} onChange={handleChange} />
                            <button type="submit" className="submit-btn">GỬI</button>
                        </form>
                    </div>
                </div>
            </div>
            <TestApiButton />
        </div>
    );
};
