import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const emergencyButtonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    },
    emergency: {
      scale: [1, 1.2, 1],
      backgroundColor: ["#DC2626", "#EF4444", "#DC2626"],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const popupVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      // Force scroll to top and show content
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto';
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="fixed inset-0 bg-blue-50 z-50"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="h-full flex flex-col items-center justify-center">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h1 className="text-5xl font-bold text-blue-600 mb-6">
                    Welcome to MindEase
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Your mental health companion is here to support you.
                  </p>
                  <motion.div
                    className="flex justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <motion.div
                      className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="text-4xl">💭</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showWelcome ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <ChatInterface onEmergencyDetected={setIsEmergency} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 