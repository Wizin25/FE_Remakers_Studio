import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentSuccess.css'; // Importing a CSS file for styling and animations

const PaymentSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  /*if (!state || !state.orderId || !state.userInfo || !state.cartItems) {
    return (
      <div className="error-container">
        <h2>Không có thông tin đơn hàng.</h2>
        <button className="back-button" onClick={() => navigate('/')}>Về trang chủ</button>
      </div>
    );
  }*/

  return (
    <div className="success-container">
      <h1 className="success-title">🎉 Thanh Toán Thành Công!</h1>
      <p className="thank-you-message">Cảm ơn bạn đã mua hàng.</p>
      <button className="back-button" onClick={() => navigate('/Product')}>Tiếp tục mua sắm</button>
    </div>
  );
};

export default PaymentSuccess;
