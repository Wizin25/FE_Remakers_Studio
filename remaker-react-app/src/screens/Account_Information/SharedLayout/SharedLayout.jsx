import React, { useState } from 'react';
import { Profile } from '../Profile';
import { PasswordChange } from '../PasswordChange';
import './SharedLayout.css'; // Ensure to create appropriate CSS for layout styling

export const SharedLayout = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="shared-layout">
            <div className="sidebar">
                <ul className="menu">
                    <li
                        className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}>
                        Thông Tin Cá Nhân
                    </li>
                    <li
                        className={`menu-item ${activeTab === 'passwordChange' ? 'active' : ''}`}
                        onClick={() => setActiveTab('passwordChange')}>
                        Cập Nhật Mật Khẩu
                    </li>
                </ul>
            </div>
            <div className="content">
                {activeTab === 'profile' ? <Profile /> : <PasswordChange />}
            </div>
        </div>
    );
};
