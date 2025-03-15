import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Service.css';

export const Service = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const slides = [
        { src: "src/assets/images/Shoes/Shoes_1.webp", alt: "Nike P-6000", name: "Nike P-6000" },
        { src: "src/assets/images/Shoes/Shoes_2.webp", alt: "Nike Blazer Mid '77", name: "Nike Blazer Mid '77" },
        { src: "src/assets/images/Shoes/Shoes_3.webp", alt: "Nike Air Force 1 High", name: "Nike Air Force 1 High" },
        { src: "src/assets/images/Shoes/Shoes_4.webp", alt: "Nike Hurache Run", name: "Nike Hurache Run" },
        { src: "src/assets/images/Shoes/Shoes_5.webp", alt: "Nike Air Max 97", name: "Nike Air Max 97" },
        { src: "src/assets/images/Shoes/Shoes_6.webp", alt: "Nike Dunk Low", name: "Nike Dunk Low" },
    ];

    return (
        <div className="service">
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
                <div className="service-content1">
                    <div className="grid-container" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '20px',
                        padding: '20px'
                    }}>
                        {slides.map((slide, idx) => (
                            <div className="grid-item" key={idx} style={{
                                textAlign: 'center'
                            }}>
                                <img 
                                    src={slide.src} 
                                    alt={slide.alt}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        transition: 'transform 0.3s ease'
                                    }}
                                />
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
                                    <li>- Giá 400.000 - 1.999.000 VNĐ</li>
                                    <li>- Với đội ngũ nghê sĩ chuyên nghiệp, chúng tôi sẽ tư vấn ý tưởng thiết kế để biến đôi giày của bạn trở nên độc đáo, thể hiện cá tính và phong cách riêng của bạn.</li>
                                    <li>- Bảo hành 1 tháng</li>
                                    <li>- Thời gian thực hiện 10 - 15 ngày</li>
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
                                    <li>- Tạo bản vẽ 3D bằng phần mềm</li>
                                    <li>- Chốt thiết kế và bắt đầu thi công</li>
                                    <li>- Hoàn thiện sản phẩm</li>
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
