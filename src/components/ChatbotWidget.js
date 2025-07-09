// ChatbotWidget.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import './ChatbotWidget.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem('chatbotMessages');
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem('chatbotMessages', JSON.stringify(messages));
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    const loadingMessage = { sender: 'bot', text: 'Chatbot is typing...' };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInput('');

    try {
      const response = await fetch(
        'https://portfolio-backend-4mjc.onrender.com/ask',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: input }),
        }
      );

      const data = await response.json();

      // Replace the loading message with actual response
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          sender: 'bot',
          text: data.answer || 'Sorry, I could not understand.',
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          sender: 'bot',
          text: 'Something went wrong. Please try again later.',
        },
      ]);
      console.error('Error:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem('chatbotMessages');
  };

  const handleMinimize = () => setIsOpen(false);

  return (
    <div className="chatbot-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="chatbot-box"
          >
            <div className="chatbot-header">
              <span className="chatbot-title-text">Ask QuantaBOT</span>
              <div className="chatbot-header-actions">
                <button className="chatbot-header-button" onClick={handleClear}>
                  Clear
                </button>
                <button
                  className="chatbot-header-button"
                  onClick={handleMinimize}
                >
                  Minimize
                </button>
              </div>
            </div>
            <div className="chatbot-body">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`chatbot-message ${
                    msg.sender === 'user' ? 'user' : 'bot'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {messages.length === 0 && (
                <div>
                  <h1 className="chatbot-title">
                    Hello! I'm Ansh's AI assistant, QuantaBOT 🤖. Feel free to
                    ask me anything about his background, skills, or projects.
                  </h1>
                  <p className="chatbot-title-p">
                    🧑🏽‍💻 I can explain Ansh’s technical skills, including the
                    tools, languages, and frameworks he works with.
                  </p>
                  <p className="chatbot-title-p">
                    🎉 I’ll walk you through Ansh’s professional experience and
                    key projects he’s built or contributed to.
                  </p>
                  <p className="chatbot-title-p">
                    🧠 I’m here to help recruiters, collaborators, and curious
                    minds like you to understand what Ansh brings to the table.
                  </p>
                  <p className="chatbot-title-p">
                    ✅ I aim to make this feel like you're chatting directly
                    with Ansh.
                  </p>
                </div>
              )}
            </div>
            <div className="chatbot-input-wrapper">
              <input
                type="text"
                placeholder="Type your question..."
                className="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="chatbot-submit-button" onClick={handleSend}>
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleChat}
          className="chatbot-toggle-button"
        >
          <MessageSquare size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default ChatbotWidget;
