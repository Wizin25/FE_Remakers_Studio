import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.orderId || !state.userInfo || !state.cartItems) {
    return (
      <div style={{ padding: 40, marginTop: 100}}>
        <h2>Không có thông tin đơn hàng.</h2>
        <button onClick={() => navigate('/')}>Về trang chủ</button>
      </div>
    );
  }

  const { orderId, userInfo, paymentMethod, cartItems, totalPrice } = state;

  const formatCurrency = (amount) =>
    amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  return (
    <div style={{ maxWidth: 800, margin: '40px auto', marginTop: 100, padding: 20 }}>
      <h1 style={{ color: 'green', textAlign: 'center' }}>🎉 Thanh Toán Thành Công!</h1>
      <p style={{ textAlign: 'center' }}>Cảm ơn bạn đã mua hàng.</p>
      <p><strong>Mã đơn hàng:</strong> {orderId}</p>

      <div style={{ marginTop: 30, backgroundColor: '#f5f5f5', padding: 20, borderRadius: 8 }}>
        <h3>Thông Tin Người Nhận</h3>
        <p><strong>Họ và tên:</strong> {userInfo.fullName}</p>
        <p><strong>Địa chỉ:</strong> {userInfo.address}</p>
        <p><strong>Số điện thoại:</strong> {userInfo.phoneNumber}</p>
        <p><strong>Phương thức thanh toán:</strong> {paymentMethod === 'cod' ? 'Ship COD' : 'Chuyển khoản'}</p>
      </div>

      <div style={{ marginTop: 40 }}>
        <h3>Danh Sách Sản Phẩm Đã Mua</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#eee' }}>
              <th style={{ padding: 8 }}>Hình ảnh</th>
              <th style={{ padding: 8 }}>Tên sản phẩm</th>
              <th style={{ padding: 8 }}>Số lượng</th>
              <th style={{ padding: 8 }}>Đơn giá</th>
              <th style={{ padding: 8 }}>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: 8 }}>
                  <img src={item.image} alt={item.name} style={{ width: 60, height: 60, objectFit: 'cover' }} />
                </td>
                <td style={{ padding: 8 }}>{item.name}</td>
                <td style={{ padding: 8 }}>{item.quantity}</td>
                <td style={{ padding: 8 }}>{formatCurrency(item.price)}</td>
                <td style={{ padding: 8 }}>{formatCurrency(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 style={{ marginTop: 20, textAlign: 'right' }}>
          Tổng thanh toán: {formatCurrency(totalPrice)}
        </h3>
      </div>

      <div style={{ textAlign: 'center', marginTop: 30 }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#008080',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/Product')}
        >
          Tiếp tục mua sắm
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
