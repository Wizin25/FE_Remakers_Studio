import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getProduct } from '../../services/api'; // Import API function
import './Product.css'; // Import CSS

export const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const posterImages = [
        { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726619496_95079064fe2c127a8ab44fedd4c5c01a_ckeq3p.jpg" },
        { image: "https://res.cloudinary.com/dzht29nkq/image/upload/v1742025584/z6407726619489_71c44dbc06ce90b498a325669d7bbcee_yxzdnr.jpg" }
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProduct(); // Gọi API
                console.log("Dữ liệu từ API:", response); // Kiểm tra phản hồi API
    
                if (response && response.success && Array.isArray(response.data)) {
                    const filteredProducts = response.data
                        .map(product => ({
                            ...product,
                            price: parseInt(product.price.toString().replace(/[^\d]/g, ""), 10) // Xử lý price nếu bị lỗi định dạng
                        }))
                        .filter(product => product.price > 0); // Lọc sản phẩm có price > 0
    
                    setProducts(filteredProducts);
                } else {
                    console.error("Dữ liệu trả về không hợp lệ:", response);
                }
            } catch (error) {
                console.error("Lỗi khi lấy sản phẩm:", error);
            }
        };
        fetchProducts();
    }, []);
// ✅ Hàm thêm sản phẩm vào giỏ hàng
const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.productName} đã được thêm vào giỏ hàng!`);
};
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === posterImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // ✅ Xử lý click vào sản phẩm -> Chuyển đến trang chi tiết sản phẩm
    const goToDetailPage = (productId) => {
        navigate(`/product/${productId}`); // ✅ Đảm bảo đường dẫn đúng
    };
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"; // Format price with dots
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
                    <button className="nav-button" onClick={() => setCurrentSlide(prev => (prev === 0 ? posterImages.length - 1 : prev - 1))}>❮</button>
                    <button className="nav-button" onClick={() => setCurrentSlide(prev => (prev === posterImages.length - 1 ? 0 : prev + 1))}>❯</button>
                </div>
            </section>
            <h1 className="product-title">Sản Phẩm Của Chúng Tôi</h1>
            <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {products.length > 0 ? products.map(product => (
                    <div key={product.productId} className="product-card">
                        {/* ✅ Khi click vào sản phẩm sẽ chuyển đến trang chi tiết */}
                        <div className="product-content" onClick={() => goToDetailPage(product.productId)}>
                            <img src={product.imageUrl} alt={product.productName} className="product-image" />
                            <h2 className="product-name">{product.productName}</h2>
                            <p className="product-price">{formatPrice(product.price)}</p>
                        </div>
                        <button className="add-to-cart" onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                    </div>
                )) : <p>Không có sản phẩm nào.</p>}
            </div>
        </div>
    );
};
