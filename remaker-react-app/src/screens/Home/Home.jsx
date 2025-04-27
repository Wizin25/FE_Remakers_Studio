import React, { useState, useEffect } from "react";
import "./style.css";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025585/z6407726649516_1530f9c1e7bc2490e252b65dbfc547d2_kxpgih.jpg" },
    { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025585/z6407726667451_b092fc69c6877ab8618d2ab7eb3d19a9_gbksjf.jpg" },
    { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726638415_5635f6f60dbecf101070fb63536a5425_btcdrq.jpg" }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="home">
      <div className="content">
        <section className="banner-slider">
          <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide" onClick={slide.onClick}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          <button className="slider-nav prev" onClick={prevSlide}><i className="arrow left"></i></button>
          <button className="slider-nav next" onClick={nextSlide}><i className="arrow right"></i></button>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => goToSlide(index)} />
            ))}
          </div>
        </section>
 
        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-frame">
            <div className="mission-title">
              <h2>Sứ Mệnh Remaker</h2>
            </div>
            <div className="mission-content">
              <div className="mission-grid">
                <div className="mission-item">
                  <h3>Chất Lượng</h3>
                  <p>Cam kết mang đến dịch vụ chăm sóc giày chất lượng cao nhất cho khách hàng</p>
                </div>
                <div className="mission-item">
                  <h3>Sáng Tạo</h3>
                  <p>Không ngừng đổi mới và sáng tạo trong phương pháp phục hồi giày</p>
                </div>
                <div className="mission-item">
                  <h3>Tận Tâm</h3>
                  <p>Luôn đặt sự hài lòng của khách hàng lên hàng đầu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activity Section */}
        <section className="activity-title">
          <div className="mission-title">
            <h2>Cách Thức Hoạt Động</h2>
          </div>
        </section>
        <section className="activity-section">
          <div className="activity-content">
            <div className="activity-step">
              <img src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624467/activity1_zu82su.png" alt="Step 1" />
              <p>Gửi một bức ảnh chụp đôi giày của bạn để được tư vấn dịch vụ miễn phí.</p>
            </div>
            <div className="activity-step">
              <img src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624467/activity2_pvnu9m.png" alt="Step 2" />
              <p>Gửi đồ của bạn cho chúng tôi và thư giãn.</p>
            </div>
            <div className="activity-step">
              <img src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624467/activity3_z09tde.png" alt="Step 3" />
              <p>Chúng tôi cẩn thận phục hồi đồ của bạn (phép màu bắt đầu).</p>
            </div>
            <div className="activity-step">
              <img src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624468/activity4_hgdgap.png" alt="Step 4" />
              <p>Bạn nhận lại giày đã được phục hồi hoàn hảo.</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="mission-title">
            <h2>Bản Đồ Địa Điểm</h2>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462.33298602469745!2d106.83776128517091!3d10.841976894766278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521006ef2f155%3A0x3af040f9e0388d32!2sFamilyMart%20S601!5e0!3m2!1svi!2s!4v1744575774268!5m2!1svi!2s" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen 
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>

      
      </div>
    </div>
  );
};
