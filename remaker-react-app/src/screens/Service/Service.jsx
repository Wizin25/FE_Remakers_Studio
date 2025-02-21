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
        </div>
    );
};
