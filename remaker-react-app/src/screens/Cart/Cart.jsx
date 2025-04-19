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
  const [userInfo, setUserInfo] = useState(() => {
    const token = localStorage.getItem('token'); // Kiểm tra xem người dùng đã đăng nhập chưa
    if (token) {
      // Nếu đã đăng nhập, lấy thông tin người dùng từ localStorage
      const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      return storedUserInfo ? {
        fullname: storedUserInfo.fullname || '',
        address: storedUserInfo.address || '',
        phoneNumber: storedUserInfo.phoneNumber || '',
        email: storedUserInfo.email || '',
        userID: storedUserInfo.userID || null
      } : {
        fullname: '',
        address: '',
        phoneNumber: '',
        email: '',
        userID: null
      };
    } else {
      // Nếu chưa đăng nhập, tạo thông tin người dùng mặc định
      return {
        fullname: '',
        address: '',
        phoneNumber: '',
        email: '',
        userID: null
      };
    }
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');

  useEffect(() => {
    saveCartToStorage(cartItems);
    localStorage.setItem('userInfo', JSON.stringify(userInfo)); // Lưu thông tin người dùng vào localStorage
  }, [cartItems, userInfo]); // Cập nhật khi userInfo thay đổi

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.productId === id) {
          if (item.quantity >= 10) {
            alert("Mỗi khách hàng chỉ có thể mua tối đa 10 đơn vị cho mỗi sản phẩm");
            return item; // Không thay đổi số lượng nếu đã đủ 10
          }
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
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

  const handleCheckout = async () => {
    const amount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    if (!userInfo.fullname || !userInfo.phoneNumber || !userInfo.address || !userInfo.email) {
      alert("Vui lòng nhập đầy đủ họ tên, số điện thoại, địa chỉ và email trước khi thanh toán.");
      return;
    }
  
    const paymentPayload = {
      amount: amount,
      orderId: `Order_${Date.now()}`, // Tạo orderId tự động bằng timestamp
      description: `${userInfo.email}-${userInfo.phoneNumber}`.slice(0, 25),
      cancelUrl: "http://remakers-studio.shop/payment-cancel",
      returnUrl: "http://remakers-studio.shop/payment-success"
    };

    // Lưu thông tin thanh toán vào localStorage trước khi gửi yêu cầu
    localStorage.setItem('paymentInfo', JSON.stringify(paymentPayload));
  
    try {
      const response = await fetch("http://157.66.27.96:8080/api/payments/create-payment-link", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentPayload)
      });
  
      if (!response.ok) {
        throw new Error("Có lỗi 500 không thể tạo link thanh toán");
      }
  
      const result = await response.json();
  
      if (result?.paymentUrl) {
        window.location.href = result.paymentUrl; // ✅ Mở link thanh toán
      } else {
        alert("Không thể tạo link thanh toán.");
      }
    } catch (err) {
      console.error("❌ Lỗi tạo payment link:", err);
      alert(err.message); // Hiển thị thông báo lỗi cụ thể
    }
  };
  
  

  return (
    <div className="cart-container">
      <h1 className="cart-title">Giỏ Hàng Của Bạn</h1>

      <div className="customer-info">
        <h2 style={{ fontSize: '1.5em', textAlign: 'center', marginBottom: '20px' }}>Thông Tin Giao Hàng</h2>

        <label style={{ fontSize: '0.8em' }}>Họ và tên:</label>
        <input
          type="text"
          value={userInfo.fullname}
          onChange={(e) => setUserInfo({ ...userInfo, fullname: e.target.value })}
          required
        />

        <label style={{ fontSize: '0.8em' }}>Địa chỉ:</label>
        <input
          type="text"
          value={userInfo.address}
          onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
          required
        />

        <label style={{ fontSize: '0.8em' }}>Số điện thoại:</label>
        <input
          type="tel"
          value={userInfo.phoneNumber}
          onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
          required
        />

        <label style={{ fontSize: '0.8em' }}>Email:</label>
        <input
          type="email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          required
        />

        <label style={{ fontSize: '0.8em' }}>Hình thức thanh toán:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          
          <option value="bank">Chuyển khoản - QR code</option>
        </select>
      </div>

      <div className="cart-header">
        <div className="cart-header-item">Hình ảnh</div>
        <div className="cart-header-item">Tên sản phẩm</div>
        <div className="cart-header-item">Đơn giá</div>
        <div className="cart-header-item1">Số lượng</div>
        <div className="cart-header-item1">Thành tiền</div>
        <div className="cart-header-item1">Hành động</div>
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
