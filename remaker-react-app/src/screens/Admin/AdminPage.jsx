import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../services/api'; // Đảm bảo bạn đã có hàm này
import ProductManagement from './ProductManagement';
import ServiceCategoryManagement from './ServiceCategoryManagement';

const adminMenu = [
  { label: 'Yêu cầu dịch vụ', path: '/admin/requests' },
  { label: 'Người dùng', path: '/admin/users' },
  { label: 'Mẫu giày', path: '/admin/shoe-templates' },
  { label: 'Dịch vụ', path: '/admin/services' },
  { label: 'Đơn hàng', path: '/admin/orders' },
  { label: 'Thống kê', path: '/admin/statistics' },
  { label: 'Cài đặt', path: '/admin/settings' },
];

export const AdminPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState('products');

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Bạn cần đăng nhập để vào trang Admin!');
        navigate('/');
        return; // ✅ Dừng luôn
      }
  
      try {
        const response = await getUserInfo();
        const userData = response.data;

        // Lưu userId vào localStorage
        localStorage.setItem('userId', userData?.id);

        // ✅ Kiểm tra username và email
        if (userData?.username !== 'admin' || userData?.email !== 'admin@admin.com') {
          alert('Bạn không có quyền truy cập trang này!');
          navigate('/');
          return; // ✅ Ngắt luôn, không setUser
        }
  
        // ✅ Đúng admin thì tiếp tục
        setUser(userData);
      } catch (error) {
        console.error('Lỗi lấy thông tin user:', error);
        alert('Không thể xác minh người dùng!');
        navigate('/');
      }
    };
  
    fetchUser();
  }, [navigate]);
  

  if (!user) return null;

  return (
    <div style={{ padding: 40, margin: '40px auto', marginTop: 10}}>
      <h1>👑 Quản Trị Viên</h1>
      <p>Xin chào, <strong>{user.fullname}</strong>!</p>
      <p>Bạn đang truy cập trang quản lý.</p>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 20, marginTop: 30, marginBottom: 20 }}>
        <button onClick={() => setTab('products')}>Quản lý sản phẩm</button>
        <button onClick={() => setTab('services')}>Quản lý dịch vụ</button>
      </div>

      {/* Render nội dung theo tab */}
      {tab === 'products' && <ProductManagement />}
      {tab === 'services' && <ServiceCategoryManagement />}
    </div>
  );
};
