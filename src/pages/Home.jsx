import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaExclamationTriangle, FaComments } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const navigate = useNavigate();

  const moods = [
    { emoji: "😊", label: "Happy", color: "bg-yellow-100" },
    { emoji: "😔", label: "Sad", color: "bg-blue-100" },
    { emoji: "😤", label: "Frustrated", color: "bg-red-100" },
    { emoji: "😴", label: "Tired", color: "bg-purple-100" },
    { emoji: "😌", label: "Calm", color: "bg-green-100" },
    { emoji: "😰", label: "Anxious", color: "bg-orange-100" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
    }, 2000); // Change mood every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleEmergencyClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />

      <main className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
        
        <div className="relative pt-24 lg:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Your <motion.span 
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-transparent bg-clip-text"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >AI-powered</motion.span><br />
                  mental health<br />
                  companion
                </motion.h1>
                <motion.p 
                  className="text-lg text-gray-600 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  MindEase provides 24/7 emotional support, mindfulness exercises, and personalized guidance to help you navigate life's challenges.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => navigate('/login')}
                  >
                    Start Chatting
                  </motion.button>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/about"
                      className="inline-flex items-center px-8 py-4 bg-white text-gray-600 rounded-xl hover:bg-gray-50 transition-all text-lg font-medium border-2 border-gray-200"
                    >
                      Learn More
                      <IoArrowForward className="ml-2" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-md mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-2xl text-gray-800 font-medium">How are you feeling today?</div>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-8 flex justify-center items-center h-32"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentMoodIndex}
                        className="flex flex-col items-center"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                          duration: 0.5
                        }}
                      >
                        <motion.div 
                          className={`w-24 h-24 ${moods[currentMoodIndex].color} rounded-full flex items-center justify-center text-4xl shadow-md`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {moods[currentMoodIndex].emoji}
                        </motion.div>
                        <motion.span 
                          className="mt-4 text-lg font-medium text-gray-700"
                        >
                          {moods[currentMoodIndex].label}
                        </motion.span>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div 
                    className="mt-8 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md"
                      onClick={() => navigate('/login')}
                    >
                      Start a Conversation
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <motion.button
        className="fixed top-20 right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg z-50 hover:bg-red-600 transition-colors"
        onClick={handleEmergencyClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <FaExclamationTriangle className="text-xl sm:text-2xl md:text-3xl" />
      </motion.button>

      {showPopup && (
        <motion.div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-200"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <div className="flex items-center justify-center mb-6">
              <FaExclamationTriangle className="text-4xl text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Medical Attention Required</h2>
            </div>
            <p className="text-gray-600 mb-8 text-center text-lg">
              Our AI has detected signs that you may need immediate medical attention. Please contact emergency services or a healthcare professional.
            </p>
            <div className="space-y-4">
              <motion.a
                href="tel:911"
                className="block w-full bg-red-500 text-white text-center py-4 rounded-xl hover:bg-red-600 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call 911
              </motion.a>
              <motion.a
                href="tel:988"
                className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call 988 (Suicide & Crisis Lifeline)
              </motion.a>
            </div>
            <motion.button
              className="mt-6 w-full text-gray-600 hover:text-gray-900 transition-colors text-lg"
              onClick={handleClosePopup}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home; 