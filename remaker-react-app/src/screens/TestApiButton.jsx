import React, { useState } from 'react';

export const TestApiButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');

    const apiUrl = 'http://157.66.27.96:8080/api/proxy?url=https%3A%2F%2Fwww.nike.com%2Fsg%2Fu%2Fcustom-dunk-low-premium-10001934%2F2959510257';

    const handleClick = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            const text = await response.text(); // Lấy nội dung HTML
            setHtmlContent(text);
            setIsOpen(true); // Mở modal
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        setHtmlContent(''); // Reset nội dung khi đóng modal
    };

    return (
        <div>
            <button onClick={handleClick} style={buttonStyle}>
                Kiểm Tra API
            </button>

            {isOpen && (
                <div style={modalOverlayStyle}>
                    <div style={modalStyle}>
                        <button onClick={closeModal} style={closeButtonStyle}>Đóng</button>
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    </div>
                </div>
            )}
        </div>
    );
};

// Style cho nút
const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
};

// Style cho modal
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
};

const closeButtonStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '5px 10px',
    float: 'right',
};

