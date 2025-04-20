import React, { useEffect, useState } from "react";
import axios from "axios";

const API_CATEGORY = "http://157.66.27.96:8080/api/ServiceCategory";
const API_REQUEST = "http://157.66.27.96:8080/api/ServiceRequest";

export default function ServiceCategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [requests, setRequests] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Lấy danh sách category
  useEffect(() => {
    axios.get(API_CATEGORY)
      .then(res => {
        if (Array.isArray(res.data.data)) {
          setCategories(res.data.data);
        } else {
          setCategories([]);
        }
      })
      .catch(err => {
        console.error("Lỗi khi lấy danh sách dịch vụ:", err);
        setCategories([]);
      });
  }, []);
  

  // Khi chọn dịch vụ → lọc danh sách ServiceRequest
  const handleCategoryClick = async (categoryId) => {
    setSelectedCategoryId(categoryId);
  
    try {
      const res = await axios.get(API_REQUEST);
      const allRequests = Array.isArray(res.data.data) ? res.data.data : [];
      const filtered = allRequests
      .filter(r => r.servicesCategoryId === categoryId)
      .map(r => ({ ...r, status: r.status || "Pending" })); // mặc định là Pending
      setRequests(filtered);
    } catch (error) {
      console.error("Lỗi khi lấy yêu cầu dịch vụ:", error);
      setRequests([]);
    }
  };
  const handleUpdateStatus = (serviceId, newStatus) => {
    setRequests(prev =>
      prev.map(req =>
        req.serviceId === serviceId ? { ...req, status: newStatus } : req
      )
    );
  };
  
  

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        padding: '15px',
        background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#343a40',
          margin: 0,
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>🛠️ Quản lý dịch vụ</h2>
      </div>

      <div style={{ 
        display: "flex", 
        gap: 15, 
        marginBottom: 25,
        padding: '15px',
        background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflowX: 'auto',
        '::-webkit-scrollbar': {
          height: '6px'
        },
        '::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '3px'
        }
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            style={{
              padding: "12px 24px",
              background: selectedCategoryId === cat.id 
                ? 'linear-gradient(45deg, #007bff, #0056b3)' 
                : 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
              color: selectedCategoryId === cat.id ? "#fff" : "#343a40",
              borderRadius: "8px",
              border: selectedCategoryId === cat.id ? "none" : "1px solid #dee2e6",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: selectedCategoryId === cat.id 
                ? '0 4px 8px rgba(0, 0, 0, 0.2)' 
                : '0 2px 4px rgba(0, 0, 0, 0.1)',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-semibold mb-4 text-gray-800">📋 Danh sách yêu cầu</h3>

  {requests.length === 0 ? (
    <p className="text-gray-500 italic">Không có yêu cầu nào cho dịch vụ này.</p>
  ) : (
    <ul className="space-y-6">
      {requests.map((req) => (
        <li
          key={req.serviceId}
          className="border-b pb-4 border-gray-200 last:border-none"
        >
          <p><span className="font-semibold">👤 Họ tên:</span> {req.fullName}</p>
          <p><span className="font-semibold">📞 SĐT:</span> {req.phoneNumber}</p>
          <p><span className="font-semibold">🌐 Facebook:</span> <a href={req.linkFacebook} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{req.linkFacebook}</a></p>
          <p><span className="font-semibold">🎨 Link Custom:</span> <a href={req.linkShareNike} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{req.linkShareNike}</a></p>
          <p><span className="font-semibold">📝 Mô tả:</span> {req.description}</p>
          <p><span className="font-semibold">📦 Trạng thái:</span> <span className="text-yellow-600">{req.status}</span></p>
          <p><span className="font-semibold">📅 Ngày tạo:</span> {new Date(req.createDate).toLocaleDateString('vi-VN')}</p>

          <div className="flex gap-4 mt-3">
            <button
              onClick={() => handleUpdateStatus(req.serviceId, "Done")}
              style={{
                padding: '10px 20px',
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  background: '#218838'
                }
              }}
            >
              ✅ Hoàn tất
            </button>
            <button
              onClick={() => handleUpdateStatus(req.serviceId, "Pending")}
              style={{
                padding: '10px 20px',
                background: '#ffc107',
                color: '#212529',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  background: '#e0a800'
                }
              }}
            >
              ❌ Chưa xử lý
            </button>
          </div>
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(to right, rgba(0,0,0,0), #ccc, rgba(0,0,0,0))',
          margin: '10px 0',
        }}></div>
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
}
