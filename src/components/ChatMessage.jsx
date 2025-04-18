import React from 'react';
import { motion } from 'framer-motion';

const ChatMessage = ({ text, isUser, timestamp }) => {
  return (
    <motion.div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={`max-w-[80%] sm:max-w-[70%] rounded-2xl p-3 ${
          isUser 
            ? 'bg-blue-500 text-white rounded-br-none ml-auto' 
            : 'bg-blue-100 text-blue-900 rounded-bl-none'
        } shadow-sm`}
      >
        <p className="text-sm sm:text-base break-words">{text}</p>
        <span className={`text-xs mt-1 block ${isUser ? 'text-blue-100' : 'text-blue-500'}`}>
          {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
