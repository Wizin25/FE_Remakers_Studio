// server.js
import express from 'express';
const fetch = require('node-fetch');
const app = express();
const port = 5000; // Cổng mà server sẽ chạy trên đó

// Cấu hình middleware để parse JSON
app.use(express.json());

// Cấu hình proxy cho API DeepAI
app.post('/proxy', async (req, res) => {
  const { text } = req.body;

  // URL API của DeepAI
  const apiUrl = 'https://openapi.monica.im/v1/image/gen/dalle';

  // Thêm header API key của bạn
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'YOUR_API_KEY',  // Thay bằng API Key của bạn
    },
    body: JSON.stringify({ text }),
  };

  try {
    // Gửi yêu cầu đến API của DeepAI từ server backend
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    // Trả dữ liệu API về frontend
    res.json(data);
  } catch (error) {
    console.error('Lỗi khi gửi yêu cầu đến API:', error);
    res.status(500).json({ error: 'Có lỗi xảy ra khi gửi yêu cầu' });
  }
});

// Chạy server
app.listen(port, () => {
  console.log(`Proxy server đang chạy tại http://localhost:${port}`);
});
