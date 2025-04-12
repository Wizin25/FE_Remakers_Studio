import React, { useState, useEffect } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import {
  getCartFromStorage,
  saveCartToStorage,
  clearCart
} from '../../utils/cartUtils';
export const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartFromStorage());
  const navigate = useNavigate();

  // Lấy user từ localStorage hoặc tạo mặc định
  const [userInfo, setUserInfo] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem('userInfo'));
    return {
      userID: savedUser?.userID || '',
      fullName: savedUser?.fullName || '',
      address: savedUser?.address || '',
      phoneNumber: savedUser?.phoneNumber || '',
    };
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');

  useEffect(() => {
    saveCartToStorage(cartItems);
  }, [cartItems]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.productId === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.productId !== id));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Giỏ hàng của bạn đang trống!');
      return;
    }

    if (!userInfo.fullName || !userInfo.address || !userInfo.phoneNumber) {
      alert('Vui lòng nhập đầy đủ thông tin giao hàng!');
      return;
    }

    const orderId = 'ORDER-' + Date.now();
    setCartItems([]);
    clearCart();

    // Lưu lại userInfo cho các lần sau
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    navigate('/payment-success', {
      state: {
        orderId,
        userInfo,
        paymentMethod,
        cartItems,
        totalPrice
      }
    });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Giỏ Hàng Của Bạn</h1>

      <div className="customer-info">
        <h2 style={{ fontSize: '1em', textAlign: 'center', marginBottom: '20px' }}>Thông Tin Giao Hàng</h2>

        <label>Họ và tên:</label>
        <input
          type="text"
          value={userInfo.fullName}
          readOnly={!!userInfo.userID}
          onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
        />

        <label>Địa chỉ:</label>
        <input
          type="text"
          value={userInfo.address}
          onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
        />

        <label>Số điện thoại:</label>
        <input
          type="text"
          value={userInfo.phoneNumber}
          onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
        />

        <label>Hình thức thanh toán:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="cod">Ship COD</option>
          <option value="bank">Chuyển khoản - QR code</option>
        </select>
      </div>

      <div className="cart-header">
        <div className="cart-header-item">Hình ảnh</div>
        <div className="cart-header-item">Tên sản phẩm</div>
        <div className="cart-header-item">Đơn giá</div>
        <div className="cart-header-item">Số lượng</div>
        <div className="cart-header-item">Thành tiền</div>
        <div className="cart-header-item">Hành động</div>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.productId} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{item.name}</h2>
              <p className="cart-item-price">{item.price.toLocaleString()} VNĐ</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => handleDecrease(item.productId)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item.productId)}>+</button>
            </div>
            <p className="cart-item-total">{(item.price * item.quantity).toLocaleString()} VNĐ</p>
            <button className="remove-button" onClick={() => handleRemove(item.productId)}>Xóa</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2 className="cart-summary-title">Tổng Tiền</h2>
        <p className="cart-summary-total">{totalPrice.toLocaleString()} VNĐ</p>
        <button
          className="checkout-button"
          onClick={() => {
            if (window.confirm("Bạn có chắc chắn muốn thanh toán không?")) {
              handleCheckout();
            }
          }}
        >
          Thanh Toán
        </button>
      </div>
    </div>
  );
};
