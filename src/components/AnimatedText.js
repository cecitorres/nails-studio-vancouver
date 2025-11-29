// components/AnimatedText.js
"use client"; // Must be a Client Component to use hooks like motion

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AnimatedText({ text, className }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span variants={itemVariants} className="inline-block mr-2">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}