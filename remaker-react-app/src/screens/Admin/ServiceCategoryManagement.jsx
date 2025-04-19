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
      <h2 className="text-xl font-semibold mb-4">Quản lý dịch vụ</h2>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            style={{
              padding: "8px 16px",
              background: selectedCategoryId === cat.id ? "#007bff" : "#eee",
              color: selectedCategoryId === cat.id ? "#fff" : "#000",
              borderRadius: 5,
              border: "none"
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Danh sách yêu cầu</h3>
        {requests.length === 0 ? (
          <p>Không có yêu cầu nào cho dịch vụ này.</p>
        ) : (
            <ul>
            {requests.map(req => (
              <li key={req.serviceId} style={{ borderBottom: "1px solid #ccc", marginBottom: 10, paddingBottom: 10 }}>
                <p><strong>Họ tên:</strong> {req.fullName}</p>
                <p><strong>SĐT:</strong> {req.phoneNumber}</p>
                <p><strong>Facebook:</strong> {req.linkFacebook}</p>
                <p><strong>Mô tả:</strong> {req.description}</p>
                <p><strong>Trạng thái:</strong> {req.status}</p>
          
                <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                  <button
                    onClick={() => handleUpdateStatus(req.serviceId, "Done")}
                    style={{ background: "#28a745", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px" }}
                  >
                    ✅ Hoàn tất
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(req.serviceId, "Pending")}
                    style={{ background: "#ffc107", color: "black", border: "none", padding: "5px 10px", borderRadius: "4px" }}
                  >
                    ❌ Chưa xử lý
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
        )}
      </div>
    </div>
  );
}
