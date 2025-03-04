import React from 'react';

export const PasswordChange = () => {
  return (
    <div className="profile-container">
      <h1>Cập Nhật Mật Khẩu</h1>
      <form>
        <div>
          <label htmlFor="oldPassword">Mật Khẩu Cũ:</label>
          <input type="password" id="oldPassword" name="oldPassword" placeholder="Nhập mật khẩu cũ của bạn" />
        </div>
        <div>
          <label htmlFor="newPassword">Mật Khẩu Mới:</label>
          <input type="password" id="newPassword" name="newPassword" placeholder="Nhập mật khẩu mới của bạn" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Xác Nhận Mật Khẩu Mới:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Xác nhận mật khẩu mới của bạn" />
        </div>
        <button type="submit">Thay Đổi Mật Khẩu</button>
      </form>
    </div>
  );
};
