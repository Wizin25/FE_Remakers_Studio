import React, { useState, useEffect } from "react";
import { LocationOn } from "../../components/common/LocationOn";
import { Mail } from "../../components/common/Mail";
import { PhoneCall } from "../../components/common/PhoneCall";
import { Send } from "../../components/common/Send";
import "./style.css";
import poster1 from "../../assets/images/poster1.jpg";
import poster2 from "../../assets/images/poster2.jpg";

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: poster1,
    },
    {
      image: poster2,
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
          <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
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
          <div className="mission-content">
            <h2>Sứ Mệnh Remaker</h2>
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
        </section>

        {/* Activity Section */}
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

        {/* Featured Activity Section */}
        <section className="featured-activity">
          <div className="featured-content">
            <div className="featured-image">
              <img src="/src/assets/images/featured-activity.jpg" alt="Featured Service" />
            </div>
            <div className="featured-text">
              <h2>Dịch Vụ Nổi Bật</h2>
              <h3>Custom Giày Theo Yêu Cầu</h3>
              <p>Biến đôi giày của bạn thành tác phẩm nghệ thuật độc đáo với dịch vụ custom giày chuyên nghiệp của chúng tôi. Đội ngũ nghệ nhân giàu kinh nghiệm sẽ biến mọi ý tưởng của bạn thành hiện thực.</p>
              <button className="learn-more">Tìm Hiểu Thêm</button>
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

        {/* Footer Section */}
        <footer className="footer-section">
          <div className="footer-content">
            <div className="footer-info">
              <img className="footer-logo" alt="Logo" src="https://c.animaapp.com/T2T9GUNe/img/logo@2x.png" />
              <div className="footer-contact">
                <Mail />
                <PhoneCall className="phone-call-instance" />
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h3>Dịch Vụ & Sản Phẩm</h3>
                <ul>
                  <li>Custom Giày</li>
                  <li>Vệ Sinh Giày</li>
                  <li>Phục Hồi Giày</li>
                  <li>Phụ Kiện Giày</li>
                  <li>Sản Phẩm Chăm Sóc Giày</li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>Về Chúng Tôi</h3>
                <ul>
                  <li>Về Remakers</li>
                  <li>Chính Sách Giao Nhận</li>
                  <li>Chính Sách Bảo Hành</li>
                </ul>
              </div>

              <div className="footer-column">
                <h3>Liên Hệ & Hỗ Trợ</h3>
                <div className="contact-info">
                  <p>remakers@gmail.com</p>
                  <p>0764 269 957</p>
                  <p>Đường N2, Long Thạnh Mỹ, Quận 9, Hồ Chí Minh</p>
                </div>
              </div>
            </div>

            <div className="footer-subscribe">
              <h3>Cập Nhật Xu Hướng Mới Nhất</h3>
              <p>Để lại e-mail của bạn để nhận ngay các tin tức, ưu đãi và xu hướng mới nhất từ REMAKERS!</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Điền e-mail của bạn tại đây ..." />
                <Send className="send-icon" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};