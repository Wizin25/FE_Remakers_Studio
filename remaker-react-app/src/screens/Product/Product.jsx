import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Product.css'; // Import CSS cho trang sản phẩm

export const Product = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const products = [
        { id: 1, name: 'Sản phẩm 1', image: '/src/assets/images/product1.jpg' },
        { id: 2, name: 'Sản phẩm 2', image: '/src/assets/images/product2.jpg' },
        { id: 3, name: 'Sản phẩm 3', image: '/src/assets/images/product3.jpg' },
        { id: 4, name: 'Sản phẩm 4', image: '/src/assets/images/product4.jpg' },
        { id: 5, name: 'Sản phẩm 5', image: '/src/assets/images/product5.jpg' },
        { id: 6, name: 'Sản phẩm 6', image: '/src/assets/images/product6.jpg' },
        { id: 7, name: 'Sản phẩm 7', image: '/src/assets/images/product7.jpg' },
        { id: 8, name: 'Sản phẩm 8', image: '/src/assets/images/product8.jpg' },
        { id: 9, name: 'Sản phẩm 9', image: '/src/assets/images/product9.jpg' },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const posterImages = [
        {
            image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726619496_95079064fe2c127a8ab44fedd4c5c01a_ckeq3p.jpg",
        },
        {
            image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726619489_71c44dbc06ce90b498a325669d7bbcee_yxzdnr.jpg",
        }
    ];

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === posterImages.length - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Handlers for manual navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === posterImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? posterImages.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="product-container">
            <section className="banner-slider">
                <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {posterImages.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image.image} alt={`Poster ${index + 1}`} className="poster-image" />
                        </div>
                    ))}
                </div>
                <div className="poster-navigation">
                    <button className="nav-button" onClick={prevSlide}>❮</button>
                    <button className="nav-button" onClick={nextSlide}>❯</button>
                </div>
                <div className="slider-dots">
                    {posterImages.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </section>

            <h1 className="product-title">Sản Phẩm Của Chúng Tôi</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};