import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const TestApiButton = () => {
    const apiUrls = [
        "http://157.66.27.96:8080/api/proxy?url=https%3A%2F%2Fwww.nike.com%2Fsg%2Fu%2Fcustom-nike-p-6000-by-you-10001969%2F1815562918",
        "http://157.66.27.96:8080/api/proxy?url=https%3A%2F%2Fwww.nike.com%2Fvn%2Fu%2Fcustom-nike-air-force-1-low-by-you-shoes-10001935%2F1729775577335",
        "http://157.66.27.96:8080/api/proxy?url=https%3A%2F%2Fwww.nike.com%2Fvn%2Fu%2Fcustom-nike-blazer-mid-77-shoes-by-you-10001870%2F7423563261",
        "http://157.66.27.96:8080/api/proxy?url=https%3A%2F%2Fwww.nike.com%2Fvn%2Fu%2Fcustom-huarache-run-by-you-10001375%2F7537913055",
        "http://157.66.27.96:8080/api/proxy?url=https%3A%2F%2Fwww.nike.com%2Fvn%2Fu%2Fcustom-nike-air-max-97-shoes-by-you-10001811%2F1741767180678",
        "http://157.66.27.96:8080/api/proxy?url=https%3A%2F%2Fwww.nike.com%2Fvn%2Fu%2Fcustom-nike-dunk-low-shoes-by-you-10002017%2F4617606963"
    ];

    useEffect(() => {
        // Đảm bảo Bootstrap JavaScript đã được load
        const modal = document.getElementById('customizerModal');
        if (modal) {
            modal.addEventListener('show.bs.modal', function () {
                const iframe = document.getElementById('nikeIframe');
                if (iframe) {
                    // Luôn set src mới khi mở modal
                    iframe.src = apiUrls[1]; // Default to the first URL
                }
            });

            // Không cần xóa src khi đóng modal nữa
            // modal.addEventListener('hide.bs.modal', function () {
            //     const iframe = document.getElementById('nikeIframe');
            //     if (iframe) {
            //         iframe.src = '';
            //     }
            // });
        }
    }, []);

    return (
        <div className="customizer-container" style={containerStyle}>
            <button 
                type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#customizerModal"
                style={buttonStyle}
            >
                Thiết Kế Giày
            </button>

            <div 
                className="modal fade" 
                id="customizerModal" 
                tabIndex="-1" 
                aria-labelledby="customizerModalLabel" 
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="customizerModalLabel">
                                Nike Shoe Customizer
                            </h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-0">
                            <iframe 
                                id="nikeIframe"
                                title="Nike Customizer"
                                style={iframeStyle}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Styles
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
};

const buttonStyle = {
    backgroundColor: '#333',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    color: 'white'  // Thêm màu chữ trắng cho button
};

const iframeStyle = {
    width: '100%',
    height: '80vh',
    border: 'none',
    borderRadius: '0 0 6px 6px'
};

export default TestApiButton;
