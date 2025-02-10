import React from "react";
import { LocationOn } from "../../components/common/LocationOn";
import { Mail } from "../../components/common/Mail";
import { PhoneCall } from "../../components/common/PhoneCall";
import { Send } from "../../components/common/Send";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="bottom">
          <div className="overlap">
            <div className="bottom-nav">
              <img
                className="logo"
                alt="Logo"
                src="https://c.animaapp.com/T2T9GUNe/img/logo@2x.png"
              />

              <div className="contact">
                <Mail />
                <PhoneCall
                  className="phone-call-instance"
                  img="https://c.animaapp.com/T2T9GUNe/img/phone-call@2x.png"
                  size="twenty"
                />
              </div>

              <img
                className="img"
                alt="Contact"
                src="https://c.animaapp.com/T2T9GUNe/img/contact@2x.png"
              />
            </div>

            <div className="subscribe">
              <p className="c-p-nh-t-xu-h-ng-m-i">Cập Nhật Xu Hướng Mới Nhất</p>

              <p className="text-wrapper">
                Để lại e-mail của bạn để nhận ngay các tin tức, ưu đãi và xu
                hướng mới nhất từ REMAKERS!
              </p>

              <div className="overlap-group">
                <p className="p">Điền e-mail của bạn tại đây ...</p>

                <img
                  className="line"
                  alt="Line"
                  src="https://c.animaapp.com/T2T9GUNe/img/line-2@2x.png"
                />

                <Send className="send-instance" />
              </div>
            </div>

            <div className="group">
              <LocationOn
                className="location-on-instance"
                locationOn="https://c.animaapp.com/T2T9GUNe/img/location-on-1@2x.png"
              />
              <p className="term-conditions">
                <span className="span">
                  Term &amp; conditions | Privacy policy
                  <br />
                </span>

                <span className="text-wrapper-2">
                  © 2024 Remakers Studio, All rights reserved
                </span>
              </p>

              <p className="text-wrapper-3">
                Đường N2, Long Thạnh Mỹ, Quận 9, Hồ Chí Minh, Việt Nam
              </p>
            </div>

            <p className="d-ch-v-s-n-ph-m">Dịch Vụ &amp; Sản Phẩm</p>

            <p className="custom-gi-y-v-sinh">
              Custom Giày
              <br />
              vệ Sinh Giày
              <br />
              phục Hồi Giày
              <br />
              phụ Kiện Giày
              <br />
              sản Phẩm Chăm Sóc Giày
            </p>

            <p className="v-remakers-ch-nh-s">
              Về Remakers
              <br />
              chính Sách Giao Nhận
              <br />
              chính Sách Bảo Hành
            </p>

            <div className="v-ch-ng-t-i">Về Chúng Tôi</div>

            <div className="remakers-gmail-com">
              remakers@gmail.com
              <br />
              0764 269 957
            </div>

            <p className="li-n-h-h-tr">Liên Hệ &amp; Hỗ Trợ</p>
          </div>
        </div>

        <div className="googlemap">
          <img
            className="ggmap"
            alt="Ggmap"
            src="https://c.animaapp.com/T2T9GUNe/img/ggmap-1@2x.png"
          />
        </div>

        <div className="activity">
          <div className="overlap-2">
            <p className="text-wrapper-4">
              Gửi một bức ảnh chụp đôi giày của bạn để được tư vấn dịch vụ miễn
              phí.
            </p>

            <p className="text-wrapper-5">
              Gửi đồ của bạn cho chúng tôi... và thư giãn.
            </p>

            <p className="text-wrapper-6">
              Chúng tôi cẩn thận phục hồi đồ của bạn (phép màu bắt đầu).
            </p>

            <p className="text-wrapper-7">
              Bạn nhận lại giày đã được phục hồi hoàn hảo.
            </p>
          </div>

          <img
            className="activity-2"
            alt="Activity"
            src="https://c.animaapp.com/T2T9GUNe/img/activity.png"
          />
        </div>

        <img
          className="name-bar"
          alt="Name bar"
          src="https://c.animaapp.com/T2T9GUNe/img/name-bar.png"
        />

        <div className="text">
          <div className="div-wrapper">
            <p className="text-wrapper-8">
              Tái sinh từng đôi giày, sáng tạo từng phong cách.
            </p>
          </div>
        </div>

        <img
          className="intro"
          alt="Intro"
          src="https://c.animaapp.com/T2T9GUNe/img/intro.png"
        />

        <div className="overlap-3">
          <div className="right-button">
            <img
              className="vector"
              alt="Vector"
              src="https://c.animaapp.com/T2T9GUNe/img/vector@2x.png"
            />
          </div>

          <div className="left-button">
            <img
              className="vector-2"
              alt="Vector"
              src="https://c.animaapp.com/T2T9GUNe/img/vector-1@2x.png"
            />
          </div>
        </div>

        <div className="nav">
          <div className="navbar">
            <div className="custom">TRANG CHỦ</div>

            <div className="d-ch-v">DỊCH VỤ</div>

            <div className="s-n-ph-m">SẢN PHẨM</div>

            <div className="li-n-h">LIÊN HỆ</div>
          </div>

          <div className="group-2">
            <div className="shopping-bag-line">
              <img
                className="vector-3"
                alt="Vector"
                src="https://c.animaapp.com/T2T9GUNe/img/vector-2@2x.png"
              />

              <div className="overlap-group-2">
                <img
                  className="vector-4"
                  alt="Vector"
                  src="https://c.animaapp.com/T2T9GUNe/img/vector-3@2x.png"
                />

                <div className="ellipse" />

                <div className="text-wrapper-9">0</div>
              </div>
            </div>

            <img
              className="account-circle-line"
              alt="Account circle line"
              src="https://c.animaapp.com/T2T9GUNe/img/account-circle-line-1@2x.png"
            />
          </div>

          <img
            className="logo-2"
            alt="Logo"
            src="https://c.animaapp.com/T2T9GUNe/img/logo-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
