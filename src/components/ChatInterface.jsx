import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatMessage from './ChatMessage';
import FeelingTags from './FeelingTags';
import { v4 as uuidv4 } from 'uuid';
import { chatService } from '../services/api';

const ChatInterface = ({ onEmergencyDetected }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [sessionId] = useState(() => {
    // Generate a unique session ID if not already stored
    const storedSessionId = localStorage.getItem('chatSessionId');
    if (!storedSessionId) {
      const newSessionId = uuidv4();
      localStorage.setItem('chatSessionId', newSessionId);
      return newSessionId;
    }
    return storedSessionId;
  });

  const responses = [
    "I understand how you're feeling. Would you like to talk more about what's on your mind?",
    "It's completely normal to feel this way sometimes. Remember, you're not alone in this.",
    "I'm here to listen. Can you tell me more about what's been going on?",
    "That sounds really challenging. How long have you been feeling this way?",
    "I appreciate you sharing this with me. Would you like to explore some coping strategies together?",
    "It takes courage to talk about these feelings. I'm here to support you.",
    "Let's take a moment to breathe together. Would you like to try some relaxation techniques?",
    "I hear you. Would it help to break down what you're feeling into smaller, more manageable parts?",
    "Your feelings are valid. Would you like to discuss some ways to manage this situation?",
    "I'm here to help you through this. Would you like to explore some resources that might be helpful?",
    "That must be really difficult for you. How can I best support you right now?",
    "I can see this is affecting you deeply. Would you like to talk about what triggered these feelings?",
    "You're showing great strength by reaching out. What would be most helpful for you right now?",
    "I understand this is a tough time. Would you like to focus on one aspect of what you're feeling?",
    "It's okay to feel this way. Would you like to explore some positive coping mechanisms together?",
    "I'm here to listen without judgment. What would you like to focus on first?",
    "Your feelings matter. Would you like to discuss some ways to process them?",
    "I can see this is important to you. Would you like to explore some ways to find relief?",
    "You're not alone in this. Would you like to talk about some strategies that might help?",
    "I'm here to support you. What would be most helpful for you to discuss right now?"
  ];

  const concerningKeywords = [
    'suicide', 'kill myself', 'end my life', 'want to die', 'can\'t go on',
    'emergency', 'urgent help', 'immediate danger', 'harm myself', 'self-harm',
    'depressed', 'hopeless', 'worthless', 'helpless', 'desperate'
  ];

  const checkForEmergency = (text) => {
    const lowerText = text.toLowerCase();
    return concerningKeywords.some(keyword => lowerText.includes(keyword));
  };

  const scrollToBottom = (force = false) => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      // Use setTimeout to ensure the DOM has updated before scrolling
      setTimeout(() => {
        scrollToBottom(true);
      }, 100);
    }
  }, [messages]);

  useEffect(() => {
    // Check the last message for concerning content
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.isUser) {
        const isConcerning = checkForEmergency(lastMessage.text);
        onEmergencyDetected(isConcerning);
      }
    }
  }, [messages, onEmergencyDetected]);

  const handleTagClick = (tagName) => {
    setInput(tagName);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      isUser: true,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);
    setError(null);
    scrollToBottom(true);

    try {
      const data = await chatService.sendMessage(input, sessionId);
      
      const aiResponse = {
        id: Date.now() + 1,
        text: data.response,
        isUser: false,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to get response from the server. Please try again.');
      const errorResponse = {
        id: Date.now() + 1,
        text: "I'm sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
      scrollToBottom(true);
    }
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isAtBottom);
      setUserHasScrolled(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-[calc(100vh-8rem)] sm:h-[calc(100vh-12rem)] bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100 mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 relative overflow-hidden"
    >
      {/* Animated Gradient Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          animate={{
            x: ["-50%", "50%", "-50%"],
            y: ["-10%", "10%", "-10%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          animate={{
            x: ["50%", "-50%", "50%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
          animate={{
            x: ["-30%", "30%", "-30%"],
            y: ["30%", "-30%", "30%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-100/80 to-blue-50/80 p-3 sm:p-4 text-blue-800 rounded-t-xl relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2 
          className="text-base sm:text-lg font-semibold"
          animate={{
            y: [0, -2, 0],
            color: ["#1e40af", "#3b82f6", "#1e40af"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Chat with MindEase
        </motion.h2>
      </motion.div>

      {/* Messages Container */}
      <div 
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 relative z-10" 
        style={{ scrollBehavior: 'smooth' }}
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={message.id}
            text={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Scroll to Bottom Button */}
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => scrollToBottom(true)}
          className="absolute bottom-24 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

      {/* Feeling Tags - Always visible */}
      <motion.div 
        className="px-2 sm:px-4 py-2 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <FeelingTags onSelect={handleTagClick} />
      </motion.div>

      {/* Input Area */}
      <motion.div 
        className="border-t border-blue-100/50 bg-white/50 p-2 sm:p-4 rounded-b-xl relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <motion.input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
            placeholder="Type your message..."
            className="flex-1 p-2 text-sm sm:text-base rounded-lg border border-blue-200 bg-white/80 text-blue-800 placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="p-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </form>
      </motion.div>

      {/* Error Message */}
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-800 p-2 text-center z-20">
          {error}
        </div>
      )}
    </motion.div>
  );
};

export default ChatInterface; 