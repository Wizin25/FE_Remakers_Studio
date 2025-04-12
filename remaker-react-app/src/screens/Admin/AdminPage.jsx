import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('userInfo'));

    if (!savedUser || savedUser.role !== 'admin') {
      alert('Bạn không có quyền truy cập trang này!');
      navigate('/');
    } else {
      setUser(savedUser);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div style={{ padding: 40 }}>
      <h1>👑 Quản Trị Viên</h1>
      <p>Xin chào, <strong>{user.fullName}</strong>!</p>
      <p>Bạn đang truy cập trang quản lý.</p>

      {/* Tại đây bạn có thể thêm danh sách yêu cầu, người dùng, hoặc chức năng admin khác */}
    </div>
  );
};
