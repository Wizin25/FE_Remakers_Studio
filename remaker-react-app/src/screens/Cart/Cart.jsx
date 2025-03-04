import React, { useState } from 'react';
import './Cart.css'; // Import CSS cho trang giỏ hàng

export const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Sản phẩm 1',
            image: '/src/assets/images/product1.jpg',
            price: 200000,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Sản phẩm 2',
            image: '/src/assets/images/product2.jpg',
            price: 150000,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Sản phẩm 3',
            image: '/src/assets/images/product3.jpg',
            price: 300000,
            quantity: 1,
        },
    ]);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleIncrease = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const handleDecrease = (id) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
    };

    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Giỏ Hàng Của Bạn</h1>
            <div className="cart-header">
                <div className="cart-header-item">Hình ảnh sản phẩm</div>
                <div className="cart-header-item">Tên sản phẩm</div>
                <div className="cart-header-item">Đơn giá</div>
                <div className="cart-header-item">Số lượng</div>
                <div className="cart-header-item">Thành tiền</div>
                <div className="cart-header-item">Hành động</div>
            </div>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <div className="cart-item-info">
                                <h2 className="cart-item-name">{item.name}</h2>
                                <p className="cart-item-price">{item.price.toLocaleString()} VNĐ</p>
                            </div>
                        </div>
                        <div className="cart-item-quantity">
                            <button onClick={() => handleDecrease(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrease(item.id)}>+</button>
                        </div>
                        <p className="cart-item-total">{(item.price * item.quantity).toLocaleString()} VNĐ</p>
                        <button className="remove-button" onClick={() => handleRemove(item.id)}>Xóa</button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h2 className="cart-summary-title">Tổng Tiền</h2>
                <p className="cart-summary-total">{totalPrice.toLocaleString()} VNĐ</p>
                <button className="checkout-button">Thanh Toán</button>
            </div>
        </div>
    );
};