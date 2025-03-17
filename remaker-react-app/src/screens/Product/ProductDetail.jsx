import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import "./ProductDetail.css";

export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await getProduct();
                if (response && response.success && Array.isArray(response.data)) {
                    const selectedProduct = response.data.find(item => item.productId === id);
                    setProduct(selectedProduct);
                }
            } catch (error) {
                console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
            }
        };
        fetchProductDetail();
        window.scrollTo(0, 0); // Scroll to the top of the page when this component mounts
    }, [id]);

    if (!product) return <p>Đang tải...</p>;
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"; // Format price with dots
    };

    return (
        <div className="product-detail">
            <h1 style={{ fontWeight: 'bold', fontSize: '2em' }}>{product.productName}</h1>
            <img src={product.imageUrl} alt={product.productName} className="product-image" />
            <p className="product-description">{product.description.split(/\\n/).map((line, index) => (
                <span key={index}>{line}<br /></span>
            ))}</p>
            <p className="product-price">{formatPrice(product.price)}</p>
            <button className="add-to-cart">Thêm vào giỏ hàng</button>
        </div>
    );
};
