import React from 'react'
import { motion } from 'framer-motion'

const SectionHeader = ({ tag, title, subtitle = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {tag && <span className="accent-text text-gold">{tag}</span>}
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mt-4 mb-6">
        {title}
      </h2>
      {subtitle && <p className="text-gray-light text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-20 h-1 bg-gold mx-auto mt-6" />
    </motion.div>
  )
}

export default SectionHeader