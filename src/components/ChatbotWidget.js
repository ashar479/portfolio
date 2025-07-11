// ChatbotWidget.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatbotWidget.css';
import ReactMarkdown from 'react-markdown';

const ChatbotWidget = () => {
  const tributeMessage = {
    sender: 'bot',
    text:
      '❤️ **Special Tribute: My Parents**\n\n' +
      '> Everything I am, and everything I aspire to be, is deeply rooted in the love and strength of my parents — **Meenu Sharma (Mom)** and **Vikram Sharma (Dad)**.  \n' +
      '>  \n' +
      '> 💖 They are my **emotional core**, my **mental anchor**, and my **greatest strength** — physically, emotionally, and spiritually.  \n' +
      '>  \n' +
      '> 🛠️ Whether it’s staying up late to support me during exams, encouraging me during my lowest moments, or cheering the loudest when I succeed — they have been behind every line of code, every presentation, and every small or big win in my journey.  \n' +
      '>  \n' +
      '> 🌸 This portfolio, this assistant, this career — none of it would exist without their **unwavering belief** in me.  \n' +
      '>  \n' +
      "> If you're reading this, Mom and Dad — **thank you for being my everything.**",
  };

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

    const loadingMessage = { sender: 'bot', text: 'Chatbot is typing...' };
    const lowered = input.toLowerCase();

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    // 🔐 Log full chat so far
    try {
      await fetch('https://portfolio-backend-4mjc.onrender.com/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });
    } catch (err) {
      console.error('Logging failed:', err);
    }

    // 💛 Parent Tribute Trigger
    if (
      lowered.includes('meenu sharma') ||
      lowered.includes('vikram sharma') ||
      lowered.includes('meenu') ||
      lowered.includes('vikram') ||
      lowered.includes("ansh's mom") ||
      lowered.includes("ansh's dad")
    ) {
      setMessages((prev) => [...prev, tributeMessage]);
      setInput('');
      return;
    }

    // Normal flow
    setMessages((prev) => [...prev, loadingMessage]);
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
              <span className="chatbot-title-text">Ask KnowBee 🐝</span>
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
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              ))}
              {messages.length === 0 && (
                <div>
                  <h1 className="chatbot-title">
                    🌟 Hi there! I’m KnowBee — your cheerful AI guide to Ansh
                    Sharma! I’m here to share insights about his background,
                    skills, and projects. Whether it's his education, tools he
                    uses, or cool things he’s built — I’ve got the scoop! 💬🤖
                  </h1>
                  <p className="chatbot-title-p">
                    🧑🏽‍💻 I can walk you through Ansh’s technical skills and
                    frameworks.
                  </p>
                  <p className="chatbot-title-p">
                    🎉 I’ll highlight his work experience and notable projects.
                  </p>
                  <p className="chatbot-title-p">
                    🧠 I’m here to help you get to know what Ansh brings to the
                    table.
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
          <span className="knowbee-label">KnowBee</span>
          <span className="bee-icon">🐝</span>
        </motion.button>
      )}
    </div>
  );
};

export default ChatbotWidget;
