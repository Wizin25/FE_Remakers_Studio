import React, { useState } from 'react';
import './Profile.css'; // Import CSS

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const enableEdit = () => setIsEditing(true);
  const cancelEdit = () => setIsEditing(false);

  return (
    <div className="profile-container">
      <h1>Thông Tin Cá Nhân</h1>
      <form>
        <div>
          <label htmlFor="name">Họ và Tên:</label>
          <input type="text" id="name" name="name" placeholder="Nhập tên của bạn" disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Nhập email của bạn" disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="birthdate">Ngày Sinh:</label>
          <input type="date" id="birthdate" name="birthdate" disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="phone">Số Điện Thoại:</label>
          <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại của bạn" disabled={!isEditing} />
        </div>
        <div>
          <label htmlFor="address">Địa Chỉ:</label>
          <input type="text" id="address" name="address" placeholder="Nhập địa chỉ của bạn" disabled={!isEditing} />
        </div>
        <div className="button-group">
          <button type="button" style={{display: isEditing ? 'none' : 'inline'}} onClick={() => enableEdit()}>Chỉnh Sửa</button>
          <button type="button" style={{display: isEditing ? 'inline' : 'none'}} onClick={() => cancelEdit()}>Hủy</button>
          <button type="submit" style={{display: isEditing ? 'inline' : 'none'}}>Lưu Thay Đổi</button>
        </div>
      </form>
    </div>
  );
};