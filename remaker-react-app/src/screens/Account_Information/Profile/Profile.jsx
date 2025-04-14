import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../../../services/api'; // Import API function
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Profile.css'; // Import CSS

export const Profile = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    address: '',
    username: '',
    roleName: ''
  });

  const enableEdit = () => setIsEditing(true);
  const cancelEdit = () => setIsEditing(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn("Không tìm thấy token, chuyển hướng về trang đăng nhập.");
      navigate('/Login'); // 🔥 Nếu không có token, quay lại trang Login
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo();
        console.log("API Response:", response); // Log the entire response
        if (response.success && response.data) {
          // Ensure fullname is correctly set from response
          setUserInfo(prev => ({
            ...prev, 
            fullname: response.data.fullname || '', // Ensure fullname is fetched correctly
            email: response.data.email || '',
            phoneNumber: response.data.phoneNumber || '',
            address: response.data.address || '',
            username: response.data.username || '',
            roleName: response.data.roleName || ''
          }));
          localStorage.setItem('userId', response.data.userId); // Save userId to localStorage
        } else {
          console.error("Không thể lấy thông tin người dùng:", response.errors || "Dữ liệu không hợp lệ");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save changes can be added here
    console.log("Changes saved:", userInfo);
    setIsEditing(false); // Exit editing mode after saving
  };

  return (
    <div className="profile-container">
      <h1>Thông Tin Cá Nhân</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Họ và Tên:</label>
          <input type="text" id="fullname" name="fullname" value={userInfo.fullname} onChange={handleChange} disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Số Điện Thoại:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleChange} disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="address">Địa Chỉ:</label>
          <input type="text" id="address" name="address" value={userInfo.address} onChange={handleChange} disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="roleName">Vai Trò:</label>
          <input type="text" id="roleName" name="roleName" value={userInfo.roleName} disabled />
        </div>
        <div className="button-group">
          <button type="button" style={{display: isEditing ? 'none' : 'inline'}} onClick={enableEdit}>Chỉnh Sửa</button>
          <button type="button" style={{display: isEditing ? 'inline' : 'none'}} onClick={cancelEdit}>Hủy</button>
          <button type="submit" style={{display: isEditing ? 'inline' : 'none'}}>Lưu Thay Đổi</button>
        </div>
      </form>
    </div>
  );
};
