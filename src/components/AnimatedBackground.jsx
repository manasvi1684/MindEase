import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-3xl"
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
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-200/30 blur-3xl"
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
        className="absolute w-[300px] h-[300px] rounded-full bg-blue-300/20 blur-3xl"
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
  );
};

export default AnimatedBackground; 