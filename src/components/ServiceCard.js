// components/ServiceCard.js
"use client";
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-light-gray"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="text-4xl text-primary-rose mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-bold text-dark-charcoal mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}