import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatInterface from '../components/ChatInterface';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[1200px] h-[1200px] rounded-full bg-blue-100/40 blur-3xl"
          animate={{
            x: ["-60%", "60%", "-60%"],
            y: ["-30%", "30%", "-30%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full bg-blue-200/30 blur-3xl"
          animate={{
            x: ["60%", "-60%", "60%"],
            y: ["30%", "-30%", "30%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-blue-300/20 blur-3xl"
          animate={{
            x: ["-40%", "40%", "-40%"],
            y: ["40%", "-40%", "40%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-400/15 blur-3xl"
          animate={{
            x: ["40%", "-40%", "40%"],
            y: ["-40%", "40%", "-40%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center relative z-10">
        <motion.div 
          className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={itemVariants}
        >
          <ChatInterface onEmergencyDetected={setIsEmergency} />
        </motion.div>
      </div>

      <motion.button 
        className="fixed right-2 sm:right-4 top-20 sm:top-24 bg-red-600 hover:bg-red-700 text-white p-2 sm:px-4 sm:py-2 rounded-full sm:rounded-lg shadow-lg flex items-center justify-center sm:justify-start space-x-1 sm:space-x-2 z-40 w-10 h-10 sm:w-auto sm:h-auto"
        variants={emergencyButtonVariants}
        initial="hidden"
        animate={isEmergency ? "emergency" : "visible"}
        whileHover="hover"
        whileTap="tap"
        onClick={() => setShowPopup(true)}
      >
        <motion.svg 
          className="w-5 h-5 sm:w-5 sm:h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={isEmergency ? {
            rotate: 360,
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          } : {
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            duration: isEmergency ? 0.5 : 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </motion.svg>
        <span className="hidden sm:inline">Emergency Help</span>
      </motion.button>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPopup(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={isEmergency ? {
                    scale: [1, 1.3, 1],
                    backgroundColor: ["#FEE2E2", "#FECACA", "#FEE2E2"]
                  } : {
                    scale: [1, 1.1, 1],
                    backgroundColor: ["#FEE2E2", "#FECACA", "#FEE2E2"]
                  }}
                  transition={{
                    duration: isEmergency ? 0.5 : 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Help</h3>
                <p className="text-gray-600 mb-4">
                  {isEmergency 
                    ? "Our AI has detected concerning content in your conversation. Please seek immediate help if you're in distress."
                    : "This button will automatically blink if our AI detects that you might need immediate medical attention or if you're experiencing suicidal thoughts."}
                </p>
                <p className="text-sm text-gray-500">
                  If you're in immediate danger, please call emergency services or a crisis hotline.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home; 