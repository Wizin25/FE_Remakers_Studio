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
    <div style={{ padding: 40, margin: '40px auto', marginTop: 10, background: 'linear-gradient(to right, #f8f9fa, #e9ecef)', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20, padding: '20px 0' }}>
        <img 
          src="https://res.cloudinary.com/dzht29nkq/image/upload/v1741624468/logo_uthnzf.png?fbclid=IwY2xjawJFMD1leHRuA2FlbQIxMAABHTlBXJS3eAMzhqPkDptWl_r8r7uB9DQBP3_w0gBw8DrWLZ3p55PHZ0cDng_aem_IvKPqHc0ojp7wNf-Adhyrg" 
          alt="Remakers Studio" 
          style={{ 
            width: 120, 
            height: 120,
            borderRadius: '50%',
            border: '3px solid #007bff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
        <div>
          <h1 style={{ fontSize: '2.5rem', color: '#343a40', margin: 0 }}>👑 Quản Trị Viên</h1>
          <p style={{ fontSize: '1.2rem', color: '#6c757d', margin: '10px 0 0 0' }}>Xin chào, <strong style={{ color: '#007bff' }}>{user.fullname}</strong>!</p>
          <p style={{ fontSize: '1.1rem', color: '#6c757d', margin: '5px 0 0 0' }}>Bạn đang truy cập trang quản lý.</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 20, marginTop: 30, marginBottom: 20 }}>
        <button 
          onClick={() => setTab('products')}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: tab === 'products' ? '#fff' : '#007bff',
            background: tab === 'products' ? '#007bff' : '#fff',
            border: '2px solid #007bff',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }
          }}
        >
          📦 Quản lý sản phẩm
        </button>
        <button 
          onClick={() => setTab('services')}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: tab === 'services' ? '#fff' : '#007bff',
            background: tab === 'services' ? '#007bff' : '#fff',
            border: '2px solid #007bff',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }
          }}
        >
          🛠️ Quản lý dịch vụ
        </button>
      </div>

      {/* Render nội dung theo tab */}
      {tab === 'products' && <ProductManagement />}
      {tab === 'services' && <ServiceCategoryManagement />}
    </div>
  );
};
