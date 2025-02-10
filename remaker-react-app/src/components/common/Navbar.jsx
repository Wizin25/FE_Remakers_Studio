import React from 'react';

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <img
          className="logo-2"
          alt="Logo"
          src="https://c.animaapp.com/T2T9GUNe/img/logo-1@2x.png"
        />
        <div className="navbar">
          <div className="custom">TRANG CHỦ</div>
          <div className="d-ch-v">DỊCH VỤ</div>
          <div className="s-n-ph-m">SẢN PHẨM</div>
          <div className="li-n-h">LIÊN HỆ</div>
        </div>
        <div className="group-2">
          <div className="shopping-bag-line">
            <div className="overlap-group-2">
              <div className="ellipse">
                <div className="text-wrapper-9">2</div>
              </div>
            </div>
          </div>
          <img
            className="account-circle-line"
            alt="Account"
            src="https://c.animaapp.com/T2T9GUNe/img/account-circle-line-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
}; 