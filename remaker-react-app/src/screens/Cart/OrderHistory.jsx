import React, { useEffect, useState } from 'react';
import './OrderHistory.css'; // tạo file CSS riêng nếu cần

export const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrders(history.reverse()); // hiển thị đơn mới nhất lên trên
  }, []);

  return (
    <div className="order-history-container">
      <h2>Lịch Sử Mua Hàng</h2>

      {orders.length === 0 ? (
        <p>🛒 Bạn chưa có đơn hàng nào.</p>
      ) : (
        orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-header">
              <div><strong>🧾 Mã đơn:</strong> {order.orderId}</div>
              <div><strong>🕒 Ngày:</strong> {new Date(order.createDate).toLocaleString()}</div>
              <div><strong>💰 Tổng tiền:</strong> {order.totalPrice.toLocaleString()} VNĐ</div>
            </div>

            <ul className="order-items">
              {order.cartItems.map((item, i) => (
                <li key={i} className="order-item">
                  <div className="item-name">{item.name}</div>
                  <div className="item-qty">x{item.quantity}</div>
                  <div className="item-price">{(item.price * item.quantity).toLocaleString()} VNĐ</div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};
