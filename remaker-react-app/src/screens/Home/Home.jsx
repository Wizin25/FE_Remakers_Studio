import React, { useState, useEffect } from "react";
import "./style.css";
export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025585/z6407726649516_1530f9c1e7bc2490e252b65dbfc547d2_kxpgih.jpg",
      onClick: () => window.location.href = '/clean',
    },
    {
      image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025585/z6407726667451_b092fc69c6877ab8618d2ab7eb3d19a9_gbksjf.jpg",
    },
    {
      image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726638415_5635f6f60dbecf101070fb63536a5425_btcdrq.jpg",
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(timer);
  }, []);

  // Handlers for manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="home">
      <div className="content">
        {/* Banner Slider Section */}
        <section className="banner-slider">
          <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide" onClick={slide.onClick}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="slider-nav prev" onClick={prevSlide}>
            <i className="arrow left"></i>
          </button>
          <button className="slider-nav next" onClick={nextSlide}>
            <i className="arrow right"></i>
          </button>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
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
              <img src="/src/assets/images/activity1.jpg" alt="Step 1" />
              <p>Gửi một bức ảnh chụp đôi giày của bạn để được tư vấn dịch vụ miễn phí.</p>
            </div>
            <div className="activity-step">
              <img src="/src/assets/images/activity2.jpg" alt="Step 2" />
              <p>Gửi đồ của bạn cho chúng tôi... và thư giãn.</p>
            </div>
            <div className="activity-step">
              <img src="/src/assets/images/activity3.jpg" alt="Step 3" />
              <p>Chúng tôi cẩn thận phục hồi đồ của bạn (phép màu bắt đầu).</p>
            </div>
            <div className="activity-step">
              <img src="/src/assets/images/activity4.jpg" alt="Step 4" />
              <p>Bạn nhận lại giày đã được phục hồi hoàn hảo.</p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-container">
            <img
              className="map-image"
              alt="Map"
              src="https://c.animaapp.com/T2T9GUNe/img/ggmap.png"
            />
          </div>
        </section>

      </div>
    </div>
  );
};