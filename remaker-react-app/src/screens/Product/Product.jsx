import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProduct } from '../../services/api';
import './Product.css';
import { addToCart } from '../../utils/cartUtils';

export const Product = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const posterImages = [
    { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726619496_95079064fe2c127a8ab44fedd4c5c01a_ckeq3p.jpg" },
    { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726619489_71c44dbc06ce90b498a325669d7bbcee_yxzdnr.jpg" },
    { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1741882847/product_poster_3_mg6mad.webp"},
    { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1741882847/product_poster_2_wdddna.webp"}
];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProduct();
        if (response && response.success && Array.isArray(response.data)) {
          const filteredProducts = response.data
            .map(product => ({
              ...product,
              price: parseInt(product.price.toString().replace(/[^\d]/g, ""), 10)
            }))
            .filter(product => product.price > 0);
          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev === posterImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToDetailPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
  };

  return (
    <div className="product-container">
      <section className="banner-slider">
        <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {posterImages.map((img, index) => (
            <div key={index} className="slide">
              <img src={img.image} alt={`Poster ${index + 1}`} className="poster-image" />
            </div>
          ))}
        </div>
        <div className="poster-navigation">
          <button onClick={() => setCurrentSlide(prev => (prev === 0 ? posterImages.length - 1 : prev - 1))}>❮</button>
          <button onClick={() => setCurrentSlide(prev => (prev === posterImages.length - 1 ? 0 : prev + 1))}>❯</button>
        </div>
      </section>

      <h1 className="product-title">Sản Phẩm Của Chúng Tôi</h1>
      <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {products.length > 0 ? products.map(product => (
          <div key={product.productId} className="product-card">
            <div className="product-content" onClick={() => goToDetailPage(product.productId)}>
              <img src={product.imageUrl} alt={product.productName} className="product-image" />
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-price">{formatPrice(product.price)}</p>
            </div>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                addToCart({
                  productId: product.productId,
                  productName: product.productName,
                  price: product.price,
                  imageUrl: product.imageUrl,
                  description: product.description || '',
                });
                alert(`${product.productName} đã được thêm vào giỏ hàng!`);
              }}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        )) : <p>Không có sản phẩm nào.</p>}
      </div>
    </div>
  );
};
