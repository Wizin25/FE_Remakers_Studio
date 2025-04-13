import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccess'; // Assuming you will create a CSS file for styling

const PaymentCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h1 className="cancel-title" style={{ color: '#ff0000' }}>❌ Thanh Toán Đã Bị Hủy</h1>
      <p className="cancel-message">Rất tiếc, giao dịch của bạn đã bị hủy.</p>
      <button className="back-button" onClick={() => navigate('/Cart')}>Quay lại giỏ hàng</button>
    </div>
  );
};

export default PaymentCancel;
