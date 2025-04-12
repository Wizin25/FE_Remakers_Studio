// Hàm lấy giỏ hàng từ localStorage
export const getCartFromStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

// Hàm lưu giỏ hàng vào localStorage
export const saveCartToStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Hàm thêm sản phẩm vào giỏ hàng
export const addToCart = (product) => {
    const cart = getCartFromStorage();
    const existingItem = cart.find(item => item.productId === product.productId);

    if (existingItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        const updatedCart = cart.map(item =>
            item.productId === product.productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        saveCartToStorage(updatedCart);
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới với số lượng là 1
        const newItem = {
            productId: product.productId,
            name: product.productName,
            price: product.price,
            image: product.imageUrl,
            quantity: 1,
            stock: 10 // Giả sử mỗi sản phẩm có tối đa 10 trong kho
        };
        saveCartToStorage([...cart, newItem]);
    }
};
    // ✅ THÊM HÀM NÀY
    export const clearCart = () => {
        localStorage.removeItem('cart');
};