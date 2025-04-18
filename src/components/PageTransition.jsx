import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Wave overlay */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-blue-50 to-blue-100"
        style={{ 
          zIndex: 20,
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          pointerEvents: 'none'
        }}
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isVisible ? '100%' : 0, opacity: isVisible ? 0 : 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to MindEase</h2>
          <p className="text-blue-600">Your journey to mental wellness begins here</p>
        </div>
      </motion.div>

      {/* Floating particles */}
      <div 
        className="fixed inset-0 overflow-hidden" 
        style={{ 
          zIndex: 15,
          pointerEvents: 'none'
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              pointerEvents: 'none'
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: isVisible ? 0 : 1,
              scale: isVisible ? 0 : 1
            }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </div>

      {/* Content */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{ 
              zIndex: 10,
              pointerEvents: 'auto',
              position: 'relative'
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default PageTransition; 