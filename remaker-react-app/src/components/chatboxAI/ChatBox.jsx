import React, { useState } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sendMessageToBot = async (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    setInput('');
    setLoading(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: message, // Nội dung yêu cầu giày
      }),
    };

    try {
      const response = await fetch('http://localhost:5000/generate-image', options); // Gọi API Node.js
      const data = await response.json();

      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
        setMessages([
          ...messages,
          { text: message, sender: 'user' },
          { text: 'Đây là mẫu giày bạn yêu cầu:', sender: 'bot' },
          { image: data.imageUrl, sender: 'bot' },
        ]);
      } else {
        setMessages([
          ...messages,
          { text: message, sender: 'user' },
          { text: 'Xin lỗi, không có mẫu giày nào được tạo ra.', sender: 'bot' },
        ]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Lỗi khi gọi Proxy server:', error);
      setLoading(false);
      setMessages([
        ...messages,
        { text: message, sender: 'user' },
        { text: 'Xin lỗi, tôi không thể tạo mẫu giày lúc này.', sender: 'bot' },
      ]);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      await sendMessageToBot(input);
    }
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen); // Mở/đóng chatbox
  };

  return (
    <>
      <div className="chatbox-button" onClick={toggleChatbox}>💬</div>

      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox">
            <div className="chatbox-header">
              <button onClick={toggleChatbox} className="close-btn">X</button>
              <p>Chat với chúng tôi</p>
            </div>
            <div className="chatbox-messages">
              {messages.map((message, index) => (
                <div key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
                  <p>{message.text}</p>
                  {message.image && <img src={message.image} alt="Design" />}
                </div>
              ))}
            </div>
            <div className="chatbox-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập tin nhắn..."
              />
              <button onClick={handleSendMessage} disabled={loading}>
                {loading ? 'Đang tạo...' : 'Gửi'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
