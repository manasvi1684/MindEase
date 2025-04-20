import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Chat = () => {
  const [isEmergency, setIsEmergency] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleEmergencyDetected = (isConcerning) => {
    setIsEmergency(isConcerning);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      
      <main className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-100/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ChatInterface onEmergencyDetected={handleEmergencyDetected} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat; 