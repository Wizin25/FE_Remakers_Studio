import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Service.css';
import { TestApiButton } from '../TestApiButton';

export const Service = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
                                    <li>- Giá từ 400.000 đến 1.999.000 VNĐ</li>
                                    <li>- Với đội ngũ nghệ sĩ chuyên nghiệp, chúng tôi sẽ tư vấn ý tưởng thiết kế để biến đôi giày của bạn trở nên độc đáo, thể hiện cá tính và phong cách riêng của bạn.</li>
                                    <li>- Bảo hành 1 tháng</li>
                                    <li>- Thời gian thực hiện từ 10 đến 15 ngày</li>
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
                            <input type="text" placeholder="Họ và Tên" required />
                            <input type="tel" placeholder="Số điện thoại" required />
                            <input type="email" placeholder="Địa chỉ Email" required />
                            <textarea placeholder="Ghi chú" />
                            <button type="submit" className="submit-btn">GỬI</button>
                        </form>
                    </div>
                </div>
            </div>
            <TestApiButton />
        </div>
    );
};
