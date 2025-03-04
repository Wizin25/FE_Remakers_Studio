import React from 'react';
import './Product.css'; // Import CSS cho trang sản phẩm

export const Product = () => {
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

    return (
        <div className="product-container">
            <div className="poster">
                <img src="/src/assets/images/poster.jpg" alt="Poster" className="poster-image" />
            </div>
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