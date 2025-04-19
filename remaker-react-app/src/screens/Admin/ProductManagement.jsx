import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://157.66.27.96:8080/api/Product";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    productId: "",
    productName: "",
    price: 0,
    description: "",
    imageUrl: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async (page = 1) => {
    try {
      const res = await axios.get(`${API_URL}?sortColumn=Name&sortDirection=Ascending&pageNumber=${page}&pageSize=10`);
      
      const items = Array.isArray(res.data.data) ? res.data.data : [];
      setProducts(items);
  
      // Vì API không có totalCount nên tạm gán 1 trang
      setTotalPages(1);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };
  
  
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isEdit) {
        await axios.put(`${API_URL}/${form.productId}`, form);
      } else {
        const { productId, ...data } = form;
        await axios.post(API_URL, data);
      }
      fetchProducts(currentPage);
      setForm({ productId: "", productName: "", price: 0, description: "", imageUrl: "" });
      setIsEdit(false);
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleEdit = product => {
    setForm(product);
    setIsEdit(true);
    setShowForm(true);
  };

  const handleDelete = async id => {
    if (window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchProducts(currentPage);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 className="text-xl font-semibold">Quản lý sản phẩm</h2>
        <button 
          onClick={() => {
            setShowForm(!showForm);
            setIsEdit(false);
            setForm({ productId: "", productName: "", price: 0, description: "", imageUrl: "" });
          }}
          style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {showForm ? 'Đóng form' : 'Thêm sản phẩm mới'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <div style={{ display: 'grid', gap: '10px' }}>
            <input name="productName" value={form.productName} onChange={handleChange} placeholder="Tên sản phẩm" required />
            <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Giá" required />
            <input name="description" value={form.description} onChange={handleChange} placeholder="Mô tả" />
            <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" />
            <button type="submit" style={{ padding: '8px 16px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
              {isEdit ? "Cập nhật" : "Thêm mới"}
            </button>
          </div>
        </form>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.productId} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '4px' }}>
            <img src={product.imageUrl} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }} />
            <h3 style={{ marginBottom: '10px' }}>{product.productName}</h3>
            <p style={{ marginBottom: '10px' }}>{product.description}</p>
            <p style={{ marginBottom: '10px' }}>Giá: {product.price.toLocaleString()}đ</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => handleEdit(product)}
                style={{ padding: '8px 16px', background: '#ffc107', color: 'black', border: 'none', borderRadius: '4px' }}
              >
                Sửa
              </button>
              <button 
                onClick={() => handleDelete(product.productId)}
                style={{ padding: '8px 16px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Xoá
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              padding: '8px 16px',
              background: currentPage === page ? '#007bff' : '#f8f9fa',
              color: currentPage === page ? 'white' : 'black',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
