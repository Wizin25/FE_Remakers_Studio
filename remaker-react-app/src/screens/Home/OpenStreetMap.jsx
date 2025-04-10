// src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = () => {
  const position = [10.841653, 106.838178]; // TP.HCM, có thể thay đổi tọa độ tùy ý
  const address = "Tòa S6.01 Vinhomes Grand Park, Thủ Đức, TP.HCM."; // Địa chỉ cụ thể
  const rating = 4.5; // Đánh giá

  // Tạo chuỗi ngôi sao dựa trên điểm rating
  const fullStars = '★'.repeat(Math.floor(rating)); // Ngôi sao đầy đủ
  const emptyStars = '☆'.repeat(5 - Math.floor(rating)); // Ngôi sao rỗng

  return (
    <MapContainer center={position} zoom={18} style={{ width: '100%', height: '100%' }}>
      {/* Dữ liệu bản đồ từ OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div>
            <h3>Remaker Studio</h3>
            <p>Dịch vụ chăm sóc giày uy tín.</p>
            <p><strong>Địa chỉ:</strong> {address}</p>
            <p><strong>Đánh giá:</strong></p>
            <p>
              {fullStars}
              {emptyStars}
            </p>
            <p>Đánh giá: {rating} / 5</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default OpenStreetMap;
