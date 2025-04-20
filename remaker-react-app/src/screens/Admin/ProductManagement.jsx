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
        }}>Quản lý sản phẩm</h2>
        <button 
          onClick={() => {
            setShowForm(!showForm);
            setIsEdit(false);
            setForm({ productId: "", productName: "", price: 0, description: "", imageUrl: "" });
          }}
          style={{ 
            padding: '10px 20px',
            background: showForm ? '#dc3545' : '#28a745',
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
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }
          }}
        >
          {showForm ? 'Đóng form' : '➕ Thêm sản phẩm mới'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ 
          marginBottom: '20px', 
          padding: '30px', 
          background: '#f8f9fa',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          border: '1px solid #dee2e6'
        }}>
          <div style={{ display: 'grid', gap: '15px' }}>
            <input 
              name="productName" 
              value={form.productName} 
              onChange={handleChange} 
              placeholder="Tên sản phẩm" 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem' }}
            />
            <input 
              name="price" 
              type="number" 
              value={form.price} 
              onChange={handleChange} 
              placeholder="Giá" 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem' }}
            />
            <input 
              name="description" 
              value={form.description} 
              onChange={handleChange} 
              placeholder="Mô tả" 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem' }}
            />
            <input 
              name="imageUrl" 
              value={form.imageUrl} 
              onChange={handleChange} 
              placeholder="Image URL" 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ced4da', fontSize: '1rem' }}
            />
            <button 
              type="submit" 
              style={{ 
                padding: '12px 24px', 
                background: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                }
              }}
            >
              {isEdit ? "Cập nhật" : "Thêm mới"}
            </button>
          </div>
        </form>
      )}

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '20px',
        padding: '20px'
      }}>
        {products.map(product => (
          <div 
            key={product.productId} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.03)'
              }
            }}
          >
            <img 
              src={product.imageUrl} 
              alt={product.productName} 
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover', 
                marginBottom: '15px',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'scale(1.1)'
                }
              }} 
            />
            <div style={{ padding: '15px' }}>
              <h3 style={{ marginBottom: '10px', fontWeight: '600', color: '#333' }}>{product.productName}</h3>
              <p style={{ marginBottom: '10px', color: '#666' }}>{product.description}</p>
              <p style={{ marginBottom: '15px', fontWeight: 'bold', color: '#28a745' }}>Giá: {product.price.toLocaleString()}đ</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button 
                  onClick={() => handleEdit(product)}
                  style={{ 
                    padding: '10px 20px', 
                    background: 'linear-gradient(to right, #ffc107, #e0a800)',
                    color: 'black', 
                    border: 'none', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    fontWeight: '600',
                    ':hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                    }
                  }}
                >
                  Sửa
                </button>
                <button 
                  onClick={() => handleDelete(product.productId)}
                  style={{ 
                    padding: '10px 20px', 
                    background: 'linear-gradient(to right, #dc3545, #c82333)',
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    fontWeight: '600',
                    ':hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                    }
                  }}
                >
                  Xoá
                </button>
              </div>
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
